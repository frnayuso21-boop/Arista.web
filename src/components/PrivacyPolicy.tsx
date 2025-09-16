import React from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin, FileText, Users, Clock, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
          </div>
          <p className="text-gray-600 mt-2">Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Introducción</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Arista es consciente de la importancia que para usted supone el uso que hacemos de su información personal y el modo en que la compartimos. Esta Política de Privacidad tiene por objeto ayudarle a entender qué datos recopilamos, con qué finalidad los tratamos y nuestros esfuerzos por protegerlos.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Apreciamos la confianza que deposita en nosotros para que los tratemos con las garantías adecuadas y de conformidad con los principios de transparencia, minimización, limitación de la finalidad, exactitud, integridad y confidencialidad, así como respetando el resto de obligaciones y garantías establecidas en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos y garantía de los derechos digitales.
          </p>
        </div>

        {/* Section 1: Responsible */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">1. ¿Quién es el Responsable del tratamiento?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            El responsable del tratamiento es la sociedad <strong>Servicios y Telecomunicaciones Arista SL</strong>.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-700">
              Puede contactar con nuestra Delegada de Protección de Datos (DPD o DPO) enviando un correo electrónico a{' '}
              <a href="mailto:clientes@aristamovil.com" className="text-blue-600 hover:text-blue-800 font-medium">
                clientes@aristamovil.com
              </a>
              , con referencia «Oficina DPO».
            </p>
          </div>
        </div>

        {/* Section 2: Purpose and Legitimation */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Lock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">2. ¿Con qué finalidad tratamos sus datos y bajo qué legitimación?</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Tratamiento</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Finalidad</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Base de legitimación</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Datos tratados</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Plazo de conservación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Consulta de cobertura</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Gestionar la prestación de los servicios solicitados por el interesado a través de la web u otros medios digitales o electrónicos.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Relación contractual o adopción de medidas precontractuales. Aunque los servicios sean gratuitos, su prestación supone una relación contractual.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Datos identificativos y de contacto, dirección, dirección IP, otros datos personales facilitados por el interesado o solicitados para la gestión de la solicitud.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Mientras se preste el servicio, y tras ello por el plazo de prescripción de obligaciones legales.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Carrito abandonado</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">En caso de interrupción de una contratación, contactar al usuario por cualquier medio para retomarla.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Interés legítimo de retomar un proceso de contratación fallido y de conocer causas de abandono.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Datos identificativos, de contacto y otros aportados durante la contratación antes de su interrupción.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">30 días</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Comunicaciones comerciales</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Proporcionar información comercial de productos y servicios de la sociedad por cualquier medio.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Consentimiento prestado a través de los formularios de la web.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Datos identificativos y de contacto, tipología de productos o servicios y cualquier dato proporcionado en los formularios.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Mientras no se retire el consentimiento.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Comunicación a otras empresas del Grupo</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Proporcionar información comercial de productos o servicios por parte de empresas del mismo Grupo empresarial.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Consentimiento</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Datos identificativos y de contacto.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Mientras no se retire el consentimiento.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Cookies</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Conocer cómo los usuarios de la página web interactúan con ella.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Consentimiento</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Los datos especificados en la política de cookies.</td>
                  <td className="border border-gray-300 px-4 py-3 text-gray-700">Los descritos en la política de cookies.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
            <p className="text-gray-700 font-medium">
              No se tomarán decisiones automatizadas con impacto jurídico en los usuarios en ningún caso.
            </p>
          </div>
        </div>

        {/* Section 3: Data Communication */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">3. ¿A quién comunicamos sus datos?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Los datos recabados para las finalidades mencionadas no son comunicados a terceros, salvo en caso de obligación legal o requerimiento judicial, salvo que consienta la comunicación de sus datos identificativos y de contacto a otras empresas del grupo empresarial.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Por otra parte, podrán tener acceso a sus datos personales los encargados del tratamiento, es decir, los prestadores de servicios que para el desarrollo de sus funciones tengan que acceder a los datos personales. Con carácter general, los prestadores de servicios se dedican a los sectores de sistemas de información, tecnología, publicidad y televenta.
          </p>
        </div>

        {/* Section 4: International Transfers */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <MapPin className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">4. Transferencias internacionales</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            La sociedad no tiene previsto realizar transferencias internacionales de datos, salvo en casos necesarios (por ejemplo, soporte técnico). En dichos casos, se aseguran garantías adecuadas, como cláusulas contractuales tipo aprobadas por la Comisión Europea. Para más información, contacte con la Delegada de Protección de Datos.
          </p>
        </div>

        {/* Section 5: Data Retention */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">5. ¿Por cuánto tiempo conservaremos sus datos?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Con carácter general, los datos se conservarán mientras sea necesario para las finalidades previstas y, tras ello, bloqueados, hasta la prescripción de obligaciones legales derivadas del tratamiento.
          </p>
        </div>

        {/* Section 6: Rights */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">6. ¿Cuáles son sus derechos?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Conforme a la legislación, cuenta con los siguientes derechos:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho de acceso
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho de rectificación
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho de supresión
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho a la portabilidad
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho a la limitación del tratamiento
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho de oposición
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho a no ser objeto de decisiones automatizadas
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Derecho a revocar el consentimiento
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">¿Cómo ejercer sus derechos?</h3>
            <p className="text-gray-700 mb-2">
              Puede ejercer estos derechos mediante:
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-gray-700">
                  Correo electrónico: <a href="mailto:clientes@aristamovil.com" className="text-blue-600 hover:text-blue-800 font-medium">clientes@aristamovil.com</a> (referencia "Protección de Datos")
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-gray-700">Correo postal: Calle Santander, 10</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700">
            Asimismo, puede interponer una reclamación a través de la Agencia Española de Protección de Datos en{' '}
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium">
              www.aepd.es
            </a>
            .
          </p>
        </div>

        {/* Section 7: Codes of Conduct */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">7. Códigos de conducta</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Arista está adherida al Código de Conducta Tratamiento de Datos en la Actividad Publicitaria, que tiene por finalidad demostrar el cumplimiento de las obligaciones de protección de datos en los tratamientos publicitarios.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Servicios y Telecomunicaciones Arista SL</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Calle Santander, 10</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:clientes@aristamovil.com" className="hover:text-blue-200 transition-colors">
                    clientes@aristamovil.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Delegada de Protección de Datos</h3>
              <p className="text-blue-100">
                Para consultas específicas sobre protección de datos, contacte con referencia "Oficina DPO"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;