/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileSpreadsheet, Smartphone, Sparkles, Check, X } from 'lucide-react';

export default function Simplicity() {
  const simplicityPoints = [
    {
      title: 'Excel básico',
      desc: 'No necesitas fórmulas complejas ni macros indescifrables. Todo está pre-calculado, simplemente rellena las celdas marcadas para ver la magia.',
      icon: FileSpreadsheet,
    },
    {
      title: 'Sin apps complejas',
      desc: 'No tienes que enlazar tus cuentas bancarias confidenciales ni lidiar con molestas apps de suscripción mensual que se quedan sin soporte.',
      icon: Smartphone,
    },
    {
      title: 'Sin experiencia previa',
      desc: 'Olvídate de tecnicismos contables molestos. Viene acompañado de una guía rápida de 5 minutos para empezar sin ninguna fricción.',
      icon: Sparkles,
    },
  ];

  const comparisonRows = [
    { feature: 'Sin cuotas de suscripción recurrente', standardApp: false, template: true },
    { feature: 'Privacidad absoluta (sin conectar tu banco)', standardApp: false, template: true },
    { feature: 'Se usa offline y en cualquier dispositivo', standardApp: true, template: true },
    { feature: 'Curva de aprendizaje de solo 5 minutos', standardApp: false, template: true },
    { feature: 'Apto para Excel, Google Sheets, etc.', standardApp: false, template: true },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/15 mb-6 shadow-sm shadow-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Fácil y directo</span>
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mt-4 tracking-tight">
            No necesitas saber nada de finanzas
          </h2>
          <p className="font-sans text-slate-500 mt-3 text-base md:text-lg">
            A diferencia de otros sistemas sofisticados, Dinero en Orden abraza la honestidad de lo simple.
          </p>
        </div>

        {/* Simplicity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {simplicityPoints.map((point, idx) => {
            const IconComp = point.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 flex flex-col items-start text-left hover:-translate-y-1 transition-transform"
              >
                <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl mb-5">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-bold text-lg text-slate-800 mb-2">
                  {point.title}
                </h3>
                <p className="font-sans text-slate-500 text-xs md:text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Box for High Conversion */}
        <div className="bg-slate-50 border border-slate-200/50 rounded-2xl overflow-hidden p-6 md:p-8 max-w-3xl mx-auto">
          <h3 className="font-sans font-bold text-lg text-slate-800 text-center mb-6">
            La diferencia es evidente
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-wider font-bold text-slate-400 border-b border-slate-250 pb-2">
              <span>Características</span>
              <div className="flex gap-6 sm:gap-12 text-right">
                <span className="w-20 text-center">Otras Apps</span>
                <span className="w-24 text-center text-emerald-600">Nuestro Sistema</span>
              </div>
            </div>

            {comparisonRows.map((row, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs md:text-sm py-1 border-b border-slate-100 last:border-0">
                <span className="font-medium text-slate-600 text-left pr-4">{row.feature}</span>
                <div className="flex gap-6 sm:gap-12 shrink-0">
                  <div className="w-20 flex justify-center text-rose-500">
                    {row.standardApp ? <Check className="w-4.5 h-4.5" /> : <X className="w-4.5 h-4.5" />}
                  </div>
                  <div className="w-24 flex justify-center text-emerald-600 font-bold">
                    {row.template ? <Check className="w-5 h-5 bg-emerald-100 rounded p-0.5" /> : <X className="w-5 h-5" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
