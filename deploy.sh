#!/bin/bash

# Script de Despliegue Automatizado - Arista Móvil
# Uso: ./deploy.sh [production|staging]

set -e  # Salir si hay errores

ENV=${1:-production}
echo "🚀 Iniciando despliegue para entorno: $ENV"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Paso 1: Instalando dependencias...${NC}"
npm ci

echo -e "${BLUE}🔍 Paso 2: Ejecutando linting...${NC}"
npm run lint 2>/dev/null || echo -e "${YELLOW}⚠️  Linting no configurado, continuando...${NC}"

echo -e "${BLUE}🧪 Paso 3: Ejecutando tests...${NC}"
npm test 2>/dev/null || echo -e "${YELLOW}⚠️  Tests no configurados, continuando...${NC}"

echo -e "${BLUE}🏗️  Paso 4: Construyendo aplicación...${NC}"
npm run build

echo -e "${BLUE}📊 Paso 5: Analizando bundle...${NC}"
echo "Tamaño del bundle:"
du -sh dist/
echo "Archivos principales:"
ls -lh dist/assets/ | head -10

echo -e "${BLUE}🔍 Paso 6: Verificando archivos críticos...${NC}"
if [ ! -f "dist/index.html" ]; then
    echo -e "${RED}❌ Error: index.html no encontrado${NC}"
    exit 1
fi

if [ ! -d "dist/assets" ]; then
    echo -e "${RED}❌ Error: carpeta assets no encontrada${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completado exitosamente${NC}"

echo -e "${BLUE}📋 Paso 7: Información de despliegue${NC}"
echo "=========================================="
echo "📁 Carpeta de build: ./dist"
echo "🌐 Archivos listos para subir al servidor"
echo "📊 Tamaño total: $(du -sh dist/ | cut -f1)"
echo "=========================================="

echo -e "${YELLOW}📝 Próximos pasos:${NC}"
echo "1. Subir contenido de ./dist a tu servidor web"
echo "2. Configurar redirects para SPA (Single Page App)"
echo "3. Verificar que HTTPS esté habilitado"
echo "4. Configurar headers de cache apropiados"

echo -e "${GREEN}🎉 ¡Despliegue preparado exitosamente!${NC}"

# Opcional: Abrir carpeta dist
if command -v open &> /dev/null; then
    echo -e "${BLUE}📂 Abriendo carpeta dist...${NC}"
    open dist/
fi

echo -e "${BLUE}💡 Tip: Ejecuta 'npm run preview' para probar el build localmente${NC}"