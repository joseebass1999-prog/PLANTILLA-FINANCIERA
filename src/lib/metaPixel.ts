/**
 * Helper to dispatch standard Meta Pixel (Facebook Pixel) events.
 */
export function trackInitiateCheckout() {
  console.log('⚡ [Meta Pixel] Tracking standard "InitiateCheckout" event for ID 985674414285483...');
  if (typeof window !== 'undefined') {
    const w = window as any;
    if (w.fbq) {
      try {
        w.fbq('track', 'InitiateCheckout', {
          content_name: 'Dinero en Orden Licencia Vitalicia',
          currency: 'USD',
          value: 9.00
        });
        console.log('✅ [Meta Pixel] "InitiateCheckout" event dispatched successfully.');
      } catch (error) {
        console.error('❌ [Meta Pixel] Failed to dispatch "InitiateCheckout" event:', error);
      }
    } else {
      console.warn('⚠️ [Meta Pixel] window.fbq is not initialized. Event ignored.');
    }
  }
}

export function trackViewContent() {
  console.log('⚡ [Meta Pixel] Tracking standard "ViewContent" event for ID 985674414285483...');
  if (typeof window !== 'undefined') {
    const w = window as any;
    if (w.fbq) {
      try {
        w.fbq('track', 'ViewContent', {
          content_name: 'Dinero en Orden Landing Page',
          content_category: 'Sales Page',
          currency: 'USD',
          value: 9.00
        });
        console.log('✅ [Meta Pixel] "ViewContent" event dispatched successfully.');
      } catch (error) {
        console.error('❌ [Meta Pixel] Failed to dispatch "ViewContent" event:', error);
      }
    } else {
      console.warn('⚠️ [Meta Pixel] window.fbq is not initialized. Event ignored.');
    }
  }
}


