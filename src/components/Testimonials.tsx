/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/15 mb-6 shadow-sm shadow-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Testimonios</span>
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mt-4 tracking-tight">
            Lo que dicen quienes ya ordenaron sus finanzas
          </h2>
          <p className="font-sans text-slate-500 mt-3 text-base md:text-lg">
            Personas reales que recuperaron la claridad de su dinero gracias al sistema. Sin adornos políticos, testimonios honestos de la comunidad.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 flex flex-col justify-between text-left relative group hover:bg-slate-50/70 transition-colors"
            >
              {/* Star Rating & Quote Accent */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <MessageSquareQuote className="w-8 h-8 text-slate-200/80 group-hover:text-slate-300 transition-colors" />
              </div>

              {/* Quote Statement */}
              <p className="font-sans text-slate-700 text-sm md:text-base leading-relaxed italic mb-6">
                "{t.quote}"
              </p>

              {/* Tag Quote and Profile Block */}
              <div className="border-t border-slate-200/50 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-250 shrink-0" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-sans font-bold text-sm text-slate-800 leading-none">{t.name}</h4>
                    <span className="text-[11px] text-slate-500 font-medium mt-1 inline-block">{t.role}</span>
                  </div>
                </div>

                {/* Testimonial highlight tag */}
                <span className="text-[11px] font-mono font-bold text-emerald-700 bg-emerald-55 py-1 px-3 rounded-full border border-emerald-100 max-w-fit truncate">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
