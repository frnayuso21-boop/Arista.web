import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tv, CheckCircle, ArrowLeft } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const ParticulareTVPage: React.FC = () => {
  const navigate = useNavigate();

  const handleContractPlan = (plan: Plan) => {
    navigate('/', { state: { openContract: true, plan } });
  };

  const handleViewPlanDetail = (plan: Plan) => {
    navigate('/', { state: { openDetail: true, plan } });
  };

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Lógica para scroll
  };

  const tvPlan = {
    id: 'tv-basico',
    name: 'TV Básico',
    price: 15.90,
    features: [
      'Más de 100 canales',
      'Canales HD incluidos',
      'Grabación en la nube',
      'Acceso desde cualquier dispositivo',
      'Control parental',
      'Guía de programación'
    ]
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
                TV para Particulares
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Disfruta de la mejor televisión con más de 100 canales
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="flex justify-center">
                {/* Plan TV */}
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-orange-300 w-full max-w-md"
                  onClick={() => handleViewPlanDetail(tvPlan)}
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Tv className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">TV Básico</h3>
                    <div className="text-4xl font-bold text-orange-600 mb-1">15.90€</div>
                    <div className="text-gray-500">/mes</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tvPlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContractPlan(tvPlan);
                    }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg text-lg"
                  >
                    Lo quiero
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ¿Por qué elegir nuestro servicio de TV?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Más de 100 Canales</h3>
                  <p className="text-gray-600">
                    Disfruta de una amplia variedad de contenido con más de 100 canales nacionales e internacionales, incluyendo deportes, películas, series y documentales.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Calidad HD</h3>
                  <p className="text-gray-600">
                    Todos nuestros canales principales están disponibles en alta definición para que disfrutes de la mejor calidad de imagen.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Grabación en la Nube</h3>
                  <p className="text-gray-600">
                    Graba tus programas favoritos y accede a ellos desde cualquier dispositivo. Nunca más te perderás tu contenido preferido.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Multiplataforma</h3>
                  <p className="text-gray-600">
                    Ve la televisión desde tu TV, tablet, móvil o ordenador. Tu entretenimiento te sigue a donde vayas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Control Parental</h3>
                  <p className="text-gray-600">
                    Controla qué contenido pueden ver los más pequeños de la casa con nuestras opciones de control parental avanzadas.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Guía de Programación</h3>
                  <p className="text-gray-600">
                    Consulta la programación completa de todos los canales y planifica tu entretenimiento con nuestra guía interactiva.
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instalación Gratuita</h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Nuestro equipo técnico se encarga de la instalación completa sin coste adicional. 
                  Configuramos todo el equipamiento necesario para que puedas empezar a disfrutar 
                  de tu nueva televisión desde el primer día.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ParticulareTVPage;