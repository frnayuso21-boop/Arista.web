import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Smartphone, CheckCircle, ArrowLeft } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

const ParticulareMovilPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedJuntosData, setSelectedJuntosData] = useState('40');
  const [selectedCompartidosData, setSelectedCompartidosData] = useState('60');
  const [selectedEsimPlan, setSelectedEsimPlan] = useState('voz-15gb');

  const juntosDataOptions = [
    { value: '40', label: '40 GB', price: 19.90 },
    { value: '80', label: '80 GB', price: 24.90 },
    { value: 'ilimitado', label: 'Ilimitado', price: 29.90 }
  ];

  const compartidosDataOptions = [
    { value: '60', label: '60 GB compartidos', price: 29.90 },
    { value: '100', label: '100 GB compartidos', price: 34.90 },
    { value: '150', label: '150 GB compartidos', price: 39.90 }
  ];

  const esimPlanOptions = [
    { value: 'voz-15gb', label: 'Solo voz + 15 GB', price: 15.90 },
    { value: 'voz-30gb', label: 'Solo voz + 30 GB', price: 19.90 },
    { value: 'datos-50gb', label: 'Solo datos 50 GB', price: 24.90 }
  ];

  const getSelectedJuntosPrice = () => {
    return juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.price || 19.90;
  };

  const getSelectedCompartidosPrice = () => {
    return compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.price || 29.90;
  };

  const getSelectedEsimPrice = () => {
    return esimPlanOptions.find(opt => opt.value === selectedEsimPlan)?.price || 15.90;
  };

  const handleContractPlan = (plan: Plan) => {
    navigate('/', { state: { openContract: true, plan } });
  };

  const handleViewPlanDetail = (plan: Plan) => {
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
                Tarifas Móvil para Particulares
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Planes móviles flexibles con la mejor cobertura nacional
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Plan Juntos */}
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300"
                  onClick={() => handleViewPlanDetail({
                    id: `juntos-${selectedJuntosData}`,
                    name: 'Juntos',
                    price: getSelectedJuntosPrice(),
                    features: [
                      juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label || '40 GB',
                      'Llamadas ilimitadas',
                      'SMS ilimitados',
                      '5G incluido'
                    ]
                  })}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Juntos</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{getSelectedJuntosPrice().toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label || '40 GB'}
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Llamadas ilimitadas
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      SMS ilimitados
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      5G incluido
                    </li>
                  </ul>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                    <select
                      value={selectedJuntosData}
                      onChange={(e) => setSelectedJuntosData(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {juntosDataOptions.map((option) => (
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
                        id: `juntos-${selectedJuntosData}`,
                        name: 'Juntos',
                        price: getSelectedJuntosPrice(),
                        features: [
                          juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label || '40 GB',
                          'Llamadas ilimitadas',
                          'SMS ilimitados',
                          '5G incluido'
                        ]
                      });
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>

                {/* Plan Compartidos */}
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-purple-300"
                  onClick={() => handleViewPlanDetail({
                    id: `compartidos-${selectedCompartidosData}`,
                    name: 'Móvil Compartidos',
                    price: getSelectedCompartidosPrice(),
                    features: [
                      compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label || '60 GB compartidos',
                      'Hasta 4 líneas',
                      'Llamadas ilimitadas',
                      '5G incluido'
                    ]
                  })}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Móvil Compartidos</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">{getSelectedCompartidosPrice().toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label || '60 GB compartidos'}
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Hasta 4 líneas
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Llamadas ilimitadas
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      5G incluido
                    </li>
                  </ul>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Datos compartidos:</label>
                    <select
                      value={selectedCompartidosData}
                      onChange={(e) => setSelectedCompartidosData(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      {compartidosDataOptions.map((option) => (
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
                        id: `compartidos-${selectedCompartidosData}`,
                        name: 'Móvil Compartidos',
                        price: getSelectedCompartidosPrice(),
                        features: [
                          compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label || '60 GB compartidos',
                          'Hasta 4 líneas',
                          'Llamadas ilimitadas',
                          '5G incluido'
                        ]
                      });
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>

                {/* Plan eSIM */}
                <div 
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-emerald-300"
                  onClick={() => handleViewPlanDetail({
                    id: `esim-${selectedEsimPlan}`,
                    name: 'eSIM',
                    price: getSelectedEsimPrice(),
                    features: [
                      esimPlanOptions.find(opt => opt.value === selectedEsimPlan)?.label || 'Solo voz + 15 GB',
                      'Activación inmediata',
                      'Sin tarjeta física',
                      'Compatible con dispositivos eSIM'
                    ]
                  })}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">eSIM</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">{getSelectedEsimPrice().toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {esimPlanOptions.find(opt => opt.value === selectedEsimPlan)?.label || 'Solo voz + 15 GB'}
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Activación inmediata
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sin tarjeta física
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Compatible con dispositivos eSIM
                    </li>
                  </ul>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan eSIM:</label>
                    <select
                      value={selectedEsimPlan}
                      onChange={(e) => setSelectedEsimPlan(e.target.value)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      {esimPlanOptions.map((option) => (
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
                        id: `esim-${selectedEsimPlan}`,
                        name: 'eSIM',
                        price: getSelectedEsimPrice(),
                        features: [
                          esimPlanOptions.find(opt => opt.value === selectedEsimPlan)?.label || 'Solo voz + 15 GB',
                          'Activación inmediata',
                          'Sin tarjeta física',
                          'Compatible con dispositivos eSIM'
                        ]
                      });
                    }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
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
                Ventajas de nuestras tarifas móviles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Cobertura Nacional</h3>
                  <p className="text-gray-600">
                    Disfruta de la mejor cobertura móvil en todo el territorio nacional con tecnología 4G y 5G.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexibilidad Total</h3>
                  <p className="text-gray-600">
                    Cambia de plan cuando quieras sin permanencias ni penalizaciones. Tu tarifa se adapta a ti.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">eSIM Disponible</h3>
                  <p className="text-gray-600">
                    Activa tu línea al instante con tecnología eSIM. Compatible con los últimos dispositivos.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Datos Compartidos</h3>
                  <p className="text-gray-600">
                    Comparte tus datos entre múltiples líneas familiares y aprovecha al máximo tu tarifa.
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

export default ParticulareMovilPage;