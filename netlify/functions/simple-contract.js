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
    const { name, email, phone, address, city, postalCode, comments, acceptPrivacy, plan, timestamp } = JSON.parse(event.body);
    
    if (!acceptPrivacy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Debe aceptar la política de privacidad' })
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
      subject: `Nueva solicitud de contratación - ${plan?.name || 'Plan seleccionado'} - ${name}`,
      html: `
        <h2>Nueva Solicitud de Contratación</h2>
        <p><strong>Fecha:</strong> ${new Date(timestamp).toLocaleString('es-ES')}</p>
        
        <h3>PLAN SOLICITADO:</h3>
        <p><strong>Nombre:</strong> ${plan?.name || 'No especificado'}</p>
        <p><strong>Precio:</strong> ${plan?.price || 0}€/mes</p>
        ${plan?.features && plan.features.length > 0 ? `
        <p><strong>Características incluidas:</strong></p>
        <ul>
          ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ` : ''}
        
        <h3>DATOS DEL CLIENTE:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        
        <h3>DIRECCIÓN DE INSTALACIÓN:</h3>
        <p><strong>Dirección:</strong> ${address}</p>
        <p><strong>Ciudad:</strong> ${city}</p>
        <p><strong>Código Postal:</strong> ${postalCode}</p>
        
        ${comments ? `
        <h3>COMENTARIOS ADICIONALES:</h3>
        <p>${comments}</p>
        ` : ''}
        
        <hr>
        <p><em>Enviado desde el formulario simple de contratación de Arista Móvil</em></p>
        <p><em>El cliente ha aceptado la política de privacidad</em></p>
        <p><em>Esta es una solicitud de información, no una contratación definitiva</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Solicitud enviada correctamente' })
    };
  } catch (error) {
    console.error('Error enviando solicitud simple:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' })
    };
  }
};