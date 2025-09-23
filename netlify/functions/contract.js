const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { formData, plan, acceptTerms, acceptPrivacy } = JSON.parse(event.body);
    
    if (!acceptTerms || !acceptPrivacy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Debe aceptar los términos y la política de privacidad' })
      };
    }

    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@aristamovil.com',
      to: 'info@aristamovil.com',
      subject: `Nueva solicitud de contratación - ${plan?.name || 'Plan'} - ${formData?.name || 'Cliente'}`,
      html: `
        <h2>Nueva Solicitud de Contratación</h2>
        
        <h3>PLAN SELECCIONADO:</h3>
        <p><strong>Nombre:</strong> ${plan?.name || 'No especificado'}</p>
        <p><strong>Precio:</strong> ${plan?.price || 0}€/mes</p>
        ${plan?.features && plan.features.length > 0 ? `
        <p><strong>Características:</strong></p>
        <ul>
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ` : ''}
        
        <h3>DATOS DEL CLIENTE:</h3>
        <p><strong>Nombre:</strong> ${formData?.name || 'N/A'}</p>
        <p><strong>Email:</strong> ${formData?.email || 'N/A'}</p>
        <p><strong>Teléfono:</strong> ${formData?.phone || 'N/A'}</p>
        <p><strong>Dirección:</strong> ${formData?.address || 'N/A'}</p>
        <p><strong>Ciudad:</strong> ${formData?.city || 'N/A'}</p>
        <p><strong>Código Postal:</strong> ${formData?.postalCode || 'N/A'}</p>
        
        ${formData?.comments ? `
        <h3>COMENTARIOS:</h3>
        <p>${formData.comments}</p>
        ` : ''}
        
        <hr>
        <p><em>Enviado desde el formulario de contratación de Arista Móvil</em></p>
        <p><em>El cliente ha aceptado los términos y la política de privacidad</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Solicitud de contratación enviada correctamente' })
    };
  } catch (error) {
    console.error('Error enviando solicitud de contratación:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' })
    };
  }
};