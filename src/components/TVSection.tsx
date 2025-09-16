import React from 'react';
import { Tv, Star, CheckCircle, Trophy, Zap } from 'lucide-react';

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
          <p className="text-xl text-white/80 mb-2">
            SOLO PARA EMPRESAS
          </p>
          <div className="inline-flex items-center bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            SIN PERMANENCIA
          </div>
        </div>

        {/* Main TV Package */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Recommended Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                <Star className="w-4 h-4 mr-2" />
                PAQUETE PREMIUM
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
                    'Sin permanencia'
                  ]
                })}
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Lo quiero
              </button>
              <button className="text-white border border-white/30 px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Ver otros planes
              </button>
            </div>

            {/* Enterprise Notice */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                * Paquete exclusivo para empresas. Se requiere verificación empresarial.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-4">
            ¿Necesitas una solución personalizada para tu empresa?
          </p>
          <button className="text-white border border-white/30 px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
            Contactar con Ventas Empresariales
          </button>
        </div>
      </div>
    </section>
  );
};

export default TVSection;