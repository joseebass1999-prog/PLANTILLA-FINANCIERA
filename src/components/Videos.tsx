/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Check, ChevronRight, X, Sparkles, Youtube, MousePointerClick } from 'lucide-react';

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<'works' | 'real' | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const videoSteps = {
    works: [
      {
        title: 'Paso 1: Define tus límites mensuales',
        desc: 'El sistema calcula tus montos ideales basándose en el modelo de presupuestos 50-30-20. Solo ingresas tu cifra de ingresos proyectados una sola vez.',
        badge: 'Cálculo Automático',
        tip: 'No hace falta que uses fórmulas matemáticas, todo está integrado.',
      },
      {
        title: 'Paso 2: Registra tus movimientos diarios',
        desc: 'Con solo colocar el concepto y el monto en las celdas asignadas. Las categorías se auto-clasifican para que consuma cero energía cognitiva de tu parte.',
        badge: 'Registro Ultraseguro',
        tip: 'Toma solo 3 minutos diarios hacerlo al final del día.',
      },
      {
        title: 'Paso 3: Analiza el semáforo de gastos',
        desc: 'La plantilla cambiará de color advirtiéndote si estás cerca de agotar la categoría o si estás en un nivel de ahorro óptimo para tus sueños en la hoja resumen.',
        badge: 'Retroalimentación Visual',
        tip: 'Verde significa libre camino, amarillo precaución, rojo alerta.',
      },
      {
        title: 'Paso 4: Proyecta los próximos meses',
        desc: 'Consigue una pestaña de predicción anual. Mira exactamente cuánto dinero tendrás guardado en 6 y 12 meses si mantienes la disciplina.',
        badge: 'Metas Claras',
        tip: 'Mide de forma exacta el tiempo que necesitas para tus planes.',
      },
    ],
    real: [
      {
        title: 'Escenario: El fin de semana de compras',
        desc: 'Gastaste $45 en una cena fuera y compraste una playera de $25. Registras ambos bajo la categoría "Ocio" el domingo por la noche.',
        badge: 'Fuga Identificada',
        tip: 'Verás de inmediato dónde sangra tu cartera.',
      },
      {
        title: '¿Qué pasa en tu Tablero Principal?',
        desc: 'Al instante el gráfico de "Ocio" avanza, el Balance Neto desciende $70 y la Tasa de Ahorro se reajusta. Todo de forma transparente y sin desfases.',
        badge: 'Cifras en Vivo',
        tip: 'El cálculo toma literalmente 0.1 segundos en actualizarse.',
      },
      {
        title: 'El Momento Clave: Gasto Inteligente',
        desc: 'El sistema calcula tu dinero de libre disposición sobrante para gastos discrecionales, permitiéndote tomar esa segunda salida sin culpa.',
        badge: 'Libertad sin Culpa',
        tip: 'Solo gasta lo que el sistema te aprueba como libre de culpa.',
      },
    ],
  };

  const handleOpenPlay = (video: 'works' | 'real') => {
    setActiveVideo(video);
    setCurrentStep(0);
  };

  const handleNextStep = (stepsLength: number) => {
    if (currentStep < stepsLength - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setActiveVideo(null);
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white border-b border-slate-100 relative">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <div className="max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/15 mb-6 shadow-sm shadow-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Demostración</span>
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mt-4 tracking-tight">
            Mira la plantilla por dentro
          </h2>
          <p className="font-sans text-slate-500 mt-3 text-base md:text-lg">
            Haz clic en reproducir para ver los vídeos explicativos de cómo funciona el sistema y un ejemplo práctico.
          </p>
        </div>

        {/* Video Column Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Video 1: "Cómo funciona" */}
          <div className="flex flex-col items-center">
            <h3 className="font-sans font-bold text-lg text-slate-800 mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Vídeo 1: “Cómo funciona”
            </h3>
            
            {/* Play Button Outer Frame */}
            <div 
              onClick={() => handleOpenPlay('works')}
              className="cursor-pointer relative w-full aspect-[16/9] rounded-2xl bg-slate-950 border border-slate-200/80 overflow-hidden shadow-lg group"
            >
              {/* Dummy Image Thumbnail inside Player */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-4 z-0 group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono px-2 py-0.5 rounded">Tutorial</span>
                  <span className="text-[10px] text-slate-500 font-mono">1:42</span>
                </div>
                
                {/* Visual Representation of Dashboard */}
                <div className="space-y-2 max-w-[80%] mx-auto mt-2">
                  <div className="h-2 bg-slate-800 rounded w-full" />
                  <div className="h-2 bg-slate-800 rounded w-3/4" />
                  <div className="h-6 bg-emerald-500/10 rounded w-1/2 mx-auto flex items-center justify-center border border-emerald-500/10">
                    <span className="text-[8px] text-emerald-400 font-mono">Panel de Control</span>
                  </div>
                </div>

                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-300">Pestaña Principal</p>
                  <p className="text-[10px] text-slate-500 font-mono">Presupuesto consolidado automático</p>
                </div>
              </div>

              {/* Hover shade overlay */}
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all relative">
                  <span className="absolute -inset-1.5 rounded-full border border-white/30 animate-ping" />
                  <Play className="w-5 h-5 fill-emerald-600 ml-1" />
                </div>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-3/4 text-center pointer-events-none">
                <span className="text-[9px] font-mono text-white/50 inline-flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                  <MousePointerClick className="w-2.5 h-2.5" /> Ver interactivo
                </span>
              </div>
            </div>
          </div>

          {/* Video 2: “Ejemplo real” */}
          <div className="flex flex-col items-center">
            <h3 className="font-sans font-bold text-lg text-slate-800 mb-3.5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Vídeo 2: “Ejemplo real”
            </h3>
            
            {/* Play Button Outer Frame */}
            <div 
              onClick={() => handleOpenPlay('real')}
              className="cursor-pointer relative w-full aspect-[16/9] rounded-2xl bg-slate-950 border border-slate-200/80 overflow-hidden shadow-lg group"
            >
              {/* Dummy Image Thumbnail inside Player */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-4 z-0 group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 font-mono px-2 py-0.5 rounded font-bold">Caso Práctico</span>
                  <span className="text-[10px] text-slate-500 font-mono">2:10</span>
                </div>
                
                {/* Visual Representation of Dashboard */}
                <div className="space-y-2 max-w-[80%] mx-auto mt-2">
                  <div className="flex gap-2 justify-center">
                    <div className="w-4 h-4 rounded-full bg-rose-500/20 border border-rose-500/30" />
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 border border-amber-500/30" />
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                  </div>
                  <div className="h-2 bg-slate-800 rounded w-2/3 mx-auto" />
                  <div className="h-4 bg-slate-800/80 rounded" />
                </div>

                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-300">Gasto Imprevisto</p>
                  <p className="text-[10px] text-slate-500 font-mono">Caso real: Reparación del auto</p>
                </div>
              </div>

              {/* Hover shade overlay */}
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all relative">
                  <span className="absolute -inset-1.5 rounded-full border border-white/30 animate-ping" />
                  <Play className="w-5 h-5 fill-emerald-600 ml-1" />
                </div>
              </div>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-3/4 text-center pointer-events-none">
                <span className="text-[9px] font-mono text-white/50 inline-flex items-center gap-1.5 bg-black/60 px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
                  <MousePointerClick className="w-2.5 h-2.5" /> Ver caso práctico
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Microcopy below videos */}
        <p className="font-mono text-xs text-slate-400 max-w-sm mx-auto font-medium">
          “Si sabes escribir números, puedes usarlo.”
        </p>

        {/* Dynamic YouTube Video Player Modal */}
        <AnimatePresence>
          {activeVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Cinematic dark overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveVideo(null)}
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-md"
              />

              {/* Video Player Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-slate-900 rounded-3xl p-3 md:p-4 max-w-4xl w-full shadow-2.5xl relative z-10 border border-slate-800"
              >
                {/* Header info bar */}
                <div className="flex items-center justify-between px-3 pb-3 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold font-mono text-slate-400">
                      {activeVideo === 'works' ? 'Demostración: ¿Cómo funciona?' : 'Simulación: Caso Real en vivo'}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveVideo(null)}
                    className="cursor-pointer text-slate-400 hover:text-white p-1 rounded-lg transition-colors bg-slate-800 hover:bg-slate-705"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Embedded Video Link */}
                <div className="relative overflow-hidden rounded-2xl bg-black aspect-[16/9] ring-1 ring-white/10 shadow-inner">
                  <iframe 
                    src={activeVideo === 'works' 
                      ? "https://jumpshare.com/embed/mVRcTuwZq3455BQAVkMS" 
                      : "https://jumpshare.com/embed/6d8vw2niidTRS4KKo7mF"} 
                    title={activeVideo === 'works' ? "Video de Demostración" : "Video de Caso Real"} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Quick note underneath video */}
                <div className="mt-3 text-center">
                  <p className="text-xs text-slate-500 font-mono">
                    Video de demostración instructiva paso a paso
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
