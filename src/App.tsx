/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
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
  
  // Unified, Synchronized Countdown clock and Spots left states
  const [timeLeft, setTimeLeft] = useState(895); // Starts with 895s (14m 55s)
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timerStoreKey = 'dinero_countdown_time_v2';
    const spotsStoreKey = 'dinero_spots_left_v2';
    
    // Timer synchronization setup
    const savedTime = localStorage.getItem(timerStoreKey);
    const now = Math.floor(Date.now() / 1000);
    
    let targetTime: number;
    if (savedTime) {
      targetTime = parseInt(savedTime, 10);
      if (targetTime < now) {
        targetTime = now + 895;
        localStorage.setItem(timerStoreKey, targetTime.toString());
      }
    } else {
      targetTime = now + 895;
      localStorage.setItem(timerStoreKey, targetTime.toString());
    }

    // Spots left synchronization setup
    const savedSpots = localStorage.getItem(spotsStoreKey);
    let initialSpots = 7;
    if (savedSpots) {
      initialSpots = parseInt(savedSpots, 10);
    } else {
      localStorage.setItem(spotsStoreKey, '7');
    }
    setSpotsLeft(initialSpots);

    // Main ticking loop for exact millisecond-perfect sync
    const interval = setInterval(() => {
      const currentNow = Math.floor(Date.now() / 1000);
      const diff = targetTime - currentNow;

      if (diff <= 0) {
        // Automatically reset loop to maintain urgency
        const newTarget = currentNow + 895;
        localStorage.setItem(timerStoreKey, newTarget.toString());
        setTimeLeft(895);
        
        localStorage.setItem(spotsStoreKey, '7');
        setSpotsLeft(7);
      } else {
        setTimeLeft(diff);
        
        // Dynamically reduce remaining spots over the 15-minute window
        let calculatedSpots = 2;
        if (diff > 750) calculatedSpots = 7;
        else if (diff > 600) calculatedSpots = 6;
        else if (diff > 450) calculatedSpots = 5;
        else if (diff > 300) calculatedSpots = 4;
        else if (diff > 150) calculatedSpots = 3;
        
        setSpotsLeft(calculatedSpots);
        localStorage.setItem(spotsStoreKey, calculatedSpots.toString());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden font-sans">
      {/* 0. Header fijo */}
      <Header onBuyClick={handleOpenCheckout} timeLeft={timeLeft} spotsLeft={spotsLeft} />

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
      <Benefits onCtaClick={handleOpenCheckout} timeLeft={timeLeft} spotsLeft={spotsLeft} />

      {/* 7. Simplicidad */}
      <Simplicity />

      {/* 9. Testimonios */}
      <Testimonials />

      {/* 10 & Checkout process: Oferta y Pasarela simulada */}
      <OfferCheckout 
        isOpen={isCheckoutOpen} 
        onOpenChange={setIsCheckoutOpen} 
        timeLeft={timeLeft} 
        spotsLeft={spotsLeft} 
      />

      {/* 11. Garantía */}
      <Warranty />

      {/* 12. Final CTA y Footer */}
      <Footer onBuyClick={handleOpenCheckout} />

      {/* Pop-up de intención de salida (Ruptura de Patrón y Retención) */}
      <ExitIntentPopup onCtaClick={handleOpenCheckout} />
    </div>
  );
}
