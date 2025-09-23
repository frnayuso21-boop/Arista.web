import React, { useState, useEffect } from 'react';
import { X, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan?: {
    id: string;
    name: string;
    price: number;
    features: string[];
  } | null;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  acceptPrivacy: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
    acceptPrivacy: false
  });

  // Actualizar formulario cuando cambie el plan seleccionado
  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        service: `${selectedPlan.name} - ${selectedPlan.price}€/mes`,
        description: `Estoy interesado en contratar el plan ${selectedPlan.name} por ${selectedPlan.price}€/mes.\n\nCaracterísticas incluidas:\n${selectedPlan.features.map(f => `• ${f}`).join('\n')}\n\nPor favor, contacten conmigo para proceder con la contratación.`
      }));
    }
  }, [selectedPlan]);

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
    } else if (!/^[+]?[0-9\s-()]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'El teléfono no es válido';
    }

    if (!formData.service) {
      newErrors.service = 'Selecciona un servicio';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }

    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Cerrar el modal después de 3 segundos
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: selectedPlan ? `${selectedPlan.name} - ${selectedPlan.price}€/mes` : '',
            description: selectedPlan ? `Estoy interesado en contratar el plan ${selectedPlan.name} por ${selectedPlan.price}€/mes.\n\nCaracterísticas incluidas:\n${selectedPlan.features.map(f => `• ${f}`).join('\n')}\n\nPor favor, contacten conmigo para proceder con la contratación.` : '',
            acceptPrivacy: false
          });
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        setIsSubmitting(false);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setIsSubmitting(false);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 touch-manipulation">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Solicitar información
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ¡Solicitud enviada!
              </h3>
              <p className="text-gray-600">
                Nos pondremos en contacto contigo en las próximas 24 horas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Datos personales */}
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
                    placeholder="+34 600 000 000"
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
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

              {/* Servicio de interés */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio de interés *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors text-base appearance-none bg-white ${
                    errors.service ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="fibra">Fibra Óptica</option>
                  <option value="movil">Móvil 5G</option>
                  <option value="fibra-movil">Fibra + Móvil</option>
                  <option value="empresas">Soluciones Empresariales</option>
                  <option value="otro">Otro servicio</option>
                </select>
                {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
              </div>

              {/* Descripción */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Cuéntanos qué necesitas *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none text-base ${
                    errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Describe brevemente qué servicio te interesa, para cuántas personas, ubicación, etc."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* Política de Privacidad */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={(e) => handleInputChange('acceptPrivacy', e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
                  Acepto la{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                    política de privacidad
                  </a>{' '}
                  y el tratamiento de mis datos personales *
                </label>
              </div>
              {errors.acceptPrivacy && <p className="text-red-500 text-sm mt-1">Debe aceptar la política de privacidad</p>}

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors touch-manipulation min-h-[48px] text-base font-medium"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 touch-manipulation min-h-[48px] text-base font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar consulta'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;