// src/components/VideosSection.tsx
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function VideosSection() {
  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="videos-section" className="py-16 md:py-24 px-6 bg-slate-50 text-slate-800 border-b border-emerald-500/10 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full inline-block">
            ★ DEMOSTRACIÓN
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Mira la plantilla por dentro
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Haga clic en reproducir para ver los vídeos explicativos de cómo funciona el sistema y un ejemplo práctico.
          </p>
        </div>

        {/* Highlight Text */}
        <div className="text-center mb-8">
          <p className="text-slate-900 font-black text-sm md:text-base tracking-wide uppercase flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            TODAS LAS FUNCIONES de la plantilla de Finanzas
          </p>
          <span className="text-2xl block mt-2 animate-bounce">👇👇👇</span>
        </div>

        {/* Dual Video Reels / Carrete Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-start">
          
          {/* Carrete 1: Cómo funciona */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* Phone Mockup Frame */}
            <div className="w-full max-w-[340px] bg-slate-950 rounded-[40px] p-3.5 shadow-2xl border-4 border-slate-800 relative overflow-hidden flex flex-col justify-between aspect-[9/16]">
              {/* iPhone top notch & speaker bar */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <span className="w-10 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-6 pt-1 pb-2 text-[10px] text-slate-400 font-mono font-bold z-10">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px]">5G</span>
                  {/* Battery icon mock */}
                  <span className="w-4 h-2 border border-slate-500 rounded-sm inline-block relative">
                    <span className="absolute top-0 left-0 bottom-0 right-0.5 bg-slate-400 rounded-2xs" />
                  </span>
                </div>
              </div>

              {/* Embedded Player Viewport */}
              <div className="relative flex-1 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800">
                <iframe
                  src="https://jumpshare.com/embed/mVRcTuwZq3455BQAVkMS"
                  title="Cómo funciona — Demostración Inteligente"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Card Overlay / Details */}
              <div className="mt-4 px-3 space-y-1.5 text-left">
                <div className="inline-block bg-rose-500/15 border border-rose-500/30 text-rose-400 font-black text-[9px] px-2 py-0.5 rounded-full tracking-wider uppercase font-mono">
                  FORMATO DE CARRETE
                </div>
                <h4 className="text-white text-base font-black uppercase tracking-tight leading-tight">
                  Cómo funciona
                </h4>
                <p className="text-slate-400 text-xs font-semibold">
                  Demostración interactiva
                </p>
              </div>

            </div>
          </motion.div>

          {/* Carrete 2: Pestaña Principal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            {/* Phone Mockup Frame */}
            <div className="w-full max-w-[340px] bg-slate-950 rounded-[40px] p-3.5 shadow-2xl border-4 border-slate-800 relative overflow-hidden flex flex-col justify-between aspect-[9/16]">
              {/* iPhone top notch & speaker bar */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-950 rounded-full z-20 flex items-center justify-center">
                <span className="w-10 h-1 rounded-full bg-slate-800" />
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-6 pt-1 pb-2 text-[10px] text-slate-400 font-mono font-bold z-10">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px]">5G</span>
                  <span className="w-4 h-2 border border-slate-500 rounded-sm inline-block relative">
                    <span className="absolute top-0 left-0 bottom-0 right-0.5 bg-slate-400 rounded-2xs" />
                  </span>
                </div>
              </div>

              {/* Embedded Player Viewport */}
              <div className="relative flex-1 rounded-3xl overflow-hidden bg-slate-900 border border-slate-800">
                <iframe
                  src="https://jumpshare.com/embed/6d8vw2niidTRS4KKo7mF"
                  title="Pestaña Principal — Presupuesto consolidador automático"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              {/* Card Overlay / Details */}
              <div className="mt-4 px-3 space-y-1.5 text-left">
                <div className="inline-block bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-[9px] px-2 py-0.5 rounded-full tracking-wider uppercase font-mono">
                  Pestaña Principal
                </div>
                <h4 className="text-white text-base font-black uppercase tracking-tight leading-tight">
                  Presupuesto consolidador automático
                </h4>
                <p className="text-slate-400 text-xs font-semibold flex items-center justify-between w-full">
                  <span>Así funciona la plantilla</span>
                  <span className="text-emerald-400 font-black animate-pulse flex items-center gap-0.5 text-[10px]">
                    <Play className="w-3 h-3 fill-emerald-400" /> Ver carrete
                  </span>
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Core Tagline under the videos */}
        <div className="mt-12 text-center">
          <p className="text-lg md:text-2xl font-black text-slate-900 italic tracking-tight font-sans bg-emerald-50 border border-emerald-100 px-6 py-4 rounded-2xl inline-block max-w-xl shadow-sm">
            “Si sabes escribir números, puedes usarlo.”
          </p>
        </div>

        {/* Dynamic CTA button */}
        <div className="mt-10 text-center">
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
            Acceso inmediato después del pago seguro por $9 USD • Sin cuotas recurrentes
          </span>
        </div>

      </div>
    </section>
  );
}
