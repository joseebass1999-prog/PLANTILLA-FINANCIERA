/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Wallet } from 'lucide-react';
import { motion } from 'motion/react';
import UrgencyBanner from './UrgencyBanner';

interface HeaderProps {
  onBuyClick: () => void;
  timeLeft: number;
  spotsLeft: number;
}

export default function Header({ onBuyClick, timeLeft, spotsLeft }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* 1. Urgency / Scarcity FOMO banner at the absolute top */}
      <UrgencyBanner timeLeft={timeLeft} spotsLeft={spotsLeft} />

      {/* 2. Main Navigation Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-emerald-100/60 py-3 md:py-3.5 px-4 md:px-8 text-slate-800 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-sm shadow-emerald-100 animate-pulse">
              <Wallet className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-950">
              Dinero <span className="text-emerald-650 font-black">en Orden</span>
            </span>
          </div>

          {/* Small Action Button */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs font-sans font-bold text-emerald-800 bg-emerald-50 py-1.5 px-3.5 rounded-full border border-emerald-100/85">
              <span className="text-rose-600 font-extrabold mr-1">¡OFERTA ACTIVA!</span> Acceso vitalicio $9 USD
            </span>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBuyClick}
              id="header-buy-button"
              className="cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-sans font-bold text-xs py-2 px-4 rounded-lg shadow-sm hover:from-emerald-500 hover:to-teal-500 transition-colors focus:ring-2 focus:ring-emerald-500"
            >
              Comprar $9
            </motion.button>
          </div>
        </div>
      </header>
    </div>
  );
}
