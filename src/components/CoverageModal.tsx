import React, { useState } from 'react';
import { X, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { sendCoverageEmail } from '../services/emailService';

interface CoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CoverageModal: React.FC<CoverageModalProps> = ({ isOpen, onClose }) => {
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
      const result = await sendCoverageEmail({
        name: `${formData.name} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        postalCode: formData.postalCode,
        address: formData.address
      });

      if (result.success) {
        setIsLoading(false);
        setShowResult(true);
      } else {
        console.error('Error:', result.message);
        setIsLoading(false);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error enviando consulta de cobertura:', error);
      setIsLoading(false);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const resetModal = () => {
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
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Comprobar Cobertura</h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {showResult ? (
            /* Success Result */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Perfecto!</h3>
              <p className="text-lg text-gray-700 mb-8">
                <strong>Correcto. Tenemos cobertura en tu zona</strong>
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => {
                    handleClose();
                    const element = document.getElementById('particulares');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Ver ofertas disponibles
                </button>
                <button
                  onClick={handleClose}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          ) : (
            /* Coverage Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tus apellidos"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="600 123 456"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dirección *
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Calle, número, piso..."
                />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ciudad *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Tu ciudad"
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código Postal *
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.postalCode ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="28001"
                  />
                  {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                </div>
              </div>

              {/* Política de Privacidad */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptPrivacyModal"
                  checked={formData.acceptPrivacy}
                  onChange={(e) => setFormData({...formData, acceptPrivacy: e.target.checked})}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="acceptPrivacyModal" className="text-sm text-gray-700">
                  Acepto la{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    política de privacidad
                  </a>{' '}
                  y el tratamiento de mis datos personales *
                </label>
              </div>
              {errors.acceptPrivacy && <p className="text-red-500 text-xs mt-1">{errors.acceptPrivacy}</p>}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverageModal;