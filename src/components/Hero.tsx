/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const mockupImg = "https://i.postimg.cc/j5MbSWC1/d294ecd7-4ba8-4cc8-9313-023c13359be6.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 bg-gradient-to-b from-[#edf7f2] via-[#f7fcf9] to-[#edf7f2] overflow-hidden text-slate-800 border-b border-emerald-100/60">
      {/* Background soft visual warm accents */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-300/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-200/15 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-200/40 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-350/20 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Control Financiero Simplificado</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-[46px] leading-[1.1] text-slate-900 tracking-tight mb-6 uppercase"
          >
            No es que ganes poco dinero… es que <span className="text-emerald-700 block relative">no tienes control sobre él.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-650 text-base md:text-lg leading-relaxed max-w-xl mb-8"
          >
            Sistema{" "}
            <span className="relative inline-block font-extrabold px-2 py-0.5 mx-[1px]">
              <span className="absolute inset-0 bg-amber-300 -rotate-1 rounded-md shadow-sm border border-amber-400" />
              <span className="relative text-amber-950 font-black">simple</span>
            </span>{" "}
            para ver exactamente en qué se va tu dinero y recuperar el control financiero absoluto en minutos. Sin complicaciones técnicas.
          </motion.p>

          {/* CTA & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
          >
            <button
              onClick={onCtaClick}
              id="hero-cta-button"
              className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-gradient-to-r from-emerald-600 to-teal-600 font-sans font-black text-white text-base rounded-2xl shadow-xl shadow-emerald-600/20 hover:from-emerald-500 hover:to-teal-500 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:scale-98 transition-all duration-300"
            >
              👉 Quiero ordenar mi dinero
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </button>
          </motion.div>

          {/* Tiny checklist details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-600"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Paga $9 una vez, úsala siempre
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Garantía de reembolso de 7 días
            </span>
          </motion.div>
        </div>

        {/* Right Side: Mockup Image with Seamless transparent Multiply background */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
          className="lg:col-span-6 flex justify-center w-full"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-lg group rounded-2xl overflow-hidden mix-blend-multiply"
          >
            <img
              src={mockupImg}
              alt="Dinero en Orden Spreadsheet Mockup"
              className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
