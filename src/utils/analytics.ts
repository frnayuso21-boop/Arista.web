// Analytics and Tracking Utilities
// Funciones para tracking avanzado con GA4 y Meta Pixel

// Declaraciones globales para TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Google Analytics 4 Events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters
    });
  }
};

// Eventos específicos para Arista
export const trackPlanView = (planName: string, planPrice: number, planType: string) => {
  trackEvent('view_item', {
    item_id: planName.toLowerCase().replace(/\s+/g, '_'),
    item_name: planName,
    item_category: planType,
    price: planPrice,
    currency: 'EUR'
  });
  
  // Meta Pixel - ViewContent
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_name: planName,
      content_category: planType,
      value: planPrice,
      currency: 'EUR'
    });
  }
};

export const trackPlanContract = (planName: string, planPrice: number, planType: string) => {
  trackEvent('purchase', {
    transaction_id: `arista_${Date.now()}`,
    value: planPrice,
    currency: 'EUR',
    items: [{
      item_id: planName.toLowerCase().replace(/\s+/g, '_'),
      item_name: planName,
      item_category: planType,
      price: planPrice,
      quantity: 1
    }]
  });
  
  // Meta Pixel - Purchase
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', {
      content_name: planName,
      content_category: planType,
      value: planPrice,
      currency: 'EUR'
    });
  }
};

export const trackCoverageCheck = (postalCode: string, hasCobertura: boolean) => {
  trackEvent('coverage_check', {
    postal_code: postalCode,
    has_coverage: hasCobertura,
    event_category: 'coverage'
  });
  
  // Meta Pixel - Search
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: postalCode,
      content_category: 'coverage_check'
    });
  }
};

export const trackContactForm = (formType: string) => {
  trackEvent('generate_lead', {
    form_type: formType,
    event_category: 'lead_generation'
  });
  
  // Meta Pixel - Lead
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_category: formType
    });
  }
};

export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'contact',
    method: 'phone'
  });
  
  // Meta Pixel - Contact
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  }
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    method: 'whatsapp'
  });
  
  // Meta Pixel - Contact
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_category: 'whatsapp'
    });
  }
};

export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

// Enhanced ecommerce tracking
export const trackAddToCart = (planName: string, planPrice: number) => {
  trackEvent('add_to_cart', {
    currency: 'EUR',
    value: planPrice,
    items: [{
      item_id: planName.toLowerCase().replace(/\s+/g, '_'),
      item_name: planName,
      price: planPrice,
      quantity: 1
    }]
  });
  
  // Meta Pixel - AddToCart
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      content_name: planName,
      value: planPrice,
      currency: 'EUR'
    });
  }
};

// Scroll tracking for engagement
export const trackScroll = (percentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    event_label: `${percentage}%`,
    value: percentage
  });
};

// Time on page tracking
export const trackTimeOnPage = (seconds: number) => {
  trackEvent('timing_complete', {
    name: 'time_on_page',
    value: seconds
  });
};

// Video interaction tracking (for future use)
export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    video_title: videoName,
    event_category: 'video'
  });
};

// File download tracking
export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    event_category: 'download'
  });
};

// Custom conversion tracking
export const trackCustomConversion = (conversionName: string, value?: number) => {
  trackEvent('conversion', {
    conversion_name: conversionName,
    value: value || 1,
    event_category: 'conversion'
  });
  
  // Meta Pixel - Custom Conversion (ID: 659793453337111)
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', conversionName, {
      value: value || 1,
      currency: 'EUR'
    });
  }
};

// Initialize tracking on page load
export const initializeTracking = () => {
  // Set up scroll tracking
  let scrollPercentages = [25, 50, 75, 90];
  let trackedPercentages: number[] = [];
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);
    
    scrollPercentages.forEach(percentage => {
      if (scrollPercent >= percentage && !trackedPercentages.includes(percentage)) {
        trackScroll(percentage);
        trackedPercentages.push(percentage);
      }
    });
  };
  
  // Set up time tracking
  const startTime = Date.now();
  
  const trackTimeBeforeUnload = () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    trackTimeOnPage(timeSpent);
  };
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', trackTimeBeforeUnload);
  }
};

// Export all functions
export default {
  trackEvent,
  trackPlanView,
  trackPlanContract,
  trackCoverageCheck,
  trackContactForm,
  trackPhoneCall,
  trackWhatsAppClick,
  trackPageView,
  trackAddToCart,
  trackScroll,
  trackTimeOnPage,
  trackVideoPlay,
  trackDownload,
  trackCustomConversion,
  initializeTracking
};