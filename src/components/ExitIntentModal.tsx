// src/components/ExitIntentModal.tsx
import { useState, useEffect } from 'react';
import { trackInitiateCheckout } from '../lib/pixel';
import { HOTMART_CHECKOUT_URL } from '../lib/constants';
import { X, AlertTriangle, Coffee, ShieldAlert, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [phase, setPhase] = useState<'phase1' | 'phase2'>('phase1');

  useEffect(() => {
    // Exit intent listener (detects mouse leaving top of screen)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 15 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasTriggered]);

  const handleClaimOffer = () => {
    trackInitiateCheckout(9.00, 'USD');
    setIsOpen(false);
    
    // Attempt smooth scroll to checkout section
    const section = document.getElementById('offer-checkout-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback straight to hotmart link
      window.location.href = HOTMART_CHECKOUT_URL;
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="exit-intent-overlay" className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            id="exit-intent-card" 
            className="bg-white border-2 border-emerald-500/20 rounded-3xl max-w-lg w-full p-6 md:p-8 text-center shadow-2xl relative text-slate-800"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {phase === 'phase1' ? (
              <div className="space-y-6">
                {/* Warning Indicator with humor */}
                <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-600 border border-rose-100 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  🚨 NOTIFICACIÓN S.O.S. DE TU BILLETERA
                </div>

                {/* Bold Title with Humor */}
                <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                  ¡ALTO AHÍ! Tu billetera me pidió que te detuviera
                </h3>
                
                {/* Core Message with Humor */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  Detectamos que ibas a cerrar la pestaña. Tu tarjeta de crédito acaba de suspirar de alivio 💳, pero tu futuro yo te está mirando con cara de profunda decepción. ¿De verdad vas a dejar tu dinero a la deriva por lo que cuesta una empanada o un café?
                </p>

                {/* Price Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-4 text-left shadow-inner">
                  <div>
                    <span className="text-[10px] text-emerald-700 font-extrabold uppercase tracking-widest block">
                      OFERTA PARA EVITAR EL COLAPSO
                    </span>
                    <span className="text-xs md:text-sm font-black text-slate-900 uppercase mt-0.5 block">
                      SISTEMA COMPLETO DE POR VIDA
                    </span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-400 line-through block font-bold">$29 USD</span>
                    <span className="text-xl md:text-2xl font-black text-emerald-600">$9 USD</span>
                  </div>
                </div>

                {/* CTA Actions */}
                <div className="flex flex-col gap-3">
                  <motion.button
                    onClick={handleClaimOffer}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#10b981] hover:bg-emerald-500 text-slate-950 font-black py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all text-xs md:text-sm uppercase tracking-wider cursor-pointer"
                  >
                    ¡VALE, ME COMPORTO Y ORDENO MI VIDA! ☕
                  </motion.button>
                  
                  <button
                    onClick={() => setPhase('phase2')}
                    className="w-full bg-transparent hover:bg-slate-100 text-slate-500 hover:text-slate-700 py-2 px-4 rounded-xl transition-all text-[11px] font-bold cursor-pointer underline underline-offset-2"
                  >
                    No, prefiero seguir perdiendo dinero misteriosamente
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Coffee Icon Indicator */}
                <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-100 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <Coffee className="w-3.5 h-3.5" />
                  ☕ LA VERDAD DUELE...
                </div>

                {/* Bold Title with Humor */}
                <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                  ¿Un café con delivery o tu tranquilidad mental?
                </h3>
                
                {/* Core Message with Humor */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  Seamos realistas: esos $9 dólares probablemente terminarán hoy mismo en un café frío de cadena ☕ o en una hamburguesa rápida que llegará tarde por delivery 🍔. En 15 minutos lo habrás olvidado. ¿De verdad no prefieres invertirlos en el sistema definitivo que te ordenará las cuentas para siempre?
                </p>

                {/* Benefits mini list */}
                <div className="bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl text-left space-y-2">
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Control total sin tener que compartir claves de bancos</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cero fórmulas complejas: tú solo rellenas los números y ya</span>
                  </div>
                </div>

                {/* CTA Actions */}
                <div className="flex flex-col gap-3">
                  <motion.button
                    onClick={handleClaimOffer}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#10b981] hover:bg-emerald-500 text-slate-950 font-black py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all text-xs md:text-sm uppercase tracking-wider cursor-pointer"
                  >
                    TIENES RAZÓN, DAME EL SISTEMA COMPLETO POR $9 USD 👉
                  </motion.button>
                  
                  <button
                    onClick={handleClose}
                    className="w-full bg-transparent hover:bg-slate-100 text-slate-400 hover:text-slate-600 py-2 px-4 rounded-xl transition-all text-xs font-bold cursor-pointer"
                  >
                    No, prefiero la hamburguesa fría y la incertidumbre
                  </button>
                </div>
              </div>
            )}

            {/* Guarantee Seal */}
            <div className="mt-6 text-[10px] text-emerald-700 flex items-center justify-center gap-1.5 font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Garantía Incondicional de 7 Días</span>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
