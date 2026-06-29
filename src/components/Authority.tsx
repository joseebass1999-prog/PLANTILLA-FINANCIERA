import { motion } from 'motion/react';
import { Award, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Authority() {
  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="authority-section" className="py-16 md:py-24 px-6 bg-slate-50 border-b border-emerald-500/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full inline-block">
            ★ CIENCIA Y CONTROL FINANCIERO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 uppercase tracking-tight">
            ¿Por qué este sistema funciona?
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            La mayoría de las personas fracasan al organizar su dinero porque usan métodos complejos o aburridos. Diseñamos este sistema bajo tres pilares fundamentales.
          </p>
        </div>

        {/* 3 Pillars of Authority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-md hover:border-emerald-500/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Zap className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                Automatización Real
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Olvídate de hacer cálculos manuales o escribir fórmulas complejas. El sistema está estructurado con algoritmos inteligentes que distribuyen tu dinero en un segundo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Tú solo ingresas tus números
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-md hover:border-emerald-500/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <Award className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                Psicología del Consumidor
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                No te exigimos privarte de lo que te gusta. El sistema utiliza el principio de pre-ahorro e incentivos visuales para ayudarte a reducir gastos compulsivos de forma natural.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Reduce la fricción de ahorrar
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-8 shadow-md hover:border-emerald-500/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 uppercase">
                Compatibilidad Absoluta
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                funciona sin depender de costosas aplicaciones mensuales o compartir tus claves bancarias con plataformas de terceros. Tu información permanece 100% privada bajo tu control.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% privado y seguro
            </div>
          </div>

        </div>

        {/* Central Summary Box */}
        <div className="bg-white border border-slate-200/80 rounded-3xl p-8 max-w-4xl mx-auto shadow-lg text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
          <h4 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Diseñado para simplificar tu vida financiera
          </h4>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
            Fue diseñado para simplificar la administración del dinero mediante herramientas automatizadas fáciles de utilizar. No necesitas ser un experto en finanzas ni un maestro de las hojas de cálculo. El sistema se encarga del trabajo pesado por ti, permitiéndote concentrarte en lo que realmente importa: tomar mejores decisiones financieras y ver crecer tu patrimonio.
          </p>
        </div>

        {/* Dynamic CTA button */}
        <div className="mt-12 text-center">
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
            Únete a las miles de personas que ya controlan su dinero por un único pago de $9 USD
          </span>
        </div>

      </div>
    </section>
  );
}
