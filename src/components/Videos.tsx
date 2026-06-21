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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[620px] mx-auto mb-12">
          
          {/* Video 1: "Cómo funciona" */}
          <div className="flex flex-col items-center text-center">
            <div className="text-center mb-3.5">
              <p className="font-sans font-extrabold text-sm text-emerald-600 uppercase tracking-tight max-w-[260px] mx-auto">
                TODAS LAS FUNCIONES de la plantilla de Finanzas
              </p>
              <p className="text-base mt-1 animate-bounce">👇👇👇</p>
            </div>
            
            {/* Play Button Outer Frame */}
            <div 
              onClick={() => handleOpenPlay('works')}
              className="cursor-pointer relative w-full aspect-[9/16] max-w-[280px] rounded-3xl bg-slate-950 border-4 border-slate-900 overflow-hidden shadow-2xl group ring-1 ring-slate-800/50"
            >
              {/* Dummy Image Thumbnail inside Player simulating a Smartphone Screen */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-5 z-0 group-hover:scale-[1.03] transition-transform duration-500">
                {/* Simulated Phone Top Bar */}
                <div className="flex justify-between items-center w-full text-[9px] text-slate-500 font-mono">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500/20" />
                    <span className="w-3 h-1.5 border border-slate-500 rounded-sm inline-block" />
                  </div>
                </div>
                
                {/* Visual Reel Icon and Badges */}
                <div className="my-auto space-y-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-inner group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold font-sans px-2.5 py-1 rounded-full uppercase tracking-wider">REEL FORMAT</span>
                    <h4 className="text-sm font-bold text-slate-200 font-sans">Cómo funciona</h4>
                    <p className="text-[10px] text-slate-400 font-sans">Demostración interactiva</p>
                  </div>
                </div>

                {/* Bottom section of phone mock */}
                <div className="text-left border-t border-slate-800/80 pt-3">
                  <p className="text-xs font-semibold text-slate-300">Pestaña Principal</p>
                  <p className="text-[10px] text-slate-500 font-sans leading-tight mt-0.5">Presupuesto consolidado automático</p>
                </div>
              </div>

              {/* Hover shade overlay */}
              <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all relative">
                  <span className="absolute -inset-1.5 rounded-full border border-white/30 animate-ping" />
                  <Play className="w-5 h-5 fill-emerald-600 ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 text-center pointer-events-none">
                <span className="text-[10px] font-sans font-bold text-white inline-flex items-center gap-1.5 bg-black/75 px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-lg">
                  <MousePointerClick className="w-3 h-3 text-emerald-400" /> Ver reel
                </span>
              </div>
            </div>
          </div>

          {/* Video 2: “Ejemplo real” */}
          <div className="flex flex-col items-center text-center">
            <div className="text-center mb-3.5">
              <p className="font-sans font-extrabold text-sm text-emerald-600 uppercase tracking-tight max-w-[260px] mx-auto">
                Así funciona la plantilla
              </p>
              <p className="text-base mt-1 animate-bounce">👇</p>
            </div>
            
            {/* Play Button Outer Frame */}
            <div 
              onClick={() => handleOpenPlay('real')}
              className="cursor-pointer relative w-full aspect-[9/16] max-w-[280px] rounded-3xl bg-slate-950 border-4 border-slate-900 overflow-hidden shadow-2xl group ring-1 ring-slate-800/50"
            >
              {/* Dummy Image Thumbnail inside Player simulating a Smartphone Screen */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col justify-between p-5 z-0 group-hover:scale-[1.03] transition-transform duration-500">
                {/* Simulated Phone Top Bar */}
                <div className="flex justify-between items-center w-full text-[9px] text-slate-500 font-mono">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-500/20" />
                    <span className="w-3 h-1.5 border border-slate-500 rounded-sm inline-block" />
                  </div>
                </div>
                
                {/* Visual Reel Icon and Badges */}
                <div className="my-auto space-y-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto border border-blue-500/20 shadow-inner group-hover:bg-blue-500/20 transition-all duration-300">
                    <Play className="w-5 h-5 text-blue-400 fill-blue-400/20 ml-0.5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] bg-blue-500/20 text-blue-400 border border-blue-500/30 font-semibold font-sans px-2.5 py-1 rounded-full uppercase tracking-wider">REEL FORMAT</span>
                    <h4 className="text-sm font-bold text-slate-200 font-sans">Ejemplo Real</h4>
                    <p className="text-[10px] text-slate-400 font-sans">Simulación práctica en vivo</p>
                  </div>
                </div>

                {/* Bottom section of phone mock */}
                <div className="text-left border-t border-slate-800/80 pt-3">
                  <p className="text-xs font-semibold text-slate-300">Gasto Imprevisto</p>
                  <p className="text-[10px] text-slate-500 font-sans leading-tight mt-0.5">Caso real de reparación de auto</p>
                </div>
              </div>

              {/* Hover shade overlay */}
              <div className="absolute inset-0 bg-slate-950/50 group-hover:bg-slate-950/30 transition-colors duration-300" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white text-emerald-600 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all relative">
                  <span className="absolute -inset-1.5 rounded-full border border-white/30 animate-ping" />
                  <Play className="w-5 h-5 fill-emerald-600 ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 text-center pointer-events-none">
                <span className="text-[10px] font-sans font-bold text-white inline-flex items-center gap-1.5 bg-black/75 px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md border border-white/10 shadow-lg">
                  <MousePointerClick className="w-3 h-3 text-emerald-400" /> Ver reel
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
                className="bg-slate-900 rounded-3xl p-3 md:p-4 max-w-[360px] w-full shadow-2.5xl relative z-10 border border-slate-800"
              >
                {/* Header info bar */}
                <div className="flex items-center justify-between px-3 pb-3 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-semibold font-mono text-slate-400">
                      {activeVideo === 'works' ? 'Demostración: Reel' : 'Simulación: Reel'}
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
                <div className="relative overflow-hidden rounded-2xl bg-black aspect-[9/16] ring-1 ring-white/10 shadow-inner">
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
