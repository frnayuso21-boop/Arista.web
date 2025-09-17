import React from 'react';
import { ArrowLeft, Smartphone, CheckCircle, Clock, Users, Star, Wifi, Phone, MessageSquare, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MovilESIMPageProps {
  onBack?: () => void;
}

const MovilESIMPage: React.FC<MovilESIMPageProps> = ({ onBack }) => {
  const handleContract = () => {
    console.log('Contratando plan Móvil eSIM');
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
          <span className="text-white">Móvil eSIM</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Móvil eSIM
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            La tecnología más avanzada con eSIM. Activación instantánea y máxima flexibilidad
          </p>
          
          {/* Precio destacado */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-3 mb-4">
                <p className="text-cyan-400 text-sm font-medium">¡Tecnología eSIM!</p>
                <p className="text-cyan-300 text-xs">Activación instantánea</p>
              </div>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-2xl font-bold text-white/60 line-through">30€</div>
                <div className="text-5xl font-bold text-cyan-400">22€</div>
              </div>
              <div className="text-white/70 text-lg mb-6">/mes</div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Activar eSIM
              </button>
            </div>
          </div>
        </div>

        {/* Ventajas de eSIM */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Ventajas exclusivas de la tecnología eSIM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Activación instantánea</h3>
              <p className="text-white/70 text-sm">Sin esperas, activa tu línea al momento</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Sin tarjeta física</h3>
              <p className="text-white/70 text-sm">Todo integrado en tu dispositivo</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Múltiples perfiles</h3>
              <p className="text-white/70 text-sm">Gestiona varias líneas en un dispositivo</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Más seguro</h3>
              <p className="text-white/70 text-sm">Imposible de extraer o clonar</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Wifi className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Cambio remoto</h3>
              <p className="text-white/70 text-sm">Cambia de operador sin visitas</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 text-center">
              <Phone className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Ecológico</h3>
              <p className="text-white/70 text-sm">Sin plásticos ni envíos físicos</p>
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Smartphone className="w-6 h-6 text-cyan-400 mr-3" />
              Plan de datos eSIM
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Datos móviles</span>
                <span className="text-white font-semibold">30 GB</span>
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
                <span className="text-white/80">Activación</span>
                <span className="text-cyan-400 font-semibold">Instantánea</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Roaming UE</span>
                <span className="text-green-400 font-semibold">Incluido</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Phone className="w-6 h-6 text-cyan-400 mr-3" />
              Comunicación completa
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
                <span className="text-green-400 font-semibold">Visual incluido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de activación */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Activación en 3 pasos simples
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Contrata online</h3>
              <p className="text-white/70 text-sm">Completa tu pedido en menos de 5 minutos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Recibe el código QR</h3>
              <p className="text-white/70 text-sm">Te enviamos el código por email al instante</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Escanea y activa</h3>
              <p className="text-white/70 text-sm">Escanea el QR y tu línea estará activa</p>
            </div>
          </div>
        </div>

        {/* Compatibilidad */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Dispositivos compatibles con eSIM
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <h3 className="text-white font-semibold mb-2">iPhone</h3>
              <p className="text-white/70 text-sm">iPhone XS y posteriores</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <h3 className="text-white font-semibold mb-2">Samsung Galaxy</h3>
              <p className="text-white/70 text-sm">S20 y posteriores</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <h3 className="text-white font-semibold mb-2">Google Pixel</h3>
              <p className="text-white/70 text-sm">Pixel 3 y posteriores</p>
            </div>
            <div className="bg-white/5 rounded-xl p-4 text-center">
              <h3 className="text-white font-semibold mb-2">Otros</h3>
              <p className="text-white/70 text-sm">Consulta compatibilidad</p>
            </div>
          </div>
        </div>

        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Todo incluido en tu plan eSIM
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '30 GB de datos en red 5G/4G',
              'Llamadas ilimitadas a fijos y móviles',
              'SMS ilimitados en España',
              'Activación instantánea por QR',
              'Roaming gratuito en Unión Europea',
              '1000 minutos de llamadas en UE',
              '1000 SMS en Unión Europea',
              'WiFi Calling incluido',
              'Hotspot móvil sin restricciones',
              'App Mi Arista con gestión eSIM',
              'Buzón de voz visual',
              'Sin permanencia ni penalizaciones',
              'Cambio de operador remoto',
              'Múltiples perfiles eSIM',
              'Máxima seguridad integrada',
              'Soporte técnico especializado en eSIM'
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
            <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Activación</h3>
            <p className="text-white/70 text-sm">Instantánea por QR</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Smartphone className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Portabilidad</h3>
            <p className="text-white/70 text-sm">Remota y gratuita</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Soporte eSIM</h3>
            <p className="text-white/70 text-sm">Especializado 24/7</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Únete al futuro con eSIM
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Experimenta la tecnología más avanzada en telefonía móvil. Activación instantánea, máxima seguridad y total flexibilidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContract}
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Activar eSIM ahora
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20">
              Verificar compatibilidad
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovilESIMPage;