/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { ShieldCheck, Coins, Briefcase, Sparkles, AlertCircle, CircleMinus, Gift } from 'lucide-react';
import { BONUSES } from '../data';

// Safe mapping helper
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  ShieldAlert: AlertCircle,
  Coins: Coins,
  Briefcase: Briefcase,
  Sparkles: Sparkles,
};

export default function Bonuses() {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-amber-500/15 mb-6 shadow-sm shadow-amber-500/5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
            <span>Oferta Especial Limitada</span>
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mt-4 tracking-tight">
            Llévate estos 4 Bonos Premium de Regalo
          </h2>
          <p className="font-sans text-slate-500 mt-3 text-base md:text-lg">
            Si adquieres el sistema de <span className="font-semibold text-slate-800">Dinero en Orden</span> hoy mismo por solo $9, recibirás acceso perpetuo a estos complementos sin pagar un centavo extra:
          </p>
        </div>

        {/* Featured Border Block */}
        <div className="bg-white border-2 border-dashed border-emerald-500/80 rounded-3xl p-6 md:p-10 shadow-xl shadow-emerald-50/40 relative">
          
          {/* Floating gift tag badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-emerald-600/25">
            <Gift className="w-4 h-4" />
            Valor del Pack de Bonos: $71 USD GRATIS
          </div>

          {/* Bonus Cards List */}
          <div className="space-y-6 md:space-y-8 mt-4">
            {BONUSES.map((bonus, index) => {
              const IconComp = iconMap[bonus.iconName] || Gift;
              return (
                <div 
                  key={bonus.id} 
                  className="flex flex-col sm:flex-row items-start gap-4 md:gap-5 py-4 last:pb-0 border-b border-slate-100 last:border-0"
                >
                  {/* Circle indicator with number */}
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 font-display font-medium text-sm md:text-base border border-emerald-150">
                    B{index + 1}
                  </div>

                  {/* Body Copy */}
                  <div className="grow text-left">
                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <h3 className="font-sans font-bold text-lg text-slate-800 tracking-tight">
                        {bonus.title}
                      </h3>
                      <span className="text-[11px] font-mono font-bold bg-rose-50 text-rose-500 border border-rose-100 py-0.5 px-2 rounded-full">
                        {bonus.value}
                      </span>
                    </div>
                    <p className="font-sans text-slate-500 text-sm mt-1.5 leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Callout */}
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="font-mono text-[11px] text-slate-400 font-medium">
              * Nota: Los bonos se descargan de inmediato junto con la plantilla en formato excel y sheets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
