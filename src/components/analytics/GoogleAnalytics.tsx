import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  trackingId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  trackingId = import.meta.env.VITE_GA_TRACKING_ID 
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!trackingId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.gtag = function() {
      // eslint-disable-next-line prefer-rest-params
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    return () => {
      // Cleanup script on unmount
      const scripts = document.querySelectorAll(`script[src*="${trackingId}"]`);
      scripts.forEach(script => script.remove());
    };
  }, [trackingId]);

  // Track page views on route changes
  useEffect(() => {
    if (!trackingId || !window.gtag) return;

    window.gtag('config', trackingId, {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
    });
  }, [location, trackingId]);

  return null;
};

// Custom hook for tracking events
export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPurchase = (transactionId: string, value: number, currency = 'USD') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'purchase', {
        transaction_id: transactionId,
        value: value,
        currency: currency,
      });
    }
  };

  const trackSignUp = (method: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'sign_up', {
        method: method,
      });
    }
  };

  const trackLogin = (method: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'login', {
        method: method,
      });
    }
  };

  return {
    trackEvent,
    trackPurchase,
    trackSignUp,
    trackLogin,
  };
};

export default GoogleAnalytics;

