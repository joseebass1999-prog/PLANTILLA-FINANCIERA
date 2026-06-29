// src/App.tsx
import { useEffect } from 'react';
import UrgencyHeader from './components/UrgencyHeader';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import Problem from './components/Problem';
import SolutionSimulator from './components/SolutionSimulator';
import Benefits from './components/Benefits';
import VideosSection from './components/VideosSection';
import Simplicity from './components/Simplicity';
import Testimonials from './components/Testimonials';
import OfferCheckout from './components/OfferCheckout';
import Warranty from './components/Warranty';
import Footer from './components/Footer';
import ExitIntentModal from './components/ExitIntentModal';
import LiveSalesNotifier from './components/LiveSalesNotifier';
import ReceivedModules from './components/ReceivedModules';
import PriceSummary from './components/PriceSummary';
import FAQ from './components/FAQ';
import Authority from './components/Authority';
import { trackPageView } from './lib/pixel';

export default function App() {
  useEffect(() => {
    // Track page view immediately on load
    trackPageView();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#10b981] selection:text-slate-950 font-sans antialiased font-medium">
      
      {/* 1. Sticky Urgency Header / Bar */}
      <UrgencyHeader />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Trust Bar badges */}
        <TrustBar />

        {/* 4. Beneficios rápidos */}
        <Benefits />

        {/* 5. Todo lo que recibirás hoy (Módulos Premium) */}
        <ReceivedModules />

        {/* 6. Precio resumido */}
        <PriceSummary />

        {/* 7. Video demostración */}
        <VideosSection />

        {/* 8. Beneficios completos (Problem Awareness & Simulator) */}
        <Problem />
        <SolutionSimulator />

        {/* 9. Cómo funciona & Comparativa */}
        <Simplicity />

        {/* 10. Autoridad - ¿Por qué este sistema funciona? */}
        <Authority />

        {/* 11. Testimonios */}
        <Testimonials />

        {/* 12. Garantía */}
        <Warranty />

        {/* 13. Preguntas frecuentes (FAQ) - Resuelve objeciones antes de la compra final */}
        <FAQ />

        {/* 14. Precio final & Checkout Column */}
        <OfferCheckout />
      </main>

      {/* 15. Footer with disclosures */}
      <Footer />

      {/* 16. Exit Intent Popup Modal */}
      <ExitIntentModal />

      {/* 17. Real-time floating purchase toasts */}
      <LiveSalesNotifier />

    </div>
  );
}
