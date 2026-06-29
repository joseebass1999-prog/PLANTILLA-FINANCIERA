import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Benefits() {
  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="benefits-section" className="py-16 md:py-24 px-6 bg-white border-b border-emerald-500/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full">
            ✦ LOS BENEFICIOS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            ¿Qué vas a lograr con este sistema?
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Dinero en Orden está diseñado para aportarte el control práctico que necesitas para organizar tus días sin robarte nada de tiempo.
          </p>
        </div>

        {/* Benefits 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Benefit 1 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4 items-start">
            <div className="bg-emerald-100 text-[#059669] w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-emerald-200">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-black text-slate-950">
                Claridad total de tu dinero
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Visualiza de inmediato cuánto tienes disponible hoy, cuánto debes separar para compromisos fijos y cuánto puedes gastar con total libertad y libre de culpas.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4 items-start">
            <div className="bg-emerald-100 text-[#059669] w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-emerald-200">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-black text-slate-950">
                Control sin esfuerzo
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Diseñado bajo la regla de fricción mínima. Solo te tomará 3 minutos al día mantener tu registro actualizado para que no abandones al cabo de una semana.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4 items-start">
            <div className="bg-emerald-100 text-[#059669] w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-emerald-200">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-black text-slate-950">
                Cero estrés financiero
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Al saber exactamente qué gastos vienen, puedes automatizar tus pagos y anticiparte a los imprevistos para que tu tranquilidad nunca se desmorone.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4 items-start">
            <div className="bg-emerald-100 text-[#059669] w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-emerald-200">
              <Check className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base md:text-lg font-black text-slate-950">
                Decisiones inteligentes
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Distingue tus gastos inmediatos de los imperceptibles (gastos vampiro) y desvía capital de forma automática hacia tus ahorros, metas o libertad real.
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic CTA button */}
        <div className="mt-16 text-center">
          <motion.button
            onClick={scrollToCheckout}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-4 px-8 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
          >
            <span>Quiero acceder al Sistema Completo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <span className="block text-[11px] text-slate-400 mt-2 font-medium">
            Toma las riendas de tu dinero hoy por solo $9 USD • Sin mensualidades
          </span>
        </div>

      </div>
    </section>
  );
}
