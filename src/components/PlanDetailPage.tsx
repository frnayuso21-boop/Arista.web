import React from 'react';
import { ArrowLeft, Wifi, Smartphone, CheckCircle, Shield, Clock, Users } from 'lucide-react';
import AristaLogo from './AristaLogo';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface PlanDetailPageProps {
  plan: Plan;
  onBack: () => void;
  onContract: (plan: Plan) => void;
}

const PlanDetailPage: React.FC<PlanDetailPageProps> = ({ plan, onBack, onContract }) => {
  // Función para extraer GB de datos móviles del plan ID
  const extractMobileDataFromPlan = () => {
    const planId = plan.id.toLowerCase();
    
    // Extraer GB de planes fibra + móvil
    if (planId.includes('fibra-movil')) {
      if (planId.includes('40gb')) return '40 GB';
      if (planId.includes('80gb')) return '80 GB';
      if (planId.includes('120gb')) return '120 GB';
      if (planId.includes('200gb')) return '200 GB';
    }
    
    // Para otros tipos de planes, usar valores por defecto
    if (planId.includes('juntos')) return '25 GB';
    if (planId.includes('compartidos')) {
      if (planId.includes('100gb')) return '100 GB';
      if (planId.includes('200gb')) return '200 GB';
      return '100 GB';
    }
    if (planId.includes('esim')) {
      if (planId.includes('20gb')) return '20 GB';
      if (planId.includes('50gb')) return '50 GB';
      if (planId.includes('100gb')) return '100 GB';
      return '50 GB';
    }
    
    return '40 GB'; // valor por defecto
  };

  // Función para obtener detalles específicos según el tipo de plan
  const getPlanDetails = () => {
    const planId = plan.id.toLowerCase();
    const mobileData = extractMobileDataFromPlan();
    
    if (planId.includes('fibra-movil-300')) {
      return {
        icon: <Wifi className="w-12 h-12 text-blue-500" />,
        color: 'blue',
        gradient: 'from-blue-500 to-blue-600',
        category: 'Fibra + Móvil',
        speed: '300 Mbps',
        technology: 'Fibra óptica simétrica',
        coverage: 'Nacional',
        installation: 'Gratuita',
        router: 'WiFi 6 incluido',
        support: '24/7',
        benefits: [
          '300 Mbps simétrica de fibra óptica',
          'Llamadas ilimitadas a fijos y móviles',
          `${mobileData} de datos móviles 5G`,
          'Línea fija con número incluido',
          'Router WiFi 6 de última generación',
          'Instalación y configuración gratuita',
          'Soporte técnico 24/7',
          'Sin permanencia',
          'Portabilidad gratuita'
        ]
      };
    }
    
    if (planId.includes('fibra-movil-600')) {
      return {
        icon: <Wifi className="w-12 h-12 text-purple-500" />,
        color: 'purple',
        gradient: 'from-purple-500 to-purple-600',
        category: 'Fibra + Móvil',
        speed: '600 Mbps',
        technology: 'Fibra óptica simétrica',
        coverage: 'Nacional',
        installation: 'Gratuita',
        router: 'WiFi 6 Pro incluido',
        support: '24/7',
        benefits: [
          '600 Mbps simétrica de fibra óptica',
          'Llamadas ilimitadas a fijos y móviles',
          `${mobileData} de datos móviles 5G`,
          'Línea fija con número incluido',
          'Router WiFi 6 Pro de alta gama',
          'Instalación y configuración gratuita',
          'Soporte técnico prioritario 24/7',
          'Sin permanencia',
          'Descuento combo aplicado',
          'Portabilidad gratuita'
        ]
      };
    }
    
    if (planId.includes('fibra-movil-1000')) {
      return {
        icon: <Wifi className="w-12 h-12 text-emerald-500" />,
        color: 'emerald',
        gradient: 'from-emerald-500 to-emerald-600',
        category: 'Fibra + Móvil',
        speed: '1000 Mbps',
        technology: 'Fibra óptica simétrica',
        coverage: 'Nacional',
        installation: 'Gratuita',
        router: 'WiFi 6E Premium incluido',
        support: '24/7 Premium',
        benefits: [
          '1000 Mbps simétrica de fibra óptica (1 Gbps)',
          'Llamadas ilimitadas a fijos y móviles',
          `${mobileData} de datos móviles 5G`,
          'Línea fija con número incluido',
          'Router WiFi 6E Premium',
          'Instalación y configuración gratuita',
          'Soporte técnico premium 24/7',
          'Sin permanencia',
          'Descuento combo aplicado',
          'Prioridad en red',
          'Portabilidad gratuita'
        ]
      };
    }
    
    if (planId.includes('juntos')) {
      return {
        icon: <Smartphone className="w-12 h-12 text-blue-500" />,
        color: 'blue',
        gradient: 'from-blue-500 to-cyan-500',
        category: 'Móvil',
        speed: '5G',
        technology: '5G + 4G',
        coverage: 'Nacional',
        installation: 'Activación inmediata',
        router: 'No aplica',
        support: '24/7',
        benefits: [
          'Llamadas ilimitadas a todos los destinos',
          'SMS ilimitados',
          'Navegación 5G de alta velocidad',
          `${mobileData} de datos móviles 5G`,
          'Roaming UE incluido (15 GB)',
          'Activación inmediata',
          'Portabilidad gratuita',
          'Sin permanencia',
          'Hotspot incluido',
          'Compatible con eSIM'
        ]
      };
    }
    
    if (planId.includes('compartidos')) {
      return {
        icon: <Users className="w-12 h-12 text-emerald-500" />,
        color: 'emerald',
        gradient: 'from-emerald-500 to-emerald-600',
        category: 'Móvil Compartido',
        speed: '5G',
        technology: '5G + 4G',
        coverage: 'Nacional',
        installation: 'Activación inmediata',
        router: 'No aplica',
        support: '24/7',
        benefits: [
          'Llamadas ilimitadas a todos los destinos',
          'SMS ilimitados',
          'Navegación 5G de alta velocidad',
          `${mobileData} compartidos entre líneas`,
          'Hasta 5 líneas adicionales',
          'Roaming UE incluido (25 GB)',
          'Activación inmediata',
          'Portabilidad gratuita',
          'Sin permanencia',
          'Hotspot incluido',
          'Compatible con eSIM'
        ]
      };
    }
    
    if (planId.includes('esim')) {
      return {
        icon: <Smartphone className="w-12 h-12 text-pink-500" />,
        color: 'pink',
        gradient: 'from-pink-500 to-purple-600',
        category: 'eSIM Digital',
        speed: '5G',
        technology: '5G + 4G',
        coverage: 'Nacional',
        installation: 'Activación digital inmediata',
        router: 'No aplica',
        support: '24/7',
        benefits: [
          'Activación 100% digital',
          'Sin tarjeta SIM física',
          'Configuración instantánea por QR',
          `${mobileData} de datos móviles 5G`,
          'Llamadas ilimitadas incluidas',
          'Compatible con dispositivos eSIM',
          'Cambio de dispositivo fácil',
          'Roaming UE incluido (20 GB)',
          'Sin permanencia',
          'SMS ilimitados',
          'Hotspot incluido'
        ]
      };
    }
    
    // Plan por defecto
    return {
      icon: <Wifi className="w-12 h-12 text-blue-500" />,
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      category: 'Plan Personalizado',
      speed: 'Variable',
      technology: 'Fibra + Móvil',
      coverage: 'Nacional',
      installation: 'Gratuita',
      router: 'Incluido',
      support: '24/7',
      benefits: plan.features,
      technicalSpecs: [
        { label: 'Tecnología', value: 'Fibra óptica + 5G' },
        { label: 'Cobertura', value: 'Nacional' },
        { label: 'Instalación', value: 'Gratuita' },
        { label: 'Soporte', value: '24/7' }
      ]
    };
  };

  const details = getPlanDetails();

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
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </button>
            <AristaLogo className="h-8" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className={`w-24 h-24 bg-gradient-to-br ${details.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
              {details.icon}
            </div>
            <div className="mb-4">
              <span className={`inline-block px-4 py-2 bg-${details.color}-500/20 text-${details.color}-400 rounded-full text-sm font-medium mb-4`}>
                {details.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{plan.name}</h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-6xl font-bold text-white">{plan.price}€</div>
              <div className="text-white/60 text-xl">/mes</div>
            </div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {details.category === 'Fibra + Móvil' 
                ? `Disfruta de la máxima velocidad con ${details.speed} simétricos y conectividad móvil completa.`
                : details.category === 'Móvil' 
                ? 'Conectividad móvil completa con la mejor cobertura 5G del país.'
                : details.category === 'Móvil Compartido'
                ? 'Comparte datos entre múltiples líneas con la flexibilidad que necesitas.'
                : 'Tecnología eSIM digital para una experiencia completamente moderna.'
              }
            </p>
          </div>

          <div className="mb-12">
            {/* Beneficios */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Beneficios incluidos
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Instalación</h3>
              <p className="text-white/70 text-sm">{details.installation}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Cobertura</h3>
              <p className="text-white/70 text-sm">{details.coverage}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Soporte</h3>
              <p className="text-white/70 text-sm">{details.support}</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">¿Listo para contratar?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Únete a miles de clientes satisfechos que ya disfrutan de la mejor conectividad con ARISTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onContract(plan)}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Lo quiero
              </button>
              <button
                onClick={onBack}
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Ver otros planes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailPage;