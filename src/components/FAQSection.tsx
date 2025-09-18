import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "¿Qué tipo de cobertura incluye el servicio y en qué zonas está disponible?",
      answer: "Nuestros servicios cuentan con cobertura nacional completa utilizando la red de fibra óptica más avanzada del país. Para servicios móviles, ofrecemos cobertura 4G y 5G en más del 95% del territorio nacional. Puedes consultar la cobertura específica de tu zona utilizando nuestro verificador de cobertura en la web o contactando con nuestro equipo comercial."
    },
    {
      id: 2,
      question: "¿Cuál es el proceso y los plazos para realizar los pagos del servicio?",
      answer: "Los pagos se realizan mensualmente mediante domiciliación bancaria automática. La factura se genera el mismo día cada mes y el cargo se efectúa entre los días 1 y 5 del mes siguiente. También ofrecemos la opción de pago mediante tarjeta de crédito o transferencia bancaria. Recibirás un aviso por email antes de cada cargo."
    },
    {
      id: 3,
      question: "¿Existe algún período de permanencia o penalización por cancelación anticipada?",
      answer: "Sí, aplicamos un período de permanencia para cubrir los costes de instalación gratuita que ofrecemos. Si decides cancelar el servicio antes de cumplir la permanencia, tendrás que abonar 300 euros correspondientes al coste de la instalación. Esto nos permite ofrecerte la instalación sin coste inicial. La cancelación se puede solicitar a través de nuestro servicio de atención al cliente con un preaviso de 30 días."
    },
    {
      id: 4,
      question: "¿Cuánto tiempo tarda la instalación del servicio y entrega de equipos?",
      answer: "El plazo estándar de instalación es de 7 a 15 días laborables desde la confirmación del pedido, dependiendo de la disponibilidad técnica en tu zona. Para servicios de fibra, incluimos la instalación gratuita realizada por técnicos especializados. Los equipos móviles se entregan en 24-48 horas. Te contactaremos para coordinar la cita de instalación en el horario que mejor te convenga."
    },
    {
      id: 5,
      question: "¿Qué soporte técnico está disponible si surgen problemas después de la instalación?",
      answer: "Ofrecemos soporte técnico 24/7 los 365 días del año a través de múltiples canales: teléfono gratuito, chat en línea, email y área de cliente web. Nuestro equipo técnico puede resolver la mayoría de incidencias de forma remota. Para problemas que requieran visita técnica, no aplicamos coste adicional durante los primeros 12 meses del servicio."
    },
    {
      id: 6,
      question: "¿Cómo recibiré mi contrato y las facturas mensuales del servicio?",
      answer: "El contrato se envía por email en formato PDF tras la contratación, y también está disponible en tu área de cliente. Las facturas mensuales se envían automáticamente por email y se almacenan en tu área personal para consulta y descarga. Si prefieres recibir las facturas en papel, podemos enviártelas por correo postal sin coste adicional."
    },
    {
      id: 7,
      question: "¿Qué medidas de seguridad implementan para proteger mis datos y pagos en línea?",
      answer: "Utilizamos cifrado SSL de 256 bits para todas las transacciones y cumplimos con la normativa RGPD europea. Los datos de pago se procesan a través de pasarelas seguras certificadas PCI DSS. No almacenamos información completa de tarjetas de crédito en nuestros sistemas. Además, implementamos autenticación de dos factores para el acceso al área de cliente."
    },
    {
      id: 8,
      question: "¿Es posible mantener mi número telefónico actual al contratar el servicio?",
      answer: "Sí, ofrecemos el servicio de portabilidad gratuita para que puedas mantener tu número actual. El proceso tarda entre 1 y 3 días laborables y lo gestionamos completamente nosotros. Solo necesitas proporcionarnos tu número actual y los datos del titular de la línea. Durante el proceso de portabilidad, tu servicio anterior permanece activo hasta que se complete la transferencia."
    },
    {
      id: 9,
      question: "¿Qué opciones de roaming o conectividad existen cuando viajo al extranjero?",
      answer: "Incluimos roaming gratuito en la Unión Europea para llamadas, SMS y datos según tu tarifa contratada. Para destinos fuera de la UE, ofrecemos paquetes de roaming con tarifas preferenciales. También puedes activar/desactivar el roaming desde tu área de cliente para evitar cargos no deseados. Te enviamos alertas por SMS cuando alcances ciertos umbrales de consumo en el extranjero."
    },
    {
      id: 10,
      question: "¿Dónde puedo consultar mi consumo de datos y descargar mis facturas anteriores?",
      answer: "Toda esta información está disponible en tu área de cliente personal, accesible desde nuestra web o app móvil. Puedes consultar el consumo de datos en tiempo real, historial de llamadas, facturas de los últimos 24 meses y gestionar tu cuenta. La app también te permite configurar alertas de consumo y realizar gestiones básicas como cambios de tarifa o solicitar soporte técnico."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section 
      id="faq" 
      className="py-16"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Resolvemos las dudas más comunes sobre nuestros servicios
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => {
              const isOpen = openItems.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm border border-white/20 overflow-hidden transition-all duration-200 hover:shadow-md hover:bg-white/15"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/60" />
                      )}
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-white/20 pt-4">
                        <p className="text-white/90 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/30">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              ¿No encuentras la respuesta que buscas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de atención al cliente está disponible para ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+34621192578"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200"
              >
                Llamar ahora
              </a>
              <a
                href="mailto:info@aristamovil.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-xl hover:bg-gray-200 transition-colors duration-200"
              >
                Enviar email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;