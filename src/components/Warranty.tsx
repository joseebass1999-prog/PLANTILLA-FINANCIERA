import { ShieldCheck, HeartHandshake, BadgeCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Warranty() {
  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="warranty-section" className="py-16 bg-slate-50 border-y border-emerald-500/10 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-emerald-500/10 rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-xl text-left">
          
          {/* Visual Golden Shield Container */}
          <div className="bg-amber-50 text-amber-600 p-6 rounded-3xl border border-amber-100 shrink-0 self-center md:self-start">
            <ShieldCheck className="w-16 h-16 stroke-[1.5]" />
          </div>

          {/* Copywriting */}
          <div className="space-y-4">
            <span className="text-xs text-amber-700 font-black uppercase tracking-widest bg-amber-50 border border-amber-150 px-3 py-1 rounded-full inline-block">
              ✦ GARANTÍA INCONDICIONAL
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight uppercase">
              PRUEBA TODO EL SISTEMA SIN NINGÚN RIESGO POR 7 DÍAS
            </h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              Quiero que tomes esta decisión con absoluta tranquilidad. Descarga la plantilla inteligente, utilízala con tus números, mira los videotutoriales y comprueba por ti mismo lo sencillo que es automatizar tu ahorro y acelerar el pago de deudas.
            </p>
            <p className="text-slate-700 text-xs md:text-sm font-semibold border-l-4 border-[#10b981] pl-4 italic">
              Si por cualquier razón sientes que esto no te ayudará a ahorrar al menos el triple de lo que invertiste, envíanos un correo antes de los 7 días y te devolveremos el 100% de tu dinero. Sin preguntas absurdas, sin trámites lentos y con una sonrisa.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-500 font-mono">
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-650 font-bold" />
                <span>Trato directo y honesto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-emerald-650 font-bold" />
                <span>Reembolso automático inmediato</span>
              </div>
            </div>

            {/* Dynamic CTA button */}
            <div className="pt-6">
              <motion.button
                onClick={scrollToCheckout}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-3.5 px-6 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
              >
                <span>Probar el Sistema Completo Sin Riesgo</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
