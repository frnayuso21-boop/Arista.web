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
  
  // Fibra + Móvil plans - Individual states for each card
  const [selectedData300, setSelectedData300] = useState('40');
  const [selectedData600, setSelectedData600] = useState('40');
  const [selectedData1000, setSelectedData1000] = useState('40');
  
  // Mobile plans
  const [selectedJuntosData, setSelectedJuntosData] = useState('60');
  const [selectedCompartidosData, setSelectedCompartidosData] = useState('120');
  const [selectedEsimPlan] = useState('voz-15gb');

  const tabs = [
    { id: 'fibra', name: 'Fibra', mobileLabel: 'Fibra', icon: Wifi },
    { id: 'fibra-movil', name: 'Fibra + Móvil', mobileLabel: 'Fibra+Móvil', icon: Smartphone },
    { id: 'movil', name: 'Móvil', mobileLabel: 'Móvil', icon: Smartphone },
    { id: 'tv', name: 'TV', mobileLabel: 'TV', icon: Tv },
    { id: 'fibra-movil-tv', name: 'Fibra + Móvil + TV', mobileLabel: 'Fibra+Móvil+TV', icon: Tv }
  ];

  // Listen for tab change events from header
  useEffect(() => {
    const handleTabChange = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };

    window.addEventListener('changeTab', handleTabChange as EventListener);
    return () => window.removeEventListener('changeTab', handleTabChange as EventListener);
  }, []);

  // Fibra speed options
  const fibraSpeedOptions = [
    { value: '300', label: '300 Mbps', price: 29.90 },
    { value: '600', label: '600 Mbps', price: 32.89 },
    { value: '1000', label: '1 Gbps', price: 37.90 }
  ];

  // Fibra + Móvil data options for each speed
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

  // Mobile Juntos options
  const juntosDataOptions = [
    { value: '20', label: '20 GB', price: 7.90 },
    { value: '40', label: '40 GB', price: 8.90 },
    { value: '60', label: '60 GB', price: 9.90 },
    { value: '80', label: '80 GB', price: 10.90 },
    { value: '120', label: '120 GB', price: 12.90 },
    { value: '200', label: '200 GB', price: 16.90 }
  ];

  // Mobile Compartidos options
  const compartidosDataOptions = [
    { value: '40', label: '40 GB', price: 12.90 },
    { value: '80', label: '80 GB', price: 16.90 },
    { value: '120', label: '120 GB', price: 21.90 },
    { value: '200', label: '200 GB', price: 26.90 },
    { value: '300', label: '300 GB', price: 31.90 },
    { value: '500', label: '500 GB', price: 41.90 }
  ];

  // eSIM options
  const esimOptions = [
    { value: 'solo-voz', label: 'ARISTA Solo Voz', price: 5.95 },
    { value: 'voz-15gb', label: 'ARISTA Ilimitada Voz + 15GB', price: 7.95 },
    { value: 'voz-40gb', label: 'ARISTA Ilimitada Voz + 40GB', price: 9.95 },
    { value: 'voz-80gb', label: 'ARISTA Ilimitada Voz + 80GB', price: 11.75 },
    { value: 'voz-160gb', label: 'ARISTA Ilimitada Voz + 160GB', price: 15.75 },
    { value: 'voz-datos', label: 'ARISTA Ilimitada Voz y Datos', price: 23.75 }
  ];

  // Calculate prices for each speed card
  const getPrice300 = () => {
    const option = dataOptions300.find(opt => opt.value === selectedData300);
    return option?.price || 29.90;
  };

  const getPrice600 = () => {
    const option = dataOptions600.find(opt => opt.value === selectedData600);
    return option?.price || 32.89;
  };

  const getPrice1000 = () => {
    const option = dataOptions1000.find(opt => opt.value === selectedData1000);
    return option?.price || 37.90;
  };



  const getSelectedJuntosPrice = () => {
    const option = juntosDataOptions.find(opt => opt.value === selectedJuntosData);
    return option?.price || 9.90;
  };

  const getSelectedCompartidosPrice = () => {
    const option = compartidosDataOptions.find(opt => opt.value === selectedCompartidosData);
    return option?.price || 21.90;
  };

  const getSelectedEsimPrice = () => {
    const option = esimOptions.find(opt => opt.value === selectedEsimPlan);
    return option?.price || 7.95;
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

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 border border-white/20 w-full max-w-3xl overflow-x-auto">
            <div className="flex space-x-1 min-w-max md:min-w-0 justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium transition-all whitespace-nowrap touch-manipulation ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-white hover:text-white/80'
                  }`}
                >
                  <tab.icon className="w-3 md:w-4 h-3 md:h-4" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.mobileLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Fibra Tab */}
          {activeTab === 'fibra' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {fibraSpeedOptions.map((option, index) => {
                const borderColors = [
                  'border-blue-500',
                  'border-purple-500',
                  'border-emerald-500'
                ];
                const iconColors = [
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600',
                  'from-emerald-500 to-emerald-600'
                ];
                const buttonColors = [
                  'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
                  'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
                  'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700'
                ];
                
                // Solo fibra + fijo, sin opciones móviles
                const totalPrice = option.price;
                
                return (
                  <div
                    key={option.value}
                    onClick={() => onViewPlanDetail({
                      id: `fibra-${option.value}`,
                      name: `Fibra ${option.label} + Fijo`,
                      price: totalPrice,
                      features: [
                        `Velocidad simétrica ${option.label}`,
                        'Router WiFi 6 incluido',
                        'Instalación gratuita',
                        'Teléfono fijo incluido'
                      ]
                    })}
                    className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 ${borderColors[index]} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105`}
                  >
                    {index === 1 && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                          <Star className="w-3 h-3 mr-1" />
                          Recomendado
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${iconColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                        <Wifi className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra {option.label}</h3>
                      <div className="text-3xl font-bold text-gray-900 mb-1">{totalPrice}€</div>
                      <div className="text-gray-500 text-sm">/mes</div>
                    </div>



                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center text-sm text-gray-600">
                        <Wifi className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {option.label} simétrica
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <Wifi className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        WiFi 6 + Teléfono fijo
                      </li>
                    </ul>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onContractPlan({
                          id: `fibra-${option.value}`,
                          name: `Fibra ${option.label} + Fijo`,
                          price: totalPrice,
                          features: [
                            `Velocidad simétrica ${option.label}`,
                            'Router WiFi 6 incluido',
                            'Instalación gratuita',
                            'Teléfono fijo incluido'
                          ]
                        });
                      }}
                      className={`w-full ${buttonColors[index]} text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg`}
                    >
                      Contratar
                    </button>
                  </div>
                 );
               })}
            </div>
          )}

          {/* Fibra + Móvil Tab */}
          {activeTab === 'fibra-movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* 300 Mbps Card */}
              <div 
                onClick={() => onViewPlanDetail({
                  id: `fibra-movil-300-${selectedData300}`,
                  name: `Fibra 300 Mbps + Móvil + Fijo`,
                  price: getPrice300(),
                  features: [
                    'Fibra 300 Mbps simétrica',
                    'Voz ilimitada',
                    dataOptions300.find(opt => opt.value === selectedData300)?.label || '40 GB',
                    'Línea fija incluida'
                  ]
                })}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">300 Mbps + llamadas ilimitadas + línea fija</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{getPrice300().toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>



                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-600">
                    300 Mbps simétrica
                  </li>
                  <li className="text-sm text-gray-600">
                    Llamadas ilimitadas
                  </li>
                </ul>

                {/* Selector de datos móviles */}
                <div className="mb-4" onClick={(e) => e.stopPropagation()}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedData300}
                    onChange={(e) => setSelectedData300(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                    onContractPlan({
                      id: `fibra-movil-300-${selectedData300}`,
                      name: `Fibra 300 Mbps + Móvil + Fijo`,
                      price: getPrice300(),
                      features: [
                        'Fibra 300 Mbps simétrica',
                        'Voz ilimitada',
                        dataOptions300.find(opt => opt.value === selectedData300)?.label || '40 GB',
                        'Línea fija incluida'
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contratar
                </button>
              </div>

              {/* 600 Mbps Card - Recomendado */}
              <div 
                onClick={() => onViewPlanDetail({
                  id: `fibra-movil-600-${selectedData600}`,
                  name: `Fibra 600 Mbps + Móvil + Fijo`,
                  price: getPrice600(),
                  features: [
                    'Fibra 600 Mbps simétrica',
                    'Voz ilimitada',
                    dataOptions600.find(opt => opt.value === selectedData600)?.label || '40 GB',
                    'Línea fija incluida'
                  ]
                })}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 relative cursor-pointer hover:scale-105"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Recomendado
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">600 Mbps + llamadas ilimitadas + línea fija</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">{getPrice600().toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>



                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-600">
                    600 Mbps simétrica
                  </li>
                  <li className="text-sm text-gray-600">
                    Llamadas ilimitadas
                  </li>
                </ul>

                {/* Selector de datos móviles */}
                <div className="mb-4" onClick={(e) => e.stopPropagation()}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedData600}
                    onChange={(e) => setSelectedData600(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    {dataOptions600.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `fibra-movil-600-${selectedData600}`,
                      name: `Fibra 600 Mbps + Móvil + Fijo`,
                      price: getPrice600(),
                      features: [
                        'Fibra 600 Mbps simétrica',
                        'Voz ilimitada',
                        dataOptions600.find(opt => opt.value === selectedData600)?.label || '40 GB',
                        'Línea fija incluida'
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contratar
                </button>
              </div>

              {/* 1000 Mbps Card */}
              <div 
                onClick={() => onViewPlanDetail({
                  id: `fibra-movil-1000-${selectedData1000}`,
                  name: `Fibra 1000 Mbps + Móvil + Fijo`,
                  price: getPrice1000(),
                  features: [
                    'Fibra 1000 Mbps simétrica',
                    'Voz ilimitada',
                    dataOptions1000.find(opt => opt.value === selectedData1000)?.label || '40 GB',
                    'Línea fija incluida'
                  ]
                })}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">1000 Mbps + llamadas ilimitadas + línea fija</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{getPrice1000().toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>



                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-600">
                    1000 Mbps simétrica
                  </li>
                  <li className="text-sm text-gray-600">
                    Llamadas ilimitadas
                  </li>
                </ul>

                {/* Selector de datos móviles */}
                <div className="mb-4" onClick={(e) => e.stopPropagation()}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedData1000}
                    onChange={(e) => setSelectedData1000(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {dataOptions1000.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `fibra-movil-1000-${selectedData1000}`,
                      name: `Fibra 1000 Mbps + Móvil + Fijo`,
                      price: getPrice1000(),
                      features: [
                        'Fibra 1000 Mbps simétrica',
                        'Voz ilimitada',
                        dataOptions1000.find(opt => opt.value === selectedData1000)?.label || '40 GB',
                        'Línea fija incluida'
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-3 rounded-xl font-medium hover:from-emerald-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contratar
                </button>
              </div>
            </div>
          )}

          {/* Fibra + Móvil + TV Tab */}
          {activeTab === 'fibra-movil-tv' && (
            <div className="max-w-lg mx-auto">
              <div 
                onClick={() => onViewPlanDetail({
                  id: 'fibra-movil-tv-ilimitada',
                  name: 'Fibra Ilimitada + GB Ilimitados + Amazon Prime',
                  price: 54.90,
                  features: [
                    'Fibra ilimitada',
                    'GB móviles ilimitados',
                    'Amazon Prime incluido',
                    'TV con 100+ canales',
                    'Línea fija incluida'
                  ]
                })}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-xl relative cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2" />
                    MÁS VENDIDA
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Tv className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Fibra Ilimitada + GB Ilimitados</h3>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                    <div className="text-4xl font-black mb-1">54,90€</div>
                    <div className="text-lg font-semibold">/mes</div>
                  </div>
                  <div className="mt-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
                    🎁 Amazon Prime de regalo
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">Fibra ilimitada</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">GB móviles ilimitados</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">TV con 100+ canales</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="font-medium">Línea fija incluida</span>
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: 'fibra-movil-tv-ilimitada',
                      name: 'Fibra Ilimitada + GB Ilimitados + Amazon Prime',
                      price: 54.90,
                      features: [
                        'Fibra ilimitada',
                        'GB móviles ilimitados',
                        'Amazon Prime incluido',
                        'TV con 100+ canales',
                        'Línea fija incluida'
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Contratar Ahora
                </button>
              </div>
            </div>
          )}

          {/* Móvil Tab */}
          {activeTab === 'movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Juntos Plan */}
              <div 
                onClick={() => onViewPlanDetail({
                  id: `juntos-${selectedJuntosData}`,
                  name: 'Juntos',
                  price: getSelectedJuntosPrice(),
                  features: [
                    juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label || '30 GB',
                    'Llamadas ilimitadas',
                    'SMS ilimitados',
                    'Roaming UE incluido'
                  ]
                })}
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Recomendado
                  </span>
                </div>
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Juntos</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{getSelectedJuntosPrice()}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>



                <ul className="space-y-3 mb-4">
                  <li className="text-sm text-gray-600">
                    Llamadas ilimitadas
                  </li>
                  <li className="text-sm text-gray-600">
                    SMS ilimitados
                  </li>
                  <li className="text-sm text-gray-600">
                    5G incluido
                  </li>
                </ul>

                {/* Selector de datos móviles */}
                <div className="mb-4" onClick={(e) => e.stopPropagation()}>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `juntos-${selectedJuntosData}`,
                      name: `Juntos ${juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label}`,
                      price: getSelectedJuntosPrice(),
                      features: ['Llamadas ilimitadas', 'SMS ilimitados', '5G incluido', `${juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label} de datos`]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contratar
                </button>
              </div>

              {/* Compartidos Plan */}
              <div 
                onClick={() => onViewPlanDetail({
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compartidos</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{getSelectedCompartidosPrice()}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>



                <ul className="space-y-3 mb-4">
                  <li className="text-sm text-gray-600">
                    Llamadas ilimitadas
                  </li>
                  <li className="text-sm text-gray-600">
                    SMS ilimitados
                  </li>
                  <li className="text-sm text-gray-600">
                    5G incluido
                  </li>
                  <li className="text-sm text-gray-600">
                    Datos compartidos entre líneas
                  </li>
                </ul>

                {/* Selector de datos móviles */}
                <div className="mb-4" onClick={(e) => e.stopPropagation()}>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `compartidos-${selectedCompartidosData}`,
                      name: `Compartidos ${compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label}`,
                      price: getSelectedCompartidosPrice(),
                      features: ['Llamadas ilimitadas', 'SMS ilimitados', '5G incluido', 'Datos compartidos']
                    });
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contratar
                </button>
              </div>

              {/* eSIM Section */}
              <div 
                onClick={() => onViewPlanDetail({
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
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
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
                  <div className="text-3xl font-bold text-pink-600 mb-1">
                    {getSelectedEsimPrice()}€
                  </div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>



                <ul className="space-y-3 mb-6">
                  <li className="text-sm text-gray-600">
                    Activación instantánea
                  </li>
                  <li className="text-sm text-gray-600">
                    Sin tarjeta física
                  </li>
                  <li className="text-sm text-gray-600">
                    Red 5G incluida
                  </li>
                  <li className="text-sm text-gray-600">
                    Compatible iPhone y Android
                  </li>
                </ul>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `esim-${selectedEsimPlan}`,
                      name: esimOptions.find(opt => opt.value === selectedEsimPlan)?.label || 'eSIM',
                      price: getSelectedEsimPrice(),
                      features: ['Activación instantánea', 'Sin tarjeta física', 'Red 5G incluida', 'Compatible iPhone y Android']
                    });
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contratar
                </button>
              </div>
            </div>
          )}

          {/* TV Tab */}
          {activeTab === 'tv' && (
            <div className="max-w-lg mx-auto">
              <div 
                onClick={() => onViewPlanDetail({
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
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-gradient-to-r from-yellow-500 to-orange-500 shadow-xl relative cursor-pointer hover:scale-105 transition-all duration-300"
              >
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
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
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
                    });
                  }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Contratar Ahora
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Plan Configurator Button */}
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