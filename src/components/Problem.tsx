/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, AlertTriangle, TrendingDown, ArrowUpRight } from 'lucide-react';
import { PROBLEMS } from '../data';

// Map icon names to Lucide elements safely
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  HelpCircle: HelpCircle,
  AlertTriangle: AlertTriangle,
  TrendingDown: TrendingDown,
  Navigation: ArrowUpRight,
};

export default function Problem() {
  return (
    <section className="py-20 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-500/10 to-pink-500/10 text-rose-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-rose-500/15 mb-6 shadow-sm shadow-rose-500/5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
            <span>El diagnóstico</span>
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mt-4 tracking-tight">
            Si te pasa esto, no estás solo
          </h2>
          <p className="font-sans text-slate-500 mt-3 text-base md:text-lg">
            La mayoría de las personas nunca recibieron educación financiera práctica. Así es como se vive cuando no tienes un sistema simple adaptado a la rutina:
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {PROBLEMS.map((prob, index) => {
            const IconComponent = iconMap[prob.iconName] || HelpCircle;
            return (
              <motion.div
                key={prob.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/50 shadow-sm flex gap-4 md:gap-5 items-start cursor-default"
              >
                <div className="p-3 bg-rose-50 text-rose-500 rounded-xl shrink-0">
                  <IconComponent className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-slate-800 tracking-tight mb-2">
                    {prob.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final empathy microcopy */}
        <p className="font-sans text-slate-400 text-xs mt-10 italic">
          * Pero no tiene por qué ser así. El secreto no está en privarte de todo, sino en saber exactamente a dónde va cada dólar.
        </p>
      </div>
    </section>
  );
}
