import React, { useState, useEffect } from 'react';
import { ArrowLeft, Wifi, Smartphone, Tv, Phone, CheckCircle, Router } from 'lucide-react';
import AristaLogo from './AristaLogo';

interface PlanConfiguratorProps {
  onBack: () => void;
}

interface ConfigOption {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: React.ComponentType<any>;
}

const PlanConfigurator: React.FC<PlanConfiguratorProps> = ({ onBack }) => {
  const [clientType, setClientType] = useState<string>('');
  const [selectedFibra, setSelectedFibra] = useState<string>('');
  const [selectedMovil, setSelectedMovil] = useState<string>('');
  const [selectedTV, setSelectedTV] = useState<string>('');  
  const [selectedEsim, setSelectedEsim] = useState<string>('esim-none');
  const [includeFijo] = useState<boolean>(false);
  const [additionalLines, setAdditionalLines] = useState<{type: string, count: number}[]>([]);
  const [additionalSimLines, setAdditionalSimLines] = useState<{type: string, count: number}[]>([]);
  const [esimCount, setEsimCount] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  // Detectar si viene desde empresas
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tipo = urlParams.get('tipo');
    if (tipo === 'empresa') {
      setClientType('empresa');
    }
  }, []);
  
  // Datos personales
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });
  
  // Checkboxes de privacidad
  const [acceptCookies, setAcceptCookies] = useState<boolean>(false);
  const [acceptPrivacy, setAcceptPrivacy] = useState<boolean>(false);

  // Opciones de fibra según el tipo de cliente
  const fibraOptionsParticular: ConfigOption[] = [
    { id: 'fibra-300', name: '300 Mbps', price: 29.90, description: 'Perfecto para uso básico', icon: Wifi },
    { id: 'fibra-600', name: '600 Mbps', price: 32.89, description: 'Para usuarios exigentes', icon: Wifi },
    { id: 'fibra-1gb', name: '1 Gbps', price: 37.90, description: 'Máxima velocidad', icon: Wifi }
  ];
  
  const fibraOptionsEmpresa: ConfigOption[] = [
    { id: 'fibra-300-empresa', name: 'Starter Business - 300 Mbps', price: 26.80, description: 'Fibra óptica simétrica con IP fija', icon: Wifi },
    { id: 'fibra-600-empresa', name: 'Professional - 600 Mbps', price: 37.66, description: 'Fibra óptica simétrica con Router WiFi 6', icon: Wifi },
    { id: 'fibra-1gb-empresa', name: 'Enterprise - 1000 Mbps', price: 45.75, description: 'Fibra óptica simétrica con Backup 4G', icon: Wifi }
  ];
  
  const fibraOptions = clientType === 'empresa' ? fibraOptionsEmpresa : fibraOptionsParticular;

  // Opciones móviles para particulares
  const movilOptionsParticular: ConfigOption[] = [
    { id: 'movil-none', name: 'Sin móvil', price: 0, description: 'Solo fibra', icon: Smartphone },
    { id: 'movil-40gb', name: '40 GB', price: 2.90, description: 'Voz ilimitada', icon: Smartphone },
    { id: 'movil-80gb', name: '80 GB', price: 4.90, description: 'Voz ilimitada', icon: Smartphone },
    { id: 'movil-120gb', name: '120 GB (compartidos)', price: 10.90, description: 'Con 600Mb y 1Gb', icon: Smartphone },
    { id: 'movil-200gb', name: '200 GB (compartidos)', price: 15.90, description: 'Con 600Mb y 1Gb', icon: Smartphone }
  ];

  // Opciones móviles para empresas
  const movilOptionsEmpresa: ConfigOption[] = [
    { id: 'movil-none', name: 'Sin móvil', price: 0, description: 'Solo fibra', icon: Smartphone },
    { id: 'movil-empresa-solo-voz', name: 'Solo Voz', price: 5.95, description: 'Llamadas ilimitadas', icon: Smartphone },
    { id: 'movil-empresa-15gb', name: 'Voz + 15GB', price: 7.95, description: 'Llamadas ilimitadas + 15GB', icon: Smartphone },
    { id: 'movil-empresa-40gb', name: 'Voz + 40GB', price: 9.95, description: 'Llamadas ilimitadas + 40GB', icon: Smartphone },
    { id: 'movil-empresa-80gb', name: 'Voz + 80GB', price: 11.75, description: 'Llamadas ilimitadas + 80GB', icon: Smartphone },
    { id: 'movil-empresa-160gb', name: 'Voz + 160GB', price: 15.75, description: 'Llamadas ilimitadas + 160GB', icon: Smartphone },
    { id: 'movil-empresa-ilimitado', name: 'Voz y Datos Ilimitados', price: 23.75, description: 'Sin límites', icon: Smartphone }
  ];

  const movilOptions = clientType === 'empresa' ? movilOptionsEmpresa : movilOptionsParticular;

  // Opciones eSIM solo para empresas
  const esimOptions: ConfigOption[] = [
    { id: 'esim-none', name: 'Sin líneas eSIM', price: 0, description: 'No añadir eSIM', icon: Smartphone },
    { id: 'esim-solo-voz', name: 'eSIM Solo Voz', price: 5.95, description: 'Llamadas ilimitadas + 15€ alta', icon: Smartphone },
    { id: 'esim-15gb', name: 'eSIM Voz + 15GB', price: 7.95, description: 'Llamadas ilimitadas + 15GB + 15€ alta', icon: Smartphone },
    { id: 'esim-40gb', name: 'eSIM Voz + 40GB', price: 9.95, description: 'Llamadas ilimitadas + 40GB + 15€ alta', icon: Smartphone },
    { id: 'esim-80gb', name: 'eSIM Voz + 80GB', price: 11.75, description: 'Llamadas ilimitadas + 80GB + 15€ alta', icon: Smartphone },
    { id: 'esim-160gb', name: 'eSIM Voz + 160GB', price: 15.75, description: 'Llamadas ilimitadas + 160GB + 15€ alta', icon: Smartphone },
    { id: 'esim-ilimitado', name: 'eSIM Voz y Datos Ilimitados', price: 23.75, description: 'Sin límites + 15€ alta', icon: Smartphone }
  ];

  const tvOptions: ConfigOption[] = [
    { id: 'tv-none', name: 'Sin TV', price: 0, description: 'Solo conectividad', icon: Tv },
    { id: 'tv-basic', name: 'TV Básica', price: 10, description: '50+ canales', icon: Tv },
    { id: 'tv-premium', name: 'TV Premium', price: 20, description: '100+ canales + Netflix', icon: Tv },
    { id: 'tv-ultra', name: 'TV Ultra', price: 30, description: '200+ canales + todas las apps', icon: Tv },
    { id: 'tv-deportes', name: 'Paquete Deportes', price: 350, description: 'Todos los deportes premium', icon: Tv }
  ];

  const calculateTotal = () => {
    let total = 0;
    
    const fibra = fibraOptions.find(f => f.id === selectedFibra);
    const movil = movilOptions.find(m => m.id === selectedMovil);
    const tv = tvOptions.find(t => t.id === selectedTV);
    const esim = esimOptions.find(e => e.id === selectedEsim);
    
    if (clientType === 'empresa') {
      // Cálculo para empresas: fibra + móvil + eSIM por separado
      if (fibra) total += fibra.price;
      if (movil && movil.id !== 'movil-none') total += movil.price;
      if (esim && esim.id !== 'esim-none') {
        total += esim.price;
      }
    } else {
      // Cálculo para particulares (paquetes combinados)
      if (fibra && movil && movil.id !== 'movil-none') {
        // Precios exactos de los paquetes Fibra + Móvil
        if (fibra.id === 'fibra-300') {
          if (movil.id === 'movil-40gb') total = 29.90;
        } else if (fibra.id === 'fibra-600') {
          if (movil.id === 'movil-40gb') total = 32.89;
          else if (movil.id === 'movil-80gb') total = 34.89;
          else if (movil.id === 'movil-120gb') total = 40.89;
          else if (movil.id === 'movil-200gb') total = 45.89;
        } else if (fibra.id === 'fibra-1gb') {
          if (movil.id === 'movil-40gb') total = 37.90;
          else if (movil.id === 'movil-80gb') total = 39.90;
          else if (movil.id === 'movil-120gb') total = 45.90;
          else if (movil.id === 'movil-200gb') total = 50.89;
        }
      } else if (fibra) {
        total = fibra.price;
      }
    }
    
    // Agregar precio de TV si está seleccionada
    if (tv) total += tv.price;
    
    // Agregar costo de líneas móviles adicionales (SIM física)
    additionalLines.forEach(line => {
      if (line.type === '40gb') {
        total += line.count * 5.90;
      } else if (line.type === '80gb') {
        total += line.count * 7.90;
      }
    });
    
    // Agregar costo de líneas eSIM adicionales para empresas
    if (clientType === 'empresa' && esim && esim.id !== 'esim-none' && esimCount > 1) {
      total += (esimCount - 1) * esim.price; // Primera línea ya incluida arriba
    }
    
    // El teléfono fijo viene incluido en los paquetes Fibra + Móvil
    if (includeFijo && (!selectedMovil || selectedMovil === 'movil-none')) {
      total += 5;
    }
    
    return Math.max(total, 0);
  };
  
  const calculateEsimSetupCost = () => {
    if (clientType === 'empresa' && selectedEsim !== 'esim-none') {
      return esimCount * 15; // 15€ por cada línea eSIM
    }
    return 0;
  };

  const getSelectedServices = () => {
    const services = [];
    const fibra = fibraOptions.find(f => f.id === selectedFibra);
    const movil = movilOptions.find(m => m.id === selectedMovil);
    const esim = esimOptions.find(e => e.id === selectedEsim);
    
    if (fibra) services.push(`Fibra ${fibra.name}`);
    if (movil && movil.id !== 'movil-none') services.push(`Móvil ${movil.name}`);
    
    // Agregar líneas eSIM para empresas
    if (clientType === 'empresa' && esim && esim.id !== 'esim-none' && esimCount > 0) {
      services.push(`${esimCount}x ${esim.name}`);
      if (calculateEsimSetupCost() > 0) {
        services.push(`Activación eSIM: ${calculateEsimSetupCost()}€ (pago único)`);
      }
    }
    
    // Agregar líneas móviles adicionales al resumen (para particulares)
    additionalLines.forEach(line => {
      if (line.count > 0) {
        const lineType = line.type === '40gb' ? '40GB' : '80GB';
        services.push(`${line.count}x Línea ${lineType} adicional`);
      }
    });
    
    // Agregar líneas SIM físicas adicionales para empresas
    additionalSimLines.forEach(line => {
      if (line.count > 0) {
        const option = movilOptionsEmpresa.find(opt => opt.id === line.type);
        if (option) {
          services.push(`${line.count}x ${option.name} adicional`);
        }
      }
    });
    
    // TV temporalmente deshabilitada
    // if (tv && tv.id !== 'tv-none') services.push(tv.name);
    
    // El teléfono fijo siempre está incluido
    if (selectedMovil && selectedMovil !== 'movil-none') {
      services.push('Teléfono Fijo (incluido)');
    } else if (includeFijo) {
      services.push('Fijo');
    }
    
    return services;
  };

  const handleSubmitPlan = async () => {
    if (!selectedFibra) return;
    
    // Validar campos obligatorios
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.city.trim() || !formData.postalCode.trim()) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }
    
    // Validar checkboxes
    if (!acceptCookies || !acceptPrivacy) {
      alert('Debes aceptar las cookies y la política de privacidad para continuar.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const planData = {
        fibra: fibraOptions.find(f => f.id === selectedFibra),
        movil: movilOptions.find(m => m.id === selectedMovil),
        tv: tvOptions.find(t => t.id === selectedTV),
        additionalLines,
        services: getSelectedServices(),
        totalPrice: calculateTotal(),
        timestamp: new Date().toISOString(),
        // Datos personales
        customerData: formData
      };
      
      const response = await fetch('/.netlify/functions/plan-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'plan_configuration',
          planData,
          subject: `Nueva solicitud de plan configurado - ${formData.name} - ${calculateTotal()}€/mes`
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          onBack();
        }, 3000);
      } else {
        throw new Error('Error al enviar la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar tu solicitud. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </button>
            
            <div className="flex items-center">
              <AristaLogo width={120} height={38} className="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light text-white mb-4">Configura tu Plan</h1>
            <p className="text-white/70">Personaliza tu plan según tus necesidades</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              
              {/* Selección de tipo de cliente */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Tipo de Cliente</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    onClick={() => setClientType('particular')}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      clientType === 'particular'
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5'
                    } hover:border-blue-400 hover:bg-blue-400/10`}
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-white mb-2">Particular</h4>
                      <p className="text-gray-300 text-sm">Para uso doméstico y personal</p>
                    </div>
                  </div>
                  <div
                    onClick={() => setClientType('empresa')}
                    className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                      clientType === 'empresa'
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5'
                    } hover:border-blue-400 hover:bg-blue-400/10`}
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-white mb-2">Empresa</h4>
                      <p className="text-gray-300 text-sm">Para uso profesional y empresarial</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Wifi className="w-6 h-6 mr-2" />
                  Fibra Óptica
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {fibraOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => setSelectedFibra(selectedFibra === option.id ? '' : option.id)}
                      className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                        selectedFibra === option.id
                          ? 'border-blue-500 bg-blue-500/20'
                          : 'border-white/20 bg-white/5'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-3">
                          <Router className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="font-semibold text-white mb-2">{option.name}</h4>
                        <div className="text-2xl font-bold text-blue-400 mb-1">{option.price}€/mes</div>
                        <p className="text-white/70 text-sm">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Smartphone className="w-6 h-6 mr-2" />
                  Móvil (Opcional)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {movilOptions.map((option) => {
                    // Lógica condicional según el plan de fibra seleccionado
                    let showOption = false;
                    
                    if (option.id === 'movil-none') {
                      showOption = true;
                    } else if (selectedFibra === 'fibra-300') {
                      // Fibra 300MB: solo 40GB disponible
                      showOption = option.id === 'movil-40gb';
                    } else if (selectedFibra === 'fibra-600') {
                      // Fibra 600MB: 40GB, 80GB, 120GB, 200GB compartidos
                      showOption = ['movil-40gb', 'movil-80gb', 'movil-120gb', 'movil-200gb'].includes(option.id);
                    } else if (selectedFibra === 'fibra-1gb') {
                      // Fibra 1GB: 40GB, 80GB, 120GB, 200GB compartidos
                      showOption = ['movil-40gb', 'movil-80gb', 'movil-120gb', 'movil-200gb'].includes(option.id);
                    }
                    
                    if (showOption) {
                      return (
                        <div
                          key={option.id}
                          onClick={() => setSelectedMovil(selectedMovil === option.id ? '' : option.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedMovil === option.id
                              ? 'border-purple-500 bg-purple-500/20 shadow-lg shadow-purple-500/25'
                              : 'border-white/20 bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <div className="text-center">
                            <div className="flex justify-center mb-3">
                              <Smartphone className="w-8 h-8 text-purple-400" />
                            </div>
                            <h4 className="font-semibold text-white">{option.name}</h4>
                            <div className="text-xl font-bold text-purple-400 mb-1">
                              {option.price === 0 ? 'Incluido' : `+${option.price}€`}
                            </div>
                            <p className="text-white/70 text-sm">{option.description}</p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
                
                {/* Líneas móviles adicionales */}
                {selectedMovil && selectedMovil !== 'movil-none' && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Líneas móviles adicionales</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg border border-white/20 bg-white/5">
                        <div>
                          <span className="text-white font-medium">40GB adicionales</span>
                          <p className="text-white/70 text-sm">5,90€/mes por línea</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              const existing = additionalLines.find(l => l.type === '40gb');
                              if (existing && existing.count > 0) {
                                setAdditionalLines(prev => 
                                  prev.map(l => l.type === '40gb' ? {...l, count: l.count - 1} : l)
                                    .filter(l => l.count > 0)
                                );
                              }
                            }}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-white">
                            {additionalLines.find(l => l.type === '40gb')?.count || 0}
                          </span>
                          <button
                            onClick={() => {
                              const existing = additionalLines.find(l => l.type === '40gb');
                              if (existing) {
                                setAdditionalLines(prev => 
                                  prev.map(l => l.type === '40gb' ? {...l, count: l.count + 1} : l)
                                );
                              } else {
                                setAdditionalLines(prev => [...prev, {type: '40gb', count: 1}]);
                              }
                            }}
                            className="w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 rounded-lg border border-white/20 bg-white/5">
                        <div>
                          <span className="text-white font-medium">80GB adicionales</span>
                          <p className="text-white/70 text-sm">7,90€/mes por línea</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              const existing = additionalLines.find(l => l.type === '80gb');
                              if (existing && existing.count > 0) {
                                setAdditionalLines(prev => 
                                  prev.map(l => l.type === '80gb' ? {...l, count: l.count - 1} : l)
                                    .filter(l => l.count > 0)
                                );
                              }
                            }}
                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-white">
                            {additionalLines.find(l => l.type === '80gb')?.count || 0}
                          </span>
                          <button
                            onClick={() => {
                              const existing = additionalLines.find(l => l.type === '80gb');
                              if (existing) {
                                setAdditionalLines(prev => 
                                  prev.map(l => l.type === '80gb' ? {...l, count: l.count + 1} : l)
                                );
                              } else {
                                setAdditionalLines(prev => [...prev, {type: '80gb', count: 1}]);
                              }
                            }}
                            className="w-8 h-8 rounded-full bg-purple-500 hover:bg-purple-600 flex items-center justify-center text-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Líneas eSIM - Solo para empresas */}
                {clientType === 'empresa' && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Líneas eSIM</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {esimOptions.map((option) => {
                        if (option.id === 'esim-none') {
                          return (
                            <div
                              key={option.id}
                              onClick={() => setSelectedEsim(option.id)}
                              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                                selectedEsim === option.id
                                  ? 'border-purple-500 bg-purple-500/20'
                                  : 'border-white/20 bg-white/5 hover:border-white/40'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <option.icon className="w-5 h-5 text-purple-400" />
                                  <div>
                                    <h3 className="text-white font-medium">{option.name}</h3>
                                    <p className="text-white/70 text-sm">{option.description}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="text-white font-semibold">{option.price}€/mes</span>
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={option.id}
                              onClick={() => setSelectedEsim(option.id)}
                              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                                selectedEsim === option.id
                                  ? 'border-purple-500 bg-purple-500/20'
                                  : 'border-white/20 bg-white/5 hover:border-white/40'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <option.icon className="w-5 h-5 text-purple-400" />
                                  <div>
                                    <h3 className="text-white font-medium">{option.name}</h3>
                                    <p className="text-white/70 text-sm">{option.description}</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="text-white font-semibold">{option.price}€/mes</span>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Sección de TV - Solo visible para empresas */}
              {clientType === 'empresa' && (
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Tv className="w-6 h-6 mr-2" />
                    Televisión (Opcional)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tvOptions.map((option) => {
                      // Para empresas: solo mostrar paquete de deportes
                      if (clientType === 'empresa') {
                        if (option.id !== 'tv-deportes') {
                          return null;
                        }
                      } else {
                        // Para particulares: ocultar paquete de deportes
                        if (option.id === 'tv-deportes') {
                          return null;
                        }
                      }
                      return (
                        <div
                          key={option.id}
                          onClick={() => setSelectedTV(selectedTV === option.id ? '' : option.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedTV === option.id
                              ? 'border-green-500 bg-green-500/20 shadow-lg shadow-green-500/25'
                              : 'border-white/20 bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <div className="text-center">
                            <div className="flex justify-center mb-3">
                              <Tv className="w-8 h-8 text-green-400" />
                            </div>
                            <h4 className="font-semibold text-white">{option.name}</h4>
                            <div className="text-xl font-bold text-green-400 mb-1">
                              {option.price === 0 ? 'Gratis' : `+${option.price}€`}
                            </div>
                            <p className="text-white/70 text-sm">{option.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-2" />
                  Teléfono Fijo
                </h3>
                <div className="p-4 rounded-lg border-2 border-green-500/50 bg-green-500/10">
                  <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">✓ Incluido en todos los paquetes</h4>
                    <p className="text-white/70 text-sm">Llamadas nacionales incluidas</p>
                    <div className="text-lg font-bold text-green-400 mt-2">Sin coste adicional</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-6">Resumen del Plan</h3>
                  
                  <div className="space-y-3 mb-6">
                    {getSelectedServices().length > 0 ? (
                      getSelectedServices().map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-white text-sm">{service}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-white/70 text-sm">Selecciona al menos fibra para continuar</p>
                    )}
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white">{calculateTotal()}€</div>
                    <div className="text-white/80 text-sm text-center mt-2">/mes</div>
                  </div>

                  {selectedFibra && selectedMovil && selectedMovil !== 'movil-none' && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 mb-4">
                      <p className="text-green-400 text-sm font-medium">¡Descuento combo aplicado!</p>
                      <p className="text-green-300 text-xs">-5€ por contratar fibra + móvil</p>
                    </div>
                  )}

                  {isSubmitted ? (
                    <div className="text-center py-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">¡Solicitud enviada!</h3>
                      <p className="text-white/70 text-sm">Nos pondremos en contacto contigo pronto</p>
                    </div>
                  ) : (
                    <>
                      {/* Campos de datos personales */}
                      <div className="space-y-4 mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Datos de contacto</h4>
                        
                        <div>
                          <input
                            type="text"
                            placeholder="Nombre completo *"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="tel"
                            placeholder="Teléfono *"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          />
                        </div>
                        
                        <div>
                          <input
                            type="text"
                            placeholder="Dirección *"
                            value={formData.address}
                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Ciudad *"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          />
                          <input
                            type="text"
                            placeholder="Código Postal *"
                            value={formData.postalCode}
                            onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/20 transition-all"
                          />
                        </div>
                      </div>
                      
                      {/* Checkboxes de privacidad */}
                      <div className="space-y-3 mb-6">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={acceptCookies}
                            onChange={(e) => setAcceptCookies(e.target.checked)}
                            className="mt-1 w-4 h-4 text-blue-600 bg-white/10 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-white/80 text-sm">
                            Acepto el uso de cookies para mejorar la experiencia de navegación *
                          </span>
                        </label>
                        
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={acceptPrivacy}
                            onChange={(e) => setAcceptPrivacy(e.target.checked)}
                            className="mt-1 w-4 h-4 text-blue-600 bg-white/10 border-white/30 rounded focus:ring-blue-500 focus:ring-2"
                          />
                          <span className="text-white/80 text-sm">
                            Acepto la <a href="#" className="text-blue-400 hover:text-blue-300 underline">política de privacidad</a> y el tratamiento de mis datos personales *
                          </span>
                        </label>
                      </div>
                      
                      <button
                        onClick={handleSubmitPlan}
                        disabled={!selectedFibra || isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.city.trim() || !formData.postalCode.trim() || !acceptCookies || !acceptPrivacy}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          selectedFibra && formData.name.trim() && formData.email.trim() && formData.phone.trim() && formData.address.trim() && formData.city.trim() && formData.postalCode.trim() && acceptCookies && acceptPrivacy ? 'Enviar Solicitud' : 'Completa todos los campos'
                        )}
                      </button>
                    </>
                  )}

                  <p className="text-white/60 text-xs text-center mt-3">
                    Instalación gratuita
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanConfigurator;