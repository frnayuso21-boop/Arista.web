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

const ParticulararesFibraMovilPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedData300, setSelectedData300] = useState('40');
  const [selectedData600, setSelectedData600] = useState('40');
  const [selectedData1000, setSelectedData1000] = useState('40');
  const [additionalLines300, setAdditionalLines300] = useState(0);
  const [additionalLines600, setAdditionalLines600] = useState(0);
  const [additionalLines1000, setAdditionalLines1000] = useState(0);
  const [additionalLineData300, setAdditionalLineData300] = useState('40');
  const [additionalLineData600, setAdditionalLineData600] = useState('40');
  const [additionalLineData1000, setAdditionalLineData1000] = useState('40');

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Lógica para scroll
  };

  const dataOptions300 = [
    { value: '40', label: '40 GB', price: 0 },
    { value: '80', label: '80 GB', price: 2 },
    { value: 'ilimitado', label: 'Ilimitado', price: 10 }
  ];

  const dataOptions600 = [
    { value: '40', label: '40 GB', price: 0 },
    { value: '80', label: '80 GB', price: 2 },
    { value: 'ilimitado', label: 'Ilimitado', price: 10 }
  ];

  const dataOptions1000 = [
    { value: '40', label: '40 GB', price: 0 },
    { value: '80', label: '80 GB', price: 2 },
    { value: 'ilimitado', label: 'Ilimitado', price: 10 }
  ];

  const getPrice300 = () => {
    const basePrice = 44.90;
    const dataPrice = dataOptions300.find(opt => opt.value === selectedData300)?.price || 0;
    const additionalLinePrice = additionalLines300 * (additionalLineData300 === '40' ? 5.90 : 7.90);
    return basePrice + dataPrice + additionalLinePrice;
  };

  const getPrice600 = () => {
    const basePrice = 49.90;
    const dataPrice = dataOptions600.find(opt => opt.value === selectedData600)?.price || 0;
    const additionalLinePrice = additionalLines600 * (additionalLineData600 === '40' ? 5.90 : 7.90);
    return basePrice + dataPrice + additionalLinePrice;
  };

  const getPrice1000 = () => {
    const basePrice = 54.90;
    const dataPrice = dataOptions1000.find(opt => opt.value === selectedData1000)?.price || 0;
    const additionalLinePrice = additionalLines1000 * (additionalLineData1000 === '40' ? 5.90 : 7.90);
    return basePrice + dataPrice + additionalLinePrice;
  };

  const handleContractPlan = (plan: Plan) => {
    navigate('/', { state: { openContract: true, plan } });
  };

  const handleViewPlanDetail = (plan: Plan) => {
    navigate('/', { state: { openDetail: true, plan } });
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
                Fibra + Móvil para Particulares
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                La combinación perfecta: fibra óptica de alta velocidad y línea móvil con datos
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Fibra 300 Mbps + Móvil */}
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300"
                  onClick={() => handleViewPlanDetail({
                    id: 'fibra-movil-300',
                    name: `Fibra 300 Mbps + Móvil ${selectedData300}GB${additionalLines300 > 0 ? ` + ${additionalLines300} línea${additionalLines300 > 1 ? 's' : ''} adicional${additionalLines300 > 1 ? 'es' : ''}` : ''}`,
                    price: getPrice300(),
                    features: [
                      '300 Mbps simétrica', 
                      `${selectedData300} GB móvil`, 
                      'Llamadas ilimitadas', 
                      'Router WiFi 6 incluido',
                      ...(additionalLines300 > 0 ? [`${additionalLines300} línea${additionalLines300 > 1 ? 's' : ''} adicional${additionalLines300 > 1 ? 'es' : ''} con ${additionalLineData300} GB cada una`] : [])
                    ]
                  })}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 300 Mbps + Móvil</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{getPrice300().toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      300 Mbps simétrica
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {selectedData300} GB móvil
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Llamadas ilimitadas
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Router WiFi 6 incluido
                    </li>
                  </ul>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                    <select
                      value={selectedData300}
                      onChange={(e) => setSelectedData300(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {dataOptions300.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContractPlan({
                        id: 'fibra-movil-300',
                        name: `Fibra 300 Mbps + Móvil ${selectedData300}GB${additionalLines300 > 0 ? ` + ${additionalLines300} línea${additionalLines300 > 1 ? 's' : ''} adicional${additionalLines300 > 1 ? 'es' : ''}` : ''}`,
                        price: getPrice300(),
                        features: [
                          '300 Mbps simétrica', 
                          `${selectedData300} GB móvil`, 
                          'Llamadas ilimitadas', 
                          'Router WiFi 6 incluido',
                          ...(additionalLines300 > 0 ? [`${additionalLines300} línea${additionalLines300 > 1 ? 's' : ''} adicional${additionalLines300 > 1 ? 'es' : ''} con ${additionalLineData300} GB cada una`] : [])
                        ]
                      });
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>

                {/* Similar structure for 600 Mbps and 1000 Mbps plans */}
                {/* ... (código similar para los otros planes) */}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Ventajas de combinar Fibra + Móvil
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Ahorro Garantizado</h3>
                  <p className="text-gray-600">
                    Combina fibra óptica y línea móvil en una sola factura con descuentos exclusivos por la contratación conjunta.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Gestión Simplificada</h3>
                  <p className="text-gray-600">
                    Una sola factura, un solo proveedor, una sola atención al cliente para todos tus servicios de telecomunicaciones.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Líneas Adicionales</h3>
                  <p className="text-gray-600">
                    Añade líneas móviles adicionales para toda la familia con tarifas preferenciales y datos compartidos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cobertura Nacional</h3>
                  <p className="text-gray-600">
                    Disfruta de la mejor cobertura móvil nacional con tecnología 4G y 5G en constante expansión.
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

export default ParticulararesFibraMovilPage;