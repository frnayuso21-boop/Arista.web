import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EmpresasPage from './components/EmpresasPage';
import SecurityPage from './components/SecurityPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';
import CoverageModal from './components/CoverageModal';
import SimpleContractForm from './components/SimpleContractForm';
import PlanConfigurator from './components/PlanConfigurator';
import PlanDetailPage from './components/PlanDetailPage';
import CookieBanner from './components/CookieBanner';
import { initializeTracking, trackPageView } from './utils/analytics';

// Páginas individuales de servicios
import Fibra300MbpsMovilPage from './pages/Fibra300MbpsMovilPage';
import Fibra600MbpsMovilPage from './pages/Fibra600MbpsMovilPage';
import Fibra1GbpsMovilPage from './pages/Fibra1GbpsMovilPage';
import Movil40GBPage from './pages/Movil40GBPage';
import MovilESIMPage from './pages/MovilESIMPage';
import AlarmasBasicPage from './pages/AlarmasBasicPage';
import AlarmasPremiumPage from './pages/AlarmasPremiumPage';
import EnergiaPage from './pages/EnergiaPage';
import EmpresasServiciosPage from './pages/EmpresasServiciosPage';
import FAQPage from './pages/FAQPage';
import ComparadorFacturasPage from './pages/ComparadorFacturasPage';

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
          <Route path="/configurador" element={<PlanConfigurator onBack={() => window.history.back()} />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
          
          {/* Rutas de servicios de fibra */}
          <Route path="/fibra-300mbps-movil" element={<Fibra300MbpsMovilPage />} />
          <Route path="/fibra-600mbps-movil" element={<Fibra600MbpsMovilPage />} />
          <Route path="/fibra-1gbps-movil" element={<Fibra1GbpsMovilPage />} />
          
          {/* Rutas de servicios móviles */}
          <Route path="/movil-40gb" element={<Movil40GBPage />} />
          <Route path="/movil-esim" element={<MovilESIMPage />} />
          
          {/* Rutas de servicios de alarmas */}
          <Route path="/alarmas-basica" element={<AlarmasBasicPage />} />
          <Route path="/alarmas-premium" element={<AlarmasPremiumPage />} />
          
          {/* Rutas de servicios de energía */}
          <Route path="/energia" element={<EnergiaPage />} />
          
          {/* Rutas de servicios empresariales */}
          <Route path="/empresas-servicios" element={<EmpresasServiciosPage />} />
          
          {/* Ruta de FAQ */}
          <Route path="/preguntas-frecuentes" element={<FAQPage />} />

          {/* Comparador de facturas */}
          <Route path="/comparador-facturas" element={<ComparadorFacturasPage />} />
        </Routes>
        
        {showCoverageModal && (
          <CoverageModal 
            isOpen={showCoverageModal} 
            onClose={() => setShowCoverageModal(false)} 
          />
        )}
        
        {showContractModal && (
          <SimpleContractForm 
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