import React, { useState } from 'react';
import { X, CreditCard, Shield, CheckCircle, Loader2 } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
}

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const ContractModal: React.FC<ContractModalProps> = ({ isOpen, onClose, plan }) => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    lastName: '',
    email: '',
    phone: '',
    dni: '',
    
    // Address
    address: '',
    city: '',
    postalCode: '',
    
    // Payment
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Terms
    acceptTerms: false,
    acceptPrivacy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nombre obligatorio';
    if (!formData.lastName.trim()) newErrors.lastName = 'Apellidos obligatorios';
    if (!formData.email.trim()) newErrors.email = 'Email obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Teléfono obligatorio';
    if (!formData.dni.trim()) newErrors.dni = 'DNI obligatorio';
    if (!formData.address.trim()) newErrors.address = 'Dirección obligatoria';
    if (!formData.city.trim()) newErrors.city = 'Ciudad obligatoria';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Código postal obligatorio';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.cardNumber.replace(/\s/g, '')) newErrors.cardNumber = 'Número de tarjeta obligatorio';
    if (!formData.expiryDate) newErrors.expiryDate = 'Fecha de vencimiento obligatoria';
    if (!formData.cvv) newErrors.cvv = 'CVV obligatorio';
    if (!formData.cardName.trim()) newErrors.cardName = 'Nombre del titular obligatorio';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'Debe aceptar los términos';
    if (!formData.acceptPrivacy) newErrors.acceptPrivacy = 'Debe aceptar la política de privacidad';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) return;

    setIsProcessing(true);
    
    try {
      const contractData = {
        ...formData,
        plan: {
          name: plan?.name || 'No especificado',
          price: plan?.price || 0
        }
      };

      const response = await fetch('http://localhost:3001/api/contract', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contractData)
      });

      if (response.ok) {
        setIsProcessing(false);
        setStep(3);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
        setIsProcessing(false);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error enviando contrato:', error);
      setIsProcessing(false);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  const resetModal = () => {
    setStep(1);
    setFormData({
      name: '', lastName: '', email: '', phone: '', dni: '',
      address: '', city: '', postalCode: '',
      cardNumber: '', expiryDate: '', cvv: '', cardName: '',
      acceptTerms: false, acceptPrivacy: false
    });
    setErrors({});
    setIsProcessing(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  console.log('ContractModal render - isOpen:', isOpen, 'plan:', plan);
  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white p-6 border-b border-gray-100 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Contratar {plan.name}</h2>
                <p className="text-sm text-gray-600">Paso {step} de 3</p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="p-3 hover:bg-gray-100 rounded-full transition-colors touch-manipulation"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`flex-1 h-2 rounded-full transition-colors ${
                    i <= step ? 'bg-blue-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          {step === 1 && (
            /* Step 1: Personal Information */
            <div>
              {/* Service Description Message */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">Resumen del servicio seleccionado:</h4>
                <div className="text-sm text-blue-700">
                  <p className="font-medium">{plan.name} - {plan.price}€/mes</p>
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
              
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Información personal</h3>
              
              <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                        errors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Apellidos *</label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                        errors.lastName ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                        errors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                        errors.phone ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">DNI/NIE *</label>
                  <input
                    type="text"
                    value={formData.dni}
                    onChange={(e) => setFormData({...formData, dni: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                      errors.dni ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.dni && <p className="text-red-500 text-xs mt-1">{errors.dni}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Dirección *</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                      errors.address ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ciudad *</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                        errors.city ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Código Postal *</label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base ${
                        errors.postalCode ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors touch-manipulation"
                >
                  Continuar
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            /* Step 2: Payment Information */
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Información de pago</h3>
              
              {/* Plan Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">{plan.name}</h4>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{plan.price}€/mes</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Número de tarjeta *</label>
                  <input
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                    placeholder="1234 5678 9012 3456"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.cardNumber ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Fecha vencimiento *</label>
                    <input
                      type="text"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                      placeholder="MM/AA"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.expiryDate ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.expiryDate && <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                    <input
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                      placeholder="123"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.cvv ? 'border-red-300' : 'border-gray-300'
                      }`}
                    />
                    {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre del titular *</label>
                  <input
                    type="text"
                    value={formData.cardName}
                    onChange={(e) => setFormData({...formData, cardName: e.target.value})}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.cardName ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                </div>

                <div className="space-y-3">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) => setFormData({...formData, acceptTerms: e.target.checked})}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      Acepto los <a href="#" className="text-blue-500 underline">términos y condiciones</a> *
                    </span>
                  </label>
                  {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}
                  
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.acceptPrivacy}
                      onChange={(e) => setFormData({...formData, acceptPrivacy: e.target.checked})}
                      className="mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      Acepto la <a href="#" className="text-blue-500 underline">política de privacidad</a> *
                    </span>
                  </label>
                  {errors.acceptPrivacy && <p className="text-red-500 text-xs">{errors.acceptPrivacy}</p>}
                </div>

                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Volver
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Procesando...</span>
                      </>
                    ) : (
                      <span>Contratar {plan.price}€/mes</span>
                    )}
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center space-x-2 mt-4 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Pago 100% seguro con cifrado SSL</span>
              </div>
            </div>
          )}

          {step === 3 && (
            /* Step 3: Confirmation */
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¡Contratación exitosa!</h3>
              <p className="text-gray-600 mb-6">
                Has contratado el plan <strong>{plan.name}</strong> por <strong>{plan.price}€/mes</strong>
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left">
                <h4 className="font-semibold text-blue-900 mb-2">Próximos pasos:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Recibirás un email de confirmación en breve</li>
                  <li>• Nuestro equipo técnico te contactará en 24h</li>
                  <li>• Instalación programada en 48-72h</li>
                </ul>
              </div>
              
              <button
                onClick={handleClose}
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Cerrar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContractModal;