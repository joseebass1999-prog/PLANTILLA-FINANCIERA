/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Wallet } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  onBuyClick: () => void;
}

export default function Header({ onBuyClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 px-4 md:px-8 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-200">
            <Wallet className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-slate-900">
            Dinero <span className="text-emerald-600">en Orden</span>
          </span>
        </div>

        {/* Small Action Button */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-xs font-sans font-semibold text-slate-600 bg-slate-50 py-1 px-3 rounded-full border border-slate-100">
            Acceso vitalicio $9 USD
          </span>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBuyClick}
            id="header-buy-button"
            className="cursor-pointer bg-emerald-600 text-white font-sans font-semibold text-xs py-2 px-4 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Comprar $9
          </motion.button>
        </div>
      </div>
    </header>
  );
}
