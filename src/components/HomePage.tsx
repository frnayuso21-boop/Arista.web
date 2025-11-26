import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ParticularesSection from './ParticularesSection';
import EmpresasSection from './EmpresasSection';
import TVSection from './TVSection';
import CoverageSection from './CoverageSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import InvoiceComparator from './InvoiceComparator';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface HomePageProps {
  onContractPlan: (plan: Plan) => void;
  onShowConfigurator: () => void;
  onViewPlanDetail: (plan: Plan) => void;
  onCoverageCheck: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  onContractPlan, 
  onShowConfigurator, 
  onViewPlanDetail, 
  onCoverageCheck 
}) => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.3] }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToParticularesWithTab = (tab: string) => {
    const element = document.getElementById('particulares');
    if (element) {
      // Dispatch the tab change event immediately
      const event = new CustomEvent('changeTab', { detail: tab });
      window.dispatchEvent(event);
      
      // Then scroll to the section
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header 
        activeSection={activeSection}
        onCoverageCheck={onCoverageCheck}
        onScrollToParticularesWithTab={scrollToParticularesWithTab}
      />
      
      <main>
        <Hero />
        <ParticularesSection 
          onContractPlan={onContractPlan}
          onShowConfigurator={onShowConfigurator}
          onViewPlanDetail={onViewPlanDetail}
        />
        <CoverageSection onCoverageCheck={onCoverageCheck} />
        
        <section id="comparador" className="py-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900/90 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-xl text-white">
              <h2 className="text-2xl font-semibold mb-2">Comparador de Facturas</h2>
              <p className="text-white/80 mb-6">Sube tu factura y descubre tu ahorro con nuestros precios de particulares.</p>
              <InvoiceComparator />
            </div>
          </div>
        </section>
         
        <EmpresasSection />
        <TVSection onContractPlan={onContractPlan} />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;