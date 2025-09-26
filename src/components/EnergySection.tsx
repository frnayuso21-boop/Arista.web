import React from 'react';
import { Zap, Leaf, TrendingDown, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnergySection: React.FC = () => {
  return (
    <section id="energia" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
            <Leaf className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Energía Verde
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ahorra hasta un 30% en tu factura de la luz con energía 100% renovable
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Ahorro Garantizado</h3>
                  <p className="text-green-400 font-semibold">Hasta 30% menos</p>
                </div>
              </div>
              <p className="text-white/80">
                Reduce significativamente tu factura de la luz con nuestras tarifas competitivas y transparentes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <Leaf className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">100% Renovable</h4>
                <p className="text-white/70 text-sm">Energía limpia certificada</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
                <Shield className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">Sin Sorpresas</h4>
                <p className="text-white/70 text-sm">Tarifas transparentes</p>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Arista Energía</h3>
              <p className="text-white/80">Los mejores precios del mercado</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Cambio gratuito y sin cortes',
                'Facturación transparente',
                'Atención al cliente 24/7',
                'Energía 100% renovable certificada',
                'Máxima flexibilidad contractual',
                'Soporte técnico especializado'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                to="/energia"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Ver Tarifas de Energía</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/energia"
                className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-xl font-medium transition-all duration-200 border border-white/20 flex items-center justify-center"
              >
                Calcular mi Ahorro
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Únete a la energía del futuro
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Miles de familias ya ahorran con nuestra energía 100% renovable. Únete y empieza a reducir tu factura desde el primer día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/energia"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Solicitar Información
            </Link>
            <Link
              to="/energia"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 border border-white/20"
            >
              Comparar Tarifas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergySection;