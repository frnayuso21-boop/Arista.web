import React, { useState, useRef, useEffect, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty' | 'skeleton';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  format?: 'auto' | 'webp' | 'avif' | 'jpg' | 'png';
  fetchPriority?: 'high' | 'low' | 'auto';
  onLoad?: () => void;
  onError?: () => void;
  onLoadingComplete?: (result: { naturalWidth: number; naturalHeight: number }) => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  sizes,
  quality = 85,
  loading = 'lazy',
  format = 'auto',
  fetchPriority = 'auto',
  onLoad,
  onError,
  onLoadingComplete
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [supportedFormat, setSupportedFormat] = useState<string>('jpg');
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const loadStartTime = useRef<number>(0);

  // Detectar soporte de formatos modernos
  const detectFormatSupport = useCallback(async () => {
    if (format !== 'auto') {
      setSupportedFormat(format);
      return;
    }

    // Test AVIF support
    const avifSupport = await new Promise<boolean>((resolve) => {
      const avif = new Image();
      avif.onload = () => resolve(true);
      avif.onerror = () => resolve(false);
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });

    if (avifSupport) {
      setSupportedFormat('avif');
      return;
    }

    // Test WebP support
    const webpSupport = await new Promise<boolean>((resolve) => {
      const webp = new Image();
      webp.onload = () => resolve(true);
      webp.onerror = () => resolve(false);
      webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });

    setSupportedFormat(webpSupport ? 'webp' : 'jpg');
  }, [format]);

  useEffect(() => {
    detectFormatSupport();
  }, [detectFormatSupport]);

  // Optimizar URL con formato y calidad
  const optimizeImageUrl = useCallback((url: string, targetWidth?: number, targetFormat?: string) => {
    const params = new URLSearchParams();
    
    if (targetWidth) params.set('w', targetWidth.toString());
    params.set('q', quality.toString());
    if (targetFormat && targetFormat !== 'jpg') params.set('f', targetFormat);
    params.set('auto', 'compress,format');
    params.set('cs', 'srgb');
    
    return `${url}${url.includes('?') ? '&' : '?'}${params.toString()}`;
  }, [quality]);

  // Intersection Observer ultra-optimizado para lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadStartTime.current = performance.now();
            setIsInView(true);
            observer.disconnect();
            
            // Preload siguiente imagen si está disponible
            const nextImg = entry.target.nextElementSibling?.querySelector('img');
            if (nextImg && !nextImg.complete) {
              const link = document.createElement('link');
              link.rel = 'prefetch';
              link.href = nextImg.src;
              document.head.appendChild(link);
            }
          }
        });
      },
      {
        rootMargin: priority ? '0px' : '100px 0px', // Más agresivo para imágenes críticas
        threshold: [0, 0.1, 0.25],
        // @ts-ignore - Experimental feature
        trackVisibility: true,
        delay: 100
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  // Generar srcset ultra-optimizado con formatos modernos
  const generateSrcSet = useCallback((baseSrc: string, baseWidth?: number, targetFormat?: string) => {
    if (!baseWidth) return '';
    
    const densities = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3]; // Más densidades para mejor adaptación
    const format = targetFormat || supportedFormat;
    
    return densities
      .map(density => {
        const scaledWidth = Math.round(baseWidth * density);
        const optimizedUrl = optimizeImageUrl(baseSrc, scaledWidth, format);
        return `${optimizedUrl} ${scaledWidth}w`;
      })
      .join(', ');
  }, [supportedFormat, optimizeImageUrl]);

  // Generar sizes attribute inteligente
  const generateSizes = useCallback((baseWidth?: number) => {
    if (sizes) return sizes;
    if (!baseWidth) return '100vw';
    
    // Responsive breakpoints optimizados
    return `(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, ${baseWidth}px`;
  }, [sizes]);

  const handleLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    const loadTime = performance.now() - loadStartTime.current;
    
    setIsLoaded(true);
    
    // Métricas de rendimiento para Core Web Vitals
    if (loadTime > 0) {
      // Report LCP candidate
      if (priority && 'PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                console.log(`LCP: ${entry.startTime}ms for image: ${src}`);
              }
            });
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // Silently fail if not supported
        }
      }
    }
    
    onLoad?.();
    onLoadingComplete?.({
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight
    });
  }, [onLoad, onLoadingComplete, priority, src]);

  const handleError = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    
    // Log error for debugging
    console.warn(`Failed to load image: ${src}`, event);
    
    onError?.();
  }, [onError, src]);

  // Placeholder ultra-moderno mientras carga
  const renderPlaceholder = useCallback(() => {
    const baseClasses = `absolute inset-0 transition-all duration-500 ease-out ${
      isLoaded ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
    }`;

    if (placeholder === 'blur' && blurDataURL) {
      return (
        <div
          className={baseClasses}
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px) brightness(1.1)',
            transform: 'scale(1.05)',
            willChange: 'transform, opacity'
          }}
        />
      );
    }

    if (placeholder === 'skeleton') {
      return (
        <div className={baseClasses}>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div
        className={`${baseClasses} bg-gradient-to-br from-gray-100 to-gray-200`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer" />
      </div>
    );
  }, [placeholder, blurDataURL, isLoaded]);

  // Error fallback
  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={placeholderRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder */}
      {!isLoaded && renderPlaceholder()}
      
      {/* Imagen principal ultra-optimizada */}
      {isInView && (
        <img
          ref={imgRef}
          src={optimizeImageUrl(src, width, supportedFormat)}
          srcSet={width ? generateSrcSet(src, width, supportedFormat) : undefined}
          sizes={generateSizes(width)}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding="async"
          fetchPriority={fetchPriority}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-all duration-500 ease-out transform ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } ${width && height ? 'object-cover' : ''}`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            willChange: 'transform, opacity',
            contentVisibility: 'auto',
            containIntrinsicSize: width && height ? `${width}px ${height}px` : 'auto'
          }}
        />
      )}
    </div>
  );
};

// Hook para precargar imágenes críticas
export const useImagePreload = (src: string, priority: boolean = false) => {
  useEffect(() => {
    if (!priority) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [src, priority]);
};

// Componente específico para logos e iconos
export const OptimizedLogo: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}> = ({ src, alt, width, height, className }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={true}
      loading="eager"
      quality={90}
    />
  );
};

// Componente para imágenes de hero/banner
export const OptimizedHero: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      priority={true}
      loading="eager"
      quality={85}
      sizes="100vw"
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
};

export default OptimizedImage;