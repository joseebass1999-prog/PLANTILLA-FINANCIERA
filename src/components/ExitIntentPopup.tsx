import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wallet, AlertTriangle, CheckCircle2, X, Sparkles, Smile, ArrowRight, HeartCrack } from 'lucide-react';

interface ExitIntentPopupProps {
  onCtaClick: () => void;
}

export default function ExitIntentPopup({ onCtaClick }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [funnyPhase, setFunnyPhase] = useState<'initial' | 'raccooned' | 'saved'>('initial');

  useEffect(() => {
    // TEMPORARILY DISABLED: Removed mouseleave, scroll, and timer triggers
    // to check for potential interference with the Meta Event Setup Tool.
    // The rest of the component design and UI functions are preserved.
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCta = () => {
    setIsVisible(false);
    onCtaClick();
  };

  const handleFunnyRefusal = () => {
    setFunnyPhase('raccooned');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/85 backdrop-blur-md">
          {/* Backdrop click to close */}
          <div className="absolute inset-0" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-emerald-100 z-10 overflow-hidden text-slate-800"
          >
            {/* Playful background graphic pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-emerald-100/40 rounded-full blur-xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer"
              title="Tal vez luego"
            >
              <X className="w-5 h-5" />
            </button>

            {funnyPhase === 'initial' && (
              <div className="relative z-10 text-center">
                {/* Visual Header Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 mb-5 shadow-sm">
                  <AlertTriangle className="w-6 h-6 animate-bounce" />
                </div>

                <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 leading-tight tracking-tight mb-3">
                  ¡ALTO AHÍ! 🛑 <br />
                  <span className="text-emerald-700">Tu billetera te está mirando...</span>
                </h3>

                <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                  El <strong className="text-amber-700 font-extrabold bg-amber-50 px-1 py-0.5 rounded">"Mapache del Despilfarro" 🦝</strong> estuvo a milímetros de convencerte de volver al piloto automático: el mismo donde gastas $15 USD en cosas que no recuerdas mañana mientras tus deudas siguen intactas.
                </p>

                {/* Offer Highlights Box */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left mb-6 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Acceso Vitalicio Seguro:</strong> Con un único pago de solo <strong>$9 USD</strong> (sin suscripciones ocultas).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Reembolso del 100%:</strong> Prueba el sistema por 7 días. Si no ahorras tu primer dólar de inmediato, te lo devolvemos todo.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Soporte Directo + Plantillas de Regalo:</strong> Todo pre-configurado y listo.</span>
                  </div>
                </div>

                {/* Decision Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCta}
                    className="cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-sans font-black text-sm md:text-base rounded-2xl shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
                  >
                    🚀 ¡Sí, quiero salvar a mi billetera por $9!
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  <button
                    onClick={handleFunnyRefusal}
                    className="cursor-pointer w-full py-2.5 text-xs font-sans font-bold text-slate-400 hover:text-rose-600 hover:bg-rose-50/50 rounded-xl transition-all"
                  >
                    No, prefiero seguir regalándole dinero mensual al banco en intereses misteriosos 💸
                  </button>
                </div>
              </div>
            )}

            {funnyPhase === 'raccooned' && (
              <div className="relative z-10 text-center py-4">
                {/* Sad Raccoon Frame */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-50 border border-rose-150 text-rose-600 mb-5 shadow-sm">
                  <HeartCrack className="w-6 h-6 animate-pulse" />
                </div>

                <h3 className="font-display font-black text-2xl text-slate-900 leading-tight tracking-tight mb-3">
                  El Mapache Financiero ganó esta ronda... 🦝🍂
                </h3>

                <p className="font-sans text-sm text-slate-600 leading-relaxed mb-6">
                  Tus deudas están celebrando en silencio porque no les vas a aplicar la <strong className="text-slate-800">Bola de Nieve</strong> hoy. Pero no te guardamos rencor. Tu descuento de 80% sigue activo si cambias de opinión antes de cerrar definitivamente.
                </p>

                <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <button
                    onClick={() => setFunnyPhase('initial')}
                    className="cursor-pointer flex-1 py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-sans font-bold text-xs rounded-xl border border-emerald-100 transition-colors"
                  >
                    👈 Espera, volver a pensarlo seguro
                  </button>
                  <button
                    onClick={handleClose}
                    className="cursor-pointer flex-1 py-3 px-4 bg-slate-100 hover:bg-slate-250 text-slate-600 font-sans font-bold text-xs rounded-xl transition-colors"
                  >
                    Cerrar y seguir gastando sin control 💔
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
