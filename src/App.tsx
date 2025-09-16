import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EmpresasPage from './components/EmpresasPage';
import SecurityPage from './components/SecurityPage';
import EnergyPage from './components/EnergyPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import CoverageModal from './components/CoverageModal';
import ContractModal from './components/ContractModal';
import PlanConfigurator from './components/PlanConfigurator';
import PlanDetailPage from './components/PlanDetailPage';
import CookieBanner from './components/CookieBanner';
import { initializeTracking, trackPageView } from './utils/analytics';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

function App() {
  const [showCoverageModal, setShowCoverageModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [showPlanConfigurator, setShowPlanConfigurator] = useState(false);
  const [showPlanDetail, setShowPlanDetail] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // Inicializar tracking al cargar la app
  useEffect(() => {
    // Esperar a que se carguen los scripts de tracking
    const timer = setTimeout(() => {
      initializeTracking();
      trackPageView('Arista Telecomunicaciones - Inicio');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleContractPlan = (plan: Plan) => {
    console.log('handleContractPlan called with plan:', plan);
    setSelectedPlan(plan);
    setShowContractModal(true);
    console.log('Modal should be open now');
  };

  const handleViewPlanDetail = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowPlanDetail(true);
  };

  const handleShowConfigurator = () => {
    setShowPlanConfigurator(true);
  };

  if (showPlanConfigurator) {
    return <PlanConfigurator onBack={() => setShowPlanConfigurator(false)} />;
  }

  if (showPlanDetail && selectedPlan) {
    return (
      <PlanDetailPage 
        plan={selectedPlan}
        onBack={() => {
          setShowPlanDetail(false);
          setSelectedPlan(null);
        }}
        onContract={handleContractPlan}
      />
    );
  }

  console.log('App render - showContractModal:', showContractModal, 'selectedPlan:', selectedPlan);
  
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onContractPlan={handleContractPlan}
                onShowConfigurator={handleShowConfigurator}
                onViewPlanDetail={handleViewPlanDetail}
                onCoverageCheck={() => setShowCoverageModal(true)}
              />
            } 
          />
          <Route path="/empresas" element={<EmpresasPage onContractPlan={handleContractPlan} />} />
          <Route path="/seguridad" element={<SecurityPage />} />
          <Route path="/energia" element={<EnergyPage />} />
          <Route path="/configurador" element={<PlanConfigurator onBack={() => window.history.back()} />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="/politica-cookies" element={<CookiePolicy />} />
        </Routes>
        
        {showCoverageModal && (
          <CoverageModal 
            isOpen={showCoverageModal} 
            onClose={() => setShowCoverageModal(false)} 
          />
        )}
        
        {showContractModal && (
          <ContractModal 
            isOpen={showContractModal} 
            onClose={() => {
              console.log('Closing contract modal');
              setShowContractModal(false);
              setSelectedPlan(null);
            }}
            plan={selectedPlan}
          />
        )}
        
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;