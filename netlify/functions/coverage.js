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
    const requestBody = JSON.parse(event.body);
    const formData = requestBody.formData || requestBody;
    const acceptPrivacy = requestBody.acceptPrivacy !== undefined ? requestBody.acceptPrivacy : formData.acceptPrivacy;
    const source = requestBody.source;
    
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
      subject: `Consulta de cobertura${source ? ` (${source})` : ''} - ${formData.city || 'N/A'}, ${formData.postalCode || 'N/A'}`,
      html: `
        <h2>Nueva consulta de cobertura${source ? ` desde ${source}` : ''}</h2>
        
        <h3>DATOS DEL CLIENTE:</h3>
        <p><strong>Nombre:</strong> ${formData.name || 'N/A'} ${formData.lastName || ''}</p>
        <p><strong>Email:</strong> ${formData.email || 'N/A'}</p>
        <p><strong>Teléfono:</strong> ${formData.phone || 'N/A'}</p>
        
        <h3>DIRECCIÓN A CONSULTAR:</h3>
        <p><strong>Dirección:</strong> ${formData.address || 'N/A'}</p>
        <p><strong>Ciudad:</strong> ${formData.city || 'N/A'}</p>
        <p><strong>Código Postal:</strong> ${formData.postalCode || 'N/A'}</p>
        
        <hr>
        <p><em>Enviado desde el formulario de consulta de cobertura de Arista Móvil</em></p>
        <p><em>El usuario ha aceptado la política de privacidad</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Consulta de cobertura enviada correctamente' })
    };
  } catch (error) {
    console.error('Error enviando consulta de cobertura:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' })
    };
  }
};