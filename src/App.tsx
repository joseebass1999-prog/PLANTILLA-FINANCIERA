/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Problem from './components/Problem';
import SolutionSimulator from './components/SolutionSimulator';
import Videos from './components/Videos';
import Benefits from './components/Benefits';
import Simplicity from './components/Simplicity';
import Testimonials from './components/Testimonials';
import OfferCheckout from './components/OfferCheckout';
import Warranty from './components/Warranty';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      {/* 0. Header fijo */}
      <Header onBuyClick={handleOpenCheckout} />

      {/* 1. Hero block */}
      <Hero onCtaClick={handleOpenCheckout} />

      {/* 2. Barra de confianza */}
      <TrustBar />

      {/* 3. Problema */}
      <Problem />

      {/* 4. Solución (Interactive Simulator) */}
      <SolutionSimulator onCtaClick={handleOpenCheckout} />

      {/* 5. Vídeos explicativos */}
      <Videos />

      {/* 6. Beneficios */}
      <Benefits onCtaClick={handleOpenCheckout} />

      {/* 7. Simplicidad */}
      <Simplicity />

      {/* 9. Testimonios */}
      <Testimonials />

      {/* 10 & Checkout process: Oferta y Pasarela simulada */}
      <OfferCheckout isOpen={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />

      {/* 11. Garantía */}
      <Warranty />

      {/* 12. Final CTA y Footer */}
      <Footer onBuyClick={handleOpenCheckout} />

      {/* Pop-up de intención de salida (Ruptura de Patrón y Retención) */}
      <ExitIntentPopup onCtaClick={handleOpenCheckout} />
    </div>
  );
}
