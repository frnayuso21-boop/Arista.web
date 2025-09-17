import React, { useState } from 'react';
import { Shield, Camera, Smartphone, Tablet, Radio, DoorOpen, Phone, MessageCircle, Mail, X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './ContactForm';

interface SecurityPackage {
  id: string;
  name: string;
  price: number;
  promoPrice: number;
  features: string[];
  icon: React.ReactNode;
}

const SecurityPage: React.FC = () => {
  const [customerType, setCustomerType] = useState<'residential' | 'business'>('residential');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const packages: SecurityPackage[] = [
    {
      id: 'basic',
      name: 'BÁSICO',
      price: 35,
      promoPrice: 19,
      icon: <Shield className="w-8 h-8" />,
      features: [
        '1 detector de movimiento con cámara',
        '1 contacto magnético SIM',
        '1 mando a distancia',
        'Aplicación móvil incluida',
        '1 panel táctil de última generación para la vivienda'
      ]
    },
    {
      id: 'standard',
      name: 'STANDARD',
      price: 37,
      promoPrice: 19,
      icon: <Camera className="w-8 h-8" />,
      features: [
        '2 detectores de movimiento con cámara',
        '1 contacto magnético SIM',
        '1 mando a distancia',
        'Aplicación móvil incluida',
        '1 panel táctil de última generación para la vivienda'
      ]
    },
    {
      id: 'advance',
      name: 'ADVANCE',
      price: 40,
      promoPrice: 19,
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        '3 detectores de movimiento con cámara',
        '1 contacto magnético SIM',
        '1 mando a distancia',
        'Aplicación móvil incluida',
        '1 panel táctil de última generación para la vivienda'
      ]
    }
  ];

  const installationCost = customerType === 'business' ? 79 : 0;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Navigate to home page with tab parameter
    window.location.href = `/?tab=${tab}#particulares`;
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/34900123456?text=Hola, me interesa información sobre sistemas de seguridad', '_blank');
    setShowContactOptions(false);
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:+34900123456';
    setShowContactOptions(false);
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:info@aristamovil.com?subject=Consulta sobre sistemas de seguridad';
    setShowContactOptions(false);
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4" style={{
            textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
          }}>
            Sistemas de Seguridad
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto" style={{
            textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
          }}>
            Protege tu hogar o negocio con nuestros sistemas de seguridad avanzados
          </p>
        </div>

        {/* Customer Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 shadow-md border border-white/20">
            <button
              onClick={() => setCustomerType('residential')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                customerType === 'residential'
                  ? 'bg-white/20 text-white shadow-md border border-white/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Residencial
            </button>
            <button
              onClick={() => setCustomerType('business')}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                customerType === 'business'
                  ? 'bg-white/20 text-white shadow-md border border-white/30'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              Empresas/Profesionales
            </button>
          </div>
        </div>

        {/* Installation Notice */}
        {customerType === 'business' && (
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-100">
                  <strong>Importante:</strong> Para empresas y profesionales se aplica un cargo adicional de instalación de 79€
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                pkg.id === 'standard' ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
            >
              {/* Recommended Badge */}
              {pkg.id === 'standard' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recomendado
                  </div>
                </div>
              )}
              <div className="p-6">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <div className="text-blue-600">{pkg.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-gray-900">
                      {pkg.price}€<span className="text-lg font-normal text-gray-600">/mes</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Los primeros 4 meses: {pkg.promoPrice}€/mes
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Installation Cost */}
                {customerType === 'business' && (
                  <div className="bg-gray-100 rounded-lg p-3 mb-6 border border-gray-200">
                    <div className="text-sm text-gray-700">
                      Instalación: <span className="font-semibold text-gray-900">79€</span>
                    </div>
                  </div>
                )}

                {/* Select Button */}
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full py-3 px-4 rounded-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-700 border border-blue-600"
                >
                  Lo quiero
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-white/80 mb-6">
            Nuestros expertos en seguridad están aquí para ayudarte a elegir el mejor sistema para tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
            <div className="relative">
              <button 
                onClick={() => setShowContactOptions(!showContactOptions)}
                className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
              >
                Contactar Ahora
              </button>
              
              {/* Contact Options Dropdown */}
              {showContactOptions && (
                <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/30 min-w-[200px] z-50">
                  <div className="p-2">
                    <button
                      onClick={handleWhatsAppContact}
                      className="w-full flex items-center px-4 py-3 text-gray-800 hover:bg-green-100 rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-5 h-5 text-green-600 mr-3" />
                      WhatsApp
                    </button>
                    <button
                      onClick={handlePhoneCall}
                      className="w-full flex items-center px-4 py-3 text-gray-800 hover:bg-blue-100 rounded-lg transition-colors"
                    >
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      Llamar ahora
                    </button>
                    <button
                      onClick={handleEmailContact}
                      className="w-full flex items-center px-4 py-3 text-gray-800 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <Mail className="w-5 h-5 text-purple-600 mr-3" />
                      info@aristamovil.com
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setShowQuoteForm(true)}
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Solicitar Presupuesto
            </button>
          </div>
        </div>

        {/* Quote Form Modal */}
        {showQuoteForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Solicitar Presupuesto</h3>
                  <button
                    onClick={() => setShowQuoteForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <ContactForm 
                  isOpen={true}
                  onClose={() => setShowQuoteForm(false)}
                  selectedPlan={{
                    id: 'security-packages',
                    name: 'Paquetes de Seguridad Disponibles',
                    price: 19,
                    features: [
                      'BÁSICO: 35€/mes (promo 19€/mes los primeros 4 meses)',
                      'STANDARD: 37€/mes (promo 19€/mes los primeros 4 meses)', 
                      'ADVANCE: 40€/mes (promo 19€/mes los primeros 4 meses)',
                      'Instalación: 79€ (pago único)',
                      'Asesoramiento gratuito personalizado'
                    ]
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;