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
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Leaf className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Energía Verde
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Ahorra en tu factura de la luz con energía 100% renovable y tarifas transparentes
          </p>
          
          {/* Ahorro destacado */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                <p className="text-green-400 text-sm font-medium">¡Ahorra hasta un 30%!</p>
                <p className="text-green-300 text-xs">En tu factura de la luz</p>
              </div>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <TrendingDown className="w-8 h-8 text-green-400" />
                <div className="text-4xl font-bold text-green-400">30%</div>
              </div>
              <div className="text-white/70 text-lg mb-6">menos en tu factura</div>
              <button
                onClick={handleRequestInfo}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Solicitar información
              </button>
            </div>
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
            <h3 className="text-white font-semibold mb-2">Ahorro garantizado</h3>
            <p className="text-white/70 text-sm">Hasta 30% menos en tu factura</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Sin sorpresas</h3>
            <p className="text-white/70 text-sm">Tarifas transparentes</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h3 className="text-white font-semibold mb-2">Máxima flexibilidad</h3>
            <p className="text-white/70 text-sm">Libertad total</p>
          </div>
        </div>





        {/* Beneficios incluidos */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
            Incluido en todos nuestros planes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Energía 100% renovable certificada',
              'Cambio gratuito y sin cortes',
              'Facturación transparente sin sorpresas',
              'Atención al cliente 24/7',
              'Máxima flexibilidad',
              'Factura electrónica gratuita',
              'Consejos de eficiencia energética',
              'Soporte técnico especializado'
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
            Únete a la energía del futuro
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Miles de familias ya ahorran con nuestra energía 100% renovable. Únete y empieza a reducir tu factura desde el primer día
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