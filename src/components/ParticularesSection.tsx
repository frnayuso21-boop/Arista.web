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
  const [selectedCompartidosData, setSelectedCompartidosData] = useState('60');
  const [selectedEsimPlan, setSelectedEsimPlan] = useState('voz-15gb');
  const [additionalJuntosLines, setAdditionalJuntosLines] = useState(0);
  const [additionalCompartidosLines, setAdditionalCompartidosLines] = useState(0);
  const [additionalJuntosLineData, setAdditionalJuntosLineData] = useState('40');
  const [additionalCompartidosLineData, setAdditionalCompartidosLineData] = useState('60');
  const [additionalEsimLines, setAdditionalEsimLines] = useState(0);
  const [additionalEsimLineData, setAdditionalEsimLineData] = useState('voz-15gb');
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedTvPlan, setSelectedTvPlan] = useState('600-75gb');
  const [selectedTvAdditionalLines, setSelectedTvAdditionalLines] = useState('0');
  const [tvAdditionalLinesCount, setTvAdditionalLinesCount] = useState(0);

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

  // Reset additional lines when data plan changes to non-eligible plans
  useEffect(() => {
    if (selectedData300 !== '40' && selectedData300 !== '80') {
      setAdditionalLines300(0);
    }
  }, [selectedData300]);

  useEffect(() => {
    if (selectedData600 !== '40' && selectedData600 !== '80') {
      setAdditionalLines600(0);
    }
  }, [selectedData600]);

  useEffect(() => {
    if (selectedData1000 !== '40' && selectedData1000 !== '80') {
      setAdditionalLines1000(0);
    }
  }, [selectedData1000]);

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
    { value: '100', label: '100 GB - 10,90€', price: 10.90 },
    { value: '200', label: '200 GB - 14,90€', price: 14.90 },
    { value: '400', label: '400 GB - 24,90€', price: 24.90 }
  ];

  const compartidosDataOptions = [
    { value: '60', label: '60 GB - 20,90€', price: 20.90 },
    { value: '80', label: '80 GB - 25,90€', price: 25.90 },
    { value: '150', label: '150 GB - 35,90€', price: 35.90 }
  ];

  const esimOptions = [
    { value: 'solo-voz', label: 'ARISTA Solo Voz', price: 5.95 },
    { value: 'voz-15gb', label: 'ARISTA Ilimitada Voz + 15GB', price: 7.95 },
    { value: 'voz-40gb', label: 'ARISTA Ilimitada Voz + 40GB', price: 9.95 },
    { value: 'voz-80gb', label: 'ARISTA Ilimitada Voz + 80GB', price: 11.75 },
    { value: 'voz-160gb', label: 'ARISTA Ilimitada Voz + 160GB', price: 15.75 },
    { value: 'voz-datos', label: 'ARISTA Ilimitada Voz y Datos', price: 23.75 }
  ];

  const tvPlanOptions = [
    { value: '600-75gb', label: 'Fibra 600 Mbps + 75 GB', price: 54.90 },
    { value: '1000-unlimited', label: 'Fibra 1000 Mbps + Móvil ilimitado', price: 61.25 }
  ];

  const tvAdditionalLinesOptions = [
    { value: '0', label: 'Sin líneas adicionales', price: 0 },
    { value: 'la-unlimited', label: 'LA Ilimitadas + llamadas', price: 7.36 },
    { value: 'la-150gb', label: 'LA 150GB + llamadas', price: 6.53 },
    { value: 'la-75gb', label: 'LA 75GB + llamadas', price: 5.70 },
    { value: 'la-35gb', label: 'LA 35GB + llamadas', price: 4.88 },
    { value: 'family-300gb', label: '300GB + 3 llamadas (3x100 GB)', price: 25.54 },
    { value: 'family-150gb', label: '150GB + 3 llamadas (3x50 GB)', price: 22.23 },
    { value: 'family-75gb', label: '75GB + 3 llamadas (3x25 GB)', price: 18.93 }
  ];

  const getAdditionalLinePrice = (dataAmount: string) => {
    if (dataAmount === '40') return 5.90;
    if (dataAmount === '80') return 7.90;
    return 5.90; // default
  };

  const getTvPlanPrice = () => {
    const basePlan = tvPlanOptions.find(option => option.value === selectedTvPlan);
    const additionalLine = tvAdditionalLinesOptions.find(option => option.value === selectedTvAdditionalLines);
    return (basePlan?.price || 0) + (additionalLine?.price || 0) * (selectedTvAdditionalLines.startsWith('family-') ? 1 : tvAdditionalLinesCount);
  };

  const getTvPlanFeatures = () => {
    const basePlan = tvPlanOptions.find(option => option.value === selectedTvPlan);
    const additionalLine = tvAdditionalLinesOptions.find(option => option.value === selectedTvAdditionalLines);
    
    let features = [];
    if (selectedTvPlan === '600-75gb') {
      features = ['Fibra 600 Mbps simétrica', '75 GB móvil + llamadas ilimitadas', '🎬 Prime Video incluido', 'Router WiFi 6 Pro incluido'];
    } else {
      features = ['Fibra 1000 Mbps simétrica', 'Móvil ilimitado + llamadas ilimitadas', '🎬 Prime Video incluido', 'Router WiFi 6E Premium'];
    }
    
    if (selectedTvAdditionalLines !== '0') {
      if (selectedTvAdditionalLines.startsWith('family-')) {
        features.push(additionalLine?.label || '');
      } else if (tvAdditionalLinesCount > 0) {
        features.push(`${tvAdditionalLinesCount} línea${tvAdditionalLinesCount > 1 ? 's' : ''} adicional${tvAdditionalLinesCount > 1 ? 'es' : ''}: ${additionalLine?.label || ''}`);
      }
    }
    
    return features;
  };

  const getPrice300 = () => {
    const selectedOption = dataOptions300.find(opt => opt.value === selectedData300);
    const basePrice = selectedOption ? selectedOption.price : 29.90;
    const additionalLinesPrice = additionalLines300 * getAdditionalLinePrice(additionalLineData300);
    return basePrice + additionalLinesPrice;
  };

  const getPrice600 = () => {
    const selectedOption = dataOptions600.find(opt => opt.value === selectedData600);
    const basePrice = selectedOption ? selectedOption.price : 32.89;
    const additionalLinesPrice = additionalLines600 * getAdditionalLinePrice(additionalLineData600);
    return basePrice + additionalLinesPrice;
  };

  const getPrice1000 = () => {
    const selectedOption = dataOptions1000.find(opt => opt.value === selectedData1000);
    const basePrice = selectedOption ? selectedOption.price : 37.90;
    const additionalLinesPrice = additionalLines1000 * getAdditionalLinePrice(additionalLineData1000);
    return basePrice + additionalLinesPrice;
  };

  const getMobileAdditionalLinePrice = (dataAmount: string) => {
    if (dataAmount === '40') return 5.90;
    if (dataAmount === '60') return 7.90;
    if (dataAmount === '100') return 8.90;
    if (dataAmount === '200') return 12.90;
    if (dataAmount === '400') return 19.90;
    return 5.90; // default
  };

  const getSelectedJuntosPrice = () => {
    const basePrice = juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.price || 0;
    const additionalLinesPrice = additionalJuntosLines * getMobileAdditionalLinePrice(additionalJuntosLineData);
    return basePrice + additionalLinesPrice;
  };

  const getSelectedCompartidosPrice = () => {
    const basePrice = compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.price || 0;
    const additionalLinesPrice = additionalCompartidosLines * getMobileAdditionalLinePrice(additionalCompartidosLineData);
    return basePrice + additionalLinesPrice;
  };

  const getEsimAdditionalLinePrice = (planValue: string) => {
    const basePlan = esimOptions.find(opt => opt.value === planValue);
    return basePlan ? basePlan.price * 0.8 : 4.76; // 20% descuento en líneas adicionales
  };

  const getSelectedEsimPrice = () => {
    const basePrice = esimOptions.find(opt => opt.value === selectedEsimPlan)?.price || 0;
    const additionalLinesPrice = additionalEsimLines * getEsimAdditionalLinePrice(additionalEsimLineData);
    return basePrice + additionalLinesPrice;
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
                  <div 
                    key={option.value} 
                    className={`relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 ${colorScheme.border} shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-opacity-80`}
                    onClick={() => onViewPlanDetail({
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
                        onContractPlan({
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
          )}

          {activeTab === 'fibra-movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Fibra 300 Mbps + Móvil */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300"
                onClick={() => onViewPlanDetail({
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
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent touch-manipulation"
                  >
                    {dataOptions300.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedData300 === '40' || selectedData300 === '80') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                    <div className="mb-3">
                      <select
                        value={additionalLineData300}
                        onChange={(e) => setAdditionalLineData300(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm touch-manipulation"
                      >
                        <option value="40">40 GB - 5,90€/mes</option>
                        <option value="80">80 GB - 7,90€/mes</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">
                          {additionalLines300} línea{additionalLines300 !== 1 ? 's' : ''} adicional{additionalLines300 !== 1 ? 'es' : ''}
                        </span>
                        {additionalLines300 > 0 && (
                          <span className="text-sm text-blue-600 font-medium">
                            +{(additionalLines300 * getAdditionalLinePrice(additionalLineData300)).toFixed(2)}€/mes
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdditionalLines300(Math.max(0, additionalLines300 - 1));
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          disabled={additionalLines300 === 0}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-600 font-bold touch-manipulation"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{additionalLines300}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdditionalLines300(additionalLines300 + 1);
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center font-bold touch-manipulation"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {additionalLines300 > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        Cada línea adicional incluye {additionalLineData300} GB y llamadas ilimitadas por {getAdditionalLinePrice(additionalLineData300).toFixed(2)}€/mes
                      </p>
                    )}
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
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

              {/* Fibra 600 Mbps + Móvil */}
              <div 
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-purple-300"
                onClick={() => onViewPlanDetail({
                  id: 'fibra-movil-600',
                  name: `Fibra 600 Mbps + Móvil ${selectedData600}GB${additionalLines600 > 0 ? ` + ${additionalLines600} línea${additionalLines600 > 1 ? 's' : ''} adicional${additionalLines600 > 1 ? 'es' : ''}` : ''}`,
                  price: getPrice600(),
                  features: [
                    '600 Mbps simétrica', 
                    `${selectedData600} GB móvil`, 
                    'Llamadas ilimitadas', 
                    'Router WiFi 6 Pro incluido',
                    ...(additionalLines600 > 0 ? [`${additionalLines600} línea${additionalLines600 > 1 ? 's' : ''} adicional${additionalLines600 > 1 ? 'es' : ''} con ${additionalLineData600} GB cada una`] : [])
                  ]
                })}
              >
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
                  <div className="text-3xl font-bold text-purple-600 mb-1">{getPrice600().toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    600 Mbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {selectedData600} GB móvil
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
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedData600}
                    onChange={(e) => setSelectedData600(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent touch-manipulation"
                  >
                    {dataOptions600.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedData600 === '40' || selectedData600 === '80') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                    <div className="mb-3">
                      <select
                        value={additionalLineData600}
                        onChange={(e) => setAdditionalLineData600(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm touch-manipulation"
                      >
                        <option value="40">40 GB - 5,90€/mes</option>
                        <option value="80">80 GB - 7,90€/mes</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">
                          {additionalLines600} línea{additionalLines600 !== 1 ? 's' : ''} adicional{additionalLines600 !== 1 ? 'es' : ''}
                        </span>
                        {additionalLines600 > 0 && (
                          <span className="text-sm text-purple-600 font-medium">
                            +{(additionalLines600 * getAdditionalLinePrice(additionalLineData600)).toFixed(2)}€/mes
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdditionalLines600(Math.max(0, additionalLines600 - 1));
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          disabled={additionalLines600 === 0}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-600 font-bold touch-manipulation"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{additionalLines600}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdditionalLines600(additionalLines600 + 1);
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center font-bold touch-manipulation"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {additionalLines600 > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        Cada línea adicional incluye {additionalLineData600} GB y llamadas ilimitadas por {getAdditionalLinePrice(additionalLineData600).toFixed(2)}€/mes
                      </p>
                    )}
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: 'fibra-movil-600',
                      name: `Fibra 600 Mbps + Móvil ${selectedData600}GB${additionalLines600 > 0 ? ` + ${additionalLines600} línea${additionalLines600 > 1 ? 's' : ''} adicional${additionalLines600 > 1 ? 'es' : ''}` : ''}`,
                      price: getPrice600(),
                      features: [
                        '600 Mbps simétrica', 
                        `${selectedData600} GB móvil`, 
                        'Llamadas ilimitadas', 
                        'Router WiFi 6 Pro incluido',
                        ...(additionalLines600 > 0 ? [`${additionalLines600} línea${additionalLines600 > 1 ? 's' : ''} adicional${additionalLines600 > 1 ? 'es' : ''} con ${additionalLineData600} GB cada una`] : [])
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              {/* Fibra 1 Gbps + Móvil */}
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-green-300"
                onClick={() => onViewPlanDetail({
                  id: 'fibra-movil-1gb',
                  name: `Fibra 1 Gbps + Móvil ${selectedData1000}GB${additionalLines1000 > 0 ? ` + ${additionalLines1000} línea${additionalLines1000 > 1 ? 's' : ''} adicional${additionalLines1000 > 1 ? 'es' : ''}` : ''}`,
                  price: getPrice1000(),
                  features: [
                    '1 Gbps simétrica', 
                    `${selectedData1000} GB móvil`, 
                    'Llamadas ilimitadas', 
                    'Router WiFi 6 Pro incluido',
                    'Instalación gratuita',
                    ...(additionalLines1000 > 0 ? [`${additionalLines1000} línea${additionalLines1000 > 1 ? 's' : ''} adicional${additionalLines1000 > 1 ? 'es' : ''} con ${additionalLineData1000} GB cada una`] : [])
                  ]
                })}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 1 Gbps + Móvil</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{getPrice1000().toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 Gbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {selectedData1000} GB móvil
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
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos móviles:</label>
                  <select
                    value={selectedData1000}
                    onChange={(e) => setSelectedData1000(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent touch-manipulation"
                  >
                    {dataOptions1000.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {(selectedData1000 === '40' || selectedData1000 === '80') && (
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                    <div className="mb-3">
                      <select
                        value={additionalLineData1000}
                        onChange={(e) => setAdditionalLineData1000(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm touch-manipulation"
                      >
                        <option value="40">40 GB - 5,90€/mes</option>
                        <option value="80">80 GB - 7,90€/mes</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600">
                          {additionalLines1000} línea{additionalLines1000 !== 1 ? 's' : ''} adicional{additionalLines1000 !== 1 ? 'es' : ''}
                        </span>
                        {additionalLines1000 > 0 && (
                          <span className="text-sm text-emerald-600 font-medium">
                            +{(additionalLines1000 * getAdditionalLinePrice(additionalLineData1000)).toFixed(2)}€/mes
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdditionalLines1000(Math.max(0, additionalLines1000 - 1));
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          disabled={additionalLines1000 === 0}
                          className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-600 font-bold touch-manipulation"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{additionalLines1000}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setAdditionalLines1000(additionalLines1000 + 1);
                          }}
                          onTouchStart={(e) => e.stopPropagation()}
                          onTouchEnd={(e) => e.stopPropagation()}
                          className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center font-bold touch-manipulation"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {additionalLines1000 > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        Cada línea adicional incluye {additionalLineData1000} GB y llamadas ilimitadas por {getAdditionalLinePrice(additionalLineData1000).toFixed(2)}€/mes
                      </p>
                    )}
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: 'fibra-movil-1000',
                      name: `Fibra 1 Gbps + Móvil ${selectedData1000}GB${additionalLines1000 > 0 ? ` + ${additionalLines1000} línea${additionalLines1000 > 1 ? 's' : ''} adicional${additionalLines1000 > 1 ? 'es' : ''}` : ''}`,
                      price: getPrice1000(),
                      features: [
                        '1 Gbps simétrica', 
                        `${selectedData1000} GB móvil`, 
                        'Llamadas ilimitadas', 
                        'Router WiFi 6E Premium',
                        ...(additionalLines1000 > 0 ? [`${additionalLines1000} línea${additionalLines1000 > 1 ? 's' : ''} adicional${additionalLines1000 > 1 ? 'es' : ''} con ${additionalLineData1000} GB cada una`] : [])
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300"
                onClick={() => onViewPlanDetail({
                  id: `juntos-${selectedJuntosData}`,
                  name: 'Juntos',
                  price: getSelectedJuntosPrice(),
                  features: [
                    juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label || '40 GB',
                    'Llamadas ilimitadas',
                    'SMS ilimitados',
                    '5G incluido',
                    ...(additionalJuntosLines > 0 ? [`${additionalJuntosLines} línea${additionalJuntosLines > 1 ? 's' : ''} adicional${additionalJuntosLines > 1 ? 'es' : ''} con ${juntosDataOptions.find(opt => opt.value === additionalJuntosLineData)?.label?.split(' - ')[0]} cada una`] : [])
                  ]
                })}
              >
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
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 touch-manipulation"
                  >
                    {juntosDataOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Líneas adicionales */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                  <div className="flex items-center space-x-3 mb-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (additionalJuntosLines > 0) {
                          setAdditionalJuntosLines(additionalJuntosLines - 1);
                        }
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors touch-manipulation"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">{additionalJuntosLines}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (additionalJuntosLines < 4) {
                          setAdditionalJuntosLines(additionalJuntosLines + 1);
                        }
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white font-bold transition-colors touch-manipulation"
                    >
                      +
                    </button>
                  </div>
                  {additionalJuntosLines > 0 && (
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Datos por línea adicional:</label>
                      <select
                        value={additionalJuntosLineData}
                        onChange={(e) => setAdditionalJuntosLineData(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 touch-manipulation"
                      >
                        {juntosDataOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-500 mt-1">
                        Cada línea adicional incluye {juntosDataOptions.find(opt => opt.value === additionalJuntosLineData)?.label?.split(' - ')[0]} y llamadas ilimitadas por {getMobileAdditionalLinePrice(additionalJuntosLineData).toFixed(2)}€/mes
                      </p>
                    </div>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `juntos-${selectedJuntosData}`,
                      name: 'Juntos',
                      price: getSelectedJuntosPrice(),
                      features: [
                        juntosDataOptions.find(opt => opt.value === selectedJuntosData)?.label || '40 GB',
                        'Llamadas ilimitadas',
                        'SMS ilimitados',
                        '5G incluido',
                        ...(additionalJuntosLines > 0 ? [`${additionalJuntosLines} línea${additionalJuntosLines > 1 ? 's' : ''} adicional${additionalJuntosLines > 1 ? 'es' : ''} con ${juntosDataOptions.find(opt => opt.value === additionalJuntosLineData)?.label?.split(' - ')[0]} cada una`] : [])
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-emerald-600"
                onClick={() => onViewPlanDetail({
                  id: `compartidos-${selectedCompartidosData}`,
                  name: 'Compartidos',
                  price: getSelectedCompartidosPrice(),
                  features: [
                    compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label || '50 GB',
                    'Llamadas ilimitadas',
                    'SMS ilimitados',
                    '5G incluido',
                    'Datos compartidos entre líneas',
                    ...(additionalCompartidosLines > 0 ? [`${additionalCompartidosLines} línea${additionalCompartidosLines > 1 ? 's' : ''} adicional${additionalCompartidosLines > 1 ? 'es' : ''} con ${compartidosDataOptions.find(opt => opt.value === additionalCompartidosLineData)?.label?.split(' - ')[0]} cada una`] : [])
                  ]
                })}
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
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 touch-manipulation"
                  >
                    {compartidosDataOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Líneas adicionales */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                  <div className="flex items-center space-x-3 mb-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (additionalCompartidosLines > 0) {
                          setAdditionalCompartidosLines(additionalCompartidosLines - 1);
                        }
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors touch-manipulation"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">{additionalCompartidosLines}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (additionalCompartidosLines < 4) {
                          setAdditionalCompartidosLines(additionalCompartidosLines + 1);
                        }
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold transition-colors touch-manipulation"
                    >
                      +
                    </button>
                  </div>
                  {additionalCompartidosLines > 0 && (
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Datos por línea adicional:</label>
                      <select
                        value={additionalCompartidosLineData}
                        onChange={(e) => setAdditionalCompartidosLineData(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 touch-manipulation"
                      >
                        {compartidosDataOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-500 mt-1">
                        Cada línea adicional incluye {compartidosDataOptions.find(opt => opt.value === additionalCompartidosLineData)?.label?.split(' - ')[0]} compartidos y llamadas ilimitadas por {getMobileAdditionalLinePrice(additionalCompartidosLineData).toFixed(2)}€/mes
                      </p>
                    </div>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `compartidos-${selectedCompartidosData}`,
                      name: 'Compartidos',
                      price: getSelectedCompartidosPrice(),
                      features: [
                        compartidosDataOptions.find(opt => opt.value === selectedCompartidosData)?.label || '50 GB',
                        'Llamadas ilimitadas',
                        'SMS ilimitados',
                        '5G incluido',
                        'Datos compartidos entre líneas',
                        ...(additionalCompartidosLines > 0 ? [`${additionalCompartidosLines} línea${additionalCompartidosLines > 1 ? 's' : ''} adicional${additionalCompartidosLines > 1 ? 'es' : ''} con ${compartidosDataOptions.find(opt => opt.value === additionalCompartidosLineData)?.label?.split(' - ')[0]} cada una`] : [])
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div 
                className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-pink-500 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-pink-600"
                onClick={() => onViewPlanDetail({
                  id: `esim-${selectedEsimPlan}`,
                  name: 'eSIM',
                  price: getSelectedEsimPrice(),
                  features: [
                    esimOptions.find(opt => opt.value === selectedEsimPlan)?.label || '20 GB',
                    ...(additionalEsimLines > 0 ? [`${additionalEsimLines} línea${additionalEsimLines > 1 ? 's' : ''} adicional${additionalEsimLines > 1 ? 'es' : ''} eSIM (${esimOptions.find(opt => opt.value === additionalEsimLineData)?.label})`] : []),
                    'Activación instantánea',
                    'Sin tarjeta física',
                    '5G incluido',
                    'Roaming UE incluido'
                  ]
                })}
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
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-pink-500 focus:border-pink-500 touch-manipulation"
                  >
                    {esimOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} - {option.price}€/mes
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Líneas adicionales eSIM */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales eSIM:</label>
                  <div className="flex items-center space-x-3 mb-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (additionalEsimLines > 0) {
                          setAdditionalEsimLines(additionalEsimLines - 1);
                        }
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold transition-colors touch-manipulation"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium text-gray-900 min-w-[2rem] text-center">{additionalEsimLines}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (additionalEsimLines < 4) {
                          setAdditionalEsimLines(additionalEsimLines + 1);
                        }
                      }}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full flex items-center justify-center text-white font-bold transition-colors touch-manipulation"
                    >
                      +
                    </button>
                  </div>
                  {additionalEsimLines > 0 && (
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-gray-600 mb-1">Plan para líneas adicionales:</label>
                      <select
                        value={additionalEsimLineData}
                        onChange={(e) => setAdditionalEsimLineData(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-xs focus:ring-2 focus:ring-pink-500 focus:border-pink-500 touch-manipulation"
                      >
                        {esimOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label} - {option.price}€/mes
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-500 mt-1">
                        Cada línea adicional eSIM: {esimOptions.find(opt => opt.value === additionalEsimLineData)?.label} por {getEsimAdditionalLinePrice(additionalEsimLineData).toFixed(2)}€/mes (20% descuento)
                      </p>
                    </div>
                  )}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: `esim-${selectedEsimPlan}`,
                      name: 'eSIM',
                      price: getSelectedEsimPrice(),
                      features: [
                        esimOptions.find(opt => opt.value === selectedEsimPlan)?.label || '20 GB',
                        ...(additionalEsimLines > 0 ? [`${additionalEsimLines} línea${additionalEsimLines > 1 ? 's' : ''} adicional${additionalEsimLines > 1 ? 'es' : ''} eSIM (${esimOptions.find(opt => opt.value === additionalEsimLineData)?.label})`] : []),
                        'Activación instantánea',
                        'Sin tarjeta física',
                        '5G incluido',
                        'Roaming UE incluido'
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'tv' && (
            <div className="max-w-lg mx-auto">
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border-2 border-gradient-to-r from-yellow-500 to-orange-500 shadow-xl relative cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('data:image/svg+xml;base64,${btoa(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
                      <defs>
                        <linearGradient id="grass" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#2d5016;stop-opacity:1" />
                          <stop offset="50%" style="stop-color:#4a7c59;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#2d5016;stop-opacity:1" />
                        </linearGradient>
                        <linearGradient id="stands" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color:#1a365d;stop-opacity:1" />
                          <stop offset="50%" style="stop-color:#2d3748;stop-opacity:1" />
                          <stop offset="100%" style="stop-color:#1a202c;stop-opacity:1" />
                        </linearGradient>
                      </defs>
                      <!-- Stadium Bowl -->
                      <ellipse cx="400" cy="500" rx="380" ry="80" fill="url(#stands)" opacity="0.3"/>
                      <ellipse cx="400" cy="480" rx="350" ry="70" fill="url(#stands)" opacity="0.4"/>
                      <ellipse cx="400" cy="460" rx="320" ry="60" fill="url(#stands)" opacity="0.5"/>
                      <!-- Field -->
                      <ellipse cx="400" cy="440" rx="280" ry="50" fill="url(#grass)" opacity="0.6"/>
                      <!-- Field Lines -->
                      <ellipse cx="400" cy="440" rx="280" ry="50" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
                      <ellipse cx="400" cy="440" rx="140" ry="25" fill="none" stroke="white" stroke-width="1" opacity="0.3"/>
                      <line x1="400" y1="415" x2="400" y2="465" stroke="white" stroke-width="1" opacity="0.3"/>
                      <!-- Champions League Stars -->
                      <g opacity="0.2">
                        <polygon points="200,150 205,165 220,165 208,175 213,190 200,180 187,190 192,175 180,165 195,165" fill="#FFD700"/>
                        <polygon points="400,120 405,135 420,135 408,145 413,160 400,150 387,160 392,145 380,135 395,135" fill="#FFD700"/>
                        <polygon points="600,150 605,165 620,165 608,175 613,190 600,180 587,190 592,175 580,165 595,165" fill="#FFD700"/>
                      </g>
                      <!-- Floodlights -->
                      <rect x="100" y="200" width="8" height="120" fill="#4a5568" opacity="0.4"/>
                      <rect x="692" y="200" width="8" height="120" fill="#4a5568" opacity="0.4"/>
                      <circle cx="104" cy="200" r="12" fill="#ffd700" opacity="0.3"/>
                      <circle cx="696" cy="200" r="12" fill="#ffd700" opacity="0.3"/>
                    </svg>
                  `)}')`
                }}
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
                    'Contenido 4K disponible'
                  ]
                })}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2" />
                    SOLO EMPRESAS
                  </span>
                </div>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <Tv className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Paquete Deportivo Completo</h3>
                  <p className="text-red-600 font-semibold mb-3">EXCLUSIVO PARA EMPRESAS</p>
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
                        'Máxima flexibilidad'
                      ]
                    });
                  }}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'fibra-movil-tv' && (
            <div className="max-w-xl mx-auto">
              <div 
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-gradient-to-r from-purple-500 to-pink-500 shadow-lg relative cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => onViewPlanDetail({
                  id: 'fibra-movil-tv-configurado',
                  name: `Fibra + Móvil + TV - ${tvPlanOptions.find(p => p.value === selectedTvPlan)?.label}${selectedTvAdditionalLines !== '0' ? ` + ${tvAdditionalLinesOptions.find(l => l.value === selectedTvAdditionalLines)?.label}` : ''}`,
                  price: getTvPlanPrice(),
                  features: getTvPlanFeatures()
                })}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    OFERTA ESPECIAL
                  </span>
                </div>
                
                <div className="text-center pt-4 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Fibra + Móvil + TV</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">{getTvPlanPrice().toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                  <p className="text-gray-600 text-sm mt-2">Pack completo todo incluido</p>
                </div>

                {/* Plan Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Selecciona tu plan:</label>
                  <select
                    value={selectedTvPlan}
                    onChange={(e) => setSelectedTvPlan(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white touch-manipulation"
                  >
                    {tvPlanOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} - {option.price.toFixed(2)}€
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Lines Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                  <select
                    value={selectedTvAdditionalLines}
                    onChange={(e) => {
                      setSelectedTvAdditionalLines(e.target.value);
                      if (e.target.value === '0' || e.target.value.startsWith('family-')) {
                        setTvAdditionalLinesCount(0);
                      } else {
                        setTvAdditionalLinesCount(1);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white touch-manipulation"
                  >
                    {tvAdditionalLinesOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label} {option.price > 0 ? `- ${option.price.toFixed(2)}€` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Lines Counter */}
                {selectedTvAdditionalLines !== '0' && !selectedTvAdditionalLines.startsWith('family-') && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cantidad de líneas adicionales:</label>
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTvAdditionalLinesCount(Math.max(0, tvAdditionalLinesCount - 1));
                        }}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        disabled={tvAdditionalLinesCount === 0}
                        className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-gray-600 font-bold touch-manipulation"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-medium text-lg">{tvAdditionalLinesCount}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setTvAdditionalLinesCount(tvAdditionalLinesCount + 1);
                        }}
                        onTouchStart={(e) => e.stopPropagation()}
                        onTouchEnd={(e) => e.stopPropagation()}
                        className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center font-bold touch-manipulation"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Incluye:</h4>
                  <ul className="space-y-2">
                    {getTvPlanFeatures().map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onContractPlan({
                      id: 'fibra-movil-tv-configurado',
                      name: `Fibra + Móvil + TV - ${tvPlanOptions.find(p => p.value === selectedTvPlan)?.label}${selectedTvAdditionalLines !== '0' ? ` + ${tvAdditionalLinesOptions.find(l => l.value === selectedTvAdditionalLines)?.label}` : ''}`,
                      price: getTvPlanPrice(),
                      features: getTvPlanFeatures()
                    });
                  }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg text-lg"
                >
                  Lo quiero
                </button>
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