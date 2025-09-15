import React, { useState } from 'react';
import { MapPin, CheckCircle, Wifi, Smartphone, Building2, Loader2 } from 'lucide-react';

interface CoverageSectionProps {
  onCoverageCheck: () => void;
}

const CoverageSection: React.FC<CoverageSectionProps> = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    acceptPrivacy: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.lastName.trim()) newErrors.lastName = 'Los apellidos son obligatorios';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    else if (!/^[6-9]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Número de teléfono no válido';
    }
    if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria';
    if (!formData.city.trim()) newErrors.city = 'La ciudad es obligatoria';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'El código postal es obligatorio';
    else if (!/^\d{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Código postal no válido';
    }
    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = 'Debe aceptar la política de privacidad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/coverage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsLoading(false);
        setShowResult(true);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        setIsLoading(false);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error enviando consulta de cobertura:', error);
      setIsLoading(false);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      acceptPrivacy: false
    });
    setErrors({});
    setShowResult(false);
    setIsLoading(false);
    setShowForm(false);
  };

  const scrollToParticulares = () => {
    const element = document.getElementById('particulares');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="cobertura" 
      className="py-16"
      style={{
        background: `
          radial-gradient(circle at 80% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 60% 60%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(225deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-light text-white mb-4">
              Comprueba tu Cobertura
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Verifica si nuestros servicios están disponibles en tu zona. 
              Introduce tus datos y te confirmaremos la cobertura al instante.
            </p>
          </div>

          {!showForm && !showResult && (
            <>
              {/* Coverage Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                    <Wifi className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Fibra Óptica</h3>
                  <p className="text-white/70 text-sm">
                    Hasta 1 Gbps simétrico con la mejor tecnología de fibra óptica
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                    <Smartphone className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Red 5G</h3>
                  <p className="text-white/70 text-sm">
                    Cobertura 5G en las principales ciudades con velocidades ultra rápidas
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                    <Building2 className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Empresas</h3>
                  <p className="text-white/70 text-sm">
                    Soluciones dedicadas para empresas con SLA garantizado
                  </p>
                </div>
              </div>

              {/* Coverage Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">98%</div>
                  <div className="text-white/70 text-sm">Cobertura Nacional</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">1M+</div>
                  <div className="text-white/70 text-sm">Clientes Conectados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/70 text-sm">Soporte Técnico</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-white/70 text-sm">Disponibilidad</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-medium text-white mb-4">
                  ¿Quieres saber si tenemos cobertura en tu zona?
                </h3>
                <p className="text-white/70 mb-6">
                  Completa el formulario y te confirmaremos la disponibilidad de nuestros servicios
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105"
                >
                  Comprobar Cobertura
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 flex items-center justify-center space-x-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Verificación instantánea • Sin compromiso • Totalmente gratuito</span>
              </div>
            </>
          )}

          {/* Inline Form */}
          {showForm && !showResult && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-xl font-medium text-white mb-6">
                Introduce tus datos para comprobar la cobertura
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Tu nombre"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Apellidos *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                        errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Tus apellidos"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                      errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="600 123 456"
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                      errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Calle, número, piso..."
                  />
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Ciudad *
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                        errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Tu ciudad"
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Código Postal *
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors bg-white ${
                        errors.postalCode ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="28001"
                    />
                    {errors.postalCode && <p className="text-red-400 text-xs mt-1">{errors.postalCode}</p>}
                  </div>
                </div>

                {/* Política de Privacidad */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="acceptPrivacyCoverage"
                    checked={formData.acceptPrivacy}
                    onChange={(e) => setFormData({...formData, acceptPrivacy: e.target.checked})}
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="acceptPrivacyCoverage" className="text-sm text-white">
                    Acepto la{' '}
                    <a href="#" className="text-blue-300 hover:text-blue-100 underline">
                      política de privacidad
                    </a>{' '}
                    y el tratamiento de mis datos personales *
                  </label>
                </div>
                {errors.acceptPrivacy && <p className="text-red-400 text-xs mt-1">{errors.acceptPrivacy}</p>}

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                  >
                    Cancelar
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Comprobando cobertura...</span>
                      </>
                    ) : (
                      <span>Comprobar cobertura</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Success Result */}
          {showResult && (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">¡Perfecto!</h3>
              <p className="text-lg text-white/90 mb-8">
                <strong>Correcto. Tenemos cobertura en tu zona</strong>
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    resetForm();
                    scrollToParticulares();
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Ver ofertas disponibles
                </button>
                <button
                  onClick={resetForm}
                  className="w-full bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
                >
                  Comprobar otra dirección
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;