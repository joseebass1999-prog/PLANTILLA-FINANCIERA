// src/components/UrgencyHeader.tsx
import { useState, useEffect, useRef } from 'react';
import { useUrgencyTimer } from '../hooks/useUrgencyTimer';
import { trackInitiateCheckout } from '../lib/pixel';
import { HOTMART_CHECKOUT_URL } from '../lib/constants';
import { ArrowRight, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function getBuyerInfoForSpots(spots: number) {
  switch (spots) {
    case 6:
      return { name: 'Marcos de Bogotá', location: 'Colombia 🇨🇴', text: 'acaba de adquirir el sistema. ¡Quedan solo 6 licencias!' };
    case 5:
      return { name: 'Laura de Medellín', location: 'Colombia 🇨🇴', text: 'acaba de adquirir el sistema. ¡Quedan solo 5 licencias!' };
    case 4:
      return { name: 'Sebastián de Santiago', location: 'Chile 🇨🇱', text: 'acaba de adquirir el sistema. ¡Quedan solo 4 licencias!' };
    case 3:
      return { name: 'Mónica de Lima', location: 'Perú 🇵🇪', text: 'acaba de adquirir el sistema. ¡Quedan solo 3 licencias!' };
    case 2:
      return { name: 'Sofía de Ciudad de México', location: 'México 🇲🇽', text: 'acaba de adquirir el sistema. ¡Quedan solo 2 licencias!' };
    default:
      return null;
  }
}

export default function UrgencyHeader() {
  const { formattedTime, spotsLeft, currentDayName } = useUrgencyTimer();
  const [notification, setNotification] = useState<{ text: string; location: string; name: string } | null>(null);
  const prevSpotsRef = useRef<number>(spotsLeft);

  useEffect(() => {
    if (spotsLeft < prevSpotsRef.current) {
      const buyerInfo = getBuyerInfoForSpots(spotsLeft);
      if (buyerInfo) {
        setNotification(buyerInfo);
        const timer = setTimeout(() => {
          setNotification(null);
        }, 8000);
        return () => clearTimeout(timer);
      }
    }
    prevSpotsRef.current = spotsLeft;
  }, [spotsLeft]);

  const handleCTAClick = () => {
    trackInitiateCheckout(9.00, 'USD');
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  return (
    <div className="sticky top-0 z-50 w-full flex flex-col">
      {/* Primary Sticky Header */}
      <div className="w-full bg-[#0a0e1a] border-b border-rose-900/60 shadow-xl shadow-slate-950/20">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
          
          {/* Left Side: Badge and status message */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
            {/* Rose badge */}
            <span className="inline-flex items-center gap-1 bg-rose-950 border border-rose-800 text-rose-300 font-black text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full">
              <Flame className="w-3 h-3 text-rose-400 animate-pulse" />
              FOMO / CUPOS LIMITADOS
            </span>

            {/* LED Indicator & Live Text */}
            <div className="flex items-center gap-2 text-slate-200 text-xs font-semibold">
              {/* Pulsing Red LED */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
              </span>
              
              <span>
                ¡Atención! Quedan solo{' '}
                <span className="font-black px-2 py-0.5 mx-0.5 rounded bg-slate-900 border border-slate-800 text-amber-400 font-mono text-xs shadow-inner">
                  {spotsLeft}
                </span>{' '}
                licencias disponibles para este <span className="text-amber-300 font-bold underline decoration-rose-500 underline-offset-2">{currentDayName}</span>. Oferta de un único pago ($9) se cerrará pronto.
              </span>
            </div>
          </div>

          {/* Right Side: Timer & Green CTA */}
          <div className="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto">
            {/* Countdown timer */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden lg:inline">
                El descuento expira en:
              </span>
              <div className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-md font-mono text-sm font-black text-rose-500 shadow-inner flex items-center gap-1">
                <span className="text-[10px] text-rose-800 font-sans tracking-tight">MIN</span>
                <span className="text-amber-400 tracking-wider font-bold">{formattedTime}</span>
              </div>
            </div>

            {/* Elegant Green CTA */}
            <motion.button
              onClick={handleCTAClick}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden group bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2.5 rounded-lg uppercase tracking-wider shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              {/* Shine effect animation */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              
              <span>Comprar por $9 USD</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-900 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>

      {/* Synchronized Purchase Alert (Slides down like "desprenderse") */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="w-full bg-[#10b981] text-slate-950 font-bold text-xs py-2 px-4 shadow-xl text-center border-t border-emerald-400 flex items-center justify-center gap-2 overflow-hidden z-40"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-950"></span>
            </span>
            <span className="uppercase tracking-wide">
              🎉 <strong>{notification.name}</strong> ({notification.location}) {notification.text}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
