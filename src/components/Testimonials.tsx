import { TESTIMONIALS } from '../data';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="testimonials-section" className="py-16 md:py-24 px-6 bg-slate-50 border-y border-emerald-500/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-[#059669] font-black uppercase tracking-widest bg-emerald-100 border border-emerald-200 px-4 py-1.5 rounded-full">
            ✦ TESTIMONIOS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mt-3 uppercase tracking-tight">
            Lo que dicen quienes ya ordenaron sus finanzas
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Personas reales que recuperaron la claridad de su dinero gracias al sistema. Sin adornos políticos, testimonios honestos de la comunidad.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white border border-slate-200/80 rounded-3xl p-6 flex flex-col justify-between relative hover:border-emerald-500/20 transition-all shadow-md"
            >
              
              {/* Success Tag & Stars & Content */}
              <div>
                {testimonial.badge && (
                  <div className="mb-3.5">
                    <span className="bg-emerald-50 text-[#059669] border border-emerald-150 font-black text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider block text-center truncate">
                      ✓ {testimonial.badge}
                    </span>
                  </div>
                )}

                {/* 5-star rating */}
                <div className="flex items-center gap-0.5 mb-3 text-amber-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
 
                {/* Actual review text */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed italic mb-6">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author info */}
              <div className="border-t border-slate-100 pt-4 mt-auto flex items-center gap-3">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">{testimonial.name}</h4>
                  <span className="text-[11px] text-slate-500 block truncate">{testimonial.role}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Global summary count */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2 font-semibold">
          <Star className="w-4 h-4 text-[#059669] fill-[#059669]" />
          <span>Más de <strong>1,450+ finanzas personales saneadas</strong> en América Latina y España en lo que va del año.</span>
        </div>

        {/* Dynamic CTA button */}
        <div className="mt-12 text-center">
          <motion.button
            onClick={scrollToCheckout}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs md:text-sm py-4 px-8 rounded-xl uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-emerald-500/10"
          >
            <span>Quiero acceder al Sistema Completo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <span className="block text-[11px] text-slate-400 mt-2 font-medium">
            Únete hoy por solo $9 USD pago único • Acceso inmediato de por vida
          </span>
        </div>

      </div>
    </section>
  );
}
