import { ShieldCheck, CloudLightning, RefreshCw, KeyRound } from 'lucide-react';

export default function TrustBar() {
  return (
    <section id="trust-bar" className="bg-slate-50 border-y border-emerald-500/10 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          
          {/* Trust 1 */}
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">Pago Seguro</span>
              <span className="text-xs md:text-sm font-bold text-slate-900">Encriptación SSL</span>
            </div>
          </div>

          {/* Trust 2 */}
          <div className="flex items-center gap-3 justify-center">
            <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-700">
              <CloudLightning className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">Acceso Instantáneo</span>
              <span className="text-xs md:text-sm font-bold text-slate-900">Descarga Digital</span>
            </div>
          </div>

          {/* Trust 3 */}
          <div className="flex items-center gap-3 justify-center">
            <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-700">
              <KeyRound className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">Un Solo Pago</span>
              <span className="text-xs md:text-sm font-bold text-slate-900">Cero Suscripciones</span>
            </div>
          </div>

          {/* Trust 4 */}
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <div className="bg-emerald-100 p-2.5 rounded-lg text-emerald-700">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="text-xs text-slate-500 block font-semibold uppercase tracking-wider">Garantía Total</span>
              <span className="text-xs md:text-sm font-bold text-slate-900">7 Días de Reembolso</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
