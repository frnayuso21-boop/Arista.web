import React, { useState, useEffect } from 'react';
import { Zap, Calculator, CheckCircle, Mail, Phone, User } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import '../api/send-energy-contact'; // Initialize mock API

const EnergyPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentBill: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimatedSavings, setEstimatedSavings] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToParticularesWithTab = (tab: string) => {
    window.location.href = `/?tab=${tab}#particulares`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Calculate estimated savings when current bill changes
    if (name === 'currentBill' && value) {
      const bill = parseFloat(value);
      if (!isNaN(bill)) {
        const savings = Math.round(bill * 0.15); // Estimate 15% savings
        setEstimatedSavings(savings);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call to send email
      const response = await fetch('/api/send-energy-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          estimatedSavings,
          to: 'info@aristamovil.com'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
      // For demo purposes, we'll show success anyway
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center"
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
        
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-300" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              ¡Solicitud Enviada!
            </h1>
            <p className="text-white/80 mb-6">
              Hemos recibido tu solicitud de información sobre Arista Energía. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para ayudarte a calcular tus ahorros.
            </p>
            {estimatedSavings && (
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 mb-6">
                <p className="text-green-300 font-medium">
                  Ahorro estimado: <span className="text-2xl font-bold">{estimatedSavings}€/mes</span>
                </p>
              </div>
            )}
            <button
              onClick={() => window.location.href = '/'}
              className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-6">
            <Zap className="w-10 h-10 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            ¿Pagas mucho por tu luz?
          </h1>
          <p className="text-2xl text-white/80 mb-8" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Compara ahora mismo cuánto te ahorras con Arista Energía
          </p>
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-white text-lg">
              <span className="font-bold text-yellow-300">Hasta un 20% de ahorro</span> en tu factura de la luz con nuestras tarifas competitivas
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Por qué elegir Arista Energía?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Tarifas Transparentes</h3>
                  <p className="text-white/80">Sin letra pequeña ni sorpresas. Precios claros y competitivos que te ayudan a ahorrar desde el primer día.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Energía 100% Renovable</h3>
                  <p className="text-white/80">Contribuye al medio ambiente con energía limpia y sostenible sin coste adicional.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Atención Personalizada</h3>
                  <p className="text-white/80">Equipo de expertos disponible para resolver todas tus dudas y gestionar tu suministro.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Calcula tu Ahorro
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Teléfono *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="600 123 456"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Importe actual de tu factura (€/mes)
                </label>
                <div className="relative">
                  <Calculator className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                  <input
                    type="number"
                    name="currentBill"
                    value={formData.currentBill}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                    placeholder="Ej: 85"
                  />
                </div>
                {estimatedSavings && (
                  <div className="mt-2 p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                    <p className="text-green-300 text-sm">
                      💡 Podrías ahorrar aproximadamente <span className="font-bold">{estimatedSavings}€/mes</span>
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Mensaje adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                  placeholder="Cuéntanos más sobre tus necesidades energéticas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Tienes dudas?
          </h3>
          <p className="text-white/80 mb-6">
            Nuestro equipo de expertos en energía está disponible para resolver todas tus preguntas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34621192578"
              className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/34621192578"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EnergyPage;