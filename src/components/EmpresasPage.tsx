import React from 'react';
import { Phone, Cloud, Lock, Monitor, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EmpresasPage: React.FC = () => {
  const navigate = useNavigate();
  const businessPlans = [
    {
      name: 'Starter Business',
      price: '89.99',
      speed: '300 Mbps',
      features: [
        'Fibra simétrica 300 Mbps',
        '5 líneas móviles incluidas',
        'IP estática',
        'Soporte técnico 24/7',
        'Centralita básica'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '149.99',
      speed: '600 Mbps',
      features: [
        'Fibra simétrica 600 Mbps',
        '10 líneas móviles incluidas',
        'IP estática + backup',
        'Soporte técnico prioritario',
        'Centralita avanzada',
        'Cloud backup 100GB'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '249.99',
      speed: '1 Gbps',
      features: [
        'Fibra simétrica 1 Gbps',
        '20 líneas móviles incluidas',
        'IP estática dedicada',
        'Gestor de cuenta dedicado',
        'Centralita completa',
        'Cloud backup 500GB',
        'Firewall empresarial'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Servidores virtuales escalables',
      link: '/cloud-services'
    },
    {
      icon: Lock,
      title: 'Ciberseguridad',
      description: 'Protección avanzada contra amenazas',
      link: '/cybersecurity'
    },
    {
      icon: Monitor,
      title: 'Monitorización 24/7',
      description: 'Supervisión continua de tu red',
      link: '/monitoring'
    },
    {
      icon: Phone,
      title: 'Telefonía IP',
      description: 'Centralitas virtuales completas',
      link: '/voip-services'
    }
  ];

  const industries = [
    {
      name: 'Retail & Comercio',
      description: 'Soluciones para tiendas y centros comerciales',
      link: '/retail-solutions'
    },
    {
      name: 'Salud & Medicina',
      description: 'Conectividad segura para centros médicos',
      link: '/healthcare-solutions'
    },
    {
      name: 'Educación',
      description: 'Redes para colegios y universidades',
      link: '/education-solutions'
    },
    {
      name: 'Hostelería',
      description: 'WiFi y conectividad para hoteles y restaurantes',
      link: '/hospitality-solutions'
    },
    {
      name: 'Industria',
      description: 'Redes industriales y IoT',
      link: '/industrial-solutions'
    },
    {
      name: 'Oficinas',
      description: 'Conectividad completa para espacios de trabajo',
      link: '/office-solutions'
    }
  ];

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
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo empresarial diferente */}
            <div className="flex items-center">
              <button 
                onClick={() => navigate('/')}
                className="mr-4 p-2 text-white hover:text-blue-400 transition-colors"
                title="Volver a inicio"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <img 
          src="/Arista - Logotipo Final Positivo.png" 
          alt="Arista Empresas" 
          className="h-20"
        />
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#planes" className="text-white hover:text-blue-400 transition-colors">Planes</a>
              <a href="#servicios" className="text-white hover:text-blue-400 transition-colors">Servicios</a>
              <a href="#sectores" className="text-white hover:text-blue-400 transition-colors">Sectores</a>
              <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Contactar</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">
            Conectividad Empresarial
            <span className="block text-blue-400">de Nueva Generación</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Soluciones integrales de telecomunicaciones diseñadas específicamente para empresas que buscan excelencia en conectividad, seguridad y soporte técnico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Ver Planes Empresariales
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Solicitar Consultoría
            </button>
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section id="planes" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Planes Empresariales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-blue-400 ring-2 ring-blue-400/50' : 'border-white/20'
                } hover:bg-white/15 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-4">
                    Más Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-1">
                  {plan.price}€
                  <span className="text-lg text-white/60">/mes</span>
                </div>
                <p className="text-white/80 mb-6">{plan.speed} simétrica</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-white/90 flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contratar Ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="servicios" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Servicios Adicionales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="sectores" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Soluciones por Sector
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <a
                key={index}
                href={industry.link}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {industry.name}
                </h3>
                <p className="text-white/70 text-sm">{industry.description}</p>
                <div className="mt-4 text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Saber más →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Nuestros expertos en telecomunicaciones empresariales están listos para diseñar la solución perfecta para tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+34900123457" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                900 123 457
              </a>
              <a 
                href="mailto:empresas@aristamovil.com" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                empresas@aristamovil.com
              </a>
            </div>
            
            <p className="text-white/60 text-sm">
              Horario de atención: Lunes a Viernes 8:00 - 20:00 | Sábados 9:00 - 14:00
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/60">
            <p>&copy; 2024 Arista Business. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmpresasPage;