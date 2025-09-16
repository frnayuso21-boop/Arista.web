# Guía de Despliegue - Arista Móvil

## 📋 Pasos para Publicar los Cambios

### 1. Preparar el Build de Producción

```bash
# Instalar dependencias (si no están instaladas)
npm install

# Crear build de producción
npm run build
```

### 2. Verificar el Build

```bash
# Previsualizar el build localmente
npm run preview
```

### 3. Opciones de Despliegue

#### Opción A: Netlify (Recomendado)

1. **Conectar repositorio:**
   - Sube tu código a GitHub/GitLab
   - Conecta tu repositorio en Netlify
   - Configura:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Despliegue automático:**
   - Cada push a main desplegará automáticamente

#### Opción B: Vercel

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar:**
   ```bash
   vercel --prod
   ```

#### Opción C: GitHub Pages

1. **Instalar gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agregar scripts al package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Desplegar:**
   ```bash
   npm run deploy
   ```

#### Opción D: Servidor Propio (VPS/Hosting)

1. **Crear build:**
   ```bash
   npm run build
   ```

2. **Subir carpeta `dist` al servidor:**
   - Via FTP/SFTP
   - Via rsync
   - Via panel de control del hosting

### 4. Configuración del Dominio

#### Para dominios personalizados:

1. **Configurar DNS:**
   - Tipo A: apunta a la IP del servidor
   - Tipo CNAME: apunta al subdominio del servicio

2. **Configurar HTTPS:**
   - La mayoría de servicios (Netlify, Vercel) incluyen SSL automático
   - Para servidores propios, usar Let's Encrypt

### 5. Variables de Entorno (Producción)

Crear archivo `.env.production`:

```env
VITE_API_URL=https://tu-api-produccion.com
VITE_GTM_ID=GTM-XXXXXXX
VITE_CONTACT_EMAIL=info@aristamovil.com
```

### 6. Optimizaciones Pre-Despliegue

#### Comprimir imágenes:
```bash
# Instalar herramienta de optimización
npm install --save-dev imagemin imagemin-webp
```

#### Verificar performance:
```bash
# Analizar bundle
npm run build -- --analyze
```

### 7. Checklist Pre-Despliegue

- [ ] ✅ Todas las páginas funcionan correctamente
- [ ] ✅ Formularios envían emails correctamente
- [ ] ✅ Navegación entre páginas funciona
- [ ] ✅ Responsive design en móviles
- [ ] ✅ Imágenes optimizadas
- [ ] ✅ SEO configurado (meta tags, sitemap)
- [ ] ✅ Analytics configurado
- [ ] ✅ Políticas de privacidad y cookies

### 8. Monitoreo Post-Despliegue

- **Google Analytics:** Verificar tráfico
- **Google Search Console:** Verificar indexación
- **PageSpeed Insights:** Verificar performance
- **Uptime monitoring:** Verificar disponibilidad

## 🚀 Comando Rápido para Despliegue

```bash
# Script completo de despliegue
npm run build && npm run preview
```

## 📞 Soporte

Si necesitas ayuda con el despliegue:
- Email: info@aristamovil.com
- Teléfono: 621 192 578

---

**Nota:** Todos los cambios implementados (página de seguridad y energía) están listos para producción.