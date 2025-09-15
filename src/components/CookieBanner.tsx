import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar si ya se aceptaron las cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    // Redirigir a Google si no acepta las cookies
    window.location.href = 'https://www.google.com';
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Cookie className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Política de Cookies
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Utilizamos cookies para mejorar tu experiencia de navegación, 
            analizar el tráfico del sitio y personalizar el contenido. 
            Al continuar navegando, aceptas nuestro uso de cookies.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={acceptCookies}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
          >
            Aceptar Cookies
          </button>
          
          <button
            onClick={rejectCookies}
            className="w-full border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            Rechazar y Salir
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Para más información, consulta nuestra 
            <a href="#" className="text-blue-600 hover:underline">política de privacidad</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;