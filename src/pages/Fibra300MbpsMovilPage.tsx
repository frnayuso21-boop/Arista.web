import React, { useState } from 'react';
import { ArrowLeft, Wifi, Smartphone, CheckCircle, Shield, Clock, Users, Star, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AristaLogo from '../components/AristaLogo';

interface Fibra300MbpsMovilPageProps {
  onBack?: () => void;
}

const Fibra300MbpsMovilPage: React.FC<Fibra300MbpsMovilPageProps> = ({ onBack }) => {
  const [selectedMovilGB, setSelectedMovilGB] = useState('40gb');
  
  const movilOptions = [
    { id: '40gb', name: '40 GB', price: 2.90, description: 'Voz ilimitada' },
    { id: '80gb', name: '80 GB', price: 7.90, description: 'Voz ilimitada' },
    { id: '120gb', name: '120 GB', price: 12.90, description: 'Voz ilimitada' },
    { id: '200gb', name: '200 GB', price: 19.90, description: 'Voz ilimitada' }
  ];
  
  const getBasePrice = () => 27.00; // Precio base fibra 300
  const getMovilPrice = () => movilOptions.find(opt => opt.id === selectedMovilGB)?.price || 2.90;
  const getTotalPrice = () => getBasePrice() + getMovilPrice();
  
  const handleContract = () => {
    // Lógica para contratar el plan
    console.log('Contratando plan Fibra 300 Mbps + Móvil', selectedMovilGB);
  };

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Lógica para scroll
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      <Header 
        activeSection="particulares" 
        onCoverageCheck={() => {}} 
        onScrollToParticularesWithTab={handleScrollToParticularesWithTab}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-white/70 mb-8">
          <button 
            onClick={onBack || (() => window.history.back())}
            className="flex items-center hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Volver
          </button>
          <span>/</span>
          <span>Particulares</span>
          <span>/</span>
          <span className="text-white">Fibra 300 Mbps + Móvil</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Wifi className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Fibra 300 Mbps + Móvil
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            La combinación perfecta de velocidad y conectividad para tu hogar
          </p>
          
          {/* Configurador de plan */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              {/* Selector de GB móviles */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Datos móviles incluidos:</h3>
                <div className="relative">
                  <select 
                    value={selectedMovilGB}
                    onChange={(e) => setSelectedMovilGB(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {movilOptions.map(option => (
                      <option key={option.id} value={option.id} className="bg-gray-800 text-white">
                        {option.name} - {option.description}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" />
                </div>
              </div>
              
              <div className="text-5xl font-bold text-blue-400 mb-2">{getTotalPrice().toFixed(2)}€</div>
              <div className="text-white/70 text-lg mb-4">/mes</div>
              <div className="text-sm text-white/60 mb-4">
                Fibra 300 Mbps: {getBasePrice()}€ + Móvil {movilOptions.find(opt => opt.id === selectedMovilGB)?.name}: {getMovilPrice()}€
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-6">
                <p className="text-green-400 text-sm font-medium">¡Oferta especial!</p>
                <p className="text-green-300 text-xs">Sin coste de instalación</p>
              </div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contratar ahora
              </button>
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Wifi className="w-6 h-6 text-blue-400 mr-3" />
              Fibra Óptica
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Velocidad</span>
                <span className="text-white font-semibold">300 Mbps simétrica</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Tecnología</span>
                <span className="text-white font-semibold">Fibra óptica FTTH</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Router</span>
                <span className="text-white font-semibold">WiFi 6 incluido</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Instalación</span>
                <span className="text-green-400 font-semibold">Gratuita</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Smartphone className="w-6 h-6 text-blue-400 mr-3" />
              Línea Móvil
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Datos</span>
                <span className="text-white font-semibold">{movilOptions.find(opt => opt.id === selectedMovilGB)?.name || '40 GB'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Llamadas</span>
                <span className="text-white font-semibold">Ilimitadas</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Red</span>
                <span className="text-white font-semibold">5G incluido</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Portabilidad</span>
                <span className="text-green-400 font-semibold">Gratuita</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Todo incluido en tu plan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '300 Mbps simétrica de fibra óptica',
              'Llamadas ilimitadas a fijos y móviles',
              '40 GB de datos móviles 5G',
              'Línea fija con número incluido',
              'Router WiFi 6 de última generación',
              'Instalación y configuración gratuita',
              'Soporte técnico 24/7',
              'Sin permanencia',
              'Portabilidad gratuita'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Instalación</h3>
            <p className="text-white/70 text-sm">Gratuita y en 24-48h</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Cobertura</h3>
            <p className="text-white/70 text-sm">Nacional 5G y fibra</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Soporte</h3>
            <p className="text-white/70 text-sm">24/7 especializado</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            ¿Listo para disfrutar de la mejor conectividad?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Únete a miles de clientes satisfechos que ya disfrutan de la velocidad y calidad de Arista Móvil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContract}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contratar ahora
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20">
              Más información
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fibra300MbpsMovilPage;