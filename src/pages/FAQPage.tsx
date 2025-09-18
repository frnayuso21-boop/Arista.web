import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';

const FAQPage: React.FC = () => {
  const [activeSection] = useState('faq');

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Navegar a la página principal con el tab específico
    window.location.href = `/#particulares?tab=${tab}`;
  };

  const handleCoverageCheck = () => {
    // Implementar lógica de verificación de cobertura
    console.log('Coverage check requested');
  };

  return (
    <div className="relative min-h-screen">
      <Header 
        activeSection={activeSection}
        onCoverageCheck={handleCoverageCheck}
        onScrollToParticularesWithTab={handleScrollToParticularesWithTab}
      />
      
      <main className="pt-20">
        {/* Hero Section for FAQ */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Encuentra respuestas a las dudas más comunes sobre nuestros servicios de telecomunicaciones
            </p>
          </div>
        </section>

        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;