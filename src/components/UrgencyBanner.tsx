import React, { useState, useEffect } from 'react';
import { Flame, Clock, Sparkles, LogIn, TrendingDown, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface UrgencyBannerProps {
  timeLeft: number;
  spotsLeft: number;
}

export default function UrgencyBanner({ timeLeft, spotsLeft }: UrgencyBannerProps) {
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const [lastSpots, setLastSpots] = useState(spotsLeft);

  // Trigger popup notifications dynamically on real spot reductions
  useEffect(() => {
    if (spotsLeft < lastSpots) {
      showNotification(spotsLeft);
    }
    setLastSpots(spotsLeft);
  }, [spotsLeft, lastSpots]);

  const showNotification = (remainingSpots: number) => {
    const randomCities = ['Bogotá', 'Medellín', 'Santiago', 'Ciudad de México', 'Lima', 'Buenos Aires', 'Quito', 'San José'];
    const selectedCity = randomCities[Math.floor(Math.random() * randomCities.length)];
    setActiveAlert(`🔥 Alguien en ${selectedCity} acaba de adquirir "Dinero en Orden". ¡Quedan sólo ${remainingSpots} cupos!`);
    
    setTimeout(() => {
      setActiveAlert(null);
    }, 5000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Get current day name in Spanish
  const days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const currentDay = days[new Date().getDay()];

  return (
    <div className="w-full bg-slate-900 border-b border-rose-900/40 text-white relative overflow-hidden z-[51]">
      {/* Background visual subtle gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/20 via-rose-955/25 to-slate-950/35 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2 relative z-10 font-sans">
        
        {/* Scarcity Core Message */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <p className="text-[11.5px] md:text-xs font-semibold text-rose-100 flex items-center gap-1.5 flex-wrap justify-center md:justify-start">
            <span className="bg-rose-500/20 text-rose-300 font-extrabold uppercase px-1.5 py-0.5 rounded text-[10px] tracking-wider border border-rose-500/20 animate-pulse">
              FOMO / Cupos Limitados
            </span>
            <span>¡Atención! Quedan solo <strong className="text-amber-400 font-black text-xs md:text-sm">{spotsLeft} licencias disponibles</strong> para este {currentDay}. Oferta de un único pago ($9) se cerrará pronto.</span>
          </p>
        </div>

        {/* Dynamic Countdown Section */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 bg-rose-950/60 border border-rose-800/40 px-2.5 py-1 rounded-full text-rose-250">
            <Clock className="w-3.5 h-3.5 text-rose-400 animate-spin-slow" />
            <span className="text-[11px] font-bold uppercase tracking-wider">El descuento expira en:</span>
            <span className="text-xs font-black font-mono text-amber-300 bg-slate-950/100 px-1.5 py-0.5 rounded border border-rose-500/15 min-w-[42px] text-center">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

      </div>

      {/* Floating purchase notifier overlay to absolute triggers */}
      <AnimatePresence>
        {activeAlert && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex items-center justify-center font-bold text-xs p-2 text-center shadow-lg pointer-events-none z-20 border-b border-emerald-500/20"
          >
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-300 animate-bounce" />
              <span>{activeAlert}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
