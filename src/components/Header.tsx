export default function Header() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoUrl = (import.meta as any).env?.VITE_LOGO_IMAGE_URL || '';

  return (
    <header id="app-header" className="bg-white/90 border-b border-slate-100 py-4 px-6 sticky top-0 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt="Logo Dinero en Orden" 
              className="h-8 max-w-[150px] object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <>
              <div className="bg-emerald-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg">
                $
              </div>
              <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-slate-900">
                Dinero <span className="text-emerald-600">en Orden</span>
              </span>
            </>
          )}
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600 font-medium">
          <button onClick={() => scrollToSection('simulator-section')} className="hover:text-emerald-600 transition-colors cursor-pointer">
            Simulador
          </button>
          <button onClick={() => scrollToSection('benefits-section')} className="hover:text-emerald-600 transition-colors cursor-pointer">
            Beneficios
          </button>
          <button onClick={() => scrollToSection('video-tour-section')} className="hover:text-emerald-600 transition-colors cursor-pointer">
            Tour Plantilla
          </button>
          <button onClick={() => scrollToSection('testimonials-section')} className="hover:text-emerald-600 transition-colors cursor-pointer">
            Testimonios
          </button>
          <button onClick={() => scrollToSection('offer-checkout-section')} className="hover:text-emerald-600 transition-colors cursor-pointer">
            Garantía
          </button>
        </nav>

        {/* Quick CTA */}
        <div>
          <button 
            onClick={() => scrollToSection('offer-checkout-section')}
            className="bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white border border-emerald-200/60 hover:border-transparent text-xs md:text-sm font-bold py-2 px-4 rounded-lg transition-all cursor-pointer"
          >
            Obtener Plantilla
          </button>
        </div>

      </div>
    </header>
  );
}
