import React, { useState } from 'react';
import { Shield, Camera, Smartphone, Tablet, Radio, DoorOpen } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

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

  const packages: SecurityPackage[] = [
    {
      id: 'basic',
      name: 'BASIC',
      price: 35,
      promoPrice: 19,
      icon: <Shield className="w-8 h-8" />,
      features: [
        '1 Detector de movimiento con cámara',
        'Detector de movimiento',
        'Contacto magnético SIM',
        '1 Mando a distancia',
        'Aplicación móvil',
        'Panel táctil de última generación'
      ]
    },
    {
      id: 'standard',
      name: 'STANDARD',
      price: 37,
      promoPrice: 19,
      icon: <Camera className="w-8 h-8" />,
      features: [
        '3 Detectores de movimiento con cámara',
        'Detector de movimiento',
        'Contacto magnético SIM',
        '1 Mando a distancia',
        'Aplicación móvil',
        'Panel táctil de última generación'
      ]
    },
    {
      id: 'advance',
      name: 'ADVANCE',
      price: 40,
      promoPrice: 19,
      icon: <Tablet className="w-8 h-8" />,
      features: [
        '3 Detectores de movimiento con cámara',
        'Detector de movimiento',
        'Contacto magnético SIM',
        '1 Mando a distancia',
        'Aplicación móvil',
        'Panel táctil de última generación'
      ]
    }
  ];

  const installationCost = customerType === 'business' ? 99 : 0;

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
                  <strong>Importante:</strong> Para empresas y profesionales se aplica un cargo adicional de instalación de 99€
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white/15 ${
                selectedPackage === pkg.id ? 'ring-2 ring-white/50 transform scale-105 bg-white/20' : ''
              }`}
            >
              <div className="p-8">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <div className="text-blue-600">{pkg.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-white">
                      {pkg.price}€<span className="text-lg font-normal text-white/70">/mes</span>
                    </div>
                    <div className="text-sm text-green-300 font-medium">
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
                      <span className="text-white/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Installation Cost */}
                {customerType === 'business' && (
                  <div className="bg-white/10 rounded-lg p-3 mb-6 border border-white/20">
                    <div className="text-sm text-white/80">
                      Instalación: <span className="font-semibold text-white">99€</span>
                    </div>
                  </div>
                )}

                {/* Select Button */}
                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    selectedPackage === pkg.id
                      ? 'bg-white/30 text-white border border-white/50'
                      : 'bg-white/10 text-white/90 hover:bg-white/20 border border-white/30'
                  }`}
                >
                  {selectedPackage === pkg.id ? 'Seleccionado' : 'Seleccionar'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-white/80 mb-6">
            Nuestros expertos en seguridad están aquí para ayudarte a elegir el mejor sistema para tus necesidades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/30 transition-colors border border-white/30">
              Contactar Ahora
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
              Solicitar Presupuesto
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SecurityPage;