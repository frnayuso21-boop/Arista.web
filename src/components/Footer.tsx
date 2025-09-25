
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/arista-logo.png" 
              alt="Arista Telecomunicaciones" 
              className="h-10 w-auto mb-6"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <div className="text-white text-xl font-bold mb-6 hidden">
              ARISTA
            </div>
            <p className="text-gray-300 mb-6">
              Líder en telecomunicaciones con la mejor fibra óptica y servicios móviles 5G. 
              Conectamos el futuro hoy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Particulares */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Particulares</h3>
            <ul className="space-y-3">
              <li><Link to="/fibra-300mbps-movil" className="text-gray-300 hover:text-white transition-colors">Fibra 300Mbps + Móvil</Link></li>
              <li><Link to="/fibra-600mbps-movil" className="text-gray-300 hover:text-white transition-colors">Fibra 600Mbps + Móvil</Link></li>
              <li><Link to="/fibra-1gbps-movil" className="text-gray-300 hover:text-white transition-colors">Fibra 1Gbps + Móvil</Link></li>
              <li><Link to="/movil-40gb" className="text-gray-300 hover:text-white transition-colors">Móvil 40GB</Link></li>
              <li><Link to="/movil-esim" className="text-gray-300 hover:text-white transition-colors">Móvil eSIM</Link></li>
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresas</h3>
            <ul className="space-y-3">
              <li><Link to="/empresas-servicios" className="text-gray-300 hover:text-white transition-colors">Soluciones Empresariales</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Conectividad Empresarial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Ciberseguridad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Telefonía IP</a></li>
            </ul>
          </div>

          {/* Energía */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Energía</h3>
            <ul className="space-y-3">
              <li><Link to="/energia" className="text-gray-300 hover:text-white transition-colors">Tarifas de Luz</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Energía Renovable</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tarifa Básica</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tarifa Ahorro</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tarifa Premium</a></li>
            </ul>
          </div>

          {/* Seguridad */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Seguridad</h3>
            <ul className="space-y-3">
              <li><Link to="/alarmas-basica" className="text-gray-300 hover:text-white transition-colors">Alarma Básica</Link></li>
              <li><Link to="/alarmas-premium" className="text-gray-300 hover:text-white transition-colors">Alarma Premium</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Videovigilancia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Control de Accesos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Monitorización 24/7</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Soporte</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Área Cliente</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Estado del Servicio</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contactar Soporte</a></li>
              <li><Link to="/preguntas-frecuentes" className="text-gray-300 hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-300">+34 621 192 578</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Número de teléfono</p>
                  <p className="text-gray-300">+34 621 192 578</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">info@aristamovil.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">Alicante, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Arista Telecomunicaciones. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos de Uso</a>
              <Link to="/politica-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">Política de Privacidad</Link>
              <Link to="/politica-cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;