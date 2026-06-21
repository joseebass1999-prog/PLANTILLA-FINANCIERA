/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Coins, 
  CheckCircle2, 
  Zap, 
  Target, 
  Flame, 
  Calendar, 
  Info, 
  BarChart3, 
  ListChecks, 
  Clock, 
  Sparkles,
  PieChart,
  Grid,
  ZoomIn,
  X
} from 'lucide-react';

interface SolutionSimulatorProps {
  onCtaClick: () => void;
}

export default function SolutionSimulator({ onCtaClick }: SolutionSimulatorProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  
  const snowballFeatures = [
    { title: "Balance de Deuda", desc: "Monitorea el saldo insoluto en tiempo real de cada una de tus cuentas y pasivos." },
    { title: "Pago Mínimo Mensual", desc: "Visualiza claramente los pagos obligatorios requeridos para mantener tus cuentas al corriente." },
    { title: "Interes Anual", desc: "Introduce la tasa anual de cada crédito para prever el impacto real de los cargos financieros." },
    { title: "Mes Libre de Deudas", desc: "El sistema estima y te da una fecha exacta en la que tu saldo llegará completamente a cero." },
    { title: "Meses Restantes", desc: "Una cuenta regresiva dinámica te indica cuántas cuotas te faltan para liquidar cada cuenta." },
    { title: "Barra de Progreso (Árbol)", desc: "Una interfaz visual intuitiva en escala para celebrar cada abono y sentir el avance real." },
    { title: "Cálculos automáticos", desc: "Sin necesidad de meter fórmulas, el simulador calcula todo automáticamente al instante." },
    { title: "Actualiza según monto pagado", desc: "Ajusta las proyecciones al instante ingresando los pagos reales que realizas cada mes." },
    { title: "Espacio para +10 deudas", desc: "Soporte completo y pre-configurado para gestionar más de 10 créditos simultáneos sin enredos." },
    { title: "Método Bola de Nieve", desc: "Ordena automáticamente tus deudas para que comiences liquidando la menor con máxima motivación." },
    { title: "Gráficas de progreso", desc: "Visualizadores circulares integrados por deuda para ver la reducción porcentual de tus pasivos." }
  ];

  const savingsFeatures = [
    { title: "Total Ahorrado", desc: "La suma consolidada al instante de todos tus fondos y metas de ahorro activas." },
    { title: "Queda por Ahorrar", desc: "Diferencial exacto en vivo de cuánto te falta para lograr tus metas financieras proyectadas." },
    { title: "Gráfica dinámica", desc: "Barras dinámicas autoajustables que ilustran el progreso de tus aportes reales." },
    { title: "Meta", desc: "Fija objetivos económicos ambiciosos y claros para motivar tu ahorro diario y mensual." },
    { title: "Contribución Mensual", desc: "Planea de manera realista el monto periódico que inyectarás a cada cuenta o fondo." },
    { title: "Monto Inicial", desc: "Registra el capital semilla con el que arrancas tus metas y cuentas especiales." },
    { title: "Barra de progreso", desc: "Líneas de carga que avanzan visualmente de acuerdo con el porcentaje de meta cubierta." },
    { title: "Meses Restantes", desc: "Cronómetro automatizado que calcula cuándo lograrás tu meta según tu aporte mensual." },
    { title: "Registro de Ahorros", desc: "Bitácora cronológica para asentar depósitos, conceptos y fechas sin perder el rastro de tus fondos." },
    { title: "Dashboard Ahorro", desc: "Consola central que unifica el estado general de tus reservas y metas de ahorro." },
    { title: "Espacio para +15 Ahorros", desc: "Módulo avanzado preparado para registrar más de 15 objetivos de ahorro de forma simultánea." }
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-white border-b border-slate-100 font-sans" id="solucion">
      <div className="max-w-6xl mx-auto">
        
        {/* =========================================================================
            1. SECCIÓN: PAGO DE DEUDAS (BOLA DE NIEVE)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          
          {/* Left Block: Text Details & List */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-amber-500/15 shadow-sm shadow-amber-500/5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
                <span>MÉTODO LÍDER DE REDUCCIÓN</span>
              </span>
              <h2 className="font-display font-black text-3xl md:text-4.5xl text-slate-900 tracking-tight leading-none uppercase">
                Pago de Deudas: Bola de Nieve
              </h2>
              <p className="font-sans font-medium text-slate-500 text-base md:text-lg leading-relaxed pt-2">
                Libérate del estrés financiero con el método de desamortización más psicológicamente efectivo del mundo. El sistema organiza tus deudas automáticamente de menor a mayor tamaño, creando un impulso imparable para liquidarlas todas.
              </p>
            </div>

            {/* Structured specifications of what is included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {snowballFeatures.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <div className="p-1 rounded bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-slate-800 tracking-tight">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Image Mockup Showcase with Floating Animation */}
          <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => setActiveImage("https://i.postimg.cc/Kjm6XtFx/Chat-GPT-Image-20-jun-2026-23-21-28.png")}
              className="relative w-full max-w-lg bg-white rounded-3xl p-2.5 shadow-2xl border border-slate-200/80 group overflow-hidden cursor-zoom-in"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/3] flex items-center justify-center p-1.5 border border-slate-100/50">
                <img 
                  src="https://i.postimg.cc/Kjm6XtFx/Chat-GPT-Image-20-jun-2026-23-21-28.png" 
                  alt="Planilla de Pago de Deudas Bola de Nieve" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5">
                  <div className="p-2.5 rounded-full bg-white text-emerald-800 shadow-md">
                    <ZoomIn className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-sans font-bold text-white tracking-wide bg-emerald-950/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    🔍 Clic para ampliar y ver letras claras
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>


        {/* =========================================================================
            2. SECCIÓN: FONDO DE AHORROS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Image Mockup Showcase with Floating Animation */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              onClick={() => setActiveImage("https://i.postimg.cc/C1cgxZdW/c1f8e0ea-bf36-433f-a03b-414966154391.jpg")}
              className="relative w-full max-w-lg bg-white rounded-3xl p-2.5 shadow-2xl border border-slate-200/80 group overflow-hidden cursor-zoom-in"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white aspect-[4/3] flex items-center justify-center p-1.5 border border-slate-100/50">
                <img 
                  src="https://i.postimg.cc/C1cgxZdW/c1f8e0ea-bf36-433f-a03b-414966154391.jpg" 
                  alt="Planilla de Fondo de Ahorros Inteligente" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-[1.04] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5">
                  <div className="p-2.5 rounded-full bg-white text-emerald-800 shadow-md">
                    <ZoomIn className="w-5 h-5 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-sans font-bold text-white tracking-wide bg-emerald-950/80 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    🔍 Clic para ampliar y ver letras claras
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Text Details & List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-800 font-sans text-xs font-black uppercase tracking-wider rounded-full border border-emerald-500/15 shadow-sm shadow-emerald-500/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>LIBERTAD Y CRECIMIENTO</span>
              </span>
              <h2 className="font-display font-black text-3xl md:text-4.5xl text-slate-900 tracking-tight leading-none uppercase">
                Fondo de Ahorros Inteligente
              </h2>
              <p className="font-sans font-medium text-slate-500 text-base md:text-lg leading-relaxed pt-2">
                Construye un futuro financiero invulnerable. Esta sección unificada te permite dar seguimiento milimétrico a tus metas de reserva, viajes, aportes para el retiro y fondos de emergencia de manera simultánea sin descuadrar tus gastos corrientes.
              </p>
            </div>

            {/* Structured specifications of what is included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              {savingsFeatures.map((feat, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <div className="p-1 rounded bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-extrabold text-xs text-slate-800 tracking-tight">
                      {feat.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* =========================================================================
            3. BANNER: LLAMADO A LA ACCIÓN GLOBAL ACCESO VITALICIO
            ========================================================================= */}
        <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-950 p-6 md:p-10 rounded-3xl text-left border border-slate-800 relative overflow-hidden shadow-2.5xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_24px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full w-max text-emerald-400 text-xs font-bold mb-3.5 tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Acceso de por vida • Sin pagos mensuales</span>
              </div>
              <h4 className="font-sans font-black text-xl md:text-2xl text-white leading-tight uppercase">
                Empieza hoy mismo a ordenar tu dinero de forma automática
              </h4>
              <p className="font-sans font-medium text-slate-400 text-sm mt-2 leading-relaxed">
                Adquiere la plantilla principal hojeando por un único cargo mínimo de $9 y llévate todo el paquete de 4 bonos exclusivos incluidos sin costo extra. Diseñado para usarse inmediatamente en Google Sheets o Excel.
              </p>

              {/* Minimalist checklist highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Plantilla 'Dinero en Orden'</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Módulo Bola de Nieve + Fondo de Ahorros</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Video guía de uso paso a paso</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Soporte prioritario por email</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-sans text-slate-400 line-through decoration-rose-500 font-semibold">$45 USD</span>
                <span className="text-xs font-sans font-black bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">¡AHORRA 80%!</span>
              </div>
              <button
                onClick={onCtaClick}
                id="solution-showcase-cta"
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-black text-sm rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/25 w-full sm:w-auto text-center"
              >
                Quiero mi plantilla por $9 USD
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase font-mono">Pago único • Ajustado con 80% de Descuento</span>
            </div>
          </div>
        </div>

      </div>

      {/* High-Resolution Modal Image Zoom */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-5xl h-full max-h-[85vh] flex flex-col items-center justify-center bg-white/5 rounded-3xl p-4 border border-white/10 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 z-10 cursor-pointer"
              title="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
              <img
                src={activeImage}
                alt="Planilla en Alta Resolución"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-xl shadow-lg border border-white/5"
              />
            </div>
            <div className="text-center mt-3">
              <button
                onClick={() => setActiveImage(null)}
                className="text-xs font-sans font-bold text-slate-350 hover:text-white bg-white/10 hover:bg-white/15 px-4 py-2 rounded-full transition-colors uppercase tracking-wider cursor-pointer"
              >
                Volver a la página
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
