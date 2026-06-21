/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { Eye, Shield, Smile, GraduationCap, ArrowRight } from 'lucide-react';
import { BENEFITS } from '../data';

// Safe Lucide mapping
const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Eye: Eye,
  Compass: Shield,
  Activity: Smile,
  Icons: GraduationCap,
};

interface BenefitsProps {
  onCtaClick: () => void;
}

export default function Benefits({ onCtaClick }: BenefitsProps) {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/15 mb-6 shadow-sm shadow-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Los Beneficios</span>
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mt-4 tracking-tight">
            ¿Qué vas a lograr con este sistema?
          </h2>
          <p className="font-sans text-slate-500 text-base md:text-lg mt-3">
            Dinero en Orden está diseñado para aportarte el control práctico que necesitas todos los días sin robarte nada de tiempo.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {BENEFITS.map((benefit) => {
            const IconComponent = iconMap[benefit.iconName] || Eye;
            return (
              <div
                key={benefit.id}
                className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200/55 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5 flex-col sm:flex-row text-left group"
              >
                {/* Icon badge */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="font-sans font-bold text-lg text-slate-800 tracking-tight mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple inline bridge CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onCtaClick}
            className="cursor-pointer inline-flex items-center gap-1.5 text-sm font-sans font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            Quiero disfrutar de estos beneficios por $9 USD
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
