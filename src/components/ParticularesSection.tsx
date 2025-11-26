import React, { useState } from 'react';
import { Wifi, Smartphone, Tv, CheckCircle } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<string>('fibra');
  
  // Estados para los selectores de móvil
  const [selectedJuntosData, setSelectedJuntosData] = useState('40');
  const [selectedCompartidosData, setSelectedCompartidosData] = useState('60');
  const [selectedEsimPlan, setSelectedEsimPlan] = useState('15');
  
  // Estados para los selectores de fibra+móvil+tv
  const [selectedData300, setSelectedData300] = useState('40');
  const [selectedData600, setSelectedData600] = useState('75');
  const [selectedData1000, setSelectedData1000] = useState('100');
  const [additionalLines300, setAdditionalLines300] = useState(0);
  const [additionalLines600, setAdditionalLines600] = useState(0);
  const [additionalLines1000, setAdditionalLines1000] = useState(0);
  const [fm300Data, setFm300Data] = useState('40');
  const [fm600Data, setFm600Data] = useState('80');
  const [fm1000Data, setFm1000Data] = useState('80');
  const [fmAddLines300, setFmAddLines300] = useState(0);
  const [fmAddLineType300, setFmAddLineType300] = useState<'40' | '80'>('40');
  const [fmAddLines600, setFmAddLines600] = useState(0);
  const [fmAddLineType600, setFmAddLineType600] = useState<'40' | '80'>('40');
  const [fmAddLines1000, setFmAddLines1000] = useState(0);
  const [fmAddLineType1000, setFmAddLineType1000] = useState<'40' | '80'>('40');

  // Funciones para manejar la contratación
  const handleContractPlan = (plan: Plan) => {
    onContractPlan(plan);
  };

  const handleViewPlanDetail = (_plan: Plan) => {
    onViewPlanDetail(_plan);
  };

  const tabs = [
    { id: 'fibra', name: 'Fibra', mobileLabel: 'Fibra', icon: Wifi },
    { id: 'fibra-movil', name: 'Fibra + Móvil', mobileLabel: 'Fibra+Móvil', icon: Wifi },
    { id: 'movil', name: 'Móvil', mobileLabel: 'Móvil', icon: Smartphone },
    { id: 'tv', name: 'TV', mobileLabel: 'TV', icon: Tv },
    { id: 'fibra-movil-tv', name: 'Fibra + Móvil + TV', mobileLabel: 'Fibra+Móvil+TV', icon: Tv }
  ];

  return (
    <section 
      id="particulares"
      className="relative py-20 overflow-hidden"
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
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.name}</span>
                  <span className="sm:hidden">{tab.mobileLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </div>



        <div className="max-w-6xl mx-auto">
          {activeTab === 'fibra' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300" data-plan-id="fibra600-40gb-m">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 300 Mbps</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">26.99€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    300 Mbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Router WiFi 6 incluido
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instalación gratuita
                  </li>
                </ul>
                <button 
                  onClick={() => handleContractPlan({
                    id: 'fibra-300',
                    name: 'Fibra 300 Mbps',
                    price: 26.99,
                    features: ['300 Mbps simétrica','Router WiFi 6 incluido','Instalación gratuita']
                  })}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-purple-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 600 Mbps</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">29.89€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                  <div className="mt-2">
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
                      Recomendado
                    </span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    600 Mbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Router WiFi 6 Pro incluido
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instalación gratuita
                  </li>
                </ul>
                <button 
                  onClick={() => handleContractPlan({
                    id: 'fibra-600',
                    name: 'Fibra 600 Mbps',
                    price: 29.89,
                    features: ['600 Mbps simétrica','Router WiFi 6 Pro incluido','Instalación gratuita']
                  })}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-emerald-300" data-plan-id="fibra1000-40gb-m">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 1 Gbps</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">32.99€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 Gbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Router WiFi 6 Pro incluido
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instalación gratuita
                  </li>
                </ul>
                <button 
                  onClick={() => handleContractPlan({
                    id: 'fibra-1000',
                    name: 'Fibra 1 Gbps',
                    price: 32.99,
                    features: ['1 Gbps simétrica','Router WiFi 6 Pro incluido','Instalación gratuita']
                  })}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'fibra-movil' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 300 Mbps + Móvil 40GB</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{(29.89 + fmAddLines300 * (fmAddLineType300 === '40' ? 5.70 : 7.90)).toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
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
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                  <select 
                    value={fmAddLines300}
                    onChange={(e) => setFmAddLines300(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="0">Sin líneas adicionales</option>
                    <option value="1">1 línea adicional</option>
                    <option value="2">2 líneas adicionales</option>
                    <option value="3">3 líneas adicionales</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos por línea adicional:</label>
                  <select 
                    value={fmAddLineType300}
                    onChange={(e) => setFmAddLineType300(e.target.value as '40' | '80')}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="40">40 GB (+5,70€/línea)</option>
                    <option value="80">80 GB (+7,90€/línea)</option>
                  </select>
                </div>
                <button 
                  onClick={() => handleContractPlan({
                    id: `fibra-movil-300-40gb-${fmAddLines300}-${fmAddLineType300}`,
                    name: `Fibra 300 Mbps + Móvil 40GB${fmAddLines300 > 0 ? ` + ${fmAddLines300} línea${fmAddLines300 > 1 ? 's' : ''} adicional${fmAddLines300 > 1 ? 'es' : ''}` : ''}`,
                    price: 29.89 + fmAddLines300 * (fmAddLineType300 === '40' ? 5.70 : 7.90),
                    features: [
                      '300 Mbps simétrica',
                      '40 GB móvil',
                      'Llamadas ilimitadas',
                      'Router WiFi 6 incluido',
                      ...(fmAddLines300 > 0 ? [`${fmAddLines300} línea${fmAddLines300 > 1 ? 's' : ''} adicional${fmAddLines300 > 1 ? 'es' : ''} ${fmAddLineType300 === '40' ? '40 GB' : '80 GB'}`] : [])
                    ]
                  })}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-purple-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 600 Mbps + Móvil {fm600Data === '40' ? '40GB' : fm600Data === '80' ? '80GB' : fm600Data === '120' ? '120 GB' : '200 GB'}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">{(((fm600Data === '40' ? 32.89 : fm600Data === '80' ? 34.89 : fm600Data === '120' ? 40.89 : 45.89)) + fmAddLines600 * (fmAddLineType600 === '40' ? 5.70 : 7.90)).toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    600 Mbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {fm600Data === '40' ? '40 GB móvil' : fm600Data === '80' ? '80 GB móvil' : fm600Data === '120' ? '120 GB móvil' : '200 GB móvil'}
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
                    value={fm600Data}
                    onChange={(e) => setFm600Data(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="40">40 GB</option>
                    <option value="80">80 GB</option>
                    <option value="120">120 GB</option>
                    <option value="200">200 GB</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                  <select 
                    value={fmAddLines600}
                    onChange={(e) => setFmAddLines600(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="0">Sin líneas adicionales</option>
                    <option value="1">1 línea adicional</option>
                    <option value="2">2 líneas adicionales</option>
                    <option value="3">3 líneas adicionales</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos por línea adicional:</label>
                  <select 
                    value={fmAddLineType600}
                    onChange={(e) => setFmAddLineType600(e.target.value as '40' | '80')}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="40">40 GB (+5,70€/línea)</option>
                    <option value="80">80 GB (+7,90€/línea)</option>
                  </select>
                </div>
                <button 
                  onClick={() => handleContractPlan({
                    id: `fibra-movil-600-${fm600Data}`,
                    name: `Fibra 600 Mbps + Móvil ${fm600Data === '40' ? '40GB' : fm600Data === '80' ? '80GB' : fm600Data === '120' ? '120 GB' : '200 GB'}${fmAddLines600 > 0 ? ` + ${fmAddLines600} línea${fmAddLines600 > 1 ? 's' : ''} adicional${fmAddLines600 > 1 ? 'es' : ''}` : ''}`,
                    price: (fm600Data === '40' ? 32.89 : fm600Data === '80' ? 34.89 : fm600Data === '120' ? 40.89 : 45.89) + fmAddLines600 * (fmAddLineType600 === '40' ? 5.70 : 7.90),
                    features: [
                      '600 Mbps simétrica',
                      fm600Data === '40' ? '40 GB móvil' : fm600Data === '80' ? '80 GB móvil' : fm600Data === '120' ? '120 GB móvil' : '200 GB móvil',
                      'Llamadas ilimitadas',
                      'Router WiFi 6 Pro incluido',
                      ...(fmAddLines600 > 0 ? [`${fmAddLines600} línea${fmAddLines600 > 1 ? 's' : ''} adicional${fmAddLines600 > 1 ? 'es' : ''} ${fmAddLineType600 === '40' ? '40 GB' : '80 GB'}`] : [])
                    ]
                  })}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-emerald-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 1 Gbps + Móvil {fm1000Data === '40' ? '40GB' : fm1000Data === '80' ? '80GB' : fm1000Data === '120' ? '120 GB' : '200 GB'}</h3>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">{(((fm1000Data === '40' ? 37.89 : fm1000Data === '80' ? 39.89 : fm1000Data === '120' ? 45.89 : 50.89)) + fmAddLines1000 * (fmAddLineType1000 === '40' ? 5.70 : 7.90)).toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    1 Gbps simétrica
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {fm1000Data === '40' ? '40 GB móvil' : fm1000Data === '80' ? '80 GB móvil' : fm1000Data === '120' ? '120 GB móvil' : '200 GB móvil'}
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
                    value={fm1000Data}
                    onChange={(e) => setFm1000Data(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="40">40 GB</option>
                    <option value="80">80 GB</option>
                    <option value="120">120 GB</option>
                    <option value="200">200 GB</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                  <select 
                    value={fmAddLines1000}
                    onChange={(e) => setFmAddLines1000(parseInt(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="0">Sin líneas adicionales</option>
                    <option value="1">1 línea adicional</option>
                    <option value="2">2 líneas adicionales</option>
                    <option value="3">3 líneas adicionales</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Datos por línea adicional:</label>
                  <select 
                    value={fmAddLineType1000}
                    onChange={(e) => setFmAddLineType1000(e.target.value as '40' | '80')}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="40">40 GB (+5,70€/línea)</option>
                    <option value="80">80 GB (+7,90€/línea)</option>
                  </select>
                </div>
                <button 
                  onClick={() => handleContractPlan({
                    id: `fibra-movil-1000-${fm1000Data}`,
                    name: `Fibra 1 Gbps + Móvil ${fm1000Data === '40' ? '40GB' : fm1000Data === '80' ? '80GB' : fm1000Data === '120' ? '120 GB' : '200 GB'}${fmAddLines1000 > 0 ? ` + ${fmAddLines1000} línea${fmAddLines1000 > 1 ? 's' : ''} adicional${fmAddLines1000 > 1 ? 'es' : ''}` : ''}`,
                    price: (fm1000Data === '40' ? 37.89 : fm1000Data === '80' ? 39.89 : fm1000Data === '120' ? 45.89 : 50.89) + fmAddLines1000 * (fmAddLineType1000 === '40' ? 5.70 : 7.90),
                    features: [
                      '1 Gbps simétrica',
                      fm1000Data === '40' ? '40 GB móvil' : fm1000Data === '80' ? '80 GB móvil' : fm1000Data === '120' ? '120 GB móvil' : '200 GB móvil',
                      'Llamadas ilimitadas',
                      'Router WiFi 6 Pro incluido',
                      ...(fmAddLines1000 > 0 ? [`${fmAddLines1000} línea${fmAddLines1000 > 1 ? 's' : ''} adicional${fmAddLines1000 > 1 ? 'es' : ''} ${fmAddLineType1000 === '40' ? '40 GB' : '80 GB'}`] : [])
                    ]
                  })}
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          )}

          {activeTab === 'movil' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Plan Juntos */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-blue-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Juntos</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-1">{(selectedJuntosData === '40' ? 7.90 : selectedJuntosData === '60' ? 9.90 : selectedJuntosData === '100' ? 10.90 : 14.90).toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {selectedJuntosData === '40' ? '40 GB de datos' : selectedJuntosData === '60' ? '60 GB de datos' : selectedJuntosData === '100' ? '100 GB de datos' : '200 GB de datos'}
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
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="40">40 GB</option>
                      <option value="60">60 GB</option>
                      <option value="100">100 GB</option>
                      <option value="200">200 GB</option>
                    </select>
                  </div>
                  <button 
                    onClick={() => handleContractPlan({
                      id: `juntos-${selectedJuntosData}`,
                      name: `Juntos ${selectedJuntosData === '40' ? '40 GB' : selectedJuntosData === '60' ? '60 GB' : selectedJuntosData === '100' ? '100 GB' : '200 GB'}`,
                      price: selectedJuntosData === '40' ? 7.90 : selectedJuntosData === '60' ? 9.90 : selectedJuntosData === '100' ? 10.90 : 14.90,
                      features: [
                        selectedJuntosData === '40' ? '40 GB' : selectedJuntosData === '60' ? '60 GB' : selectedJuntosData === '100' ? '100 GB' : '200 GB',
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

                {/* Plan Compartidos */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-purple-300">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Móvil Compartidos</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-1">{(selectedCompartidosData === '60' ? 20.90 : selectedCompartidosData === '80' ? 25.90 : selectedCompartidosData === '120' ? 21.90 : selectedCompartidosData === '160' ? 26.90 : selectedCompartidosData === '300' ? 36.90 : 35.90).toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {selectedCompartidosData === '60' ? '60 GB compartidos' : selectedCompartidosData === '80' ? '80 GB compartidos' : selectedCompartidosData === '120' ? '120 GB compartidos' : selectedCompartidosData === '160' ? '160 GB compartidos' : selectedCompartidosData === '300' ? '300 GB compartidos' : '150 GB compartidos'}
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
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="60">60 GB compartidos</option>
                      <option value="80">80 GB compartidos</option>
                      <option value="120">120 GB compartidos</option>
                      <option value="160">160 GB compartidos</option>
                      <option value="300">300 GB compartidos</option>
                      <option value="150">150 GB compartidos</option>
                    </select>
                  </div>
                  <button 
                    onClick={() => handleContractPlan({
                      id: `compartidos-${selectedCompartidosData}`,
                      name: `Móvil Compartidos ${selectedCompartidosData === '60' ? '60 GB' : selectedCompartidosData === '80' ? '80 GB' : selectedCompartidosData === '120' ? '120 GB' : selectedCompartidosData === '160' ? '160 GB' : selectedCompartidosData === '300' ? '300 GB' : '150 GB'}`,
                      price: selectedCompartidosData === '60' ? 20.90 : selectedCompartidosData === '80' ? 25.90 : selectedCompartidosData === '120' ? 21.90 : selectedCompartidosData === '160' ? 26.90 : selectedCompartidosData === '300' ? 36.90 : 35.90,
                      features: [
                        selectedCompartidosData === '60' ? '60 GB compartidos' : selectedCompartidosData === '80' ? '80 GB compartidos' : selectedCompartidosData === '120' ? '120 GB compartidos' : selectedCompartidosData === '160' ? '160 GB compartidos' : selectedCompartidosData === '300' ? '300 GB compartidos' : '150 GB compartidos',
                        'Hasta 4 líneas',
                        'Llamadas ilimitadas',
                        '5G incluido'
                      ]
                    })}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>

                {/* Plan eSIM */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-emerald-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">eSIM</h3>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{(selectedEsimPlan === '15' ? 7.95 : selectedEsimPlan === '40' ? 9.95 : selectedEsimPlan === '80' ? 11.75 : 15.75).toFixed(2)}€</div>
                  <div className="text-gray-500 text-sm">/mes</div>
                  <div className="mt-2 inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-semibold border border-yellow-300">Alta eSIM: pago único 11,75€</div>
                </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {selectedEsimPlan === '15' ? 'Arista ilimitada 15 GB' : selectedEsimPlan === '40' ? 'Arista ilimitada 40 GB' : selectedEsimPlan === '80' ? 'Arista ilimitada 80 GB' : 'Arista ilimitada y datos ilimitados'}
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Ideal para viajeros
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Activación inmediata
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Sin tarjeta física
                    </li>
                  </ul>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plan eSIM:</label>
                    <select 
                      value={selectedEsimPlan}
                      onChange={(e) => setSelectedEsimPlan(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="15">Arista ilimitada 15 GB</option>
                      <option value="40">Arista ilimitada 40 GB</option>
                      <option value="80">Arista ilimitada 80 GB</option>
                      <option value="ilimitado">Arista ilimitada y datos ilimitados</option>
                    </select>
                  </div>
                  <button 
                    onClick={() => handleContractPlan({
                      id: `esim-${selectedEsimPlan}`,
                      name: selectedEsimPlan === '15' ? 'Arista ilimitada 15 GB' : selectedEsimPlan === '40' ? 'Arista ilimitada 40 GB' : selectedEsimPlan === '80' ? 'Arista ilimitada 80 GB' : 'Arista ilimitada y datos ilimitados',
                      price: selectedEsimPlan === '15' ? 7.95 : selectedEsimPlan === '40' ? 9.95 : selectedEsimPlan === '80' ? 11.75 : 15.75,
                      features: [
                        selectedEsimPlan === '15' ? '15 GB' : selectedEsimPlan === '40' ? '40 GB' : selectedEsimPlan === '80' ? '80 GB' : 'Datos ilimitados',
                        'Llamadas ilimitadas',
                        'Activación inmediata',
                        'Sin tarjeta física'
                      ]
                    })}
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tv' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TV Básico */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-orange-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Tv className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">TV Básico</h3>
                    <div className="text-3xl font-bold text-orange-600 mb-1">15.90€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Más de 100 canales
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Canales HD incluidos
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Grabación en la nube
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Acceso multiplataforma
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleContractPlan({
                      id: 'tv-basico',
                      name: 'TV Básico',
                      price: 15.90,
                      features: ['Más de 100 canales','Canales HD incluidos','Grabación en la nube','Acceso multiplataforma']
                    })}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>

                {/* TV Premium */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-red-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Tv className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">TV Premium</h3>
                    <div className="text-3xl font-bold text-red-600 mb-1">25.90€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Más de 200 canales
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Netflix incluido
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      HBO Max incluido
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Deportes premium
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleContractPlan({
                      id: 'tv-premium',
                      name: 'TV Premium',
                      price: 25.90,
                      features: ['Más de 200 canales','Netflix incluido','HBO Max incluido','Deportes premium']
                    })}
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fibra-movil-tv' && (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                

                {/* Fibra 600 Mbps + Móvil + TV */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-purple-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 600 Mbps + Móvil + TV</h3>
                    <div className="text-3xl font-bold text-purple-600 mb-1">{(59.90 + additionalLines600 * (selectedData600 === '35' ? 5.00 : 6.00)).toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                    <div className="mt-2">
                      <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">Amazon Prime de regalo</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      600 Mbps simétrica
                    </li>
                    
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      TV premium (200+ canales)
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Llamadas ilimitadas
                    </li>
                  </ul>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Datos por línea adicional:</label>
                    <select 
                      value={selectedData600}
                      onChange={(e) => setSelectedData600(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="35">35 GB (+5€)</option>
                      <option value="75">75 GB (+6€)</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                    <select 
                      value={additionalLines600}
                      onChange={(e) => setAdditionalLines600(parseInt(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="0">Sin líneas adicionales</option>
                      <option value="1">1 línea adicional</option>
                      <option value="2">2 líneas adicionales</option>
                      <option value="3">3 líneas adicionales</option>
                    </select>
                  </div>
                  <button 
                    onClick={() => {
                      const basePrice = 59.90;
                      const additionalPrice = additionalLines600 * (selectedData600 === '35' ? 5.00 : 6.00);
                      const totalPrice = basePrice + additionalPrice;
                      
                      handleContractPlan({
                        id: `fibra-movil-tv-600-${selectedData600}-${additionalLines600}`,
                        name: `Fibra 600 Mbps + Móvil + TV${additionalLines600 > 0 ? ` + ${additionalLines600} línea${additionalLines600 > 1 ? 's' : ''} adicional${additionalLines600 > 1 ? 'es' : ''}` : ''}`,
                        price: totalPrice,
                        features: [
                          '600 Mbps simétrica',
                          'TV premium (200+ canales)',
                          'Llamadas ilimitadas',
                          'Router WiFi 6 Pro incluido',
                          'Amazon Prime de regalo',
                          ...(additionalLines600 > 0 ? [`${additionalLines600} línea${additionalLines600 > 1 ? 's' : ''} adicional${additionalLines600 > 1 ? 'es' : ''} ${selectedData600} GB`] : [])
                        ]
                      });
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Lo quiero
                  </button>
                </div>

                {/* Fibra 1 Gbps + Móvil + TV */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-emerald-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fibra 1 Gbps + Móvil + TV</h3>
                    <div className="text-3xl font-bold text-emerald-600 mb-1">{(62.00 + additionalLines1000 * (selectedData1000 === '35' ? 5.00 : 6.00)).toFixed(2)}€</div>
                    <div className="text-gray-500 text-sm">/mes</div>
                    <div className="mt-2"><span className="bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full font-medium">Amazon Prime de regalo</span></div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      1 Gbps simétrica
                    </li>
                    <li className="flex items-center text-sm text-gray-600"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Datos móviles ilimitados</li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      TV premium (200+ canales)
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Llamadas ilimitadas
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Amazon Prime de regalo
                    </li>
                  </ul>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Líneas adicionales:</label>
                    <select 
                      value={additionalLines1000}
                      onChange={(e) => setAdditionalLines1000(parseInt(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="0">Sin líneas adicionales</option>
                      <option value="1">1 línea adicional</option>
                      <option value="2">2 líneas adicionales</option>
                      <option value="3">3 líneas adicionales</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Datos por línea adicional:</label>
                    <select 
                      value={selectedData1000}
                      onChange={(e) => setSelectedData1000(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    >
                      <option value="35">35 GB (+5€)</option>
                      <option value="75">75 GB (+6€)</option>
                    </select>
                  </div>
                  
                  <button 
                    onClick={() => {
                      const basePrice = 62.00;
                      const additionalPrice = additionalLines1000 * (selectedData1000 === '35' ? 5.00 : 6.00);
                      const totalPrice = basePrice + additionalPrice;
                      handleContractPlan({
                        id: `fibra-movil-tv-1000-ilimitado-${selectedData1000}-${additionalLines1000}`,
                        name: `Fibra 1 Gbps + Móvil + TV + Amazon Prime${additionalLines1000 > 0 ? ` + ${additionalLines1000} línea${additionalLines1000 > 1 ? 's' : ''} adicional${additionalLines1000 > 1 ? 'es' : ''}` : ''}`,
                        price: totalPrice,
                        features: [
                          '1 Gbps simétrica',
                          'Datos móviles ilimitados',
                          'TV premium (200+ canales)',
                          'Llamadas ilimitadas',
                          'Router WiFi 6 Pro incluido',
                          'Amazon Prime de regalo',
                          ...(additionalLines1000 > 0 ? [`${additionalLines1000} línea${additionalLines1000 > 1 ? 's' : ''} adicional${additionalLines1000 > 1 ? 'es' : ''} ${selectedData1000} GB`] : [])
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