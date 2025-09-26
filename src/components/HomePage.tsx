import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ParticularesSection from './ParticularesSection';
import EnergySection from './EnergySection';
import EmpresasSection from './EmpresasSection';
import TVSection from './TVSection';
import CoverageSection from './CoverageSection';
import FAQSection from './FAQSection';
import Footer from './Footer';

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
        <EnergySection />
        <CoverageSection onCoverageCheck={onCoverageCheck} />
        <EmpresasSection />
        <TVSection onContractPlan={onContractPlan} />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;