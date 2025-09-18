import React from 'react';
import { ArrowLeft, Shield, Camera, Smartphone, CheckCircle, Clock, Users, Star, DoorOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AlarmasBasicPageProps {
  onBack?: () => void;
}

const AlarmasBasicPage: React.FC<AlarmasBasicPageProps> = ({ onBack }) => {
  const handleContract = () => {
    console.log('Contratando plan Alarmas Basic');
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
          <span className="text-white">Alarma Basic</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Alarma Basic
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Protección esencial para tu hogar con tecnología avanzada
          </p>
          
          {/* Precio destacado */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 mb-4">
                <p className="text-red-400 text-sm font-medium">¡Oferta especial!</p>
                <p className="text-red-300 text-xs">Los primeros 4 meses</p>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-2xl font-bold text-white/60 line-through">35€</div>
                <div className="text-5xl font-bold text-blue-400">19€</div>
              </div>
              <div className="text-white/70 text-lg mb-6">/mes</div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contratar ahora
              </button>
            </div>
          </div>
        </div>

        {/* Equipamiento incluido */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Equipamiento incluido
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Detector con cámara</h3>
              <p className="text-white/70 text-sm">1 detector de movimiento con cámara integrada</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Detector de movimiento</h3>
              <p className="text-white/70 text-sm">Sensor de movimiento adicional</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <DoorOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Contacto magnético</h3>
              <p className="text-white/70 text-sm">Para puertas y ventanas con SIM</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Mando a distancia</h3>
              <p className="text-white/70 text-sm">Control remoto para activar/desactivar</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">App móvil</h3>
              <p className="text-white/70 text-sm">Control total desde tu smartphone</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Panel táctil</h3>
              <p className="text-white/70 text-sm">Panel de control de última generación</p>
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-blue-400 mr-3" />
              Protección 24/7
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Monitorización</span>
                <span className="text-white font-semibold">24 horas</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Respuesta</span>
                <span className="text-white font-semibold">Inmediata</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Conexión</span>
                <span className="text-white font-semibold">Dual (WiFi + 4G)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Instalación</span>
                <span className="text-green-400 font-semibold">Incluida</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Smartphone className="w-6 h-6 text-blue-400 mr-3" />
              Control inteligente
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">App móvil</span>
                <span className="text-white font-semibold">iOS y Android</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Notificaciones</span>
                <span className="text-white font-semibold">Tiempo real</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Grabaciones</span>
                <span className="text-white font-semibold">En la nube</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Historial</span>
                <span className="text-white font-semibold">30 días</span>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Todo incluido en tu plan Basic
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Instalación y configuración gratuita',
              'Monitorización 24/7 por profesionales',
              'App móvil con control total',
              'Notificaciones instantáneas',
              'Grabación en la nube (30 días)',
              'Soporte técnico incluido',
              'Máxima flexibilidad',
              'Mantenimiento incluido'
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
            <p className="text-white/70 text-sm">Gratuita en 24-48h</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Garantía</h3>
            <p className="text-white/70 text-sm">2 años en equipos</p>
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
            Protege tu hogar desde hoy
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Únete a miles de familias que ya confían en nuestros sistemas de seguridad para proteger lo que más importa
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

export default AlarmasBasicPage;