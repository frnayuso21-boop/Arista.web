import emailjs from '@emailjs/browser';

// Configuración de EmailJS
// IMPORTANTE: Reemplaza estos valores con los de tu cuenta de EmailJS
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_arista', // Crear en EmailJS con este ID
  TEMPLATE_ID: 'template_contact', // Crear en EmailJS con este ID
  PUBLIC_KEY: 'HScH0UaDH9ZwwgD2g', // Tu Public Key de EmailJS
  TO_EMAIL: 'info@aristamovil.com' // Email de destino
};

// Función para verificar si EmailJS está configurado
const isEmailJSConfigured = () => {
  return EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY_HERE';
};

export interface EmailData {
  from_name: string;
  from_email: string;
  phone?: string;
  service?: string;
  message: string;
  to_email?: string;
}

export const sendEmail = async (templateParams: EmailData): Promise<{ success: boolean; message: string }> => {
  try {
    // Verificar si EmailJS está configurado
    if (!isEmailJSConfigured()) {
      console.warn('EmailJS no está configurado. Revisa EMAILJS_SETUP.md para instrucciones.');
      // Simular envío exitoso para desarrollo
      console.log('Simulando envío de email:', templateParams);
      return {
        success: true,
        message: 'Email enviado correctamente (modo desarrollo - configurar EmailJS)'
      };
    }
    
    // Inicializar EmailJS con la clave pública
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        ...templateParams,
        to_email: EMAILJS_CONFIG.TO_EMAIL
      }
    );
    
    console.log('Email enviado exitosamente:', result);
    return {
      success: true,
      message: 'Email enviado correctamente'
    };
  } catch (error) {
    console.error('Error enviando email:', error);
    return {
      success: false,
      message: 'Error al enviar el email. Por favor, inténtelo de nuevo.'
    };
  }
};

// Función específica para formulario de contacto
export const sendContactEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
}) => {
  return sendEmail({
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    service: data.service,
    message: `Servicio solicitado: ${data.service}\n\nDescripción: ${data.description}\n\nTeléfono: ${data.phone}`
  });
};

// Función específica para solicitudes de plan
export const sendPlanRequestEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  planName: string;
  planPrice: number;
  planFeatures: string[];
}) => {
  const featuresText = data.planFeatures.map(f => `• ${f}`).join('\n');
  
  return sendEmail({
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    service: `Plan: ${data.planName}`,
    message: `Solicitud de contratación del plan: ${data.planName}\n\nPrecio: ${data.planPrice}€/mes\n\nCaracterísticas incluidas:\n${featuresText}\n\nTeléfono: ${data.phone}`
  });
};

// Función específica para consultas de cobertura
export const sendCoverageEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  city: string;
  postalCode: string;
  address?: string;
}) => {
  return sendEmail({
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    service: 'Consulta de cobertura',
    message: `Consulta de cobertura\n\nCiudad: ${data.city}\nCódigo Postal: ${data.postalCode}\n${data.address ? `Dirección: ${data.address}\n` : ''}Teléfono: ${data.phone}`
  });
};

// Función específica para energía
export const sendEnergyEmail = async (data: {
  name: string;
  email: string;
  phone: string;
  currentBill: string;
  message: string;
  estimatedSavings?: number;
}) => {
  return sendEmail({
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    service: 'Consulta de energía',
    message: `Consulta sobre servicios de energía\n\nFactura actual: ${data.currentBill}\n${data.estimatedSavings ? `Ahorro estimado: ${data.estimatedSavings}€\n` : ''}\nMensaje: ${data.message}\n\nTeléfono: ${data.phone}`
  });
};