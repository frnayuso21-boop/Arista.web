import React, { useState, useEffect } from 'react';
import { Wifi, Smartphone, Tv, CheckCircle, Star } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface ParticularesProps {
  onContractPlan: (plan: Plan) => void;
  onShowConfigurator: () => void;
  onViewPlanDetail: (plan: Plan) => void;
}

const ParticularesSection: React.FC<ParticularesProps> = ({ onContractPlan, onShowConfigurator, onViewPlanDetail }) => {
  const [activeTab, setActiveTab] = useState('fibra');
  const [selectedData300, setSelectedData300] = useState('40');
  const [selectedData600, setSelectedData600] = useState('40');
  const [selectedData1000, setSelectedData1000] = useState('40');
  const [additionalLines300, setAdditionalLines300] = useState(0);
  const [additionalLines600, setAdditionalLines600] = useState(0);
  const [additionalLines1000, setAdditionalLines1000] = useState(0);
  const [additionalLineData300, setAdditionalLineData300] = useState('40');
  const [additionalLineData600, setAdditionalLineData600] = useState('40');
  const [additionalLineData1000, setAdditionalLineData1000] = useState('40');
  const [selectedJuntosData, setSelectedJuntosData] = useState('40');
  const [selectedCompartidosData, setSelectedCompartidosData] = useState('120');
  const [selectedEsimPlan, setSelectedEsimPlan] = useState('voz-15gb');
  const [showContactForm, setShowContactForm] = useState(false);

  const tabs = [
    { id: 'fibra', name: 'Fibra', mobileLabel: 'Fibra', icon: Wifi },
    { id: 'fibra-movil', name: 'Fibra + Móvil', mobileLabel: 'Fibra+Móvil', icon: Wifi, hasOffer: true },
    { id: 'movil', name: 'Móvil', mobileLabel: 'Móvil', icon: Smartphone },
    { id: 'tv', name: 'TV', mobileLabel: 'TV', icon: Tv },
    { id: 'fibra-movil-tv', name: 'Fibra + Móvil + TV', mobileLabel: 'Fibra+Móvil+TV', icon: Tv, hasOffer: true }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Handle scroll logic here if needed
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fibraSpeedOptions = [
    { value: '300', label: '300 Mbps', price: 25.99 },
    { value: '600', label: '600 Mbps', price: 27.99 },
    { value: '1000', label: '1 Gbps', price: 32.99 }
  ];

  const dataOptions300 = [
    { value: '40', label: '40 GB - 2,90€', price: 29.90 }
  ];

  const dataOptions600 = [
    { value: '40', label: '40 GB - 2,90€', price: 32.89 },
    { value: '80', label: '80 GB - 4,90€', price: 34.89 },
    { value: '120', label: '120 GB (compartidos) - 10,90€', price: 40.89 },
    { value: '200', label: '200 GB (compartidos) - 15,90€', price: 45.89 }
  ];

  const dataOptions1000 = [
    { value: '40', label: '40 GB - 2,90€', price: 37.90 },
    { value: '80', label: '80 GB - 4,90€', price: 39.90 },
    { value: '120', label: '120 GB (compartidos) - 10,90€', price: 45.90 },
    { value: '200', label: '200 GB (compartidos) - 15,89€', price: 50.89 }
  ];

  const juntosDataOptions = [
    { value: '40', label: '40 GB - 8,90€', price: 8.90 },
    { value: '60', label: '60 GB - 9,90€', price: 9.90 },
    { value: '80', label: '80 GB - 10,90€', price: 10.90 },
    { value: '120', label: '120 GB - 12,90€', price: 12.90 },
    { value: '200', label: '200 GB - 16,90€', price: 16.90 },
    { value: '400', label: '400 GB - 24,90€', price: 24.90 }
  ];

  const compartidosDataOptions = [
    { value: '40', label: '40 GB - 12,90€', price: 12.90 },
    { value: '80', label: '80 GB - 16,90€', price: 16.90 },
    { value: '120', label: '120 GB - 21,90€', price: 21.90 },
    { value: '200', label: '200 GB - 26,90€', price: 26.90 },
    { value: '300', label: '300 GB - 31,90€', price: 31.90 },
    { value: '500', label: '500 GB - 41,90€', price: 41.90 }
  ];

  const esimOptions = [
    { value: 'solo-voz', label: 'ARISTA Solo Voz', price: 5.95 },
    { value: 'voz-15gb', label: 'ARISTA Ilimitada Voz + 15GB', price: 7.95 },
    { value: 'voz-40gb', label: 'ARISTA Ilimitada Voz + 40GB', price: 9.95 },
    { value: 'voz-80gb', label: 'ARISTA Ilimitada Voz + 80GB', price: 11.75 },
    { value: 'voz-160gb', label: 'ARISTA Ilimitada Voz + 160GB', price: 15.75 },
    { value: 'voz-datos', label: 'ARISTA Ilimitada Voz y Datos', price: 23.75 }
  ];

  const getPrice300 = () => {
    const basePrice = fibraSpeedOptions[0].price;
    const dataPrice = dataOptions300.find(opt => opt.value === selectedData300)?.price || 0;
    const additionalLinesPrice = additionalLines300 * 15;
    return basePrice + dataPrice + additionalLinesPrice;
  };

  const getPrice600 = () => {
    const basePrice = fibraSpeedOptions[1].price;
    const dataPrice = dataOptions600.find(opt => opt.value === selectedData600)?.price || 0;
    const additionalLinesPrice = additionalLines600 * 15;
    return basePrice + dataPrice + additionalLinesPrice;
  };

  const getPrice1000 = () => {
    const basePrice = fibraSpeedOptions[2].price;
    const dataPrice = dataOptions1000.find(opt => opt.value === selectedData1000)?.price || 0;
    const additionalLinesPrice = additionalLines1000 * 15;
    return basePrice + dataPrice + additionalLinesPrice;
  };

  const getSelectedJuntosPrice = () => {
    return juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.price || 0;
  };

  const getSelectedCompartidosPrice = () => {
    return compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.price || 0;
  };

  const getSelectedEsimPrice = () => {
    return esimOptions.find(opt => opt.value === selectedEsimPlan)?.price || 0;
  };

  return (
    <section 
      id="particulares" 
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
          <h2 className="text-3xl font-light text-white mb-4">
            Particulares
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20 w-full max-w-3xl overflow-x-auto">
            <div className="flex space-x-1 min-w-max md:min-w-0 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center space-x-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all whitespace-nowrap touch-manipulation ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  <tab.icon className="w-3 md:w-4 h-3 md:h-4" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.mobileLabel}</span>
                  {tab.hasOffer && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold shadow-lg transform rotate-12">
                      Oferta
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {activeTab === 'fibra' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fibraSpeedOptions.map((option, index) => {
                const colors = [
                  { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', button: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700', border: 'border-blue-200' },
                  { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', button: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700', border: 'border-purple-200' },
                  { bg: 'from-emerald-500 to-emerald-600', text: 'text-emerald-600', button: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700', border: 'border-emerald-200' }
                ];
                const colorScheme = colors[index] || colors[0];
                const isRecommended = index === 1; // 600 Mbps es recomendado
                
                return (
                  <div key={option.value} className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 ${colorScheme.border} shadow-lg hover:shadow-xl transition-all duration-300`}>
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
                        Sin permanencia
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
                      onClick={() => onContractPlan({
                        id: `fibra-${option.value}`,
                        name: `Fibra ${option.label}`,
                        price: option.price,
                        features: ['Velocidad simétrica', 'Sin permanencia', 'Instalación gratuita', 'Router WiFi 6 incluido']
                      })}
                      className={`w-full bg-gradient-to-r ${colorScheme.button} text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg`}
                    >
                      Lo quiero
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === 'fibra-movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fibra 300 Mbps + Móvil */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 300 Mbps + Móvil</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">29.90€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    300 Mbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    40 GB móvil
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
                <button
                  onClick={() => onContractPlan({
                    id: 'fibra-movil-300',
                    name: 'Fibra 300 Mbps + Móvil 40GB',
                    price: 29.90,
                    features: ['300 Mbps simétrica', '40 GB móvil', 'Llamadas ilimitadas', 'Router WiFi 6 incluido']
                  })}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              {/* Fibra 600 Mbps + Móvil */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    RECOMENDADO
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 600 Mbps + Móvil</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">32.89€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    600 Mbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    40 GB móvil
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Llamadas ilimitadas
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Router WiFi 6 Pro incluido
                  </li>
                </ul>
                <button
                  onClick={() => onContractPlan({
                    id: 'fibra-movil-600',
                    name: 'Fibra 600 Mbps + Móvil 40GB',
                    price: 32.89,
                    features: ['600 Mbps simétrica', '40 GB móvil', 'Llamadas ilimitadas', 'Router WiFi 6 Pro incluido']
                  })}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              {/* Fibra 1000 Mbps + Móvil */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 1 Gbps + Móvil</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">37.90€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 Gbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    40 GB móvil
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Llamadas ilimitadas
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Router WiFi 6E Premium
                  </li>
                </ul>
                <button
                  onClick={() => onContractPlan({
                    id: 'fibra-movil-1000',
                    name: 'Fibra 1 Gbps + Móvil 40GB',
                    price: 37.90,
                    features: ['1 Gbps simétrica', '40 GB móvil', 'Llamadas ilimitadas', 'Router WiFi 6E Premium']
                  })}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Juntos</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{getSelectedJuntosPrice()}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-3 mb-4">
                  <li className="text-sm text-gray-600">Llamadas ilimitadas</li>
                  <li className="text-sm text-gray-600">SMS ilimitados</li>
                  <li className="text-sm text-gray-600">5G incluido</li>
                </ul>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedJuntosData}
                    onChange={(e) => setSelectedJuntosData(e.target.value)}
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
                  onClick={() => onContractPlan({
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
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compartidos</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{getSelectedCompartidosPrice()}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-3 mb-4">
                  <li className="text-sm text-gray-600">Llamadas ilimitadas</li>
                  <li className="text-sm text-gray-600">SMS ilimitados</li>
                  <li className="text-sm text-gray-600">5G incluido</li>
                  <li className="text-sm text-gray-600">Datos compartidos entre líneas</li>
                </ul>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedCompartidosData}
                    onChange={(e) => setSelectedCompartidosData(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {compartidosDataOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => onContractPlan({
                    id: `compartidos-${selectedCompartidosData}`,
                    name: 'Compartidos',
                    price: getSelectedCompartidosPrice(),
                    features: [
                      compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label || '50 GB',
                      'Llamadas ilimitadas',
                      'SMS ilimitados',
                      '5G incluido',
                      'Datos compartidos entre líneas'
                    ]
                  })}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-500 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg">
                    eSIM Digital
                  </span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">eSIM</h3>
                  <div className="text-3xl font-bold text-pink-600 mb-1">{getSelectedEsimPrice()}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-3 mb-4">
                  <li className="text-sm text-gray-600">Activación instantánea</li>
                  <li className="text-sm text-gray-600">Sin tarjeta física</li>
                  <li className="text-sm text-gray-600">Red 5G incluida</li>
                  <li className="text-sm text-gray-600">Compatible iPhone y Android</li>
                </ul>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Selecciona tu plan eSIM:</label>
                  <select
                    value={selectedEsimPlan}
                    onChange={(e) => setSelectedEsimPlan(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    {esimOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} - {option.price}€/mes
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={() => onContractPlan({
                    id: `esim-${selectedEsimPlan}`,
                    name: 'eSIM',
                    price: getSelectedEsimPrice(),
                    features: [
                      esimOptions.find(opt => opt.value === selectedEsimPlan)?.label || '20 GB',
                      'Activación instantánea',
                      'Sin tarjeta física',
                      '5G incluido',
                      'Roaming UE incluido'
                    ]
                  })}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'tv' && (
            <div className="max-w-lg mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-gradient-to-r from-yellow-500 to-orange-500 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2" />
                    DEPORTIVO
                  </span>
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Tv className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Paquete Deportivo Completo</h3>
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
                    <div className="text-4xl font-black mb-1">350€</div>
                    <div className="text-lg font-semibold">/mes</div>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                    ⚽ Todo el Deporte
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">La Liga + Champions League</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">Premier League + Europa League</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">Fórmula 1 + Moto GP</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">A1 Padel + 100+ canales HD</span>
                  </div>
                </div>
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
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'fibra-movil-tv' && (
            <div className="max-w-md mx-auto">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    OFERTA ESPECIAL
                  </span>
                </div>
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fibra + Móvil + TV</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-4">54.90€/mes</div>
                  <p className="text-gray-600 text-sm mb-6">Pack completo con todo incluido</p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Fibra 600 Mbps
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Móvil 80GB + llamadas ilimitadas
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Prime Video de regalo
                    </li>
                  </ul>
                  <button
                    onClick={() => onContractPlan({
                      id: 'fibra-movil-tv-pack',
                      name: 'Fibra + Móvil + TV',
                      price: 54.90,
                      features: [
                        'Fibra 600 Mbps',
                        'Móvil 80GB + llamadas ilimitadas',
                        'Prime Video de regalo'
                      ]
                    })}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onShowConfigurator}
            className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
          >
            Configurar Plan Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default ParticularesSection;