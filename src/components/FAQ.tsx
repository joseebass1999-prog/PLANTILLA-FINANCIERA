// src/components/FAQ.tsx
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: '¿Es un solo pago o tengo que pagar mensualidades?',
    answer: 'Es un pago único de tan solo $9 USD. No hay suscripciones mensuales, ni cuotas ocultas recurrentes, ni cobros adicionales en el futuro. Compras hoy y tienes acceso de por vida al sistema y a todas sus actualizaciones futuras gratis.'
  },
  {
    question: '¿Es compatible con Excel y Google Sheets?',
    answer: '¡Sí, totalmente! El sistema ha sido diseñado y optimizado detalladamente para funcionar de forma perfecta tanto en Microsoft Excel (computador y celular) como en Google Sheets (que es 100% gratuito en línea).'
  },
  {
    question: '¿Necesito tener conocimientos avanzados de Excel?',
    answer: 'En lo absoluto. El sistema cuenta con fórmulas automáticas precargadas. No necesitas escribir fórmulas ni configurar tablas dinámicas. Solo introduces tus números básicos (ingresos, gastos fijos y metas) en las celdas marcadas y el sistema hace todo el trabajo pesado. Además, incluye un videotutorial de inicio rápido paso a paso.'
  },
  {
    question: '¿Cómo y cuándo recibiré el acceso al sistema?',
    answer: 'La entrega es inmediata. En cuanto tu pago sea confirmado por la plataforma segura de Hotmart (usualmente toma menos de 1 minuto), recibirás un correo electrónico automático con los enlaces directos para descargar tus archivos e ingresar al portal con los videotutoriales explicativos.'
  },
  {
    question: '¿Cómo funciona la garantía de reembolso de 7 días?',
    answer: 'La garantía es total e incondicional. Queremos que pruebes el sistema sin ningún riesgo. Descarga los archivos, utilízalos, mira los vídeos. Si en los primeros 7 días sientes que no cumple tus expectativas o no te ayuda a ahorrar, nos envías un correo y te devolvemos el 100% de tu dinero de manera automática, sin preguntas y sin rodeos.'
  },
  {
    question: '¿Es segura mi compra?',
    answer: 'Sí, absolutamente segura. Los pagos son procesados de extremo a extremo por Hotmart, la plataforma de distribución de productos digitales más grande de América Latina. Tus datos están completamente encriptados y protegidos bajo el protocolo de seguridad internacional SSL de 256 bits.'
  },
  {
    question: '¿Puedo usarlo desde mi teléfono celular?',
    answer: 'Sí. Puedes registrar y visualizar tus finanzas desde tu computador de escritorio, laptop, tablet o teléfono celular a través de las aplicaciones móviles de Microsoft Excel o la app oficial de Google Sheets.'
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('offer-checkout-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs text-rose-700 font-black uppercase tracking-widest bg-rose-50 border border-rose-200 px-4 py-1.5 rounded-full inline-block">
            ★ RESOLVIENDO DUDAS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            Resuelve todas tus dudas antes de tomar la decisión y asegura tu acceso inmediato al sistema completo de organización financiera.
          </p>
        </div>

        {/* Accordion FAQ list */}
        <div className="space-y-4 text-left mb-16">
          {FAQS.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-[#059669]' : 'text-slate-400'}`} />
                    <span className="font-bold text-sm md:text-base text-slate-900 pr-2">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-xs md:text-sm leading-relaxed font-medium border-t border-slate-100 bg-slate-50/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Micro FAQ CTA block */}
        <div className="text-center space-y-4">
          <p className="text-xs text-slate-500 font-medium">
            ¿Tienes otra pregunta? No te preocupes. Escríbenos a <span className="text-slate-850 font-bold underline">masterkitfinanciero@gmail.com</span> y te responderemos de inmediato.
          </p>
          <motion.button
            onClick={scrollToCheckout}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#10b981] hover:bg-emerald-400 text-slate-950 font-black text-xs px-8 py-4.5 rounded-xl uppercase tracking-wider cursor-pointer shadow-lg flex items-center justify-center gap-1.5 mx-auto"
          >
            <span>Quiero ordenar mi dinero hoy por solo $9</span>
          </motion.button>
        </div>

      </div>
    </section>
  );
}
