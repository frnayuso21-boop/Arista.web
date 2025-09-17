import React, { useState } from 'react';
import { Zap, CheckCircle, Mail, Phone, User } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

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

  const handleScrollToParticularesWithTab = (tab: string) => {
    window.location.href = `/?tab=${tab}#particulares`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1000);
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
              Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas para revisar tu consumo y ofrecerte la mejor tarifa.
            </p>
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
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/20 rounded-full mb-6">
            <Zap className="w-10 h-10 text-yellow-300" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Arista Energía
          </h1>
          <p className="text-2xl text-white/80 mb-8" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Los mejores precios en energía eléctrica
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Comprueba tu Consumo y Solicita Información
          </h2>
          <p className="text-white/80 text-center mb-8">
            Envíanos tus datos y te ayudaremos a calcular cuánto puedes ahorrar con nuestras tarifas
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                Importe aproximado de tu factura actual (€/mes)
              </label>
              <input
                type="number"
                name="currentBill"
                value={formData.currentBill}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                placeholder="Ej: 85"
              />
            </div>

            <div>
              <label className="block text-white/90 text-sm font-medium mb-2">
                Mensaje adicional (opcional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none"
                placeholder="Cuéntanos sobre tu consumo actual o cualquier duda que tengas..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-4 px-6 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Enviando solicitud...' : 'Solicitar Comprobación de Consumo'}
            </button>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default EnergyPage;