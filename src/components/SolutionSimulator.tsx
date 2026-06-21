/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  Grid
} from 'lucide-react';

interface SolutionSimulatorProps {
  onCtaClick: () => void;
}

export default function SolutionSimulator({ onCtaClick }: SolutionSimulatorProps) {
  
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
              className="relative w-full max-w-lg bg-slate-900 rounded-3xl p-3 shadow-2.5xl ring-1 ring-slate-800"
            >
              {/* Browser control mock bar */}
              <div className="flex items-center justify-between px-3 pb-2.5 pt-1 border-b border-slate-800/80 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="bg-slate-950/80 text-[9px] text-slate-400 font-mono py-0.5 px-5 rounded-md border border-slate-800/50 flex items-center gap-1">
                  <span>modulo_bola_de_nieve.xlsx</span>
                </div>
                <div className="w-8" />
              </div>

              {/* High-quality generated mockup representation */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 aspect-[4/3]">
                <img 
                  src="/src/assets/images/debt_snowball_sheet_mockup_1782000533699.jpg" 
                  alt="Planilla de Pago de Deudas Bola de Nieve" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative overlay badge indicating what module this is */}
                <div className="absolute bottom-3 left-3 bg-slate-950/95 text-[10px] text-amber-400 font-mono font-bold py-1 px-3 rounded-full border border-amber-500/30 flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                  <Flame className="w-3 h-3 text-amber-500 animate-pulse" />
                  <span>Módulo Bola de Nieve Incluido</span>
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
              className="relative w-full max-w-lg bg-slate-900 rounded-3xl p-3 shadow-2.5xl ring-1 ring-slate-800"
            >
              {/* Browser control mock bar */}
              <div className="flex items-center justify-between px-3 pb-2.5 pt-1 border-b border-slate-800/80 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="bg-slate-950/80 text-[9px] text-slate-400 font-mono py-0.5 px-5 rounded-md border border-slate-800/50 flex items-center gap-1">
                  <span>modulo_fondo_de_ahorros.xlsx</span>
                </div>
                <div className="w-8" />
              </div>

              {/* High-quality generated mockup representation */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-950 aspect-[4/3]">
                <img 
                  src="/src/assets/images/savings_fund_sheet_mockup_1782000518186.jpg" 
                  alt="Planilla de Fondo de Ahorros Inteligente" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Decorative overlay badge indicating what module this is */}
                <div className="absolute bottom-3 left-3 bg-slate-950/95 text-[10px] text-emerald-400 font-mono font-bold py-1 px-3 rounded-full border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                  <Coins className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Espacio para +15 Ahorros</span>
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

            <div className="w-full lg:w-auto shrink-0 flex flex-col items-center gap-2.5">
              <button
                onClick={onCtaClick}
                id="solution-showcase-cta"
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-8 py-4.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-sans font-black text-sm rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/25 w-full sm:w-auto text-center"
              >
                Quiero mi plantilla por $9 USD
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase font-mono">Pago único • Garantía de Devolución</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
