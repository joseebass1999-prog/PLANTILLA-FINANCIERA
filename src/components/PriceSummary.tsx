// src/components/PriceSummary.tsx
import { TOP_TESTIMONIALS } from '../data';
import { useUrgencyTimer } from '../hooks/useUrgencyTimer';
import { Star, Award, Zap, Gift, Flame, Timer, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { trackInitiateCheckout } from '../lib/pixel';
import { HOTMART_CHECKOUT_URL } from '../lib/constants';

export default function PriceSummary() {
  const { formattedTime, spotsLeft, currentDayName } = useUrgencyTimer();

  const handleCTAClick = () => {
    trackInitiateCheckout(9.00, 'USD');
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  // Synchronized spots percentage for the progress bar
  const progressPercentage = (spotsLeft / 7) * 100;

  return (
    <section id="price-summary-section" className="py-16 md:py-24 px-6 bg-white border-b border-slate-200 text-slate-800">
      <div className="max-w-4xl mx-auto">
        
        {/* Step 1: Pre-Pricing Social Proof Testimonials (Fresh & Not Repeated!) */}
        <div className="mb-16">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3.5 py-1 rounded-full inline-block">
              ★ TESTIMONIALES DESTACADOS
            </span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 uppercase">
              Lo que opinan quienes ya tomaron el control
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {TOP_TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 relative flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {/* Core Content */}
                  <p className="text-slate-750 text-xs md:text-sm font-medium leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                {/* Profile info */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-slate-200/50">
                  <img 
                    src={t.avatarUrl} 
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-slate-250"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">{t.name}</span>
                    <span className="text-[10px] text-slate-400 font-semibold block">{t.role}</span>
                  </div>
                </div>

                {/* Badge decoration */}
                <span className="absolute top-4 right-4 bg-emerald-50 border border-emerald-250 text-[#059669] font-bold text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {t.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: High-Value Premium Bonuses Pack (Visual, clean & extremely appealing) */}
        <div className="bg-emerald-50/50 border border-emerald-500/20 rounded-3xl p-6 md:p-8 mb-10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/15 pb-6 mb-6">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                <Gift className="w-3 h-3 text-emerald-600 animate-pulse" />
                PAQUETE COMPLETO DE BONOS
              </span>
              <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase">
                TODO ESTE SISTEMA PREMIUM DE REGALO 🎁
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Al comprar hoy el sistema, recibes acceso ilimitado e inmediato a todos los módulos:
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">VALOR TOTAL</span>
              <span className="text-xl md:text-2xl font-black text-rose-600 line-through font-mono">$99.00 USD</span>
            </div>
          </div>

          {/* Core Checklists of the Premium Bonuses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">BONO 1</span>
                  <span className="text-xs md:text-sm font-bold text-slate-950">Sistema Inteligente de Presupuesto 50/30/20</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">BONO 2</span>
                  <span className="text-xs md:text-sm font-bold text-slate-950">Fondo de Ahorros con Barras de Progreso</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">BONO 3</span>
                  <span className="text-xs md:text-sm font-bold text-slate-950">Plan Maestro Bola de Nieve (Adiós Deudas)</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">BONO 4</span>
                  <span className="text-xs md:text-sm font-bold text-slate-950">Tracker Táctico Finanzas para Emprendedores</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">BONO 5</span>
                  <span className="text-xs md:text-sm font-bold text-slate-950">Biblioteca Premium de Educación Financiera</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80">
                <CheckCircle className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">BONO 6</span>
                  <span className="text-xs md:text-sm font-bold text-slate-950">Tracker de Hábitos Financieros Integrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: The Core Price Block with unified majestic dark blue container */}
        <div className="relative rounded-3xl bg-[#0a0e1a] border-2 border-[#10b981]/30 p-8 md:p-10 shadow-2xl overflow-hidden text-white text-center">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            
            {/* Tagline / Flag */}
            <div className="inline-flex items-center gap-1 bg-[#11192e] border border-[#10b981]/25 text-emerald-400 text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5" />
              ACCESO INSTANTÁNEO POR TIEMPO LIMITADO
            </div>

            {/* Title / Description */}
            <div className="space-y-2">
              <h3 className="text-2xl md:text-4xl font-black tracking-tight uppercase leading-none">
                SISTEMA COMPLETO DE FINANZAS PERSONALES
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-medium max-w-lg mx-auto">
                Toma las riendas de tu dinero hoy mismo. Descarga el sistema de bonos automatizados y desvía tu capital hacia tus metas reales.
              </p>
            </div>

            {/* Dynamic visual price display */}
            <div className="bg-[#11192e] border border-slate-800/80 rounded-2xl py-6 px-4 max-w-md mx-auto relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-[9px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-widest shadow">
                ¡AHORRO DEL 80% HOY!
              </span>

              <div className="space-y-2">
                <span className="text-xs text-slate-400 block font-semibold leading-none">
                  Valor real acumulado: <span className="line-through">$99 USD</span>
                </span>
                <span className="text-xs text-slate-400 block font-semibold leading-none">
                  Precio de venta habitual: <span className="line-through">$29 USD</span>
                </span>
                
                <div className="flex items-center justify-center gap-1.5 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-1">Hoy pagas solo</span>
                  <span className="text-4xl md:text-5xl font-black text-[#10b981] font-mono">$9</span>
                  <span className="text-emerald-450 font-black text-xl">USD</span>
                </div>

                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block pt-2 border-t border-slate-800/60 mt-2">
                  Pago Único • Acceso de por vida • Sin cargos ocultos
                </span>
              </div>
            </div>

            {/* SYNCHRONIZED FOMO / PROGRESS BAR (Super beautiful and high-converting) */}
            <div className="max-w-md mx-auto bg-[#11192e] border border-rose-950/40 rounded-2xl p-4 space-y-3.5 text-left shadow-inner">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-rose-500 animate-pulse shrink-0" />
                  <span className="text-xs font-bold text-slate-200">
                    Cupos promocionales disponibles:
                  </span>
                </div>
                <span className="font-mono text-xs font-black text-amber-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded shadow">
                  {spotsLeft} / 7 restantes
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-3.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-0.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-600 relative overflow-hidden"
                >
                  <span className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[shimmer_1s_linear_infinite]" />
                </motion.div>
              </div>

              {/* Real-time sync footer */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-600"></span>
                  </span>
                  Para este {currentDayName}
                </span>
                <span className="flex items-center gap-1 font-bold text-rose-400">
                  <Timer className="w-3.5 h-3.5" /> El precio sube en: {formattedTime}
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="max-w-md mx-auto space-y-2.5">
              <motion.button
                onClick={handleCTAClick}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative overflow-hidden group bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-4.5 px-6 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-xl shadow-emerald-500/10 flex items-center justify-center gap-1.5"
              >
                {/* Shine Animation */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                <Zap className="w-4 h-4 text-slate-950 fill-slate-950" />
                <span>Quiero acceder al Sistema Completo</span>
              </motion.button>
              
              <span className="text-[11px] text-slate-400 font-medium block">
                Acceso inmediato después del pago.
              </span>
            </div>

            {/* Escasez Box underneath (Elegante y real) */}
            <div className="max-w-lg mx-auto pt-4 border-t border-slate-800/60 text-center">
              <p className="text-xs md:text-sm text-emerald-400 font-bold tracking-normal leading-relaxed">
                🔥 Oferta especial de lanzamiento disponible por tiempo limitado.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
