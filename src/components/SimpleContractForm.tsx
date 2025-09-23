import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, CheckCircle, Loader2, MessageSquare } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface SimpleContractFormProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  comments: string;
  acceptPrivacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  comments?: string;
  acceptPrivacy?: string;
}

const SimpleContractForm: React.FC<SimpleContractFormProps> = ({ isOpen, onClose, plan }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    comments: '',
    acceptPrivacy: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nombre obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'Email obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono obligatorio';
    if (!formData.address.trim()) newErrors.address = 'Dirección obligatoria';
    if (!formData.city.trim()) newErrors.city = 'Ciudad obligatoria';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Código postal obligatorio';
    if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'Debe aceptar la política de privacidad';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const contractData = {
        ...formData,
        plan: {
          name: plan?.name || 'No especificado',
          price: plan?.price || 0,
          features: plan?.features || []
        },
        timestamp: new Date().toISOString()
      };

      const response = await fetch('/.netlify/functions/simple-contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contractData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        setIsSubmitting(false);
        alert('Error al enviar la solicitud. Por favor, inténtelo de nuevo.');
      }
    } catch (error) {
      console.error('Error enviando solicitud:', error);
      setIsSubmitting(false);
      alert('Error al enviar la solicitud. Por favor, inténtelo de nuevo.');
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', email: '', phone: '', address: '', city: '', postalCode: '', comments: '', acceptPrivacy: false
    });
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Solicitar {plan.name}</h2>
              <p className="text-sm text-gray-600">Formulario simple de contratación</p>
            </div>
            <button
              onClick={handleClose}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            /* Success Message */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud enviada!</h3>
              <p className="text-gray-600 mb-6">
                Hemos recibido tu solicitud para el plan <strong>{plan.name}</strong> por <strong>{plan.price}€/mes</strong>.
                Te contactaremos pronto a través del email proporcionado.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-blue-900 mb-2">Próximos pasos:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Nuestro equipo comercial te contactará en 24h</li>
                  <li>• Te informaremos sobre disponibilidad y proceso de instalación</li>
                </ul>
              </div>
              
              <button
                onClick={handleClose}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Cerrar
              </button>
            </div>
          ) : (
            /* Form */
            <div>
              {/* Plan Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Plan seleccionado:</h4>
                <div className="text-sm text-blue-700">
                  <p className="font-medium text-lg">{plan.name} - {plan.price}€/mes</p>
                  <div className="mt-2">
                    <p className="text-xs text-blue-600 mb-1">Incluye:</p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Datos personales */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Datos de contacto</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Tu nombre completo"
                        autoComplete="name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Tu número de teléfono"
                        autoComplete="tel"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base ${
                        errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="tu@email.com"
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Dirección */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Dirección de instalación</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Dirección completa *
                      </label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base ${
                          errors.address ? 'border-red-300 bg-red-50' : 'border-gray-300'
                        }`}
                        placeholder="Calle, número, piso, puerta"
                        autoComplete="street-address"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad *</label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base ${
                            errors.city ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="Tu ciudad"
                          autoComplete="address-level2"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal *</label>
                        <input
                          type="text"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base ${
                            errors.postalCode ? 'border-red-300 bg-red-50' : 'border-gray-300'
                          }`}
                          placeholder="12345"
                          autoComplete="postal-code"
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comentarios adicionales */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Comentarios adicionales (opcional)
                  </label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) => handleInputChange('comments', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base resize-none"
                    placeholder="¿Tienes alguna pregunta o solicitud especial? Cuéntanos aquí..."
                  />
                </div>

                {/* Política de privacidad */}
                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.acceptPrivacy}
                      onChange={(e) => handleInputChange('acceptPrivacy', e.target.checked)}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">
                      Acepto la <a href="#" className="text-blue-500 underline hover:text-blue-700">política de privacidad</a> y autorizo el tratamiento de mis datos para gestionar esta solicitud *
                    </span>
                  </label>
                  {errors.acceptPrivacy && <p className="text-red-500 text-sm mt-1">{errors.acceptPrivacy}</p>}
                </div>

                {/* Información adicional */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Nota:</strong> Esta es una solicitud de información. No se realizará ningún cargo hasta que confirmes la contratación con nuestro equipo comercial.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <span>Enviar solicitud de contratación</span>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleContractForm;