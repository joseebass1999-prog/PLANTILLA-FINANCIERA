export default function Problem() {
  return (
    <section id="problem-section" className="py-16 md:py-24 px-6 bg-white border-b border-emerald-500/10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] text-emerald-700 font-extrabold uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
            ✦ EL DIAGNÓSTICO
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase">
            Si te pasa esto, no estás solo
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            La mayoría de las personas nunca recibieron educación financiera práctica. Así es como se ve cuando no tienes un sistema simple adaptado a tu rutina:
          </p>
        </div>

        {/* Four core pain points in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Pain 1 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4">
            <div className="bg-rose-50 text-rose-600 w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg border border-rose-100 shrink-0">
              ☹
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base md:text-lg font-black text-slate-900">
                No sabes en qué se va tu dinero
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Sientes que trabajas duro, pero para el día 15 de cada mes te preguntas con frustración: "¿A dónde se fue todo lo que gané?"
              </p>
            </div>
          </div>

          {/* Pain 2 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4">
            <div className="bg-rose-50 text-rose-600 w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg border border-rose-100 shrink-0">
              ☹
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base md:text-lg font-black text-slate-900">
                Ansiedad al revisar tu saldo
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Evitas abrir la app del banco para no ver el saldo real. Vives con el temor constante de que tu tarjeta sea rechazada.
              </p>
            </div>
          </div>

          {/* Pain 3 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4">
            <div className="bg-rose-50 text-rose-600 w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg border border-rose-100 shrink-0">
              ☹
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base md:text-lg font-black text-slate-900">
                Intenta ahorrar pero no puedes
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Ahorras un poco a inicios de mes, pero a la tercera semana terminas transfiriendo de regreso porque no te alcanza para tus gastos habituales.
              </p>
            </div>
          </div>

          {/* Pain 4 */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-emerald-500/20 transition-all flex gap-4">
            <div className="bg-rose-50 text-rose-600 w-11 h-11 rounded-xl flex items-center justify-center font-black text-lg border border-rose-100 shrink-0">
              ☹
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base md:text-lg font-black text-slate-900">
                Trabajas pero no avanzas
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Sientes que hace meses (o años) estás atrapado en el mismo punto de estancamiento financiero, atrapado en la rueda de vivir al día.
              </p>
            </div>
          </div>

        </div>

        {/* Micro-aviso al pie */}
        <p className="text-[11px] text-slate-400 text-center mt-6 italic font-medium">
          * Pero no tiene por qué ser así. El dinero no se controla con estrés, se controla con un sistema automatizado de orden visual claro.
        </p>

      </div>
    </section>
  );
}
