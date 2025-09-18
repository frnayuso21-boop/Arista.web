import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wifi, CheckCircle, ArrowLeft } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const ParticulararesFibraPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSpeed, setSelectedSpeed] = useState('300');

  const fibraSpeedOptions = [
    { value: '300', label: '300 Mbps', price: 29.90 },
    { value: '600', label: '600 Mbps', price: 34.90 },
    { value: '1000', label: '1 Gbps', price: 39.90 }
  ];

  const getSelectedPrice = () => {
    return fibraSpeedOptions.find(opt => opt.value === selectedSpeed)?.price || 29.90;
  };

  const handleContractPlan = (plan: Plan) => {
    // Redirigir a la página principal con el formulario abierto
    navigate('/', { state: { openContract: true, plan } });
  };

  const handleViewPlanDetail = (plan: Plan) => {
    // Redirigir a la página principal con el detalle abierto
    navigate('/', { state: { openDetail: true, plan } });
  };

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Lógica para scroll
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeSection="particulares" 
        onCoverageCheck={() => {}} 
        onScrollToParticularesWithTab={handleScrollToParticularesWithTab}
      />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16" style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
          `
        }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </button>
              <h1 className="text-4xl font-light text-white mb-4">
                Fibra Óptica para Particulares
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Conectividad de alta velocidad con la mejor tecnología de fibra óptica
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fibraSpeedOptions.map((option, index) => {
                  const colors = [
                    { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700', border: 'border-blue-200' },
                    { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700', border: 'border-purple-200' },
                    { bg: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600', button: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700', border: 'border-emerald-200' }
                  ];
                  const colorScheme = colors[index] || colors[0];
                  const isRecommended = index === 1;
                  
                  return (
                    <div 
                      key={option.value} 
                      className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 ${colorScheme.border} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-opacity-80`}
                      onClick={() => handleViewPlanDetail({
                        id: `fibra-${option.value}`,
                        name: `Fibra ${option.label}`,
                        price: option.price,
                        features: ['Velocidad simétrica', 'Máxima flexibilidad', 'Instalación gratuita', 'Router WiFi 6 incluido']
                      })}
                    >
                      {isRecommended && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                            RECOMENDADO
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colorScheme.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                          <Wifi className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.label}</h3>
                        <div className={`text-3xl font-bold ${colorScheme.text} mb-1`}>{option.price}€</div>
                        <div className="text-gray-500 text-sm">/mes</div>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Velocidad simétrica
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Máxima flexibilidad
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Instalación gratuita
                        </li>
                        <li className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          Router WiFi 6 incluido
                        </li>
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleContractPlan({
                            id: `fibra-${option.value}`,
                            name: `Fibra ${option.label}`,
                            price: option.price,
                            features: ['Velocidad simétrica', 'Máxima flexibilidad', 'Instalación gratuita', 'Router WiFi 6 incluido']
                          });
                        }}
                        className={`w-full bg-gradient-to-r ${colorScheme.button} text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg`}
                      >
                        Lo quiero
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ¿Por qué elegir nuestra fibra óptica?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Velocidad Garantizada</h3>
                  <p className="text-gray-600">
                    Disfruta de velocidades simétricas reales, perfectas para trabajo remoto, streaming en 4K y gaming online sin interrupciones.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Instalación Profesional</h3>
                  <p className="text-gray-600">
                    Nuestro equipo técnico especializado se encarga de toda la instalación sin coste adicional, garantizando el mejor rendimiento.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Router WiFi 6 Incluido</h3>
                  <p className="text-gray-600">
                    Tecnología WiFi 6 de última generación incluida para aprovechar al máximo tu conexión de fibra óptica.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Soporte 24/7</h3>
                  <p className="text-gray-600">
                    Atención técnica especializada disponible las 24 horas del día, los 7 días de la semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ParticulararesFibraPage;