export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-slate-50 border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/60">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="bg-[#059669] text-white w-7 h-7 rounded-lg flex items-center justify-center font-black text-base">
              $
            </div>
            <span className="font-display font-extrabold text-base tracking-tight text-slate-900">
              Dinero <span className="text-[#059669]">en Orden</span>
            </span>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <a href="#simulator-section" className="hover:text-emerald-600 transition-colors">Simulador</a>
            <a href="#benefits-section" className="hover:text-emerald-600 transition-colors">Beneficios</a>
            <a href="#testimonials-section" className="hover:text-emerald-600 transition-colors">Testimonios</a>
            <a href="#offer-checkout-section" className="hover:text-emerald-600 transition-colors">Garantía</a>
          </div>

          {/* Scroll to top */}
          <button 
            onClick={scrollToTop}
            className="text-xs text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>Volver arriba</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

        </div>

        {/* Lower footer with disclaimers */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            SOPORTE AL CLIENTE: Para dudas de descarga o soporte con tus archivos de Google Sheets, escríbenos a <span className="text-slate-800 font-semibold">masterkitfinanciero@gmail.com</span>. Respondemos en menos de 24 horas laborables. | <span className="text-emerald-700 font-bold">Garantía Incondicional: Reembolso inmediato de 7 días.</span>
          </p>
          <p className="text-[10px] text-slate-400 leading-relaxed">
            DESCARGO DE RESPONSABILIDAD: Los resultados expuestos en los testimonios y simulaciones son de carácter ilustrativo e inspiracional. No constituyen asesoría financiera formal ni garantizan enriquecimiento automático. El éxito financiero personal depende enteramente de la disciplina individual, la consistencia en el registro y la ejecución de los planes adoptados por el usuario. "Dinero en Orden" es una herramienta educativa de control presupuestario digital.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-[10px] text-slate-400">
            <span>© 2026 Dinero en Orden. Todos los derechos reservados.</span>
            <div className="flex items-center gap-4">
              <span className="hover:text-slate-850 cursor-pointer">Términos de Servicio</span>
              <span className="hover:text-slate-850 cursor-pointer">Políticas de Privacidad</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
