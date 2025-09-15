import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EmpresasPage from './components/EmpresasPage';
import CoverageModal from './components/CoverageModal';
import ContractModal from './components/ContractModal';
import PlanConfigurator from './components/PlanConfigurator';
import PlanDetailPage from './components/PlanDetailPage';
import CookieBanner from './components/CookieBanner';

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

  const handleContractPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setShowContractModal(true);
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
          <Route path="/empresas" element={<EmpresasPage />} />
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