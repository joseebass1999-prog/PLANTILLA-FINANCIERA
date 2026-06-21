/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, CalendarRange, Sparkles, HeartHandshake, Mail, CornerDownRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Warranty() {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-[#f7fcf9] border-b border-emerald-100/50 relative overflow-hidden">
      {/* Soft background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-250/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-amber-200/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-[#f7fcf9] to-[#edf7f2] border border-emerald-600/15 rounded-3xl p-8 md:p-14 shadow-xl shadow-emerald-950/5 text-center md:text-left flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10">
        
        {/* Background Visual Ornament */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-emerald-100/35 to-transparent rounded-full blur-xl pointer-events-none" />

        {/* Custom Inline SVG Premium Seal Badge with interactive pulse */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="relative shrink-0 flex items-center justify-center cursor-pointer"
        >
          <div className="absolute inset-0 bg-emerald-600/15 rounded-full blur-xl animate-pulse" />
          
          {/* Main golden/emerald outer border layout */}
          <div className="w-28 h-28 rounded-full bg-emerald-700 border-4 border-white shadow-2xl flex flex-col items-center justify-center text-white p-3 relative z-10 transition-shadow hover:shadow-emerald-600/20">
            {/* Embedded details */}
            <ShieldCheck className="w-8 h-8 mb-1 text-amber-300 animate-bounce" />
            <span className="text-[9px] font-mono leading-none font-bold uppercase tracking-widest text-center text-emerald-100">Garantía</span>
            <span className="text-xs font-sans font-black text-white mt-1">100% REAL</span>
          </div>

          {/* Decorative rotating accent ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-emerald-300/30 animate-spin-slow pointer-events-none" />
        </motion.div>

        {/* Text details */}
        <div className="grow space-y-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-sans font-bold bg-emerald-150/40 px-3.5 py-1 rounded-full border border-emerald-250/20 shadow-sm">
              <CalendarRange className="w-3.5 h-3.5" />
              Compromiso Incondicional
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-amber-800 font-sans font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-500" />
              Riesgo Cero
            </span>
          </div>
          
          <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight leading-tight">
            Úsalo con total tranquilidad: <br className="hidden md:inline" />
            Si no te ayuda, <span className="text-emerald-700 font-black relative">te devolvemos tu dinero.</span>
          </h3>
          
          <p className="font-sans text-slate-600 text-sm md:text-[15px] leading-relaxed">
            Compra de forma <span className="font-bold text-slate-800">100% segura</span>. Prueba el sistema de <span className="font-semibold text-slate-900">Dinero en Orden</span>, úsalo, configúralo con tus compras reales y sigue los videotutoriales paso a paso.
          </p>

          <p className="font-sans text-slate-650 text-sm md:text-[15px] leading-relaxed">
            Si durante los primeros{" "}
            <span className="relative inline-block font-extrabold px-1.5 py-0.5 mx-[1.5px]">
              <span className="absolute inset-0 bg-amber-300 -rotate-1 rounded shadow-sm border border-amber-400" />
              <span className="relative text-amber-950 font-black">7 días</span>
            </span>{" "}
            sientes que tener el control absoluto de tus ingresos y egresos no es lo tuyo, o que la plantilla no es tan sencilla como dijimos, solo envíanos un correo. Te devolvemos el <span className="font-black text-emerald-700 underline decoration-emerald-250 underline-offset-4">100% de tu dinero de manera incondicional</span>. Sin explicaciones ni preguntas incómodas. Un solo clic de soporte y listo.
          </p>

          {/* Guarantee secondary highlight trust line */}
          <div className="pt-3 border-t border-emerald-600/10 flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-emerald-650" />
              Trato honesto de persona a persona
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-emerald-650" />
              Soporte: info@dineroenorden.com
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
