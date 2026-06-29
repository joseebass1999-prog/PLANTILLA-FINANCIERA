// src/components/OfferCheckout.tsx
import { useState } from 'react';
import { CheckCircle2, Lock, Sparkles, ShieldCheck, Timer, Gift } from 'lucide-react';
import { trackInitiateCheckout } from '../lib/pixel';
import { HOTMART_CHECKOUT_URL } from '../lib/constants';
import { motion } from 'motion/react';
import { useUrgencyTimer } from '../hooks/useUrgencyTimer';

export default function OfferCheckout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const { formattedTime, spotsLeft, currentDayName } = useUrgencyTimer();

  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Track InitiateCheckout event safely
    trackInitiateCheckout(9.00, 'USD');
    
    setTimeout(() => {
      setIsProcessing(false);
      window.location.href = HOTMART_CHECKOUT_URL;
    }, 800);
  };

  const progressPercentage = (spotsLeft / 7) * 100;

  return (
    <section id="offer-checkout-section" className="py-16 md:py-24 px-6 bg-slate-50 relative overflow-hidden border-b border-emerald-500/10 text-slate-800">
      
      {/* Background lights for high visual quality */}
      <div className="absolute top-1/4 left-10 w-[400px] h-[400px] bg-emerald-500/[0.04] rounded-full filter blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-[#10b981]/[0.03] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full inline-block">
            ✦ PASO FINAL: TU ACCESO AL CONTROL FINANCIERO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none mt-3">
            Comienza a multiplicar tu dinero hoy mismo
          </h2>
          <p className="text-slate-600 mt-3 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Acceso instantáneo para siempre. Descarga tu archivo maestro y accede a toda la suite de bonos de por vida en menos de 3 minutos.
          </p>
        </div>

        {/* Checkout Card Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch text-left">
          
          {/* Column 1: Value Stack list of what is included */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-6">
              
              {/* Header inside Column */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-base md:text-lg font-black text-slate-900 flex items-center gap-2 uppercase tracking-tight">
                  <Sparkles className="w-5 h-5 text-[#059669]" />
                  ¿Qué incluye tu descarga inmediata?
                </h3>
                <span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 rounded-full font-black uppercase">
                  Acceso Vitalicio
                </span>
              </div>
              
              {/* Product stack list */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-3 bg-slate-50/50 p-3.5 border border-slate-100 rounded-2xl transition-all hover:bg-slate-50">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">Módulo de Presupuesto Inteligente 50/30/20</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-semibold mt-0.5">Distribuye automáticamente tus ingresos y gastos fijos, variables y metas bajo las proporciones ideales de abundancia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/50 p-3.5 border border-slate-100 rounded-2xl transition-all hover:bg-slate-50">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">Plan Maestro Bola de Nieve contra Deudas</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-semibold mt-0.5">Te da el calendario de liquidación exacto indicando qué pagar primero para eliminar tu deuda en tiempo récord.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/50 p-3.5 border border-slate-100 rounded-2xl transition-all hover:bg-slate-50">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">Fondo de Ahorro con Barras de Progreso</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-semibold mt-0.5">Define objetivos y mira visualmente cómo crece tu reserva para viajes, compras o tu propio fondo de paz mental.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-50/50 p-3.5 border border-slate-100 rounded-2xl transition-all hover:bg-slate-50">
                  <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <h4 className="text-sm md:text-base font-black text-slate-900 uppercase tracking-tight">Manual Táctico y Video Tutoriales Paso a Paso</h4>
                    <p className="text-xs md:text-sm text-slate-600 font-semibold mt-0.5">Instrucciones claras y concisas en video para configurar tu sistema en solo 10 minutos sin saber de finanzas.</p>
                  </div>
                </div>

              </div>

              {/* Regalos Extra: Bonos Incluidos */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 text-[#059669] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <Gift className="w-3.5 h-3.5 text-[#059669]" />
                    SÚPER PAQUETE DE 6 BONOS REGALO GRATUITOS
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-[#059669] font-black uppercase block">BONO 1 & 2</span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">Control 50/30/20 & Fondos con Barra</span>
                    </div>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold uppercase w-max mt-2">100% GRATIS</span>
                  </div>

                  <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-[#059669] font-black uppercase block">BONO 3 & 4</span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">Plan Bola de Nieve & Tracker Emprendedores</span>
                    </div>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold uppercase w-max mt-2">100% GRATIS</span>
                  </div>

                  <div className="bg-slate-50/50 border border-slate-200/60 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-[#059669] font-black uppercase block">BONO 5 & 6</span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">Biblioteca de Educación & Tracker Hábitos</span>
                    </div>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold uppercase w-max mt-2">100% GRATIS</span>
                  </div>

                  <div className="bg-emerald-50/30 border border-emerald-500/20 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-emerald-600 font-black uppercase block">SOPORTE PREMIUM</span>
                      <span className="text-xs font-bold text-slate-900 block mt-0.5">Soporte Técnico de por Vida</span>
                    </div>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-bold uppercase w-max mt-2">INCLUIDO</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Total value callout */}
            <div className="border-t border-slate-100 pt-6 mt-8 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Valor total combinado de la suite:</span>
              <span className="text-rose-600 line-through font-bold text-sm">$99 USD</span>
            </div>
          </div>

          {/* Column 2: Pricing and Secure Hotmart checkout with luxurious dark blue */}
          <div className="lg:col-span-5 bg-[#0a0e1a] text-white border-2 border-[#10b981]/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            {/* Visual glow element inside dark container */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Special header */}
              <div className="text-center pb-5 border-b border-slate-800">
                <span className="bg-emerald-500/10 border border-[#10b981]/25 text-emerald-400 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full inline-block animate-pulse">
                  ★ LICENCIA DE ACCESO DE POR VIDA
                </span>
              </div>

              {/* Price Tag with FIXED regular price from $45 to $29 */}
              <div className="text-center bg-[#11192e] border border-slate-800 rounded-2xl p-5 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[9px] font-black px-3 py-0.5 rounded-full uppercase tracking-widest shadow">
                  PROMO DE LANZAMIENTO
                </span>

                <div className="space-y-1.5">
                  <span className="text-xs text-slate-400 line-through block font-medium">Valor regular: $29 USD</span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Hoy pagas solo</span>
                    <span className="text-4xl md:text-5xl font-black text-[#10b981] font-mono">$9</span>
                    <span className="text-emerald-400 font-black text-xl">USD</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-black block mt-2 uppercase tracking-widest border-t border-slate-800/80 pt-2">
                    Pago único • Sin suscripciones mensuales
                  </span>
                </div>
              </div>

              {/* Delivery Details */}
              <div className="bg-[#11192e]/50 rounded-2xl p-4 border border-slate-800 text-xs space-y-3 text-slate-300">
                <div className="flex justify-between items-center pb-2 border-b border-slate-800/40">
                  <span className="text-slate-400 font-medium">Entrega:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded">Descarga Inmediata</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-800/40">
                  <span className="text-slate-400 font-medium">Soporte técnico:</span>
                  <span className="font-bold text-[#10b981]">De por vida incluido</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-medium">Actualizaciones:</span>
                  <span className="font-bold text-[#10b981]">Gratis para siempre</span>
                </div>
              </div>

              {/* Micro-Scarcity Indicator inside checkout */}
              <div className="bg-[#1e1115] border border-rose-950/40 rounded-2xl p-3.5 space-y-2 text-left">
                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="flex items-center gap-1.5 text-rose-300">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                    </span>
                    Solo queda {spotsLeft} cupo para este {currentDayName}
                  </span>
                </div>
                
                <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500"
                  />
                </div>
                <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono">
                  <span>Acceso seguro cifrado</span>
                  <span className="text-rose-400 font-bold flex items-center gap-0.5">
                    <Timer className="w-3.5 h-3.5" /> Expira en: {formattedTime} min
                  </span>
                </div>
              </div>
            </div>

            {/* Dynamic Purchase State Buttons */}
            <div className="mt-6 space-y-4 relative z-10">
              <motion.button
                onClick={handleCheckout}
                disabled={isProcessing}
                whileHover={{ scale: isProcessing ? 1 : 1.03 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                className={`w-full font-black py-4.5 px-6 rounded-xl uppercase tracking-wider text-xs md:text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isProcessing 
                    ? 'bg-emerald-950 text-emerald-700 cursor-not-allowed border border-emerald-900'
                    : 'bg-[#10b981] hover:bg-emerald-400 text-slate-950 hover:shadow-emerald-500/25'
                }`}
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Procesando descarga segura...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>¡OBTENER ACCESO COMPLETO POR $9 USD!</span>
                  </>
                )}
              </motion.button>

              {/* Guarantee badge */}
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-950/20 border border-emerald-900/20 py-2.5 px-4 rounded-xl">
                <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
                <span>Garantía de 7 días 100% libre de riesgo</span>
              </div>

              {/* Secure checkout seals */}
              <div className="text-center">
                <span className="text-[10px] text-slate-400 font-black tracking-widest block mb-1.5 uppercase">🔒 Pasarela de Pago Seguro Hotmart</span>
                <div className="flex items-center justify-center gap-3 opacity-65 text-[10px] font-bold text-slate-400 font-mono">
                  <span>TARJETAS DE CRÉDITO</span>
                  <span>•</span>
                  <span>PAYPAL</span>
                  <span>•</span>
                  <span>EFECTIVO LOCAL</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
