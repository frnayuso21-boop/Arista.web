const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Solo permitir POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Configurar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Manejar preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { name, email, phone, service, description, acceptPrivacy } = JSON.parse(event.body);
    
    if (!acceptPrivacy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Debe aceptar la política de privacidad' })
      };
    }

    // Configurar nodemailer
    const transporter = nodemailer.createTransport({
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
      subject: `Nueva solicitud de información - ${service}`,
      html: `
        <h2>Nueva solicitud de información</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        <p><strong>Descripción:</strong> ${description}</p>
        <hr>
        <p><em>Enviado desde el formulario web de Arista Móvil</em></p>
        <p><em>El usuario ha aceptado la política de privacidad</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: 'Email enviado correctamente' })
    };
  } catch (error) {
    console.error('Error enviando email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' })
    };
  }
};