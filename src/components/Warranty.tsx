/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, CalendarRange, Sparkles } from 'lucide-react';

export default function Warranty() {
  return (
    <section className="py-20 px-4 md:px-8 bg-white border-b border-slate-150">
      <div className="max-w-4xl mx-auto bg-emerald-50/40 border border-emerald-100 rounded-3xl p-8 md:p-12 shadow-sm text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-10 relative overflow-hidden">
        {/* Background Visual Ornament */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

        {/* Custom Inline SVG Premium Seal Badge */}
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-600/10 rounded-full blur animate-pulse" />
          <div className="w-24 h-24 rounded-full bg-emerald-600 border-4 border-white shadow-xl flex flex-col items-center justify-center text-white p-2">
            <ShieldCheck className="w-7 h-7 mb-0.5" />
            <span className="text-[10px] font-mono leading-none font-bold uppercase tracking-widest text-center">Garantía</span>
            <span className="text-[8px] font-sans font-medium text-emerald-100">7 DÍAS</span>
          </div>
        </div>

        {/* Text details */}
        <div className="grow space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-mono font-bold bg-white px-2.5 py-0.5 rounded-full border border-emerald-100">
            <CalendarRange className="w-3.5 h-3.5" />
            Compromiso Incondicional
          </div>
          
          <h3 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
            Si no te ayuda, te devolvemos tu dinero en 7 días
          </h3>
          
          <p className="font-sans text-slate-600 text-sm md:text-base leading-relaxed">
            Compra el sistema de <span className="font-semibold text-slate-800">Dinero en Orden</span> de forma 100% segura. Úsalo, configúralo, pon tus compras reales del mes. Si sientes que no te ayuda a ver con claridad tu dinero o no es tan fácil como dijimos, solo envíanos un correo a nuestro soporte en los primeros 7 días y te reembolsaremos el 100% de tu dinero de inmediato. Sin letra chica ni preguntas incómodas.
          </p>
        </div>
      </div>
    </section>
  );
}
