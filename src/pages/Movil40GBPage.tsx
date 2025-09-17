import React from 'react';
import { ArrowLeft, Smartphone, CheckCircle, Clock, Users, Star, Wifi, Phone, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Movil40GBPageProps {
  onBack?: () => void;
}

const Movil40GBPage: React.FC<Movil40GBPageProps> = ({ onBack }) => {
  const handleContract = () => {
    console.log('Contratando plan Móvil 40GB');
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
          <span className="text-white">Móvil 40GB</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Smartphone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Móvil 40GB
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Conectividad móvil perfecta con 40GB de datos en la mejor red 5G
          </p>
          
          {/* Precio destacado */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-400 text-sm font-medium">¡Oferta especial!</p>
                <p className="text-green-300 text-xs">Solo móvil</p>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-2xl font-bold text-white/60 line-through">25€</div>
                <div className="text-5xl font-bold text-green-400">19€</div>
              </div>
              <div className="text-white/70 text-lg mb-6">/mes</div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              <Smartphone className="w-6 h-6 text-green-400 mr-3" />
              Datos y conectividad
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Datos móviles</span>
                <span className="text-white font-semibold">40 GB</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Red</span>
                <span className="text-white font-semibold">5G + 4G</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Velocidad</span>
                <span className="text-white font-semibold">Hasta 1 Gbps</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Cobertura</span>
                <span className="text-white font-semibold">99% nacional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Roaming UE</span>
                <span className="text-green-400 font-semibold">Incluido</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Phone className="w-6 h-6 text-green-400 mr-3" />
              Llamadas y mensajes
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Llamadas nacionales</span>
                <span className="text-green-400 font-semibold">Ilimitadas</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">SMS nacionales</span>
                <span className="text-green-400 font-semibold">Ilimitados</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Llamadas UE</span>
                <span className="text-white font-semibold">1000 min</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">SMS UE</span>
                <span className="text-white font-semibold">1000 SMS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Buzón de voz</span>
                <span className="text-green-400 font-semibold">Incluido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Servicios incluidos sin coste adicional
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Wifi className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">WiFi Calling</h3>
              <p className="text-white/70 text-sm">Llamadas por WiFi incluidas</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">RCS Messaging</h3>
              <p className="text-white/70 text-sm">Mensajería avanzada</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Identificador de llamadas</h3>
              <p className="text-white/70 text-sm">Saber quién llama siempre</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Hotspot móvil</h3>
              <p className="text-white/70 text-sm">Comparte tu conexión</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Star className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">App Mi Arista</h3>
              <p className="text-white/70 text-sm">Gestión completa desde tu móvil</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Sin permanencia</h3>
              <p className="text-white/70 text-sm">Libertad total</p>
            </div>
          </div>
        </div>

        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Todo incluido en tu plan móvil
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '40 GB de datos en red 5G/4G',
              'Llamadas ilimitadas a fijos y móviles',
              'SMS ilimitados en España',
              'Roaming gratuito en Unión Europea',
              '1000 minutos de llamadas en UE',
              '1000 SMS en Unión Europea',
              'WiFi Calling incluido',
              'Hotspot móvil sin restricciones',
              'App Mi Arista con gestión completa',
              'Buzón de voz visual',
              'Identificador de llamadas',
              'Sin permanencia ni penalizaciones'
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
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Activación</h3>
            <p className="text-white/70 text-sm">Inmediata online</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Portabilidad</h3>
            <p className="text-white/70 text-sm">Gratuita y rápida</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Soporte</h3>
            <p className="text-white/70 text-sm">24/7 especializado</p>
          </div>
        </div>

        {/* Comparativa de consumo */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            ¿Qué puedes hacer con 40GB?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1600h</div>
              <p className="text-white/80">Música en streaming</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">80h</div>
              <p className="text-white/80">Vídeo en HD</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">40000</div>
              <p className="text-white/80">Fotos en redes sociales</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">800h</div>
              <p className="text-white/80">Navegación web</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Conecta sin límites con 40GB
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Disfruta de la mejor conectividad móvil con datos suficientes para todo lo que necesitas. Sin sorpresas, sin permanencia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContract}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contratar ahora
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20">
              Ver otros planes
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Movil40GBPage;