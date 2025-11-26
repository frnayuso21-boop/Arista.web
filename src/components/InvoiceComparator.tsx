import React, { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertTriangle, Wifi, Smartphone, Tv, TrendingDown, Plus } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
import Tesseract from 'tesseract.js';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface ExtractedInvoice {
  rawText: string;
  inferredType: 'fibra' | 'movil' | 'fibra+movil' | 'fibra+movil+tv' | 'tv' | 'desconocido';
  currentMonthlyCost?: number;
  detectedServices: {
    fibra?: { speed?: string; price?: number };
    movil?: { data?: string; calls?: string; price?: number };
    tv?: { channels?: string; price?: number };
  };
  confidence: number;
}

interface PlanOption {
  id: string;
  name: string;
  type: 'fibra' | 'movil' | 'fibra+movil' | 'fibra+movil+tv' | 'tv';
  price: number;
  tags?: string[];
  description?: string;
  savings?: number;
  isRecommended?: boolean;
}

// Catálogo mejorado con planes Black Friday
const planCatalog: PlanOption[] = [
  // Fibra solo
  { id: 'fibra-300', name: 'Fibra 300 Mbps', type: 'fibra', price: 26.99, tags: ['300'], description: 'Ideal para navegación básica y streaming' },
  { id: 'fibra-600', name: 'Fibra 600 Mbps', type: 'fibra', price: 29.89, tags: ['600'], description: 'Recomendado para hogares conectados', isRecommended: true },
  { id: 'fibra-1000', name: 'Fibra 1 Gbps', type: 'fibra', price: 32.99, tags: ['1000','1gb'], description: 'Máxima velocidad para usuarios exigentes' },
  
  // Móvil solo
  { id: 'movil-40gb', name: 'Móvil 40 GB', type: 'movil', price: 19.90, tags: ['40gb'], description: 'Perfecto para uso diario' },
  { id: 'movil-esim', name: 'eSIM 15 GB', type: 'movil', price: 15.90, tags: ['esim'], description: 'Ideal para viajeros' },
  { id: 'movil-100gb', name: 'Móvil 100 GB', type: 'movil', price: 29.90, tags: ['100gb'], description: 'Para usuarios intensivos' },
  
  // Fibra + Móvil - Mensual
  { id: 'fibra600-40gb-m', name: 'Fibra 600 Mbps + 40 GB', type: 'fibra+movil', price: 32.89, tags: ['600','40gb'], description: 'Combinación perfecta' },
  { id: 'fibra1000-40gb-m', name: 'Fibra 1 Gbps + 40 GB', type: 'fibra+movil', price: 37.90, tags: ['1000','1gb','40gb'], description: 'Máxima velocidad + datos' },
  
  // Fibra + Móvil - Black Friday (Anual)
  { id: 'fibra600-40gb-bf', name: 'Fibra 600 Mbps + 40 GB - BLACK FRIDAY', type: 'fibra+movil', price: 14.08, tags: ['600','40gb','blackfriday'], description: 'Oferta limitada - Pago anual 169€', isRecommended: true },
  { id: 'fibra1000-40gb-bf', name: 'Fibra 1 Gbps + 40 GB - BLACK FRIDAY', type: 'fibra+movil', price: 17.42, tags: ['1000','1gb','40gb','blackfriday'], description: 'Oferta limitada - Pago anual 209€', isRecommended: true },
  
  // Fibra + Móvil + TV
  { id: 'fibra600-40gb-tv', name: 'Fibra 600 + 40 GB + TV', type: 'fibra+movil+tv', price: 54.90, tags: ['600','40gb','tv'], description: 'Triple pack básico' },
  { id: 'fibra1000-75gb-tv', name: 'Fibra 1 Gbps + 75 GB + TV', type: 'fibra+movil+tv', price: 61.25, tags: ['1000','1gb','75gb','tv'], description: 'Triple pack premium', isRecommended: true },
  
  // TV solo
  { id: 'tv-basico', name: 'TV Básico', type: 'tv', price: 15.00, tags: ['tv','basico'], description: 'Canales esenciales' },
  { id: 'tv-premium', name: 'TV Premium', type: 'tv', price: 25.00, tags: ['tv','premium'], description: 'Canales + plataformas' },
];

// Detección mejorada de servicios
const detectServices = (text: string): ExtractedInvoice['detectedServices'] => {
  const t = text.toLowerCase();
  const services: ExtractedInvoice['detectedServices'] = {};
  
  // Detectar Fibra
  const fibraMatch = t.match(/fibra\s+(\d+\s*mbps|\d+\s*gbps)/i);
  if (fibraMatch) {
    services.fibra = { speed: fibraMatch[1].toUpperCase() };
  }
  
  // Detectar Móvil
  const movilDataMatch = t.match(/(\d+)\s*gb\s*(?:de\s*)?datos/i);
  const movilCallsMatch = t.match(/llamadas\s*(?:ilimitadas|gratis)/i);
  if (movilDataMatch || movilCallsMatch) {
    services.movil = {
      data: movilDataMatch ? movilDataMatch[1] + ' GB' : undefined,
      calls: movilCallsMatch ? 'Ilimitadas' : undefined
    };
  }
  
  // Detectar TV
  const tvMatch = t.match(/tv|televisi[oó]n|canales/i);
  if (tvMatch) {
    services.tv = { channels: 'Incluido' };
  }
  
  return services;
};

// Inferencia mejorada del tipo
const inferPlanType = (text: string, services: ExtractedInvoice['detectedServices']): ExtractedInvoice['inferredType'] => {
  const t = text.toLowerCase();
  
  // Si detectamos servicios específicos, usarlos
  const hasFibra = !!services.fibra || /fibra|mbps|gbps|router|instalaci[oó]n/.test(t);
  const hasMovil = !!services.movil || /m[oó]vil|datos|gb\b|ilimitad|llamadas/.test(t);
  const hasTv = !!services.tv || /tv|televisi[oó]n|canales|premium|netflix|hbo/.test(t);
  
  if (hasFibra && hasMovil && hasTv) return 'fibra+movil+tv';
  if (hasFibra && hasMovil) return 'fibra+movil';
  if (hasFibra) return 'fibra';
  if (hasMovil) return 'movil';
  if (hasTv) return 'tv';
  
  return 'desconocido';
};

// Extracción mejorada de costos
const extractMonthlyCost = (text: string): number | undefined => {
  const t = text.toLowerCase();
  const euroMatches = [...text.matchAll(/(\d+[.,]?\d{0,2})\s*€|€\s*(\d+[.,]?\d{0,2})/g)];
  
  // Palabras clave para identificar el total
  const keywords = ['total', 'mensual', 'cuota', 'importe', 'factura', 'a pagar', 'suma'];
  
  let best: number | undefined;
  let bestScore = -1;
  
  for (const m of euroMatches) {
    const idx = m.index || 0;
    const window = t.slice(Math.max(0, idx - 50), Math.min(t.length, idx + 50)).toLowerCase();
    
    // Puntuación mejorada
    let score = 0;
    score += keywords.reduce((acc, k) => acc + (window.includes(k) ? 2 : 0), 0);
    score += window.includes('mensual') ? 3 : 0;
    score += window.includes('total') ? 2 : 0;
    score += /mes|mensual/.test(window) ? 2 : 0;
    
    const valueStr = (m[1] || m[2] || '').replace(',', '.');
    const value = parseFloat(valueStr);
    
    if (!isNaN(value) && value > 10 && value < 300) { // Rango razonable
      if (score > bestScore) {
        bestScore = score;
        best = value;
      }
    }
  }
  
  return best;
};

// Calcular confianza
const calculateConfidence = (text: string, services: ExtractedInvoice['detectedServices'], cost?: number): number => {
  let confidence = 0;
  
  // Por servicios detectados
  if (services.fibra) confidence += 30;
  if (services.movil) confidence += 30;
  if (services.tv) confidence += 20;
  
  // Por costo detectado
  if (cost && cost > 0) confidence += 20;
  
  // Por palabras clave
  const t = text.toLowerCase();
  if (/fibra|mbps|gbps/.test(t)) confidence += 10;
  if (/m[oó]vil|datos|gb/.test(t)) confidence += 10;
  if (/tv|televisi[oó]n/.test(t)) confidence += 10;
  
  return Math.min(confidence, 100);
};

// Extracción de texto mejorada
const extractTextFromPDF = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  let fullText = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    fullText += content.items.map((it: { str: string }) => it.str).join(' ') + '\n';
  }
  return fullText;
};

const extractTextFromImage = async (file: File): Promise<string> => {
  const { data: { text } } = await Tesseract.recognize(file, 'spa');
  return text;
};

const extractTextFromFile = async (file: File): Promise<ExtractedInvoice> => {
  let rawText = '';
  const ext = file.name.toLowerCase();
  
  try {
    if (ext.endsWith('.pdf')) {
      rawText = await extractTextFromPDF(file);
    } else if (ext.endsWith('.png') || ext.endsWith('.jpg') || ext.endsWith('.jpeg')) {
      rawText = await extractTextFromImage(file);
    } else if (ext.endsWith('.txt')) {
      rawText = await file.text();
    } else {
      rawText = await extractTextFromImage(file);
    }
  } catch {
    rawText = await file.text().catch(() => '');
  }
  
  const detectedServices = detectServices(rawText);
  const inferredType = inferPlanType(rawText, detectedServices);
  const currentMonthlyCost = extractMonthlyCost(rawText);
  const confidence = calculateConfidence(rawText, detectedServices, currentMonthlyCost);
  
  return { rawText, inferredType, currentMonthlyCost, detectedServices, confidence };
};

// Recomendaciones inteligentes
const recommendPlan = (info: ExtractedInvoice): PlanOption[] => {
  const type = info.inferredType === 'desconocido' ? 'fibra+movil' : info.inferredType;
  const candidates = planCatalog.filter(p => p.type === type);
  
  // Si solo tiene fibra, ofrecer combos con móvil
  if (type === 'fibra' && info.detectedServices.fibra) {
    candidates.push(...planCatalog.filter(p => p.type === 'fibra+movil'));
  }
  
  // Si solo tiene móvil, ofrecer combos con fibra
  if (type === 'movil' && info.detectedServices.movil) {
    candidates.push(...planCatalog.filter(p => p.type === 'fibra+movil'));
  }
  
  // Calcular ahorros
  const plansWithSavings = candidates.map(plan => {
    if (info.currentMonthlyCost) {
      const savings = info.currentMonthlyCost - plan.price;
      return { ...plan, savings: savings > 0 ? savings : 0 };
    }
    return plan;
  });
  
  // Ordenar por ahorro y destacar recomendaciones
  return plansWithSavings
    .sort((a, b) => (b.savings || 0) - (a.savings || 0))
    .slice(0, 5); // Top 5 recomendaciones
};

const InvoiceComparator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [invoice, setInvoice] = useState<ExtractedInvoice | null>(null);
  const [recommendations, setRecommendations] = useState<PlanOption[]>([]);
  // const [showDetails, setShowDetails] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setError(null);
    setInvoice(null);
    setRecommendations([]);
    if (!f) return;
    
    setLoading(true);
    try {
      const info = await extractTextFromFile(f);
      setInvoice(info);
      const recs = recommendPlan(info);
      setRecommendations(recs);
    } catch (err) {
      console.error(err);
      setError('No se pudo leer la factura. Prueba con otro formato o asegúrate de que la imagen sea clara.');
    } finally {
      setLoading(false);
    }
  };

  const getServiceIcon = (type: string) => {
    switch (type) {
      case 'fibra': return <Wifi className="w-4 h-4" />;
      case 'movil': return <Smartphone className="w-4 h-4" />;
      case 'tv': return <Tv className="w-4 h-4" />;
      case 'fibra+movil': return <div className="flex gap-1"><Wifi className="w-4 h-4" /><Smartphone className="w-4 h-4" /></div>;
      case 'fibra+movil+tv': return <div className="flex gap-1"><Wifi className="w-4 h-4" /><Smartphone className="w-4 h-4" /><Tv className="w-4 h-4" /></div>;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-700 text-white shadow-xl">
        <div className="flex items-center mb-4">
          <Upload className="w-6 h-6 mr-2" />
          <span className="font-semibold text-lg">Analizador Inteligente de Facturas</span>
        </div>
        <p className="text-white/70 mb-4">Sube tu factura actual y te mostramos las mejores ofertas personalizadas para ahorrar en tu servicio.</p>
        
        <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
          <input
            type="file"
            accept=".pdf,.png,.jpg,.jpeg,.txt"
            onChange={handleFileChange}
            className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
          />
          <div className="text-xs text-white/60 mt-2">
            Formatos admitidos: PDF, imágenes (PNG/JPG) y TXT. El análisis se realiza en tu navegador.
          </div>
        </div>
        
        {loading && (
          <div className="mt-4 text-white/80 flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Analizando factura... esto puede tardar unos segundos.
          </div>
        )}
        
        {error && (
          <div className="mt-4 text-red-300 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            {error}
          </div>
        )}
      </div>

      {invoice && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Análisis de la factura */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Análisis de tu factura actual
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                <span className="text-white/70">Servicio detectado:</span>
                <div className="flex items-center gap-2">
                  {getServiceIcon(invoice.inferredType)}
                  <span className="font-medium capitalize">{invoice.inferredType.replace('+', ' + ')}</span>
                </div>
              </div>
              
              {invoice.currentMonthlyCost && (
                <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                  <span className="text-white/70">Coste mensual actual:</span>
                  <span className="font-bold text-lg">{invoice.currentMonthlyCost.toFixed(2)}€</span>
                </div>
              )}
              
              <div className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                <span className="text-white/70">Confianza del análisis:</span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${invoice.confidence > 70 ? 'bg-green-500' : invoice.confidence > 40 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                  <span className="font-medium">{invoice.confidence}%</span>
                </div>
              </div>
            </div>
            
            {/* Servicios detectados */}
            {Object.keys(invoice.detectedServices).length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium mb-2 text-white/80">Servicios encontrados:</h3>
                <div className="space-y-2">
                  {invoice.detectedServices.fibra && (
                    <div className="flex items-center gap-2 p-2 bg-slate-800 rounded">
                      <Wifi className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Fibra: {invoice.detectedServices.fibra.speed}</span>
                    </div>
                  )}
                  {invoice.detectedServices.movil && (
                    <div className="flex items-center gap-2 p-2 bg-slate-800 rounded">
                      <Smartphone className="w-4 h-4 text-green-400" />
                      <span className="text-sm">Móvil: {invoice.detectedServices.movil.data} {invoice.detectedServices.movil.calls && `+ ${invoice.detectedServices.movil.calls}`}</span>
                    </div>
                  )}
                  {invoice.detectedServices.tv && (
                    <div className="flex items-center gap-2 p-2 bg-slate-800 rounded">
                      <Tv className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">TV: {invoice.detectedServices.tv.channels}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <details className="mt-4">
              <summary className="cursor-pointer text-white/70 hover:text-white text-sm">Ver texto extraído</summary>
              <pre className="mt-2 whitespace-pre-wrap text-xs text-white/60 max-h-32 overflow-auto bg-slate-800 p-3 rounded">{invoice.rawText}</pre>
            </details>
          </div>

          {/* Recomendaciones inteligentes */}
          <div className="bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <TrendingDown className="w-5 h-5 mr-2" />
              Recomendaciones personalizadas
            </h2>
            
            {recommendations.length === 0 ? (
              <div className="text-white/70 text-center py-8">
                No se encontraron recomendaciones para tu tipo de servicio.
              </div>
            ) : (
              <div className="space-y-3">
                {recommendations.map((plan) => (
                  <div key={plan.id} className={`p-4 rounded-xl border transition-all duration-200 ${
                    plan.isRecommended 
                      ? 'border-yellow-500 bg-yellow-500/10' 
                      : 'border-slate-700 bg-slate-800 hover:border-slate-600'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {getServiceIcon(plan.type)}
                          <h3 className="font-semibold">{plan.name}</h3>
                          {plan.isRecommended && (
                            <span className="bg-yellow-500 text-black text-xs px-2 py-0.5 rounded-full font-bold">
                              RECOMENDADO
                            </span>
                          )}
                        </div>
                        <p className="text-white/70 text-sm">{plan.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">{plan.price.toFixed(2)}€/mes</div>
                        {plan.savings && plan.savings > 0 && (
                          <div className="text-green-400 text-sm font-medium">
                            Ahorra {plan.savings.toFixed(2)}€
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <button
                      className="w-full mt-3 inline-flex items-center justify-center px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm font-medium transition-colors"
                      onClick={() => {
                        // Navegar a la sección de particulares
                        const anchor = document.getElementById('particulares');
                        if (anchor) {
                          anchor.scrollIntoView({ behavior: 'smooth' });
                          
                          // Si es un plan Black Friday, activar la vista anual
                          if (plan.id.includes('bf')) {
                            setTimeout(() => {
                              const annualToggle = document.querySelector('[data-annual-toggle="true"]') as HTMLButtonElement;
                              if (annualToggle) {
                                annualToggle.click();
                              }
                            }, 1000);
                          }
                          
                          // Resaltar el plan recomendado
                          setTimeout(() => {
                            const planElement = document.querySelector(`[data-plan-id="${plan.id}"]`);
                            if (planElement) {
                              planElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                              planElement.classList.add('ring-2', 'ring-yellow-500');
                              
                              // Remover el resaltado después de 3 segundos
                              setTimeout(() => {
                                planElement.classList.remove('ring-2', 'ring-yellow-500');
                              }, 3000);
                            }
                          }, 1500);
                        }
                      }}
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Ver detalles y contratar
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {/* Sugerencias adicionales */}
            {invoice.inferredType === 'fibra' && (
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <Plus className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-200">¿Sabías que puedes ahorrar más?</h4>
                    <p className="text-blue-300 text-sm mt-1">
                      Si solo tienes fibra, contratar un pack con móvil puede salirte más barato que tener servicios separados.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-8 text-xs text-white/60">
        <div className="flex items-start">
          <FileText className="w-4 h-4 mr-2 mt-0.5" />
          <p>
            Aviso: el análisis se realiza completamente en tu navegador para proteger tu privacidad. 
            Los cálculos son estimaciones basadas en precios públicos actuales y pueden variar según condiciones específicas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComparator;