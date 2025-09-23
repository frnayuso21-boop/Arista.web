# Configuración de EmailJS para Arista Móvil

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" como proveedor
4. Configura con estos datos:
   - **Service ID**: `service_arista`
   - **Email**: `aristaenergia@gmail.com`
   - **Password**: `amvbgwirqynfesey` (contraseña de aplicación)

### 3. Crear template de email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura el template:
   - **Template ID**: `template_contact`
   - **Template Name**: `Arista Contact Form`
   - **Subject**: `Nueva consulta desde web - {{service}}`
   - **Content**:
   ```html
   <h2>Nueva consulta desde la web de Arista Móvil</h2>
   
   <p><strong>Nombre:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Teléfono:</strong> {{phone}}</p>
   <p><strong>Servicio:</strong> {{service}}</p>
   
   <h3>Mensaje:</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><em>Enviado desde el formulario web de Arista Móvil</em></p>
   <p><em>Fecha: {{current_date}}</em></p>
   ```

### 4. Obtener la clave pública
1. Ve a "Account" > "General"
2. Copia tu "Public Key"
3. Actualiza el archivo `src/services/emailService.ts`:
   ```typescript
   const EMAILJS_CONFIG = {
     SERVICE_ID: 'service_arista',
     TEMPLATE_ID: 'template_contact',
     PUBLIC_KEY: 'TU_CLAVE_PUBLICA_AQUI' // Reemplaza con tu clave
   };
   ```

### 5. Configurar el email de destino
1. En la configuración del template, configura:
   - **To Email:** `info@aristamovil.com` (IMPORTANTE: Este es tu email de destino)
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`
2. Puedes configurar múltiples destinatarios si es necesario

**NOTA IMPORTANTE:** Todos los correos de los formularios llegarán a `info@aristamovil.com`

## Ventajas de EmailJS

✅ **No requiere servidor backend**
✅ **No necesita configuración SMTP compleja**
✅ **Funciona directamente desde el frontend**
✅ **Más confiable que nodemailer en Netlify**
✅ **Plan gratuito incluye 200 emails/mes**
✅ **Fácil de configurar y mantener**

## Archivos actualizados

- ✅ `src/services/emailService.ts` - Servicio principal de EmailJS
- ✅ `src/components/ContactForm.tsx` - Formulario de contacto
- ✅ `src/components/SimpleContractForm.tsx` - Formulario de contratación
- ✅ `src/components/EnergyPage.tsx` - Formulario de energía

## Próximos pasos

1. **Configurar EmailJS** siguiendo los pasos anteriores
2. **Actualizar la clave pública** en `emailService.ts`
3. **Hacer deploy** del proyecto
4. **Probar todos los formularios**

## Notas importantes

- EmailJS tiene un límite de 200 emails gratuitos por mes
- Si necesitas más, puedes actualizar a un plan de pago
- Los emails se envían directamente desde el navegador del usuario
- Es más seguro que exponer credenciales SMTP en el código