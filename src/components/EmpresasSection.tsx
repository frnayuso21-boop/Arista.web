import React from 'react';
import { Building2, Shield, Server, Phone } from 'lucide-react';

const EmpresasSection: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Fibra Empresarial',
      description: 'Conexiones simétricas hasta 10 Gbps con SLA garantizado',
      features: ['Ancho de banda dedicado', 'IP estática incluida', 'Soporte 24/7', 'SLA del 99.9%']
    },
    {
      icon: Phone,
      title: 'Centralita Virtual',
      description: 'Sistema de telefonía IP completo para tu empresa',
      features: ['Extensiones ilimitadas', 'Grabación de llamadas', 'IVR personalizable', 'App móvil']
    },
    {
      icon: Shield,
      title: 'Seguridad Avanzada',
      description: 'Protección integral con firewall y antivirus empresarial',
      features: ['Firewall dedicado', 'Protección DDoS', 'VPN empresarial', 'Backup automático']
    },
    {
      icon: Server,
      title: 'Cloud Services',
      description: 'Servicios en la nube escalables y seguros',
      features: ['Servidores virtuales', 'Backup en la nube', 'Office 365', 'Migración gratuita']
    }
  ];



  return (
    <section 
      id="empresas" 
      className="py-16"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-white mb-4">
            Empresas
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-3">
                  <service.icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-gray-600 flex items-center">
                    <div className="w-1 h-1 bg-gray-400 rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <p className="text-white/70 text-sm">900 123 457</p>
        </div>
      </div>
    </section>
  );
};

export default EmpresasSection;