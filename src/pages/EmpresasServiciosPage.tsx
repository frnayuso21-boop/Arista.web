import React from 'react';
import { ArrowLeft, Building2, CheckCircle, Wifi, Shield, Cloud, Phone, Headphones } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface EmpresasServiciosPageProps {
  onBack?: () => void;
}

const EmpresasServiciosPage: React.FC<EmpresasServiciosPageProps> = ({ onBack }) => {
  const handleContract = () => {
    console.log('Contratando servicios empresariales');
  };

  const handleScrollToParticularesWithTab = (tab: string) => {
    // Lógica para scroll
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
        activeSection="empresas" 
        onCoverageCheck={() => {}} 
        onScrollToParticularesWithTab={handleScrollToParticularesWithTab}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-white/70 mb-8">
          <button 
            onClick={onBack || (() => window.history.back())}
            className="flex items-center hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Volver
          </button>
          <span>/</span>
          <span className="text-white">Empresas</span>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soluciones Empresariales
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Conectividad, seguridad y servicios digitales diseñados para impulsar tu negocio
          </p>
          
          {/* CTA Principal */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 mb-4">
                <p className="text-blue-400 text-sm font-medium">¡Consulta personalizada!</p>
                <p className="text-blue-300 text-xs">Adaptamos la solución a tu empresa</p>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-4">Desde 49€</div>
              <div className="text-white/70 text-lg mb-6">/mes por servicio</div>
              <button
                onClick={handleContract}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Solicitar consulta
              </button>
            </div>
          </div>
        </div>

        {/* Servicios principales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Conectividad */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Conectividad Empresarial</h3>
            <p className="text-white/70 mb-6">Fibra óptica simétrica de alta velocidad y líneas móviles corporativas</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Fibra hasta 1 Gbps
              </li>
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                IP fija incluida
              </li>
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                SLA garantizado (99.9% disponibilidad)
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
              Más información
            </button>
          </div>

          {/* Ciberseguridad */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Ciberseguridad</h3>
            <p className="text-white/70 mb-6">Protección avanzada contra amenazas digitales y cumplimiento normativo</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Firewall empresarial
              </li>
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Antivirus corporativo
              </li>
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Monitorización 24/7
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
              Más información
            </button>
          </div>

          {/* Cloud Computing */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Cloud Computing</h3>
            <p className="text-white/70 mb-6">Infraestructura en la nube escalable y servicios de backup</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Servidores virtuales
              </li>
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Backup automático
              </li>
              <li className="flex items-center text-white/80">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                Escalabilidad total
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200">
              Más información
            </button>
          </div>
        </div>

        {/* Ventajas empresariales */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">¿Por qué elegir nuestras soluciones empresariales?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Soporte 24/7</h3>
              <p className="text-white/70 text-sm">Atención técnica especializada las 24 horas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">SLA Garantizado</h3>
              <p className="text-white/70 text-sm">Acuerdo de Nivel de Servicio - 99.9% disponibilidad</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Escalabilidad</h3>
              <p className="text-white/70 text-sm">Crece con tu negocio sin límites</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="font-semibold text-white mb-2">Máxima Seguridad</h3>
              <p className="text-white/70 text-sm">Protección avanzada de datos</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-2xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Impulsa tu negocio con nuestras soluciones
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Más de 5.000 empresas confían en nosotros para sus comunicaciones y servicios digitales
          </p>
          <button
            onClick={handleContract}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Solicitar consulta gratuita
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmpresasServiciosPage;