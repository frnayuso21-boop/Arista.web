import React, { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ParticularesSection from './ParticularesSection';
import EmpresasSection from './EmpresasSection';
import CoverageSection from './CoverageSection';
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
      element.scrollIntoView({ behavior: 'smooth' });
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
        <EmpresasSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;