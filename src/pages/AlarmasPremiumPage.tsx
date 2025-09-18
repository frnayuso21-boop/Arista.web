import React from 'react';
import { ArrowLeft, Shield, Camera, Smartphone, CheckCircle, Clock, Users, Star, DoorOpen, Wifi, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AlarmasPremiumPageProps {
  onBack?: () => void;
}

const AlarmasPremiumPage: React.FC<AlarmasPremiumPageProps> = ({ onBack }) => {
  const handleContract = () => {
    console.log('Contratando plan Alarmas Premium');
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
        activeSection="seguridad" 
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
          <span>Seguridad</span>
          <span>/</span>
          <span className="text-white">Alarma Premium</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Alarma Premium
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Máxima protección con tecnología de vanguardia y servicios premium
          </p>
          
          {/* Precio destacado */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-3 mb-4">
                <p className="text-purple-400 text-sm font-medium">¡Plan Premium!</p>
                <p className="text-purple-300 text-xs">Protección completa</p>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-2xl font-bold text-white/60 line-through">65€</div>
                <div className="text-5xl font-bold text-purple-400">49€</div>
              </div>
              <div className="text-white/70 text-lg mb-6">/mes</div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contratar ahora
              </button>
            </div>
          </div>
        </div>

        {/* Equipamiento incluido */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Equipamiento Premium incluido
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">2 Detectores con cámara</h3>
              <p className="text-white/70 text-sm">Detectores de movimiento con cámara HD</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">3 Detectores adicionales</h3>
              <p className="text-white/70 text-sm">Sensores de movimiento extra</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <DoorOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">4 Contactos magnéticos</h3>
              <p className="text-white/70 text-sm">Para puertas y ventanas con SIM</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">2 Mandos a distancia</h3>
              <p className="text-white/70 text-sm">Control remoto múltiple</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Camera className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Cámara exterior IP</h3>
              <p className="text-white/70 text-sm">Vigilancia perimetral HD</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Wifi className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Panel táctil WiFi</h3>
              <p className="text-white/70 text-sm">Control avanzado con pantalla</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Sirena exterior</h3>
              <p className="text-white/70 text-sm">Disuasión visual y sonora</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">App Premium</h3>
              <p className="text-white/70 text-sm">Funciones avanzadas incluidas</p>
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-purple-400 mr-3" />
              Protección Premium 24/7
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Monitorización</span>
                <span className="text-white font-semibold">24/7 Premium</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Respuesta</span>
                <span className="text-white font-semibold">Prioritaria</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Conexión</span>
                <span className="text-white font-semibold">Triple (WiFi + 4G + Ethernet)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Instalación</span>
                <span className="text-green-400 font-semibold">Premium incluida</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Mantenimiento</span>
                <span className="text-green-400 font-semibold">Anual gratuito</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Camera className="w-6 h-6 text-purple-400 mr-3" />
              Videovigilancia avanzada
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Calidad</span>
                <span className="text-white font-semibold">Full HD 1080p</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Visión nocturna</span>
                <span className="text-white font-semibold">Infrarroja avanzada</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Grabación</span>
                <span className="text-white font-semibold">Nube ilimitada</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Historial</span>
                <span className="text-white font-semibold">90 días</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Streaming</span>
                <span className="text-white font-semibold">Tiempo real</span>
              </div>
            </div>
          </div>
        </div>

        {/* Servicios Premium exclusivos */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Star className="w-6 h-6 text-purple-400 mr-3" />
            Servicios Premium exclusivos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Gestor personal</h3>
              <p className="text-white/70 text-sm">Atención personalizada dedicada</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Respuesta prioritaria</h3>
              <p className="text-white/70 text-sm">Intervención inmediata garantizada</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Camera className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Verificación por vídeo</h3>
              <p className="text-white/70 text-sm">Confirmación visual de alarmas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Smartphone className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">App Premium</h3>
              <p className="text-white/70 text-sm">Funciones avanzadas exclusivas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Mantenimiento premium</h3>
              <p className="text-white/70 text-sm">Revisiones anuales incluidas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Actualizaciones automáticas</h3>
              <p className="text-white/70 text-sm">Siempre la última tecnología</p>
            </div>
          </div>
        </div>

        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Todo incluido en tu plan Premium
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Instalación y configuración premium gratuita',
              'Monitorización 24/7 con respuesta prioritaria',
              'App móvil Premium con todas las funciones',
              'Notificaciones instantáneas y verificación por vídeo',
              'Grabación ilimitada en la nube (90 días)',
              'Soporte técnico premium 24/7',
              'Gestor personal dedicado',
              'Mantenimiento anual incluido',
              'Actualizaciones automáticas de firmware',
              'Garantía extendida de 3 años',
              'Máxima flexibilidad',
              'Descuentos en servicios adicionales'
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
            <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Instalación Premium</h3>
            <p className="text-white/70 text-sm">Gratuita en 24h</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Garantía extendida</h3>
            <p className="text-white/70 text-sm">3 años en todos los equipos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Soporte Premium</h3>
            <p className="text-white/70 text-sm">Gestor personal 24/7</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experimenta la máxima protección
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Únete a la élite de la seguridad doméstica con nuestro plan Premium. Protección sin compromisos para tu familia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContract}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contratar Premium
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20">
              Comparar planes
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AlarmasPremiumPage;