import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Shield, Eye, Settings, Users, FileText, Mail, Phone, MapPin } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.5) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #312e81 50%, #1e1b4b 75%, #0f172a 100%)
        `
      }}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg">
              <Cookie className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Política de Cookies</h1>
              <p className="text-gray-600 mt-1">Última actualización: 26 de mayo de 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 sm:p-12">
            
            {/* Introducción */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Política de cookies usuarios</h2>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  Esta política de cookies se aplica a los ciudadanos del Espacio Económico Europeo.
                </p>
              </div>
            </div>

            {/* 1. Introducción */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">1. Introducción</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Nuestro sitio web, <span className="font-mono bg-blue-100 px-2 py-1 rounded text-blue-800">https://aristamovil.com/</span> (en adelante: «el sitio web») usa cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominarán como «cookies»). Las cookies también pueden ser colocadas por terceros que hemos contratado. En el siguiente documento le informamos sobre el uso de cookies en nuestro sitio web.
                </p>
              </div>
            </section>

            {/* 2. ¿Qué son las cookies? */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Cookie className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">2. ¿Qué son las cookies?</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Una cookie es un pequeño archivo que se envía junto con las páginas de este sitio web y que su navegador almacena en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros servidores o a los servidores de los terceros relevantes durante una visita posterior.
                </p>
              </div>
            </section>

            {/* 3. ¿Qué son los scripts? */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Settings className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">3. ¿Qué son los scripts?</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Un script es un fragmento de código de programa que se utiliza para hacer que nuestro sitio web funcione correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en su dispositivo.
                </p>
              </div>
            </section>

            {/* 4. ¿Qué es un web beacon? */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">4. ¿Qué es un web beacon?</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en un sitio web que se utiliza para monitorear el tráfico en el sitio web. Para ello, se almacenan varios datos sobre usted mediante estas balizas web.
                </p>
              </div>
            </section>

            {/* 5. Cookies */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Cookie className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">5. Cookies</h3>
              </div>
              
              {/* 5.1 Cookies técnicas */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">5.1 Cookies técnicas o funcionales</h4>
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Algunas cookies aseguran que ciertas partes del sitio web funcionen correctamente y que sus preferencias de usuario sigan siendo reconocidas. Al colocar cookies funcionales, le facilitamos la visita a nuestro sitio web. De esta manera, usted no necesita introducir repetidamente la misma información cuando visita nuestro sitio web y, por ejemplo, los artículos permanecen en su cesta de la compra hasta que usted haya pagado. Podemos colocar estas cookies sin su consentimiento.
                  </p>
                </div>
              </div>

              {/* 5.2 Cookies analíticas */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">5.2 Cookies analíticas</h4>
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Usamos cookies analíticas para optimizar la experiencia en el sitio web para nuestros usuarios. Con estas cookies analíticas obtenemos conocimientos del uso de nuestro sitio web. Te pedimos tu permiso para insertar cookies analíticas.
                  </p>
                </div>
              </div>

              {/* 5.3 Cookies de marketing */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">5.3 Cookies de marketing/seguimiento</h4>
                <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en varias webs con fines de marketing similares.
                  </p>
                </div>
              </div>

              {/* 5.4 Botones de redes sociales */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">5.4 Botones de medios sociales</h4>
                <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    En nuestro sitio web hemos incluidos botones para Instagram publicitar páginas (p.e. «like, «pin») o compartirlas (p.e. «tweet») en redes sociales como Instagram. Estos botones funcionan usando código de Instagram ellos mismos. Este código incrusta cookies. Estos botones de redes sociales pueden almacenar y procesar cierta información, de esta manera puede ser mostrado un anuncio personalizado.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Por favor lea la política de privacidad de estas redes sociales (que puede cambiar frecuentemente) para saber que hacen con tus datos (personales) que procesan usando estas cookies. Los datos que reciben son anonimizados el máximo posible. Instagram está ubicado en los Estados Unidos.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Consentimiento */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">6. Consentimiento</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Cuando visite nuestro sitio web por primera vez, le mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como haga clic en «Guardar preferencias», nos autoriza a utilizar las categorías de cookies y plug-ins que seleccionó en la ventana emergente, tal y como se describe en esta política de cookies. Usted puede desactivar el uso de cookies a través de su navegador, pero tenga en cuenta que es posible que nuestro sitio web ya no funcione correctamente.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">6.1 Administra tu configuración de consentimiento</h4>
                <p className="text-gray-600 text-sm">
                  Puede gestionar sus preferencias de cookies en cualquier momento a través del banner de cookies.
                </p>
              </div>
            </section>

            {/* 7. Sus derechos */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">7. Sus derechos con respecto a los datos personales</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Usted tiene los siguientes derechos con respecto a sus datos personales:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Usted tiene derecho a saber por qué se necesitan sus datos personales, qué sucederá con ellos y durante cuánto tiempo se conservarán.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Derecho de acceso:</strong> Tiene derecho a acceder a los datos personales que conocemos sobre usted.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Derecho de rectificación:</strong> tiene derecho a completar, rectificar, borrar o bloquear sus datos personales cuando lo desee.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Si usted nos da su consentimiento para procesar sus datos, tiene derecho a revocar dicho consentimiento y a que se eliminen sus datos personales.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Derecho de cesión de sus datos:</strong> tiene derecho a solicitar todos sus datos personales al controlador y a transferirlos íntegramente a otro controlador.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Derecho de oposición:</strong> usted puede oponerse al tratamiento de sus datos. Nosotros cumplimos con esto, a menos que existan motivos justificados para el procesamiento.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* 8. Habilitación/deshabilitación */}
            <section className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Settings className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">8. Habilitación/deshabilitación y eliminación de cookies</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Puede utilizar su navegador de Internet para eliminar las cookies de forma automática o manual. Usted también puede especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar la configuración de su navegador de Internet para que reciba un mensaje cada vez que se coloca una cookie. Para obtener más información sobre estas opciones, consulte las instrucciones de la sección Ayuda de su navegador.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Importante:</strong> Tenga en cuenta que nuestro sitio web puede no funcionar correctamente si todas las cookies están deshabilitadas. Si borra las cookies de su navegador, se volverán a colocar después de su consentimiento cuando vuelva a visitar nuestros sitios web.
                  </p>
                </div>
              </div>
            </section>

            {/* 9. Contacto */}
            <section className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">9. Detalles de contacto</h3>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, póngase en contacto con nosotros utilizando los siguientes datos de contacto:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Titular</p>
                      <p className="text-gray-700">SERVICIOS Y TELECOMUNICACIONES ARISTA S.L</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">NIF/CIF</p>
                      <p className="text-gray-700">B55476212</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:clientes@aristamovil.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                        clientes@aristamovil.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <a href="tel:621192578" className="text-blue-600 hover:text-blue-800 transition-colors">
                        621 192 578
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-700">CALLE SANTANDER 10 ALICANTE</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;