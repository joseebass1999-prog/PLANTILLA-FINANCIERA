/**
 * Helper to dispatch standard Meta Pixel (Facebook Pixel) events.
 */
export function trackInitiateCheckout() {
  console.log('⚡ [Meta Pixel] Tracking standard "InitiateCheckout" event for ID 1680170726301028...');
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
