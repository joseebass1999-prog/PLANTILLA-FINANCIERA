import { Check, X, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Simplicity() {
  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="simplicity-section" className="py-16 md:py-24 bg-slate-50 border-b border-emerald-500/10 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full">
            ✦ FÁCIL Y DIRECTO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            No necesitas saber nada de finanzas
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            A diferencia de otros sistemas complejos, Dinero en Orden abraza la honestidad de lo simple.
          </p>
        </div>

        {/* Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
          
          {/* Step 1 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/20 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="bg-emerald-50 text-[#059669] w-12 h-12 rounded-2xl flex items-center justify-center font-black border border-emerald-100 shrink-0">
                📄
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-950">Excel básico</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                No necesitas fórmulas complejas ni macros indescifrables. Todo está configurado de antemano; solo escribe los números básicos en las celdas marcadas para ver la magia.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/20 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="bg-emerald-50 text-[#059669] w-12 h-12 rounded-2xl flex items-center justify-center font-black border border-emerald-100 shrink-0">
                🔒
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-950">Sin aplicaciones complejas</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                No tienes que enlazar tus cuentas bancarias confidenciales. Todo se mantiene privado bajo tu control personal en un archivo seguro que no se comparte con nadie.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/20 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="bg-emerald-50 text-[#059669] w-12 h-12 rounded-2xl flex items-center justify-center font-black border border-emerald-100 shrink-0">
                ⚡
              </div>
              <h3 className="text-base md:text-lg font-black text-slate-950">Sin experiencia previa</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Olvídate de términos contables difíciles. El sistema está acompañado por un videotutorial de inicio rápido paso a paso de solo 5 minutos para que empieces sin ninguna fricción.
              </p>
            </div>
          </div>

        </div>

        {/* Comparison Table Section */}
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 shadow-xl max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-black text-center text-slate-900 uppercase tracking-tight mb-8">
            La diferencia es evidente
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-4 px-3">Características</th>
                  <th className="py-4 px-3 text-center">Otras Aplicaciones</th>
                  <th className="py-4 px-3 text-center text-emerald-600">Nuestro Sistema</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
                
                {/* Row 1 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-3 font-semibold text-slate-900">Sin cuotas de suscripción recurrente</td>
                  <td className="py-4 px-3 text-center">
                    <X className="w-4 h-4 text-rose-500 mx-auto" />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" />
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-3 font-semibold text-slate-900">Privacidad absoluta (sin conectar tu banco)</td>
                  <td className="py-4 px-3 text-center">
                    <X className="w-4 h-4 text-rose-500 mx-auto" />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" />
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-3 font-semibold text-slate-900">Se usa sin conexión y en cualquier dispositivo</td>
                  <td className="py-4 px-3 text-center">
                    <X className="w-4 h-4 text-rose-500 mx-auto" />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" />
                  </td>
                </tr>

                {/* Row 4 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-3 font-semibold text-slate-900">Curva de aprendizaje de solo 5 minutos</td>
                  <td className="py-4 px-3 text-center">
                    <X className="w-4 h-4 text-rose-500 mx-auto" />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" />
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-3 font-semibold text-slate-900">Apto para Excel, Google Sheets, etc.</td>
                  <td className="py-4 px-3 text-center">
                    <X className="w-4 h-4 text-rose-500 mx-auto" />
                  </td>
                  <td className="py-4 px-3 text-center">
                    <Check className="w-4 h-4 text-emerald-500 mx-auto stroke-[3]" />
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic CTA button */}
        <div className="mt-12 text-center">
          <motion.button
            onClick={scrollToCheckout}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-4 px-8 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
          >
            <span>Quiero el Sistema Completo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <span className="block text-[11px] text-slate-400 mt-2 font-medium">
            Empieza a ordenar tu dinero hoy mismo • $9 USD Pago Único
          </span>
        </div>

      </div>
    </section>
  );
}
