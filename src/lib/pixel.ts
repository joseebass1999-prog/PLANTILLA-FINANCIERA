// src/lib/pixel.ts

// Declare fbq on the global window object for TypeScript safety
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const PIXEL_ID = '985674414285483';

/**
 * Track page views
 */
export function trackPageView(): void {
  if (typeof window !== 'undefined' && window.fbq) {
    try {
      window.fbq('track', 'PageView');
    } catch (err) {
      console.warn('Failed to track PageView pixel:', err);
    }
  }
}

/**
 * Track content view
 */
export function trackViewContent(contentName: string, contentCategory: string): void {
  if (typeof window !== 'undefined') {
    // Wait for fbq to be loaded safely
    const trigger = () => {
      if (window.fbq) {
        try {
          window.fbq('track', 'ViewContent', {
            content_name: contentName,
            content_category: contentCategory,
          });
        } catch (err) {
          console.warn('Failed to track ViewContent pixel:', err);
        }
      }
    };

    if (window.fbq) {
      trigger();
    } else {
      // Retry in 500ms
      setTimeout(trigger, 500);
    }
  }
}

/**
 * Track dynamic InitiateCheckout events safely before redirect
 */
export function trackInitiateCheckout(value: number = 9.00, currency: string = 'USD'): void {
  if (typeof window !== 'undefined') {
    if (window.fbq) {
      try {
        window.fbq('track', 'InitiateCheckout', {
          value: value,
          currency: currency,
          content_name: 'Dinero en Orden Master Kit',
          content_category: 'Digital Product'
        });
        console.log('Pixel: InitiateCheckout tracked successfully');
      } catch (err) {
        console.warn('Failed to track InitiateCheckout pixel:', err);
      }
    } else {
      console.warn('fbq not loaded. Emulating pixel tracking fallback.');
    }
  }
}
