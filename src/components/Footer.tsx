/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Wallet, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onBuyClick: () => void;
}

export default function Footer({ onBuyClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-4 md:px-8 border-t border-slate-900">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        {/* 12. CTA FINAL */}
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="font-display font-black text-3xl md:text-4xl text-white tracking-tight">
            Empieza a tener control real de tu dinero hoy
          </h3>
          <p className="font-sans text-slate-400 text-sm md:text-base">
            No dejes para el próximo mes el orden financiero que puedes conseguir en 3 minutos. Únete a cientos de personas que ya recuperaron su paz.
          </p>
          
          <div className="pt-4 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-sans text-slate-400 line-through decoration-rose-500 font-semibold">$45 USD</span>
              <span className="text-xs font-sans font-black bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider">¡AHORRA 80% HOY!</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBuyClick}
              id="footer-buy-button"
              className="cursor-pointer inline-flex items-center gap-2 px-10 py-4.5 bg-emerald-500 text-slate-950 font-sans font-black text-base rounded-2xl shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 transition"
            >
              Comprar por $9 USD Vitalicio
            </motion.button>
          </div>
        </div>

        {/* Brand footer details */}
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center text-white">
              <Wallet className="w-3.5 h-3.5" />
            </div>
            <span className="font-display font-bold text-sm text-white">
              Dinero <span className="text-emerald-500">en Orden</span>
            </span>
          </div>

          {/* Legal notes */}
          <p className="font-sans max-w-md md:text-right leading-relaxed text-slate-600">
            © {currentYear} Dinero en Orden. Todos los derechos reservados. <br />
            Este producto es para fines educativos e instructivos. Los resultados financieros son individuales y varían de acuerdo al presupuesto de cada persona.
          </p>
        </div>

      </div>
    </footer>
  );
}
