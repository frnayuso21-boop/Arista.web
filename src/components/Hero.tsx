import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  
  const scrollToParticulares = () => {
    const element = document.getElementById('particulares');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100dvh', // Dynamic viewport height for mobile
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `,
        paddingTop: 'env(safe-area-inset-top)'
      }}
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          <div className="max-w-4xl mx-auto pt-16 md:pt-0">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-8 md:mb-12 leading-relaxed px-4" style={{
              textShadow: '0 0 4px rgba(255, 255, 255, 0.4), 0 0 8px rgba(255, 255, 255, 0.2)'
            }}>
               Seguridad, Conexión, Tranquilidad.
             </h1>
            
            <p className="text-base md:text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto font-light px-4" style={{
              textShadow: '0 0 3px rgba(255, 255, 255, 0.35), 0 0 6px rgba(255, 255, 255, 0.15)'
            }}>
               Solo para los que entienden.
             </p>

            {/* CTA minimalista */}
            <div className="mb-12 md:mb-16">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                ¡Hasta 5 meses al 50% de descuento!
              </button>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
               <button
                 onClick={scrollToParticulares}
                 className="text-white/70 hover:text-white transition-colors duration-300 touch-manipulation p-2"
                 aria-label="Scroll to content"
               >
                 <ChevronDown className="w-6 h-6" />
               </button>
             </div>

            {/* Mobile scroll indicator */}
             <div className="md:hidden mt-8">
               <button
                 onClick={scrollToParticulares}
                 className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30 touch-manipulation"
               >
                 Ver Ofertas
               </button>
             </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={showContactForm} 
        onClose={() => setShowContactForm(false)} 
      />
    </section>
  );
};

export default Hero;