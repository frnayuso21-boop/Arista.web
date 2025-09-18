import React, { useState } from 'react';
import { Phone, Cloud, Lock, Monitor, ArrowLeft, Users, BarChart3, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface EmpresasPageProps {
  onContractPlan?: (plan: Plan) => void;
}

const EmpresasPage: React.FC<EmpresasPageProps> = ({ onContractPlan }) => {
  const navigate = useNavigate();
  const [showCRMModal, setShowCRMModal] = useState(false);
  const [showConsultoriaModal, setShowConsultoriaModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showConsultoriaSuccessMessage, setShowConsultoriaSuccessMessage] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showPlanSuccessMessage, setShowPlanSuccessMessage] = useState(false);
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [showOfficeSuccessMessage, setShowOfficeSuccessMessage] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedOfficeService, setSelectedOfficeService] = useState<string>('');
  const [selectedLinesStarter, setSelectedLinesStarter] = useState('0');
  const [selectedLinesProfessional, setSelectedLinesProfessional] = useState('0');
  const [selectedLinesEnterprise, setSelectedLinesEnterprise] = useState('0');

  const esimOptions = [
    { value: '0', label: 'Sin líneas móviles', price: 0 },
    { value: 'solo-voz', label: 'ARISTA Solo Voz - 5.95€', price: 5.95 },
    { value: 'voz-15gb', label: 'ARISTA Ilimitada Voz + 15GB - 7.95€', price: 7.95 },
    { value: 'voz-40gb', label: 'ARISTA Ilimitada Voz + 40GB - 9.95€', price: 9.95 },
    { value: 'voz-80gb', label: 'ARISTA Ilimitada Voz + 80GB - 11.75€', price: 11.75 },
    { value: 'voz-160gb', label: 'ARISTA Ilimitada Voz + 160GB - 15.75€', price: 15.75 },
    { value: 'voz-datos', label: 'ARISTA Ilimitada Voz y Datos - 23.75€', price: 23.75 }
  ];

  const businessPlans = [
    {
      name: 'Starter Business',
      price: '26.80',
      speed: '300 Mbps',
      features: [
        'Fibra óptica simétrica',
        'IP fija incluida',
        'Soporte técnico 24/7',
        'Máxima flexibilidad',
        'Instalación gratuita'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '37.66',
      speed: '600 Mbps',
      features: [
        'Fibra óptica simétrica',
        'IP fija incluida',
        'Soporte técnico 24/7',
        'Máxima flexibilidad',
        'Instalación gratuita',
        'Router WiFi 6 premium'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '45.75',
      speed: '1000 Mbps',
      features: [
        'Fibra óptica simétrica',
        'IP fija incluida',
        'Soporte técnico 24/7',
        'Máxima flexibilidad',
        'Instalación gratuita',
        'Router WiFi 6 premium',
        'Backup 4G incluido'
      ],
      popular: false
    }
  ];

  const officeServices = [
    {
      name: 'Oficina Básica',
      lines: '10 líneas telefónicas',
      price: '36.30',
      features: [
        '10 líneas telefónicas',
        'Numeración geográfica',
        'Desvío de llamadas',
        'Buzón de voz',
        'Llamadas ilimitadas nacionales'
      ]
    },
    {
      name: 'Oficina Avanzada',
      lines: '50 líneas telefónicas',
      price: '41.14',
      features: [
        '50 líneas telefónicas',
        'Numeración geográfica',
        'Desvío de llamadas',
        'Buzón de voz',
        'Llamadas ilimitadas nacionales',
        'Centralita virtual',
        'Grabación de llamadas'
      ]
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
              <a href="#planes" className="text-white hover:text-blue-400 transition-colors font-light">Planes</a>
              <a href="#servicios" className="text-white hover:text-blue-400 transition-colors font-light">Servicios</a>
              <a href="#contacto" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-light">Contactar</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-thin text-white mb-6" style={{textShadow: '0 0 1px rgba(255, 255, 255, 0.8), 0 0 2px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.4)'}}>
            Conectividad Empresarial
            <span className="block text-blue-400" style={{textShadow: '0 0 1px rgba(255, 255, 255, 0.8), 0 0 2px rgba(255, 255, 255, 0.6), 0 0 3px rgba(255, 255, 255, 0.4)'}}>de Nueva Generación.</span>
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto font-light" style={{textShadow: '0 0 1px rgba(255, 255, 255, 0.6), 0 0 2px rgba(255, 255, 255, 0.4), 0 0 3px rgba(255, 255, 255, 0.2)'}}>
            Soluciones integrales de telecomunicaciones diseñadas específicamente para empresas que buscan excelencia en conectividad, seguridad y soporte técnico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-light">
              Ver Planes Empresariales
            </button>
            <button 
              onClick={() => {
                // Redirigir al configurador con tipo empresa preseleccionado
                navigate('/configurador?tipo=empresa');
              }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-light shadow-lg"
            >
              Configura tu Plan Empresarial
            </button>
            <button 
              onClick={() => setShowConsultoriaModal(true)}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-light"
            >
              Solicitar Consultoría
            </button>
          </div>
        </div>
      </section>

      {/* Business Plans */}
      <section id="planes" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-thin text-white text-center mb-12">
            Planes Empresariales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessPlans.map((plan, index) => {
              const getSelectedLines = () => {
                if (index === 0) return selectedLinesStarter;
                if (index === 1) return selectedLinesProfessional;
                return selectedLinesEnterprise;
              };
              
              const setSelectedLines = (value: string) => {
                if (index === 0) setSelectedLinesStarter(value);
                else if (index === 1) setSelectedLinesProfessional(value);
                else setSelectedLinesEnterprise(value);
              };
              
              const selectedOption = esimOptions.find(opt => opt.value === getSelectedLines());
              const totalPrice = parseFloat(plan.price) + (selectedOption?.price || 0);
              
              return (
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
                  
                  <h3 className="text-2xl font-light text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-light text-blue-400 mb-1">
                    {totalPrice.toFixed(2)}€
                    <span className="text-lg text-white/60 font-light">/mes</span>
                  </div>
                  <p className="text-white/80 mb-6 font-light">{plan.speed} simétrica</p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-white/90 flex items-center font-light">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Líneas Telefónicas Físicas Adicionales */}
                  <div className="mb-4">
                    <label className="block text-sm font-light text-white/80 mb-2">
                      Líneas telefónicas adicionales físicas:
                    </label>
                    <select 
                      value={getSelectedLines()}
                      onChange={(e) => setSelectedLines(e.target.value)}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white font-light focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      {esimOptions.map((option) => (
                        <option key={option.value} value={option.value} className="bg-gray-800 text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Líneas Adicionales E-SIM */}
                  <div className="mb-6">
                    <label className="block text-sm font-light text-white/80 mb-2">
                      Líneas adicionales E-SIM para contratar ya y tener ya mismo:
                    </label>
                    <select 
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white font-light focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                      <option value="0" className="bg-gray-800 text-white">Sin líneas E-SIM</option>
                      <option value="solo-voz" className="bg-gray-800 text-white">ARISTA Solo Voz - 5.95€</option>
                      <option value="voz-15gb" className="bg-gray-800 text-white">ARISTA Ilimitada Voz + 15GB - 7.95€</option>
                      <option value="voz-40gb" className="bg-gray-800 text-white">ARISTA Ilimitada Voz + 40GB - 9.95€</option>
                      <option value="voz-80gb" className="bg-gray-800 text-white">ARISTA Ilimitada Voz + 80GB - 11.75€</option>
                      <option value="voz-160gb" className="bg-gray-800 text-white">ARISTA Ilimitada Voz + 160GB - 15.75€</option>
                      <option value="voz-datos" className="bg-gray-800 text-white">ARISTA Ilimitada Voz y Datos - 23.75€</option>
                    </select>
                    <p className="text-xs text-yellow-300 mt-2 font-light">
                       💡 Si quieres línea con E-SIM hay que hacer un pago de 15€ por alta
                     </p>
                  </div>
                  
                  {/* Action Buttons */}
                   <div className="flex flex-col gap-3">
                     <button 
                       onClick={() => onContractPlan && onContractPlan({
                         id: plan.name.toLowerCase().replace(' ', '-'),
                         name: plan.name,
                         price: totalPrice,
                         features: plan.features
                       })}
                       className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-light transition-all duration-200 shadow-lg hover:shadow-xl"
                     >
                       Lo quiero
                     </button>
                   </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-thin text-white text-center mb-12">
            Servicios de Oficina
          </h2>
          <p className="text-xl font-light text-white text-center mb-12 max-w-3xl mx-auto">
            Completa tu conectividad empresarial con nuestros servicios de telefonía profesional
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {officeServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-lg font-light text-gray-600 mb-4">{service.lines}</p>
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-4xl font-light text-blue-600">{service.price}€</span>
                    <span className="text-gray-500 font-light ml-2">/mes</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => {
                    setSelectedOfficeService(service.name);
                    setShowOfficeModal(true);
                  }}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-light"
                >
                  Contratar servicio
                </button>
              </div>
            ))}
            
            {/* VOIP TRUNK SIP Service */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-light text-gray-900 mb-2">VOIP TRUNK SIP</h3>
                <p className="text-lg font-light text-gray-600 mb-4">Tarifas por minuto</p>
                <div className="mb-6">
                  <div className="text-xl font-light text-gray-900 mb-2">
                    Fijo a Fijo: <span className="text-blue-600">0,02€</span>
                  </div>
                  <div className="text-xl font-light text-gray-900">
                    Fijo a Móvil: <span className="text-blue-600">0,03€</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-light">Llamadas de alta calidad</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-light">Máxima flexibilidad</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-light">Configuración flexible</span>
                </li>
              </ul>
              
              <button 
                onClick={() => {
                  setSelectedOfficeService('VOIP TRUNK SIP');
                  setShowOfficeModal(true);
                }}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-light"
              >
                Pide tu presupuesto sin compromiso
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section id="servicios" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-thin text-white text-center mb-12">
            Servicios Adicionales
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-light text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-4xl font-thin text-white mb-4">
                ¿Necesitas un CRM de gestión empresarial?
              </h2>
              <p className="text-xl font-light text-white max-w-4xl mx-auto">
                Un CRM (Customer Relationship Management) es una herramienta esencial que centraliza y optimiza la gestión de relaciones con clientes, automatizando procesos comerciales y mejorando la eficiencia de tu equipo de ventas.
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-thin text-gray-900 mb-3">Gestión de Clientes</h3>
              <p className="font-light text-gray-600">Centraliza toda la información de tus clientes en un solo lugar</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-thin text-gray-900 mb-3">Análisis y Reportes</h3>
              <p className="font-light text-gray-600">Obtén insights valiosos sobre tu rendimiento comercial</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-thin text-gray-900 mb-3">Seguimiento de Ventas</h3>
              <p className="font-light text-gray-600">Rastrea oportunidades y cierra más ventas eficientemente</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-thin text-gray-900 mb-3">Automatización</h3>
              <p className="font-light text-gray-600">Automatiza tareas repetitivas y optimiza tu flujo de trabajo</p>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={() => setShowCRMModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-light hover:bg-blue-700 transition-colors shadow-lg"
            >
              Lo quiero
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl font-thin text-white mb-4">
              ¿Listo para transformar tu empresa?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-light">
              Nuestros expertos en telecomunicaciones empresariales están listos para diseñar la solución perfecta para tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+34621192578" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center font-light"
              >
                <Phone className="w-5 h-5 mr-2" />
                +34 621 192 578
              </a>
              <a 
                href="https://wa.me/34621192578?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20Arista%20Empresas.%20¿Podrían%20proporcionarme%20información%20detallada?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center font-light"
              >
                💬 WhatsApp
              </a>
              <a 
                href="mailto:info@aristamovil.com?subject=Consulta%20Arista%20Empresas&body=Hola,%0A%0AMe%20interesa%20conocer%20más%20sobre%20los%20servicios%20empresariales%20de%20Arista.%20¿Podrían%20contactarme%20para%20más%20información?%0A%0AGracias." 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-light"
              >
                info@aristamovil.com
              </a>
            </div>
            
            <p className="text-white/60 text-sm font-light">
              Horario de atención: Lunes a Viernes 8:00 - 20:00 | Sábados 9:00 - 14:00
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white/60">
            <p className="font-light">&copy; 2024 Arista Business. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* CRM Contact Modal */}
      {showCRMModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-thin text-gray-900">Solicitar CRM Empresarial</h3>
              <button 
                onClick={() => setShowCRMModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowCRMModal(false);
              setShowSuccessMessage(true);
              setTimeout(() => setShowSuccessMessage(false), 5000);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Email corporativo *</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@empresa.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Empresa *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Número de empleados</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona el tamaño de tu empresa</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="200+">Más de 200 empleados</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Comentarios adicionales</label>
                  <textarea 
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntanos más sobre tus necesidades de CRM..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowCRMModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-light"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-light"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Consultoria Contact Modal */}
      {showConsultoriaModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-thin text-gray-900">Solicitar Consultoría Empresarial</h3>
              <button 
                onClick={() => setShowConsultoriaModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = {
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                empresa: formData.get('empresa'),
                empleados: formData.get('empleados'),
                presupuesto: formData.get('presupuesto'),
                comentarios: formData.get('comentarios')
              };
              
              // Simular envío de email
              console.log('Enviando consultoría a info@aristamovil.com:', data);
              
              setShowConsultoriaModal(false);
              setShowConsultoriaSuccessMessage(true);
              setTimeout(() => setShowConsultoriaSuccessMessage(false), 5000);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Email corporativo *</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@empresa.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Empresa *</label>
                  <input 
                    type="text" 
                    name="empresa"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Número de empleados</label>
                  <select name="empleados" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona el tamaño de tu empresa</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="200+">Más de 200 empleados</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Presupuesto mensual aproximado</label>
                  <select name="presupuesto" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona tu rango de presupuesto</option>
                    <option value="<500">Menos de 500€/mes</option>
                    <option value="500-1000">500€ - 1.000€/mes</option>
                    <option value="1000-2500">1.000€ - 2.500€/mes</option>
                    <option value="2500-5000">2.500€ - 5.000€/mes</option>
                    <option value=">5000">Más de 5.000€/mes</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Describe tus necesidades *</label>
                  <textarea 
                    name="comentarios"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Cuéntanos qué servicios necesitas, cuáles son tus objetivos y cualquier información relevante para tu consultoría..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowConsultoriaModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-light"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-light"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-3">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-light text-sm">¡Solicitud enviada correctamente!</p>
              <p className="font-light text-xs text-green-100 mt-1">Un agente de Arista Empresas se pondrá en contacto contigo para estudiar tu caso.</p>
            </div>
          </div>
        </div>
      )}

      {/* Consultoria Success Message */}
      {showConsultoriaSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-3">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-light text-sm">¡Consultoría solicitada correctamente!</p>
              <p className="font-light text-xs text-green-100 mt-1">Hemos enviado tu solicitud a info@aristamovil.com. Te contactaremos pronto.</p>
            </div>
          </div>
        </div>
      )}

      {/* Plan Contact Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-thin text-gray-900">Contratar {selectedPlan}</h3>
              <button 
                onClick={() => setShowPlanModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = {
                plan: selectedPlan,
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                empresa: formData.get('empresa'),
                comentarios: formData.get('comentarios')
              };
              
              console.log('Enviando contratación de plan a info@aristamovil.com:', data);
              
              setShowPlanModal(false);
              setShowPlanSuccessMessage(true);
              setTimeout(() => setShowPlanSuccessMessage(false), 5000);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Empresa *</label>
                  <input 
                    type="text" 
                    name="empresa"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Comentarios adicionales</label>
                  <textarea 
                    name="comentarios"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Información adicional sobre tu solicitud..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowPlanModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-light"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-light"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Office Service Contact Modal */}
      {showOfficeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-thin text-gray-900">Contratar {selectedOfficeService}</h3>
              <button 
                onClick={() => setShowOfficeModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const data = {
                servicio: selectedOfficeService,
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                empresa: formData.get('empresa'),
                comentarios: formData.get('comentarios')
              };
              
              console.log('Enviando contratación de servicio de oficina a info@aristamovil.com:', data);
              
              setShowOfficeModal(false);
              setShowOfficeSuccessMessage(true);
              setTimeout(() => setShowOfficeSuccessMessage(false), 5000);
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Nombre completo *</label>
                  <input 
                    type="text" 
                    name="nombre"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Teléfono *</label>
                  <input 
                    type="tel" 
                    name="telefono"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+34 XXX XXX XXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Empresa *</label>
                  <input 
                    type="text" 
                    name="empresa"
                    required 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">Comentarios adicionales</label>
                  <textarea 
                    name="comentarios"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Información adicional sobre tu solicitud..."
                  ></textarea>
                </div>
              </div>
              
              <div className="flex gap-4 mt-6">
                <button 
                  type="button"
                  onClick={() => setShowOfficeModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-light"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-light"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Plan Success Message */}
      {showPlanSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-3">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-light text-sm">¡Solicitud de plan enviada!</p>
              <p className="font-light text-xs text-green-100 mt-1">Hemos enviado tu solicitud a info@aristamovil.com. Te contactaremos pronto.</p>
            </div>
          </div>
        </div>
      )}

      {/* Office Service Success Message */}
      {showOfficeSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg z-50 max-w-sm">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-3">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="font-light text-sm">¡Solicitud de servicio enviada!</p>
              <p className="font-light text-xs text-green-100 mt-1">Hemos enviado tu solicitud a info@aristamovil.com. Te contactaremos pronto.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmpresasPage;