// src/components/SolutionSimulator.tsx
import { useState, useEffect } from 'react';
import { CheckCircle2, X, ZoomIn } from 'lucide-react';
import { trackInitiateCheckout } from '../lib/pixel';
import { HOTMART_CHECKOUT_URL, SNOWBALL_IMAGE, SAVINGS_IMAGE } from '../lib/constants';
import { motion, AnimatePresence } from 'motion/react';

export default function SolutionSimulator() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCTAClick = () => {
    trackInitiateCheckout(9.00, 'USD');
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  return (
    <section id="simulator-section" className="py-16 md:py-24 px-6 bg-slate-50 text-slate-800 border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full">
            ★ MÉTODO DE LIBERACIÓN DE DEUDAS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            PAGO DE DEUDAS: BOLA DE NIEVE
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
            Libérate del estrés financiero con el método de desamortización más psicológicamente efectivo del mundo. El sistema organiza tus deudas automáticamente de menor a mayor tamaño, creando un impulso imparable para liquidarlas todas.
          </p>
        </div>

        {/* Modular Grid Layout */}
        <div className="space-y-24">

          {/* Module 1: Bola de Nieve */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Column Text */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-xs font-black text-rose-600 uppercase tracking-widest font-mono">
                ✦ MÉTODO LÍDER DE REDUCCIÓN
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 leading-tight uppercase">
                PAGO DE DEUDAS: BOLA DE NIEVE
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Libérate del estrés financiero con el método de desamortización más psicológicamente efectivo del mundo. El sistema organiza tus deudas automáticamente de menor a mayor tamaño, creando un impulso imparable para liquidarlas todas.
              </p>
              
              <ul className="space-y-3 inline-block lg:block text-left text-xs md:text-sm text-slate-600 font-semibold">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>Balanza de Deuda: Visualiza tu saldo acumulado histórico y tus deudas actuales con claridad y rapidez.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>Ahorro Anual: Proyecta cuánto te estás ahorrando en intereses al pagar de forma estructurada con la fórmula bola de nieve.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>Meses Restantes: Conoce el mes y año exacto en el que quedarás 100% libre de deudas.</span>
                </li>
              </ul>
            </div>

            {/* Column Image (Lightbox trigger) */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => setActiveImage(SNOWBALL_IMAGE)}
                className="relative rounded-2xl overflow-hidden border border-slate-200 p-2 bg-white shadow-2xl group cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-slate-900/90 text-white font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 border border-slate-700">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                    Ampliación HD
                  </span>
                </div>
                <img
                  src={SNOWBALL_IMAGE}
                  alt="Planificador de Bola de Nieve Deudas"
                  className="rounded-xl object-cover w-full shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

          {/* Module 2: Metas de Ahorro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Column Image (Lightbox trigger) - Placed first for alternate look on desktop */}
            <div className="lg:col-span-7">
              <div 
                onClick={() => setActiveImage(SAVINGS_IMAGE)}
                className="relative rounded-2xl overflow-hidden border border-slate-200 p-2 bg-white shadow-2xl group cursor-zoom-in transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="bg-slate-900/90 text-white font-extrabold text-xs px-4 py-2 rounded-xl flex items-center gap-1.5 border border-slate-700">
                    <ZoomIn className="w-4 h-4 text-emerald-400" />
                    Ampliación HD
                  </span>
                </div>
                <img
                  src={SAVINGS_IMAGE}
                  alt="Metas de Ahorro Dinero en Orden"
                  className="rounded-xl object-cover w-full shadow-md"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Column Text */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <span className="text-xs font-black text-[#059669] uppercase tracking-widest font-mono">
                ✦ LIBERTAD Y CRECIMIENTO
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 leading-tight uppercase">
                FONDO DE AHORROS INTELIGENTE
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Construye un futuro financiero inquebrantable. Esta sección unificada te permite dar seguimiento milimétrico a tus metas de reservas, viajes, aportes para el retiro y fondos de emergencia de manera simultánea sin descuidar tus gastos corrientes.
              </p>
              
              <ul className="space-y-3 inline-block lg:block text-left text-xs md:text-sm text-slate-600 font-semibold">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>Total Ahorrado: Mira la sumatoria en vivo de tus metas y fondos de ahorro en una sola pantalla.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>Queda por Ahorrar: Conoce la brecha exacta de capital de cada meta para saber exactamente cuánto te falta.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <span>Gráfico Dinámico: Un gráfico visual inteligente que se actualiza al instante con tus nuevos depósitos.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Global Offer Banner styled in unified deep dark blue */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-[#0a0e1a] border-2 border-[#10b981]/30 p-8 md:p-10 shadow-2xl overflow-hidden text-left text-white">
            {/* Background glowing decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left text column */}
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 bg-[#11192e] border border-[#10b981]/35 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  OFERTA INMEDIATA DE LANZAMIENTO
                </div>

                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-none text-slate-50">
                  EMPIEZA HOY MISMO A ORDENAR TU DINERO DE FORMA AUTOMÁTICA
                </h3>
                
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-medium">
                  Adquiere la licencia hoy por un pago único de tan solo <strong className="text-[#10b981]">$9 USD</strong>. Acceso inmediato de por vida, sin suscripciones mensuales ni tarifas ocultas en el futuro.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200 font-semibold">
                  <div className="flex items-center gap-2.5 bg-[#11192e]/60 border border-slate-800/80 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Licencia Maestra Excel / Sheets</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-[#11192e]/60 border border-slate-800/80 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Módulo Bola de Nieve contra Deudas</span>
                  </div>
                </div>
              </div>

              {/* Right CTA column */}
              <div className="md:col-span-5 bg-[#11192e] rounded-2xl p-6 border border-slate-800 text-center flex flex-col justify-center items-center relative">
                <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest block border-b border-slate-800 pb-2 w-full">
                  ASISTENCIA DE CONFIGURACIÓN INCLUIDA
                </span>
                
                <div className="my-5">
                  <span className="text-xs text-slate-400 line-through block">Precio Regular: $29 USD</span>
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span className="text-3xl md:text-4xl font-black text-[#10b981] font-mono">$9</span>
                    <span className="text-emerald-400 font-black text-lg">USD</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-extrabold block mt-1 uppercase tracking-widest bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-md">
                    Un solo pago • Acceso de por vida
                  </span>
                </div>

                <motion.button
                  onClick={handleCTAClick}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-4 px-5 rounded-xl uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/15 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Obtener Acceso de Por Vida</span>
                </motion.button>

                <span className="text-[9px] text-rose-400 font-mono mt-3 uppercase tracking-widest block font-bold">
                  ⌛ El precio sube al finalizar el contador
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 bg-slate-800 hover:bg-slate-700 text-white rounded-full p-3 border border-slate-700 transition-colors shadow-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox content */}
            <motion.div 
              initial={{ scale: 0.92, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 10 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 md:p-3 shadow-2xl text-slate-800"
            >
              <div className="flex items-center justify-between px-3 pb-2 mb-2 border-b border-slate-100 text-[10px] text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <span>Detalle en Alta Definición (Presiona ESC para cerrar)</span>
                <div className="w-4"></div>
              </div>

              <img 
                src={activeImage} 
                alt="Ampliación HD"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
