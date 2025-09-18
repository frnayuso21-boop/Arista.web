import React, { useState } from 'react';
import { Tv, Star, CheckCircle, Trophy, Zap, Phone, Mail, X } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface TVSectionProps {
  onContractPlan: (plan: Plan) => void;
}

const TVSection: React.FC<TVSectionProps> = ({ onContractPlan }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollToParticulares = () => {
    const element = document.getElementById('particulares');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sportsChannels = [
    'La Liga',
    'UEFA Champions League',
    'UEFA Europa League',
    'Europa Conference League',
    'Premier League',
    'Copa Libertadores',
    'Fórmula 1',
    'Moto GP',
    'Sali GP',
    'A1 Padel'
  ];

  const additionalFeatures = [
    'Más de 100 canales HD',
    'Contenido 4K disponible',
    'Grabación en la nube',
    'Acceso desde cualquier dispositivo',
    'Soporte técnico 24/7',
    'Instalación profesional incluida'
  ];

  return (
    <section id="tv" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl mb-6">
            <Tv className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Televisión de Primera
          </h2>
          <p className="text-xl text-red-400 font-bold mb-2">
            🏢 EXCLUSIVO PARA EMPRESAS
          </p>
          <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            MÁXIMA FLEXIBILIDAD
          </div>
        </div>

        {/* Main TV Package */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                SOLO EMPRESAS
              </span>
            </div>

            <div className="text-center mb-8 pt-4">
              <h3 className="text-3xl font-bold text-white mb-4">
                Paquete Deportivo Completo
              </h3>
              <div className="text-5xl font-bold text-white mb-2">
                350€
              </div>
              <div className="text-white/70 text-lg">/mes</div>
            </div>

            {/* Sports Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Sports Channels */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                  Deportes Incluidos
                </h4>
                <div className="space-y-2">
                  {sportsChannels.map((sport, index) => (
                    <div key={index} className="flex items-center text-white/90">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{sport}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Tv className="w-5 h-5 mr-2 text-blue-400" />
                  Características Adicionales
                </h4>
                <div className="space-y-2">
                  {additionalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center text-white/90">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white/5 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
                  <div className="text-white/80 text-sm">Canales HD</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
                  <div className="text-white/80 text-sm">Soporte Técnico</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">4K</div>
                  <div className="text-white/80 text-sm">Calidad Ultra HD</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button
                onClick={() => onContractPlan({
                  id: 'tv-deportivo',
                  name: 'Paquete Deportivo Completo',
                  price: 350,
                  features: [
                    'La Liga',
                    'UEFA Champions League',
                    'UEFA Europa League',
                    'Premier League',
                    'Fórmula 1',
                    'Moto GP',
                    'A1 Padel',
                    'Más de 100 canales HD',
                    'Contenido 4K disponible',
                    'Máxima flexibilidad'
                  ]
                })}
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Lo quiero
              </button>
              <button 
                onClick={scrollToParticulares}
                className="text-white border border-white/30 px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Ver otros planes
              </button>
            </div>

            {/* Enterprise Notice */}
            <div className="mt-6 text-center">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold text-sm">
                  🏢 PAQUETE EXCLUSIVO PARA EMPRESAS
                </p>
                <p className="text-white/60 text-xs mt-1">
                  Se requiere verificación empresarial para contratar este servicio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-4">
            ¿Necesitas una solución personalizada para tu empresa?
          </p>
          <button 
            onClick={() => setShowContactModal(true)}
            className="text-white border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            Contactar con Ventas Empresariales
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">Contactar con Ventas Empresariales</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Nuestro equipo de ventas empresariales está listo para ayudarte con una solución personalizada.
                </p>
              </div>
              
              <div className="space-y-4">
                <a 
                  href="tel:+34621192578" 
                  className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +34 621 192 578
                </a>
                
                <a 
                  href="https://wa.me/34621192578?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20TV%20empresarial%20de%20Arista.%20¿Podrían%20proporcionarme%20información%20detallada?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  💬 WhatsApp
                </a>
                
                <a 
                  href="mailto:info@aristamovil.com?subject=Consulta%20TV%20Empresarial&body=Hola,%0A%0AMe%20interesa%20conocer%20más%20sobre%20el%20paquete%20deportivo%20completo%20para%20empresas.%20¿Podrían%20contactarme%20para%20más%20información?%0A%0AGracias." 
                  className="flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  info@aristamovil.com
                </a>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                <p>Horario de atención:</p>
                <p>Lunes a Viernes 8:00 - 20:00</p>
                <p>Sábados 9:00 - 14:00</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TVSection;