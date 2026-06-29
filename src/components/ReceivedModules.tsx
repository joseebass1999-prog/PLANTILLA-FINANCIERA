// src/components/ReceivedModules.tsx
import { Check, Sparkles, TrendingDown, Target, Briefcase, BookOpen, Calendar, Timer, Gift } from 'lucide-react';
import { useUrgencyTimer } from '../hooks/useUrgencyTimer';
import { motion } from 'motion/react';

interface Module {
  id: number;
  title: string;
  value: number;
  icon: React.ReactNode;
  features: string[];
  badge?: string;
}

const MODULES: Module[] = [
  {
    id: 1,
    title: 'Sistema Inteligente de Presupuesto 50/30/20',
    value: 27,
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
    badge: '80% DESCUENTO',
    features: [
      'Control automatizado de ingresos',
      'Control automatizado de gastos',
      'Dashboard financiero en tiempo real',
      'Gráficas automáticas inteligentes',
      'Resumen anual consolidador',
      'Calculadora de patrimonio neto',
      'Compatible con celular, tablet y PC'
    ]
  },
  {
    id: 2,
    title: 'Fondo de Ahorros con Barras de Progreso',
    value: 9,
    icon: <Target className="w-6 h-6 text-emerald-600" />,
    features: [
      'Metas de ahorro personalizadas',
      'Barras de progreso visuales avanzadas',
      'Seguimiento automático de aportes',
      'Visualización clara del crecimiento'
    ]
  },
  {
    id: 3,
    title: 'Plan Maestro Bola de Nieve (Adiós Deudas)',
    value: 12,
    icon: <TrendingDown className="w-6 h-6 text-emerald-600" />,
    features: [
      'Método de priorización Bola de Nieve',
      'Cálculo exacto del mes de liberación',
      'Proyección de pagos paso a paso'
    ]
  },
  {
    id: 4,
    title: 'Tracker Financiero para Emprendedores',
    value: 19,
    icon: <Briefcase className="w-6 h-6 text-emerald-600" />,
    features: [
      'Control de caja y gastos del negocio',
      'Dashboard de rentabilidad real',
      'Separador rápido de finanzas personales/negocio'
    ]
  },
  {
    id: 5,
    title: 'Biblioteca Premium de Educación Financiera',
    value: 21,
    icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
    features: [
      'Planificador de recortes de Gastos Vampiro',
      'Agenda de Abundancia guiada',
      'Kit completo de mentalidad minimalista'
    ]
  },
  {
    id: 6,
    title: 'Tracker de Hábitos Financieros Integrado',
    value: 11,
    icon: <Calendar className="w-6 h-6 text-emerald-600" />,
    features: [
      'Visualizador de hábitos de consumo diario',
      'Seguimiento semanal de salud financiera',
      'Conectado directamente a tus metas de ahorro'
    ]
  }
];

export default function ReceivedModules() {
  const { formattedTime, spotsLeft, currentDayName } = useUrgencyTimer();

  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const progressPercentage = (spotsLeft / 7) * 100;

  return (
    <section id="received-modules-section" className="py-16 md:py-24 px-6 bg-slate-50 border-b border-emerald-500/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-rose-700 font-black uppercase tracking-widest bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full inline-block">
            ★ SÚPER PAQUETE DE BONOS PREMIUM
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            BONOS PREMIUM TOTALMENTE INCLUIDOS
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Adquiere tu licencia hoy y recibe acceso de por vida al ecosistema completo de herramientas sin mensualidades.
          </p>
        </div>

        {/* Modules Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left mb-12">
          {MODULES.map((mod) => (
            <motion.div
              key={mod.id}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm relative hover:shadow-lg hover:border-emerald-500/30 transition-all overflow-hidden"
            >
              {/* Golden corner highlight */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />

              {mod.badge && (
                <span className="absolute top-4 right-6 bg-rose-600 text-white font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {mod.badge}
                </span>
              )}
              
              <div className="space-y-5">
                {/* Header with Icon and Value */}
                <div className="flex items-center justify-between">
                  <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-2xl">
                    {mod.icon}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-widest">VALOR REAL</span>
                    <span className="text-sm font-bold text-rose-600 line-through">${mod.value} USD</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest block">🎁 BONO REGALO #0{mod.id}</span>
                  <h3 className="text-lg md:text-xl font-black text-slate-900 mt-0.5 leading-tight uppercase">
                    {mod.title}
                  </h3>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 pt-2">
                  {mod.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600 font-medium leading-tight">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status bar */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Acceso</span>
                <span className="text-emerald-600 font-black flex items-center gap-1">
                  <Gift className="w-3.5 h-3.5 text-emerald-500" /> Gratis Incluido
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HIGHLY VISUAL, ATTACTIVE SYNCHRONIZED SCARCITY BOX (Direct requested feature!) */}
        <div className="max-w-3xl mx-auto bg-slate-950 border border-emerald-500/30 rounded-3xl p-6 md:p-8 shadow-2xl mb-12 text-left relative overflow-hidden text-white">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-stretch md:items-center gap-6 justify-between">
            {/* Left Col: Scarcity Text */}
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                </span>
                <span className="text-rose-400 font-black text-[10px] tracking-widest uppercase font-mono">
                  OFERTA CON BONOS LIMITADA
                </span>
              </div>

              <h4 className="text-lg md:text-2xl font-black uppercase text-slate-50 tracking-tight leading-tight">
                ¡SOLO QUEDAN <span className="text-amber-400 underline font-mono">{spotsLeft} DE 7</span> LICENCIAS CON BONOS GRATUITOS!
              </h4>

              <p className="text-xs text-slate-300 font-medium max-w-lg leading-relaxed">
                El sistema de bonos premium de <span className="text-emerald-400 font-bold">$99 USD</span> se otorgará gratis únicamente a las personas que reserven su cupo para este <span className="text-amber-300 underline font-bold">{currentDayName}</span> antes de que el contador llegue a cero.
              </p>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-1.5">
                <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800 p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-[#10b981]"
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                  <span>Velocidad de descarga: Alta</span>
                  <span className="text-rose-400 font-black flex items-center gap-0.5">
                    <Timer className="w-3.5 h-3.5" /> Expira en: {formattedTime} min
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Instant Action CTA */}
            <div className="flex flex-col justify-center items-center gap-3 shrink-0">
              <motion.button
                onClick={scrollToCheckout}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-4 px-8 rounded-xl uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-1.5"
              >
                <span>Descargar con Bonos ($9)</span>
              </motion.button>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">
                Pago único • Garantía de 7 días
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Trust Callout inside the modules list */}
        <div className="max-w-3xl mx-auto text-center bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 justify-between">
          <div className="text-left space-y-1">
            <span className="text-[10px] text-emerald-600 font-black tracking-widest uppercase block">SIN RIESGOS</span>
            <h4 className="text-base font-black text-slate-900 uppercase">¿Quieres empezar hoy mismo?</h4>
            <p className="text-xs text-slate-500 font-medium">Todo el contenido es de descarga instantánea inmediatamente después de tu pago seguro.</p>
          </div>
          <motion.button
            onClick={scrollToCheckout}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto bg-[#10b981] hover:bg-emerald-50 text-slate-950 font-black text-xs px-6 py-3.5 rounded-xl uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-1.5 shrink-0"
          >
            <span>Quiero acceder al Sistema Completo</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
