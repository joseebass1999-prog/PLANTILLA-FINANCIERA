/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Video, TrendingUp, HeartHandshake, Eye, Coins, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { 
      label: 'Diseño moderno', 
      desc: 'Interfaz minimalista, clara y premium',
      icon: Sparkles, 
      color: 'text-emerald-600', 
      bg: 'bg-emerald-50 border-emerald-100' 
    },
    { 
      label: 'Fácil de usar', 
      desc: 'Sin fórmulas complejas ni registros',
      icon: Zap, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50 border-blue-100' 
    },
    { 
      label: 'Vídeo tutoriales y Soporte', 
      desc: 'Acompañamiento paso a paso garantizado',
      icon: Video, 
      color: 'text-purple-600', 
      bg: 'bg-purple-50 border-purple-100' 
    },
    { 
      label: 'Ingresos, Ahorros y más', 
      desc: 'Módulos dinámicos e intuitivos interconectados',
      icon: TrendingUp, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50 border-amber-100' 
    }
  ];

  // We duplicate items to create a seamless infinite loops effect
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="bg-white border-y border-slate-100 py-8 overflow-hidden relative z-20 shadow-sm shadow-slate-100/50 font-sans">
      
      {/* Decorative side blurs for modern studio look */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      {/* Ticker Container with auto-scroll animation */}
      <div className="flex select-none">
        <motion.div
          animate={{ x: [0, '-33.333%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-6 whitespace-nowrap px-4"
        >
          {marqueeItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx} 
                className={`inline-flex items-center gap-4 border p-3 md:p-4.5 rounded-2xl ${item.bg} bg-white shadow-sm shrink-0 transition-transform hover:scale-[1.02] duration-300 pointer-events-auto`}
              >
                {/* Custom dynamic glowing icon box */}
                <div className={`w-10 h-10 rounded-xl bg-white ${item.color} flex items-center justify-center shadow-sm shrink-0 border border-slate-100`}>
                  <IconComp className="w-5 h-5" />
                </div>
                
                <div className="text-left font-sans">
                  <p className="font-sans font-extrabold text-[13px] md:text-sm text-slate-900 tracking-tight leading-none">
                    {item.label}
                  </p>
                  <p className="font-sans font-medium text-[10px] md:text-[11px] text-slate-500 mt-1 leading-none">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
