// src/components/HeroSection.tsx
import { trackInitiateCheckout } from '../lib/pixel';
import { HOTMART_CHECKOUT_URL, HERO_MOCKUP_IMAGE } from '../lib/constants';
import { Star, Award, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function HeroSection() {
  const handleCTAClick = () => {
    trackInitiateCheckout(9.00, 'USD');
    window.location.href = HOTMART_CHECKOUT_URL;
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleCTAClick();
    }
  };

  return (
    <section className="relative pt-10 pb-20 md:py-28 px-6 bg-[#f0fbf8] text-slate-800 overflow-hidden border-b border-emerald-500/15">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Sales Copy */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Tagline / Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-extrabold text-[11px] tracking-wider uppercase px-4 py-1.5 rounded-full"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            💡 CONTROL FINANCIERO SIMPLIFICADO
          </motion.div>

          {/* Main Display Headline (H1) */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl xl:text-[52px] font-black tracking-tight leading-tight uppercase font-sans text-slate-900"
          >
            NO ES QUE GANES POCO DINERO… ES QUE{' '}
            <span className="text-[#059669]">
              NO TIENES CONTROL SOBRE ÉL.
            </span>
          </motion.h1>

          {/* Subtitle / Supporting text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-sm md:text-lg max-w-2xl leading-relaxed font-medium"
          >
            La tranquilidad financiera no llega cuando ganas más dinero. Llega cuando sabes{' '}
            <span className="marker-highlight text-slate-900 mx-1 px-1.5 py-0.5 rounded bg-amber-300 select-none font-bold">
              exactamente
            </span>{' '}
            qué hacer con él.
          </motion.p>

          {/* Section of Confidence with icons / checkmarks */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-left w-full max-w-xl py-3 border-y border-emerald-500/10 text-xs md:text-sm font-semibold text-slate-700"
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-black shrink-0">✓</span>
              <span>Acceso inmediato</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-black shrink-0">✓</span>
              <span>Compatible con Excel y Google Sheets</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-black shrink-0">✓</span>
              <span>Funciona desde computador y celular</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-black shrink-0">✓</span>
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <span className="text-emerald-600 font-black shrink-0">✓</span>
              <span>Garantía de satisfacción de 7 días</span>
            </div>
          </motion.div>

          {/* Core Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full sm:w-auto flex flex-col items-center lg:items-start gap-3 pt-2"
          >
            <motion.button
              onClick={scrollToCheckout}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full sm:w-auto overflow-hidden group bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm md:text-base py-4 px-8 rounded-xl uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-emerald-500/20"
            >
              {/* Shine glow line */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              <span>👉 Quiero acceder al Sistema Completo</span>
            </motion.button>

            {/* Microcopy below button */}
            <span className="text-xs text-slate-500 font-bold block">
              Acceso inmediato después del pago.
            </span>

            {/* Line of Authority */}
            <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-lg mt-2 italic border-l-2 border-emerald-500 pl-3 text-left">
              "Miles de personas buscan organizar mejor su dinero. Este sistema fue diseñado para hacerlo fácil, práctico y automatizado."
            </p>
          </motion.div>

        </div>

        {/* Right Column: 3D screenshot with floating badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          
          {/* Subtle glow behind screenshot */}
          <div className="absolute inset-0 m-auto w-4/5 h-4/5 bg-emerald-500/10 rounded-2xl blur-3xl pointer-events-none" />

          {/* Screenshot Container with subtle float animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl border border-slate-200 p-2 md:p-3 bg-white shadow-2xl animate-float-sutil max-w-md md:max-w-full"
          >
            {/* Window bar */}
            <div className="flex items-center justify-between px-3 pb-2 mb-2 border-b border-slate-100 text-[10px] text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              </div>
              <span>Sistema_Completo_Finanzas_Personales.xlsx</span>
              <div className="w-6"></div>
            </div>

            <img
              src={HERO_MOCKUP_IMAGE}
              alt="Planificador Dinero en Orden"
              className="rounded-lg object-cover w-full shadow-md border border-slate-100"
              referrerPolicy="no-referrer"
            />

            {/* Badges Floating on the mock-up */}
            {/* Badge 1: Discount */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              className="absolute -top-4 -right-2 md:-right-6 bg-rose-600 border border-rose-500 text-white font-black text-[10px] md:text-xs px-3.5 py-1.5 rounded-xl shadow-lg uppercase tracking-wider flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5 shrink-0" />
              80% Descuento Ya Aplicado
            </motion.div>

            {/* Badge 2: Ratings */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              className="absolute -bottom-4 -left-2 md:-left-6 bg-slate-900 border border-slate-800 p-2.5 md:p-3 rounded-xl shadow-xl flex items-center gap-2"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-[10px] text-slate-350 font-bold mt-0.5 leading-none">
                  5.0 Calificado por +150 compradores
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
