import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InvoiceComparator from '../components/InvoiceComparator';

const ComparadorFacturasPage: React.FC = () => {
  const [activeSection] = useState('comparador');
  const handleScrollToParticularesWithTab = (tab: string) => {
    window.location.href = `/#particulares?tab=${tab}`;
  };
  const handleCoverageCheck = () => {
    console.log('Coverage check requested');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header activeSection={activeSection} onCoverageCheck={handleCoverageCheck} onScrollToParticularesWithTab={handleScrollToParticularesWithTab} />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Comparador de Facturas</h1>
        <p className="text-white/80 mb-8">Sube tu factura (PDF, PNG, JPG, TXT). Detectamos tu tipo de servicio y comparamos con nuestros precios actuales para mostrarte el posible ahorro.</p>
        <InvoiceComparator />
      </main>
      <Footer />
    </div>
  );
};

export default ComparadorFacturasPage;