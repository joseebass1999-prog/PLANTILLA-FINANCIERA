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
    <section className="relative pt-32 pb-20 px-4 md:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Copywriting */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/15 mb-6 shadow-sm shadow-emerald-500/5"
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
            No es que ganes poco dinero… es que <span className="text-emerald-600 block relative">no tienes control sobre él.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-slate-600 text-lg md:text-xl leading-relaxed max-w-xl mb-8"
          >
            <span className="relative inline-block font-extrabold px-2 py-0.5 mx-1">
              <span className="absolute inset-0 bg-amber-300 -rotate-1 rounded-md shadow-sm border border-amber-400" />
              <span className="relative text-amber-950 font-black">Sistema simple</span>
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
              className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 font-sans font-bold text-base text-white rounded-xl shadow-md shadow-emerald-700/10 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-700/20 active:scale-[0.99] transition-all"
            >
              👉 Quiero ordenar mi dinero
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Tiny checklist details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Paga $9 una vez, úsala siempre
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Garantía de reembolso de 7 días
            </span>
          </motion.div>
        </div>

        {/* Right Side: Mockup Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 80 }}
          className="lg:col-span-6 flex justify-center w-full"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-full max-w-lg bg-white p-2.5 rounded-2xl shadow-xl shadow-slate-100 border border-slate-200/60 group"
          >
            {/* Window header */}
            <div className="flex items-center justify-between px-3 pb-2.5 pt-1 border-b border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              </div>
              <span className="text-[10px] text-slate-400 font-mono bg-slate-50 px-4 py-0.5 rounded border border-slate-100">
                dinero-en-orden-v1.xlsx
              </span>
              <div className="w-9" />
            </div>

            {/* Image content */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
              <img
                src={mockupImg}
                alt="Dinero en Orden Spreadsheet Mockup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Float visual indicator */}
            <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-xl border border-slate-100 shadow-lg flex items-center gap-3 animate-bounce">
              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs">
                +45%
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-mono uppercase tracking-wider font-semibold">Tasa de Ahorro</p>
                <p className="text-xs font-bold text-slate-800">Recuperada este mes</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
