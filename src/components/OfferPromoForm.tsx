import React, { useState } from 'react';
import { X, User, Mail, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { sendEmail } from '../services/emailService';

interface OfferPromoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  acceptPrivacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  acceptPrivacy?: string;
}

const OfferPromoForm: React.FC<OfferPromoFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    acceptPrivacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nombre obligatorio';
    if (!formData.email.trim()) newErrors.email = 'Email obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email no válido';
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono obligatorio';
    if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'Debe aceptar la política de privacidad';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const result = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: 'Interés en promoción de bienvenida',
        message:
          'Interés en la promoción con descuento del 50% hasta 5 meses. Entiendo que está vinculada a la contratación del suministro de luz y gas con nuestro partner energético, sin compromiso de permanencia. (Partner: Endesa)'
      });
      if (result.success) {
        setIsSubmitted(true);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '', phone: '', acceptPrivacy: false });
    setErrors({});
    setIsSubmitting(false);
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg">
        <div className="sticky top-0 bg-white p-5 border-b border-gray-100 rounded-t-2xl flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Descubrir tu oferta personalizada</h2>
            <p className="text-sm text-gray-600">Déjanos tus datos y te enviamos el detalle</p>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-5">
          {isSubmitted ? (
            <div className="text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">¡Solicitud enviada!</h3>
              <p className="text-gray-700 mb-5">Te contactaremos pronto con el detalle de tu oferta.</p>
              <button onClick={handleClose} className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">Cerrar</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'}`}
                    placeholder="600 123 456"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                <p>
                  Descubre tu oferta con descuento del 50% hasta 5 meses.
                  Condiciones asociadas al servicio energético con nuestro partner, sin compromiso de permanencia.
                </p>
              </div>

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.acceptPrivacy}
                  onChange={(e) => setFormData({ ...formData, acceptPrivacy: e.target.checked })}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  Acepto la <a href="#" className="text-blue-600 underline hover:text-blue-800">política de privacidad</a> y autorizo el tratamiento de mis datos *
                </span>
              </label>
              {errors.acceptPrivacy && <p className="text-red-500 text-sm mt-1">{errors.acceptPrivacy}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Enviando solicitud...</span>
                  </>
                ) : (
                  <span>Enviar</span>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferPromoForm;