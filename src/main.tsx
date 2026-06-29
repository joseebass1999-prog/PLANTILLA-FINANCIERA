import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Meta Pixel (Facebook Pixel) Dynamic Integration
const initFacebookPixel = () => {
  const pixelId = (import.meta as any).env?.VITE_FACEBOOK_PIXEL_ID || '';
  if (pixelId) {
    // @ts-ignore
    if (!window.fbq) {
      // @ts-ignore
      window._fbq = window.fbq = function() {
        // @ts-ignore
        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
      };
      // @ts-ignore
      if (!window._fbq) window._fbq = window.fbq;
      // @ts-ignore
      window.fbq.push = window.fbq;
      // @ts-ignore
      window.fbq.loaded = true;
      // @ts-ignore
      window.fbq.version = '2.0';
      // @ts-ignore
      window.fbq.queue = [];
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const firstScript = document.getElementsByTagName('script')[0];
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }
    // @ts-ignore
    window.fbq('init', pixelId);
    // @ts-ignore
    window.fbq('track', 'PageView');
    console.log(`[Meta Pixel] Initialized successfully with ID: ${pixelId}`);
  } else {
    console.log('[Meta Pixel] ID not configured. Set VITE_FACEBOOK_PIXEL_ID in your environment variables to enable conversion tracking.');
  }
};

try {
  initFacebookPixel();
} catch (error) {
  console.error('[Meta Pixel] Error initializing Facebook Pixel:', error);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
