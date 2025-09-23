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
    const { type, planData, subject } = JSON.parse(event.body);
    
    const transporter = nodemailer.createTransporter({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Crear el contenido del email
    let emailContent = `
      <h2>Nueva Solicitud de Plan Configurado</h2>
      <p><strong>Fecha:</strong> ${new Date(planData.timestamp).toLocaleString('es-ES')}</p>
      
      <h3>Datos del Cliente:</h3>
      <p><strong>Nombre:</strong> ${planData.customerData?.name || 'No proporcionado'}</p>
      <p><strong>Email:</strong> ${planData.customerData?.email || 'No proporcionado'}</p>
      <p><strong>Teléfono:</strong> ${planData.customerData?.phone || 'No proporcionado'}</p>
      
      <h3>Plan Solicitado:</h3>
      <p><strong>Precio Total:</strong> ${planData.totalPrice}€/mes</p>
      
      <h3>Configuración Seleccionada:</h3>
      <ul>
    `;

    // Agregar detalles de la configuración
    if (planData.selectedOptions) {
      Object.entries(planData.selectedOptions).forEach(([key, value]) => {
        if (value && typeof value === 'object' && value.name) {
          emailContent += `<li><strong>${key}:</strong> ${value.name} - ${value.price || 0}€/mes</li>`;
        } else if (value) {
          emailContent += `<li><strong>${key}:</strong> ${value}</li>`;
        }
      });
    }

    emailContent += `
      </ul>
      
      <hr>
      <p><em>Enviado desde el configurador de planes de Arista Móvil</em></p>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@aristamovil.com',
      to: 'info@aristamovil.com',
      subject: subject || `Nueva solicitud de plan configurado - ${planData.customerData?.name || 'Cliente'}`,
      html: emailContent
    };

    await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Solicitud de plan enviada correctamente' })
    };
  } catch (error) {
    console.error('Error al enviar solicitud de plan:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Error interno del servidor' })
    };
  }
};