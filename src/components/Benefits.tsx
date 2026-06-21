/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType, useState, useEffect } from 'react';
import { Eye, Shield, Smile, GraduationCap, ArrowRight, Clock, Gift, Lock, Zap, Award, Check, Sparkles } from 'lucide-react';
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
  // Countdown timer logic (15 minutes constant countdown, persisted)
  const [timeLeft, setTimeLeft] = useState(900); // 15 mins (900 seconds)

  useEffect(() => {
    const storeKey = 'dinero_countdown_time';
    const savedTime = localStorage.getItem(storeKey);
    const now = Math.floor(Date.now() / 1000);
    
    let targetTime: number;
    if (savedTime) {
      targetTime = parseInt(savedTime, 10);
      // If the target has already passed, reset it to 15 minutes from now
      if (targetTime < now) {
        targetTime = now + 900;
        localStorage.setItem(storeKey, targetTime.toString());
      }
    } else {
      targetTime = now + 900;
      localStorage.setItem(storeKey, targetTime.toString());
    }

    const interval = setInterval(() => {
      const currentNow = Math.floor(Date.now() / 1000);
      const diff = targetTime - currentNow;
      if (diff <= 0) {
        // Reset timer loop automatically to keep high urgency alive
        const newTarget = currentNow + 900;
        localStorage.setItem(storeKey, newTarget.toString());
        setTimeLeft(900);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');

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

        {/* Dynamic & High-Converting Checkout Breakdown Area */}
        <div className="mt-20 max-w-3xl mx-auto bg-white rounded-3xl border-2 border-emerald-500/60 shadow-xl overflow-hidden">
          
          {/* Header discount alert */}
          <div className="bg-slate-950 text-white py-3.5 px-6 text-center flex flex-wrap justify-center items-center gap-2">
            <span className="bg-rose-600 text-[10px] font-sans font-black px-2.5 py-1 rounded uppercase tracking-wider animate-pulse">
              80% DESCUENTO
            </span>
            <p className="text-xs md:text-sm font-sans font-bold tracking-tight text-slate-200">
              ¡OFERTA ESPECIAL DE LANZAMIENTO POR TIEMPO LIMITADO!
            </p>
          </div>

          <div className="p-6 md:p-10">
            {/* Title / Description */}
            <div className="text-center mb-8">
              <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 tracking-tight">
                ¿Qué incluye tu Acceso de Hoy?
              </h3>
              <p className="text-sm font-sans text-slate-500 mt-2 leading-relaxed">
                Obtén todo el sistema de orden financiero inmediato para transformar tus finanzas hoy mismo.
              </p>
            </div>

            {/* Itemized Desglose of Pack content */}
            <div className="border border-slate-100 rounded-2xl bg-slate-50/50 p-5 md:p-7 space-y-4 mb-8">
              
              {/* Main Product */}
              <div className="flex justify-between items-start gap-4 pb-3.5 border-b border-slate-200/60">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm md:text-base text-slate-800">
                      Plantilla de Planificación y Control de Finanzas Personales
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Versiones optimizadas en Excel y Google Sheets. Configuración automatizada.
                    </p>
                  </div>
                </div>
                <span className="text-xs md:text-sm font-mono font-bold text-slate-400 line-through shrink-0">
                  $45 USD
                </span>
              </div>

              {/* Bonus 1 */}
              <div className="flex justify-between items-start gap-4 pb-3.5 border-b border-slate-200/60">
                <div className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm md:text-base text-slate-800">
                      Bono 1: Guía de Deudas Acelerada
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Saldar deudas pagando hasta un 65% menos de interés.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded tracking-wide shrink-0">
                  ¡GRATIS!
                </span>
              </div>

              {/* Bonus 2 */}
              <div className="flex justify-between items-start gap-4 pb-3.5 border-b border-slate-200/60">
                <div className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm md:text-base text-slate-800">
                      Bono 2: El Método de Ahorro Automático
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Aprende a pre-ahorrar tu 10% automáticamente cada mes.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded tracking-wide shrink-0">
                  ¡GRATIS!
                </span>
              </div>

              {/* Bonus 3 */}
              <div className="flex justify-between items-start gap-4 pb-3.5 border-b border-slate-200/60">
                <div className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm md:text-base text-slate-800">
                      Bono 3: Plantilla de Finanzas para Proyectos
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Para separar dinero personal y ordenar ganancias de freelancers/negocios.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded tracking-wide shrink-0">
                  ¡GRATIS!
                </span>
              </div>

              {/* Bonus 4 */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-bold text-sm md:text-base text-slate-800">
                      Bono 4: Mente Financiera en 21 Días
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Vence los gastos por impulso, ansiedad y sintoniza abundancia real.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-sans font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded tracking-wide shrink-0">
                  ¡GRATIS!
                </span>
              </div>

            </div>

            {/* Total Value vs Actual Price */}
            <div className="text-center p-6 bg-emerald-50 border border-emerald-150 rounded-2xl mb-8 space-y-3.5">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-sans font-bold text-slate-500">
                <span>Valor de la Plantilla: <strong className="text-slate-800">$45 USD</strong></span>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span>Valor Total de los Bonos: <strong className="text-rose-600 line-through">$71 USD</strong> (¡GRATIS hoy!)</span>
              </div>
              <div className="h-px bg-emerald-200/60 max-w-md mx-auto" />
              <div className="space-y-1">
                <p className="text-xs font-sans font-extrabold uppercase text-slate-400 tracking-wider">VALOR TOTAL REAL DE: $116 USD</p>
                <div className="flex items-baseline justify-center gap-3">
                  <span className="text-lg text-slate-450 line-through decoration-rose-500 decoration-2 font-medium">$45 USD</span>
                  <span className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
                    $9 USD <span className="text-base text-slate-400 font-normal">único pago</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Highlighted core items */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-8">
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50">
                <Zap className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
                <span className="block text-[11px] font-sans font-extrabold uppercase text-slate-700">Entrega Inmediata</span>
              </div>
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50">
                <Award className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
                <span className="block text-[11px] font-sans font-extrabold uppercase text-slate-700">Acceso de por Vida</span>
              </div>
              <div className="p-3 border border-slate-100 rounded-xl bg-slate-50">
                <Check className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
                <span className="block text-[11px] font-sans font-extrabold uppercase text-slate-700">Un Solo Pago</span>
              </div>
              <div className="p-3 border border-rose-100 rounded-xl bg-rose-50/50">
                <Clock className="w-5 h-5 text-rose-500 mx-auto mb-1.5 animate-pulse" />
                <span className="block text-[11px] font-sans font-extrabold uppercase text-rose-700">Tiempo Limitado</span>
              </div>
            </div>

            {/* Interactive Urgency Countdown Timer */}
            <div className="text-center p-5 bg-slate-950 text-white rounded-2xl mb-8 border border-white/5 shadow-inner flex flex-col items-center gap-3">
              <div className="flex items-center gap-2 text-xs font-sans font-extrabold uppercase tracking-widest text-rose-450">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                LA OFERTA ESPECIAL EXPIRA EN:
              </div>
              <div className="flex items-center gap-3.5 font-mono text-3xl md:text-4xl font-extrabold tracking-tight">
                <div className="flex flex-col items-center">
                  <span className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 font-black text-rose-400 drop-shadow shadow-rose-500/10">
                    {mins}
                  </span>
                  <span className="text-[9px] font-sans font-extrabold tracking-wider text-slate-500 uppercase mt-1.5">minutos</span>
                </div>
                <span className="text-rose-500 font-sans -mt-4">:</span>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 font-black text-rose-400 drop-shadow shadow-rose-500/10">
                    {secs}
                  </span>
                  <span className="text-[9px] font-sans font-extrabold tracking-wider text-slate-500 uppercase mt-1.5">segundos</span>
                </div>
              </div>
            </div>

            {/* Call To Action Button */}
            <div className="text-center mb-8">
              <button
                onClick={onCtaClick}
                className="cursor-pointer w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 hover:from-emerald-500 hover:to-teal-400 text-white font-sans font-black text-lg md:text-xl shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:scale-98 transition-all duration-300 group"
              >
                <span>SÍ, QUIERO MI PLANTILLA CON EL 80% DE DESCUENTO</span>
                <ArrowRight className="w-5.5 h-5.5 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
              </button>
            </div>

            {/* Trust Badges under Timer/Button */}
            <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Lock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-sans font-extrabold text-slate-800 uppercase tracking-wide">COMPRA 100% SEGURA</p>
                  <p className="text-[11px] text-slate-500 font-sans leading-tight mt-0.5">Procesamiento encriptado seguro</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-sans font-extrabold text-slate-800 uppercase tracking-wide">ENTREGA INMEDIATA</p>
                  <p className="text-[11px] text-slate-500 font-sans leading-tight mt-0.5">Acceso al instante tras el pago</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Award className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-xs font-sans font-extrabold text-slate-800 uppercase tracking-wide">GARANTÍA DE SATISFACCIÓN</p>
                  <p className="text-[11px] text-slate-500 font-sans leading-tight mt-0.5">7 días de devolución sin preguntas</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
