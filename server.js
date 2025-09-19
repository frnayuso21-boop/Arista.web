import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar nodemailer (usando un servicio SMTP genérico)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Cambiar por el SMTP deseado
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER, // Configurar en variables de entorno
    pass: process.env.EMAIL_PASS // Configurar en variables de entorno
  }
});

// Endpoint para solicitudes de plan configurado
app.post('/api/plan-request', async (req, res) => {
  try {
    const { type, planData, subject } = req.body;
    
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
    
    if (planData.services && Array.isArray(planData.services)) {
      planData.services.forEach(service => {
        emailContent += `<li>${service}</li>`;
      });
    }
    
    emailContent += `
      </ul>
      
      <h3>Detalles Técnicos:</h3>
      <p><strong>Fibra:</strong> ${planData.fibra ? `${planData.fibra.name} - ${planData.fibra.price}€/mes` : 'No seleccionada'}</p>
      <p><strong>Móvil:</strong> ${planData.movil && planData.movil.id !== 'movil-none' ? `${planData.movil.name} - +${planData.movil.price}€/mes` : 'No seleccionado'}</p>
      <p><strong>TV:</strong> ${planData.tv && planData.tv.id !== 'tv-none' ? `${planData.tv.name} - +${planData.tv.price}€/mes` : 'No seleccionada'}</p>
      
      ${planData.additionalLines && planData.additionalLines.length > 0 ? `
        <h3>Líneas Adicionales:</h3>
        <ul>
          ${planData.additionalLines.map(line => `<li>${line.count}x Línea ${line.type === '40gb' ? '40GB' : '80GB'} adicional</li>`).join('')}
        </ul>
      ` : ''}
      
      <hr>
      <p><em>Enviado desde el configurador de planes de Arista Móvil</em></p>
      <p><em>El cliente ha aceptado las cookies y la política de privacidad</em></p>
    `;
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@aristamovil.com',
      subject: subject,
      html: emailContent
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Email de solicitud de plan enviado correctamente a: info@aristamovil.com');
    res.status(200).json({ message: 'Solicitud de plan enviada correctamente' });
    
  } catch (error) {
    console.error('Error al enviar solicitud de plan:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoint para el formulario de contacto
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, description, acceptPrivacy } = req.body;
    
    if (!acceptPrivacy) {
      return res.status(400).json({ error: 'Debe aceptar la política de privacidad' });
    }

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
    res.json({ success: true, message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error enviando email:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoint para formulario simple de contratación
app.post('/api/simple-contract', async (req, res) => {
  try {
    const { name, email, phone, address, city, postalCode, comments, acceptPrivacy, plan, timestamp } = req.body;
    
    if (!acceptPrivacy) {
      return res.status(400).json({ error: 'Debe aceptar la política de privacidad' });
    }

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
    console.log('Email de solicitud simple enviado correctamente a: info@aristamovil.com');
    res.json({ success: true, message: 'Solicitud enviada correctamente' });
  } catch (error) {
    console.error('Error enviando solicitud simple:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoint para contratación
app.post('/api/contract', async (req, res) => {
  try {
    const { formData, plan, acceptTerms, acceptPrivacy } = req.body;
    
    if (!acceptTerms || !acceptPrivacy) {
      return res.status(400).json({ error: 'Debe aceptar los términos y la política de privacidad' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@aristamovil.com',
      to: 'info@aristamovil.com',
      subject: `Nueva contratación - ${plan?.name || 'Plan seleccionado'}`,
      html: `
        <h2>Nueva contratación de servicio</h2>
        <h3>PLAN CONTRATADO:</h3>
        <p><strong>Nombre:</strong> ${plan?.name || 'No especificado'}</p>
        <p><strong>Precio:</strong> ${plan?.price || 0}€/mes</p>
        
        <h3>DATOS PERSONALES:</h3>
        <p><strong>Nombre:</strong> ${formData.name} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.phone}</p>
        <p><strong>DNI:</strong> ${formData.dni}</p>
        
        <h3>DIRECCIÓN:</h3>
        <p><strong>Dirección:</strong> ${formData.address}</p>
        <p><strong>Ciudad:</strong> ${formData.city}</p>
        <p><strong>Código Postal:</strong> ${formData.postalCode}</p>
        
        <h3>DATOS DE PAGO:</h3>
        <p><strong>Titular:</strong> ${formData.cardName}</p>
        <p><strong>Tarjeta:</strong> ****${formData.cardNumber.slice(-4)}</p>
        
        <hr>
        <p><em>Enviado desde el formulario de contratación web de Arista Móvil</em></p>
        <p><em>El usuario ha aceptado los términos y la política de privacidad</em></p>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Contratación procesada correctamente' });
  } catch (error) {
    console.error('Error procesando contratación:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Endpoint para consulta de cobertura
app.post('/api/coverage', async (req, res) => {
  try {
    // Manejar tanto el formato antiguo como el nuevo
    const formData = req.body.formData || req.body;
    const acceptPrivacy = req.body.acceptPrivacy !== undefined ? req.body.acceptPrivacy : formData.acceptPrivacy;
    const source = req.body.source;
    
    if (!acceptPrivacy) {
      return res.status(400).json({ error: 'Debe aceptar la política de privacidad' });
    }

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
    res.json({ success: true, message: 'Consulta de cobertura enviada correctamente' });
  } catch (error) {
    console.error('Error enviando consulta de cobertura:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(PORT, () => {

// Endpoint para solicitudes de fibra redundada
app.post('/api/fibra-redundada', async (req, res) => {
  try {
    const {
      nombre,
      email,
      telefono,
      empresa,
      ancho_banda,
      ubicacion,
      tolerancia_inactividad,
      comentarios,
      acepta_politica
    } = req.body;

    // Configurar el transporter de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@aristamovil.com',
      subject: '🔴 SOLICITUD CRÍTICA: Fibra Redundada Empresarial',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; border-radius: 10px; overflow: hidden;">
          <div style="background: rgba(0,0,0,0.2); padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 300;">🚨 SOLICITUD CRÍTICA DE FIBRA REDUNDADA</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Conectividad empresarial de alta disponibilidad</p>
          </div>
          
          <div style="padding: 30px; background: white; color: #333;">
            <div style="background: #fee2e2; border-left: 4px solid #dc2626; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #dc2626;">⚡ DATOS DEL SOLICITANTE</h3>
              <p style="margin: 5px 0;"><strong>Nombre:</strong> ${nombre}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 5px 0;"><strong>Teléfono:</strong> ${telefono}</p>
              <p style="margin: 5px 0;"><strong>Empresa:</strong> ${empresa}</p>
            </div>
            
            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #f59e0b;">🏢 INFORMACIÓN TÉCNICA</h3>
              <p style="margin: 5px 0;"><strong>Ancho de banda actual:</strong> ${ancho_banda || 'No especificado'}</p>
              <p style="margin: 5px 0;"><strong>Ubicación:</strong> ${ubicacion}</p>
              <p style="margin: 5px 0;"><strong>Tolerancia a inactividad:</strong> ${tolerancia_inactividad || 'No especificado'}</p>
            </div>
            
            ${comentarios ? `
            <div style="background: #e0f2fe; border-left: 4px solid #0288d1; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #0288d1;">💬 COMENTARIOS ADICIONALES</h3>
              <p style="margin: 0; line-height: 1.6;">${comentarios}</p>
            </div>
            ` : ''}
            
            <div style="background: #f3e8ff; border-left: 4px solid #8b5cf6; padding: 15px; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #8b5cf6;">📋 PRÓXIMOS PASOS</h3>
              <ul style="margin: 10px 0; padding-left: 20px; line-height: 1.8;">
                <li>Contactar al cliente en menos de 24 horas</li>
                <li>Realizar auditoría técnica de la ubicación</li>
                <li>Evaluar rutas de fibra disponibles</li>
                <li>Preparar propuesta personalizada</li>
                <li>Programar instalación si procede</li>
              </ul>
            </div>
          </div>
          
          <div style="background: rgba(0,0,0,0.1); padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0; opacity: 0.8;">Solicitud recibida el ${new Date().toLocaleString('es-ES')} | ARISTA Móvil - Soluciones Empresariales</p>
          </div>
        </div>
      `
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);
    console.log('Solicitud de fibra redundada enviada correctamente a info@aristamovil.com');
    
    res.status(200).json({ message: 'Solicitud enviada correctamente' });
  } catch (error) {
    console.error('Error al enviar solicitud de fibra redundada:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});