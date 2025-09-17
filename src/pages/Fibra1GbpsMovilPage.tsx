import React, { useState } from 'react';
import { ArrowLeft, Wifi, Smartphone, CheckCircle, Shield, Clock, Users, Star, Zap, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AristaLogo from '../components/AristaLogo';

interface Fibra1GbpsMovilPageProps {
  onBack?: () => void;
}

const Fibra1GbpsMovilPage: React.FC<Fibra1GbpsMovilPageProps> = ({ onBack }) => {
  const [selectedMovilGB, setSelectedMovilGB] = useState('40gb');
  
  const movilOptions = [
    { id: '40gb', name: '40 GB', price: 2.90, description: 'Voz ilimitada' },
    { id: '80gb', name: '80 GB', price: 7.90, description: 'Voz ilimitada' },
    { id: '120gb', name: '120 GB', price: 12.90, description: 'Voz ilimitada' },
    { id: '200gb', name: '200 GB', price: 19.90, description: 'Voz ilimitada' }
  ];
  
  const getBasePrice = () => 35.00; // Precio base fibra 1GB
  const getMovilPrice = () => movilOptions.find(opt => opt.id === selectedMovilGB)?.price || 2.90;
  const getTotalPrice = () => getBasePrice() + getMovilPrice();
  
  const handleContract = () => {
    // Lógica para contratar el plan
    console.log('Contratando plan Fibra 1 Gbps + Móvil', selectedMovilGB);
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
          <span className="text-white">Fibra 1 Gbps + Móvil</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Fibra 1 Gbps + Móvil
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            La máxima velocidad disponible. Perfecto para profesionales y hogares ultra-conectados
          </p>
          
          {/* Configurador de plan */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                MÁXIMA VELOCIDAD
              </div>
              
              {/* Selector de GB móviles */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">Datos móviles incluidos:</h3>
                <div className="relative">
                  <select 
                    value={selectedMovilGB}
                    onChange={(e) => setSelectedMovilGB(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
              
              <div className="text-5xl font-bold text-emerald-400 mb-2">{getTotalPrice().toFixed(2)}€</div>
              <div className="text-white/70 text-lg mb-4">/mes</div>
              <div className="text-sm text-white/60 mb-4">
                Fibra 1 Gbps: {getBasePrice()}€ + Móvil {movilOptions.find(opt => opt.id === selectedMovilGB)?.name}: {getMovilPrice()}€
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-6">
                <p className="text-green-400 text-sm font-medium">¡Plan premium con prioridad en red!</p>
                <p className="text-green-300 text-xs">Router WiFi 6E Premium incluido</p>
              </div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              <Zap className="w-6 h-6 text-emerald-400 mr-3" />
              Fibra Óptica Ultra
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Velocidad</span>
                <span className="text-white font-semibold">1000 Mbps simétrica</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Tecnología</span>
                <span className="text-white font-semibold">Fibra óptica FTTH</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Router</span>
                <span className="text-white font-semibold">WiFi 6E Premium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Prioridad</span>
                <span className="text-emerald-400 font-semibold">Red prioritaria</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Smartphone className="w-6 h-6 text-emerald-400 mr-3" />
              Línea Móvil Premium
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
                <span className="text-white font-semibold">5G Ultra</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Soporte</span>
                <span className="text-emerald-400 font-semibold">Premium 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Plan ultra premium - Todo incluido
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              '1000 Mbps simétrica de fibra óptica (1 Gbps)',
              'Llamadas ilimitadas a fijos y móviles',
              `${movilOptions.find(opt => opt.id === selectedMovilGB)?.name || '40 GB'} de datos móviles 5G`,
              'Línea fija con número incluido',
              'Router WiFi 6E Premium',
              'Instalación y configuración gratuita',
              'Soporte técnico premium 24/7',
              'Sin permanencia',
              'Descuento combo aplicado',
              'Prioridad en red',
              'Portabilidad gratuita'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ventajas del plan 1 Gbps */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            ¿Para qué necesitas 1 Gbps?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Creadores de contenido</h3>
                  <p className="text-white/80 text-sm">Subida ultrarrápida de videos 4K y streaming profesional</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Teletrabajo avanzado</h3>
                  <p className="text-white/80 text-sm">Videoconferencias 4K, transferencias masivas de archivos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Gaming competitivo</h3>
                  <p className="text-white/80 text-sm">Latencia ultra-baja y descargas instantáneas</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Familias numerosas</h3>
                  <p className="text-white/80 text-sm">Múltiples dispositivos sin pérdida de velocidad</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Smart Home avanzado</h3>
                  <p className="text-white/80 text-sm">Domótica, cámaras 4K, IoT sin limitaciones</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Futuro garantizado</h3>
                  <p className="text-white/80 text-sm">Preparado para las tecnologías del mañana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparativa de velocidades */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Comparativa de velocidades
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">Descarga película 4K (25GB)</div>
              <div className="text-3xl font-bold text-emerald-400">3 min</div>
              <div className="text-white/60 text-sm">Con 1 Gbps</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">Subida video 1 hora (10GB)</div>
              <div className="text-3xl font-bold text-emerald-400">1.5 min</div>
              <div className="text-white/60 text-sm">Con 1 Gbps</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">Backup completo (100GB)</div>
              <div className="text-3xl font-bold text-emerald-400">13 min</div>
              <div className="text-white/60 text-sm">Con 1 Gbps</div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Instalación</h3>
            <p className="text-white/70 text-sm">Prioritaria en 24h</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Garantía</h3>
            <p className="text-white/70 text-sm">99.9% uptime</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Soporte</h3>
            <p className="text-white/70 text-sm">Premium 24/7</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experimenta la velocidad del futuro
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Únete a la élite de la conectividad con 1 Gbps de velocidad pura. Sin límites, sin esperas, sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContract}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contratar plan premium
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20">
              Consultar cobertura
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Fibra1GbpsMovilPage;