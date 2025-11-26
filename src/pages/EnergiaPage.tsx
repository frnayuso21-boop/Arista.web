import React, { useState } from 'react';
import { ArrowLeft, Zap, CheckCircle, Clock, Users, Star, Leaf, TrendingDown, Shield, Calculator } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

interface EnergiaPageProps {
  onBack?: () => void;
}

const EnergiaPage: React.FC<EnergiaPageProps> = ({ onBack }) => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleRequestInfo = () => {
    setShowContactForm(true);
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
        activeSection="energia" 
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
          <span className="text-white">Energía</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* Endesa Logo */}
          <div className="relative w-56 h-28 mx-auto mb-8 flex items-center justify-center">
            <img
              src="https://commons.wikimedia.org/wiki/Special:FilePath/Endesa.svg"
              alt="Endesa"
              className="w-full h-full object-contain"
              loading="eager"
              decoding="async"
            />
            
            {/* Badge de estado premium */}
            <div className="absolute -top-1 -right-1 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs px-3 py-1 rounded-full font-bold shadow-xl border border-green-300/50">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>OFICIAL</span>
              </span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Canal Oficial Endesa
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Somos el canal oficial de comercializadora de servicios de Endesa. Energía 100% renovable con las mejores tarifas del mercado
          </p>
          
          {/* Ahorro destacado */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-400 text-sm font-medium">Sin permanencia - 100% renovable</p>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-8 h-8 text-green-400" />
                <div className="text-4xl font-bold text-green-400">0.14€</div>
              </div>
              <div className="text-white/70 text-lg">el kWh</div>
              <div className="text-white/80 text-sm mt-3">Promo Tu Casa: 0,079 €/kWh en tus 50 horas de mayor consumo cada mes.</div>
              <button
                onClick={handleRequestInfo}
                className="mt-6 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Solicitar información
              </button>
            </div>
          </div>
        </div>

        {/* Promociones especiales */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 text-center">
            <div className="w-16 h-16 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-400">100€</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Descuento en Electricidad</h3>
            <p className="text-white/80 text-xs mt-2">Descuento en tus facturas - Programa PARA TI</p>
          </div>
          <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-teal-400/30 text-center">
            <div className="w-16 h-16 bg-teal-500/20 border-2 border-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-teal-400">60€</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Descuento en Gas</h3>
            <p className="text-white/80 text-xs mt-2">Descuento en tus facturas - Programa PARA TI</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 text-center">
            <div className="w-16 h-16 bg-blue-500/20 border-2 border-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-400">50€</span>
            </div>
            <h3 className="text-white font-semibold mb-2">Regalo de Bienvenida</h3>
            <p className="text-white/70 text-sm">Descuento adicional por contratar</p>
          </div>
        </div>

        {/* Ventajas principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Leaf className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">100% Renovable</h3>
            <p className="text-white/70 text-sm">Energía limpia certificada</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <TrendingDown className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Sin permanencia</h3>
            <p className="text-white/70 text-sm">Contratación flexible</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Canal oficial</h3>
            <p className="text-white/70 text-sm">Comercializadora Endesa</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Máxima flexibilidad</h3>
            <p className="text-white/70 text-sm">Sin compromisos</p>
          </div>
        </div>





        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Ventajas de contratar con nosotros
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Precio fijo 0.14€/kWh sin permanencia',
              'Energía 100% renovable certificada',
              '100€ de descuento en electricidad',
              '60€ de descuento en gas',
              '50€ de regalo de bienvenida',
              'Cambio gratuito y sin cortes',
              'Atención al cliente 24/7',
              'Facturación transparente sin sorpresas'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proceso de cambio */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Cambio fácil en 3 pasos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Contrata online</h3>
              <p className="text-white/70 text-sm">Elige tu tarifa y completa el proceso en 5 minutos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Nos encargamos</h3>
              <p className="text-white/70 text-sm">Gestionamos todo el cambio sin cortes de suministro</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Empieza a ahorrar</h3>
              <p className="text-white/70 text-sm">Recibe tu primera factura con el ahorro aplicado</p>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Clock className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Cambio rápido</h3>
            <p className="text-white/70 text-sm">En 15 días hábiles</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Sin cortes</h3>
            <p className="text-white/70 text-sm">Suministro garantizado</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">Soporte</h3>
            <p className="text-white/70 text-sm">Atención 24/7</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ahorra con el canal oficial Endesa
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Precio fijo 0.14€/kWh sin permanencia. 100€ de descuento en electricidad y 60€ de descuento en gas, más 50€ de regalo de bienvenida. Energía 100% renovable certificada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRequestInfo}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar información
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20">
              Comparar tarifas
            </button>
          </div>
        </div>
      </div>

      <Footer />
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)}
        selectedPlan={{
          id: 'energia-verde',
          name: 'Energía Verde',
          price: 0,
          features: [
            'Energía 100% renovable certificada',
            'Ahorro hasta 30% en tu factura',
            'Cambio gratuito y sin cortes',
            'Facturación transparente sin sorpresas',
            'Atención al cliente 24/7',
            'Máxima flexibilidad'
          ]
        }}
      />
    </div>
  );
};

export default EnergiaPage;