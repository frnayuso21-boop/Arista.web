import React, { useState } from 'react';
import { Phone, Cloud, Lock, Monitor, ArrowLeft, Users, BarChart3, Target, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendContactEmail, sendPlanRequestEmail } from '../services/emailService';

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
      link: '#contacto'
    },
    {
      icon: Lock,
      title: 'Ciberseguridad',
      description: 'Protección avanzada contra amenazas',
      link: '#contacto'
    },
    {
      icon: Monitor,
      title: 'Monitorización 24/7',
      description: 'Supervisión continua de tu red',
      link: '#contacto'
    },
    {
      icon: Phone,
      title: 'Telefonía IP',
      description: 'Centralitas virtuales completas',
      link: '#contacto'
    }
  ];

  const industries = [
    {
      name: 'Retail & Comercio',
      description: 'Soluciones para tiendas y centros comerciales',
      link: '#contacto'
    },
    {
      name: 'Salud & Medicina',
      description: 'Conectividad segura para centros médicos',
      link: '#contacto'
    },
    {
      name: 'Educación',
      description: 'Redes para colegios y universidades',
      link: '#contacto'
    },
    {
      name: 'Hostelería',
      description: 'WiFi y conectividad para hoteles y restaurantes',
      link: '#contacto'
    },
    {
      name: 'Industria',
      description: 'Redes industriales y IoT',
      link: '#contacto'
    },
    {
      name: 'Oficinas',
      description: 'Conectividad completa para espacios de trabajo',
      link: '#contacto'
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
                src={`${import.meta.env.BASE_URL}Arista - Logotipo Final Positivo.png`} 
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
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-light text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 mb-4 font-light">{service.description}</p>
                  <a 
                    href={service.link}
                    className="text-blue-400 hover:text-blue-300 font-light transition-colors"
                  >
                    Más información →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-thin text-white text-center mb-12">
            Soluciones por Sector
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-xl font-light text-white mb-2">{industry.name}</h3>
                <p className="text-white/80 mb-4 font-light">{industry.description}</p>
                <a 
                  href={industry.link}
                  className="text-blue-400 hover:text-blue-300 font-light transition-colors"
                >
                  Ver soluciones →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-thin text-white mb-6">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-light">
            Nuestros expertos están listos para diseñar la solución perfecta para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setShowCRMModal(true)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-light"
            >
              Solicitar Consulta Gratuita
            </button>
            <a 
              href="tel:+34621192578" 
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-light inline-block text-center"
            >
              📞 Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src={`${import.meta.env.BASE_URL}Arista - Logotipo Final Positivo.png`} 
                alt="Arista" 
                className="h-16 mb-4"
              />
              <p className="text-white/60 font-light">
                Conectividad empresarial de nueva generación
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-light mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-white font-light transition-colors">Fibra Empresarial</a></li>
                <li><a href="#" className="text-white/60 hover:text-white font-light transition-colors">Telefonía IP</a></li>
                <li><a href="#" className="text-white/60 hover:text-white font-light transition-colors">Cloud Computing</a></li>
                <li><a href="#" className="text-white/60 hover:text-white font-light transition-colors">Ciberseguridad</a></li>
              </ul>
            </div>
            

            
            <div>
              <h4 className="text-white font-light mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-white/60 font-light">📞 621 192 578</li>
                <li className="text-white/60 font-light">✉️ info@aristamovil.com</li>
                <li className="text-white/60 font-light">📍 Alicante, España</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-white/60 font-light">
              © 2024 Arista Telecomunicaciones. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* CRM Contact Modal */}
      {showCRMModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Solicitar Consulta Gratuita</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              
              try {
                const result = await sendContactEmail({
                  name: formData.get('contacto') as string,
                  email: formData.get('email') as string,
                  phone: formData.get('telefono') as string,
                  service: 'Consulta CRM Empresarial',
                  description: `Empresa: ${formData.get('empresa')}
Empleados: ${formData.get('empleados')}
Servicios de interés: ${formData.get('servicios')}`
                });
                
                if (result.success) {
                  setShowCRMModal(false);
                  setShowSuccessMessage(true);
                  setTimeout(() => setShowSuccessMessage(false), 5000);
                } else {
                  alert('Error al enviar la solicitud. Por favor, inténtelo de nuevo.');
                }
              } catch (error) {
                console.error('Error:', error);
                alert('Error al enviar la solicitud. Por favor, inténtelo de nuevo.');
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Nombre de la empresa</label>
                  <input type="text" name="empresa" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Persona de contacto</label>
                  <input type="text" name="contacto" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" name="telefono" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Número de empleados</label>
                  <select name="empleados" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Seleccionar...</option>
                    <option value="1-10">1-10 empleados</option>
                    <option value="11-50">11-50 empleados</option>
                    <option value="51-200">51-200 empleados</option>
                    <option value="200+">Más de 200 empleados</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Servicios de interés</label>
                  <textarea name="servicios" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} placeholder="Describe qué servicios te interesan..."></textarea>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-light">
                  Enviar solicitud
                </button>
                <button type="button" onClick={() => setShowCRMModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-light">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="font-light">¡Solicitud enviada correctamente! Te contactaremos pronto.</p>
        </div>
      )}

      {/* Consultoria Contact Modal */}
      {showConsultoriaModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Solicitar Consultoría</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const consultoriaData = {
                 name: formData.get('contacto') as string,
                 email: formData.get('email') as string,
                 phone: formData.get('telefono') as string,
                 service: 'Consultoría Empresarial',
                 description: `Empresa: ${formData.get('empresa')}\nTipo: ${formData.get('tipo')}\nDescripción: ${formData.get('descripcion')}`
               };
              
              try {
                await sendContactEmail(consultoriaData);
                setShowConsultoriaModal(false);
                setShowConsultoriaSuccessMessage(true);
                setTimeout(() => setShowConsultoriaSuccessMessage(false), 5000);
              } catch (error) {
                console.error('Error al enviar consultoría:', error);
                alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Nombre de la empresa</label>
                  <input type="text" name="empresa" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Persona de contacto</label>
                  <input type="text" name="contacto" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" name="telefono" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Tipo de consultoría</label>
                  <select name="tipo" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Seleccionar...</option>
                    <option value="infraestructura">Infraestructura de red</option>
                    <option value="ciberseguridad">Ciberseguridad</option>
                    <option value="cloud">Migración a la nube</option>
                    <option value="telefonia">Telefonía empresarial</option>
                    <option value="general">Consultoría general</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Descripción del proyecto</label>
                  <textarea name="descripcion" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} placeholder="Describe tu proyecto o necesidades..."></textarea>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-light">
                  Solicitar consultoría
                </button>
                <button type="button" onClick={() => setShowConsultoriaModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-light">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Consultoria Success Message */}
      {showConsultoriaSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="font-light">¡Solicitud de consultoría enviada! Nuestros expertos te contactarán pronto.</p>
        </div>
      )}

      {/* Plan Contact Modal */}
      {showPlanModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Contratar Plan: {selectedPlan}</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const planData = {
                 name: formData.get('contacto') as string,
                 email: formData.get('email') as string,
                 phone: formData.get('telefono') as string,
                 planName: selectedPlan || 'Plan empresarial',
                 planPrice: 0,
                 planFeatures: [`Empresa: ${formData.get('empresa')}`, `Dirección: ${formData.get('direccion')}`, `Comentarios: ${formData.get('comentarios')}`]
               };
              
              try {
                await sendPlanRequestEmail(planData);
                setShowPlanModal(false);
                setShowPlanSuccessMessage(true);
                setTimeout(() => setShowPlanSuccessMessage(false), 5000);
              } catch (error) {
                console.error('Error al enviar solicitud de plan:', error);
                alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Nombre de la empresa</label>
                  <input type="text" name="empresa" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Persona de contacto</label>
                  <input type="text" name="contacto" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" name="telefono" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Dirección de instalación</label>
                  <textarea name="direccion" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={2} placeholder="Dirección completa donde instalar el servicio..."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Comentarios adicionales</label>
                  <textarea name="comentarios" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} placeholder="Cualquier información adicional..."></textarea>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-light">
                  Contratar plan
                </button>
                <button type="button" onClick={() => setShowPlanModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-light">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Plan Success Message */}
      {showPlanSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="font-light">¡Solicitud de contratación enviada! Te contactaremos para finalizar el proceso.</p>
        </div>
      )}

      {/* Office Service Modal */}
      {showOfficeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Contratar: {selectedOfficeService}</h3>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const officeData = {
                 name: formData.get('contacto') as string,
                 email: formData.get('email') as string,
                 phone: formData.get('telefono') as string,
                 service: selectedOfficeService || 'Servicio de oficina',
                 description: `Empresa: ${formData.get('empresa')}\nLíneas necesarias: ${formData.get('lineas')}\nComentarios: ${formData.get('comentarios')}`
               };
              
              try {
                await sendContactEmail(officeData);
                setShowOfficeModal(false);
                setShowOfficeSuccessMessage(true);
                setTimeout(() => setShowOfficeSuccessMessage(false), 5000);
              } catch (error) {
                console.error('Error al enviar solicitud de servicio:', error);
                alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Nombre de la empresa</label>
                  <input type="text" name="empresa" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Persona de contacto</label>
                  <input type="text" name="contacto" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Teléfono</label>
                  <input type="tel" name="telefono" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Número de líneas necesarias</label>
                  <input type="number" name="lineas" min="1" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-1">Comentarios adicionales</label>
                  <textarea name="comentarios" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows={3} placeholder="Describe tus necesidades específicas..."></textarea>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button type="submit" className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-light">
                  Solicitar servicio
                </button>
                <button type="button" onClick={() => setShowOfficeModal(false)} className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-light">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Office Success Message */}
      {showOfficeSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50">
          <p className="font-light">¡Solicitud enviada correctamente! Te contactaremos para configurar tu servicio.</p>
        </div>
      )}
    </div>
  );
};

export default EmpresasPage;