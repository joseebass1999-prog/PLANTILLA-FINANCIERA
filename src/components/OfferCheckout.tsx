/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShoppingBag, Mail, CreditCard, Lock, Sparkles, CheckSquare, RefreshCw, Star } from 'lucide-react';

interface OfferCheckoutProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  timeLeft: number;
  spotsLeft: number;
}

export default function OfferCheckout({ isOpen, onOpenChange, timeLeft, spotsLeft }: OfferCheckoutProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [step, setStep] = useState<'checkout' | 'processing' | 'done'>('checkout');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'mercadopago'>('card');
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const formatReserveTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Price calculation
  const basePrice = 45;
  const currentPrice = couponApplied ? 7.2 : 9;

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'ORDEN20') {
      setCouponApplied(true);
    } else {
      alert('Cupón no válido. Prueba con: ORDEN20');
    }
  };

  const handleTriggerCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !fullName.trim()) return;

    setStep('processing');
    setTimeout(() => {
      setStep('done');
    }, 2200);
  };

  const handleResetCheckout = () => {
    setEmail('');
    setFullName('');
    setCoupon('');
    setCouponApplied(false);
    setStep('checkout');
    onOpenChange(false);
  };

  return (
    <div>
      {/* 10. Pricing Block (Static Display, prompts checkout when clicked) */}
      <section className="py-24 px-4 md:px-8 bg-slate-900 text-white relative overflow-hidden border-b border-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-purple-950/20 pointer-events-none" />
        
        {/* Background mesh glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Tag */}
          <div className="inline-flex gap-1 items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-sans text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Oferta de Lanzamiento Única
          </div>

          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
            Recupera el Control de tu Dinero Hoy Mismo
          </h2>
          <p className="font-sans text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-12">
            No decidas ahora. Úsalo por 7 días. Si no te convence del todo, escríbenos y te devolvemos el total de tu dinero de inmediato.
          </p>

          {/* Pricing Box / Offer Card */}
          <div className="bg-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800 max-w-xl mx-auto shadow-2xl relative">
            {/* Top recommendation Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 text-[10px] font-sans font-black py-1 px-4 rounded-full uppercase tracking-wider">
              ¡Mejor Opción! Acceso Vitalicio
            </div>

            <p className="font-sans text-slate-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-2">
              SISTEMA COMPLETO DINERO EN ORDEN
            </p>
            
            {/* Price tag with 80% Discount Psychology */}
            <div className="flex flex-col items-center gap-1.5 my-6">
              <span className="text-xs font-sans font-black bg-rose-500 text-white rounded-full px-3 py-1 uppercase tracking-wider animate-bounce">
                80% de Descuento Especial
              </span>
              <div className="flex items-center justify-center gap-4">
                <span className="font-sans text-slate-500 text-xl md:text-2xl line-through decoration-rose-500 decoration-2 font-medium">
                  $45 USD
                </span>
                <span className="font-display text-5xl md:text-6xl font-black text-white tracking-tight flex items-baseline">
                  ${currentPrice} <span className="text-xs md:text-sm text-emerald-400 font-mono font-semibold ml-2">USD</span>
                </span>
              </div>
              <span className="text-xs font-sans text-emerald-400 font-bold mt-1">
                Ahorras exactamente $36 USD hoy mismo
              </span>
            </div>

            <div className="text-xs text-slate-400 font-mono mb-3 bg-slate-900 border border-slate-800/80 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              Acceso inmediato a la plantilla + 4 bonos de regalo
            </div>

            {/* Escasez y Urgencia: FOMO Scarcity Warning */}
            <div className="text-xs text-rose-350 font-sans font-bold mb-8 bg-rose-950/40 border border-rose-900/35 py-2 px-3 mx-auto max-w-sm rounded-xl flex items-center justify-between gap-1.5 animate-pulse">
              <span className="flex items-center gap-1.5 text-left text-[11px] leading-tight text-rose-200">
                ⚠️ <strong className="text-rose-400 font-black">Cupos limitados:</strong> Quedan solo {spotsLeft} licencias con descuento para hoy.
              </span>
              <span className="shrink-0 text-[10px] font-sans font-extrabold text-amber-300 bg-black/40 px-2 py-0.5 rounded tracking-wide border border-rose-800/30">
                ¡FOMO!
              </span>
            </div>

            {/* Checklist of what's included */}
            <div className="space-y-3.5 text-left max-w-sm mx-auto mb-10">
              <div className="flex items-start gap-2 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Plantilla automatizada excel / Google Sheets</span>
              </div>
              <div className="flex items-start gap-2 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Video tutorial de configuración y uso rápido</span>
              </div>
              <div className="flex items-start gap-2 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Guía de Deudas + Ahorro Automático (Bono)</span>
              </div>
              <div className="flex items-start gap-2 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Plantilla Negocios Freelance + Guía de Hábitos (Bono)</span>
              </div>
              <div className="flex items-start gap-2 text-xs md:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-emerald-400 font-semibold">Sin pagos mensuales ni cobros sorpresa</span>
              </div>
            </div>

             {/* CTA Button Triggering Hotmart Checkout */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.open("https://pay.hotmart.com/R104208803Q?off=09ya5out&checkoutMode=10", "_blank");
              }}
              id="cta-buy-offer-button"
              className="cursor-pointer w-full bg-emerald-500 text-slate-950 font-sans font-black text-base md:text-lg py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors"
            >
              👉 Quiero mi sistema ahora
            </motion.button>

            {/* Payments visual placeholders */}
            <div className="flex items-center justify-center gap-4 mt-6 text-[10px] text-slate-500 font-mono">
              <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-500" /> Pago 100% Seguro</span>
              <span>•</span>
              <span>Tarjeta • PayPal • GPay</span>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Slide-over / Modal (Checkout simulation) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background dynamic overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => onOpenChange(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />

            {/* Slide up screen container */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl relative z-10"
            >
              {/* Close Cross icon */}
              <button
                onClick={() => onOpenChange(false)}
                className="cursor-pointer absolute top-4 right-4 bg-slate-800 text-slate-400 hover:text-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>

              {/* Title Section */}
              <div className="text-center mb-6">
                <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono py-1 px-3 rounded-full inline-block mb-2">
                  Pasarela de Pago Segura
                </span>
                <h3 className="font-display font-bold text-xl">Confirmar tu Pedido</h3>
                <p className="text-xs text-slate-400 mt-1">Completa la compra simulada para descargar la plantilla al instante.</p>

                {/* Scarcity / Urgency timer in checkout */}
                <div className="mt-4 bg-rose-950/40 border border-rose-900/35 py-2 px-3.5 rounded-xl text-center text-xs text-rose-200 font-sans font-bold flex items-center justify-center gap-1.5 animate-pulse">
                  <span>⏱️ ¡Cupo reservado! Tu oferta expira en:</span>
                  <span className="text-amber-300 font-mono font-black">{formatReserveTime(timeLeft)}</span>
                </div>
              </div>

              {/* Steps Handler */}
              <AnimatePresence mode="wait">
                {step === 'checkout' && (
                  <motion.form
                    key="form"
                    onSubmit={handleTriggerCheckout}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* Items brief overview */}
                    <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left space-y-2">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Dinero en Orden + 4 Bonos</span>
                        <span>$29.00</span>
                      </div>
                      <div className="flex justify-between text-xs text-emerald-400 font-mono">
                        <span>Descuento Directo del 68%</span>
                        <span>-$20.00</span>
                      </div>
                      {couponApplied && (
                        <div className="flex justify-between text-xs text-blue-400 font-mono">
                          <span>Cupón ORDEN20 Aplicado (-20%)</span>
                          <span>-$1.80</span>
                        </div>
                      )}
                      <div className="flex justify-between text-base font-bold border-t border-slate-800 pt-2 text-white">
                        <span>Monto Final</span>
                        <span>${currentPrice.toFixed(2)} USD</span>
                      </div>
                    </div>

                    {/* Coupon entry card */}
                    {!couponApplied && (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="¿Tienes cupón? Ej. ORDEN20"
                          value={coupon}
                          onChange={(e) => setCoupon(e.target.value)}
                          className="grow bg-slate-950 border border-slate-800 text-xs font-mono py-2 px-3 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                        />
                        <button
                          type="button"
                          onClick={handleApplyCoupon}
                          className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-xs font-semibold py-2 px-3 rounded-lg border border-slate-700 transition"
                        >
                          Aplicar
                        </button>
                      </div>
                    )}

                    {/* Inputs */}
                    <div className="space-y-3 text-left">
                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase font-semibold mb-1">Nombre Completo</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            placeholder="Ej. Juan Pérez"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 text-xs rounded-xl py-3 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-slate-400 uppercase font-semibold mb-1">Tu Correo Electrónico</label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            placeholder="juan@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 text-xs rounded-xl py-3 pl-3 pr-10 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white"
                          />
                          <Mail className="absolute right-3 top-3.5 w-4 h-4 text-slate-500" />
                        </div>
                      </div>
                    </div>

                    {/* Card details simulation */}
                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left space-y-3.5">
                      <div className="flex justify-between items-center bg-slate-900 p-1 rounded-lg border border-slate-800">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('card')}
                          className={`cursor-pointer grow text-xs font-semibold py-1.5 rounded-lg text-center ${paymentMethod === 'card' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                        >
                          Tarjeta
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('paypal')}
                          className={`cursor-pointer grow text-xs font-semibold py-1.5 rounded-lg text-center ${paymentMethod === 'paypal' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
                        >
                          PayPal
                        </button>
                      </div>

                      {paymentMethod === 'card' ? (
                        <div className="space-y-2">
                          <input
                            type="text"
                            disabled
                            value="4242 •••• •••• 4242 (Simulado)"
                            className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg py-2.5 px-3 text-slate-400 cursor-not-allowed font-mono"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              disabled
                              value="12 / 29"
                              className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg py-2.5 px-3 text-slate-400 cursor-not-allowed font-mono text-center"
                            />
                            <input
                              type="text"
                              disabled
                              value="***"
                              className="w-full bg-slate-900 border border-slate-800 text-xs rounded-lg py-2.5 px-3 text-slate-400 cursor-not-allowed font-mono text-center"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-4">
                          <p className="text-xs text-slate-400">Presiona comprar para abrir sesión PayPal segura y simular el débito de ${currentPrice}.</p>
                        </div>
                      )}
                    </div>

                    {/* Trigger action button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="cursor-pointer w-full bg-emerald-500 text-slate-950 font-sans font-black text-sm py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 transition"
                    >
                      💳 Completar Compra de ${currentPrice} USD
                    </motion.button>

                    <div className="flex justify-center items-center gap-1 text-[10px] text-slate-400 font-mono">
                      <Lock className="w-3 h-3 text-emerald-400" /> Transacción encriptada SSL de 256 bits
                    </div>
                  </motion.form>
                )}

                {step === 'processing' && (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <RefreshCw className="w-10 h-10 text-emerald-500 animate-spin" />
                    <div>
                      <h4 className="font-sans font-bold text-lg text-white">Procesando Transacción...</h4>
                      <p className="text-xs text-slate-400 mt-1">Conectando con la pasarela de pagos simulada</p>
                    </div>
                  </motion.div>
                )}

                {step === 'done' && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-6 text-center space-y-6"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>

                    <div>
                      <h4 className="font-display font-black text-2xl text-white">¡Compra Exitosa! 🎉</h4>
                      <p className="text-xs text-slate-400 mt-2">
                        Gracias por tu compra, <span className="font-bold text-white">{fullName}</span>. El sistema ha enviado un correo simulación a <span className="text-emerald-300 font-mono italic">{email}</span>.
                      </p>
                    </div>

                    <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left space-y-2">
                      <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                        Haz clic a continuación para descargar tu plantilla simulada en formato Excel y empezar hoy mismo:
                      </p>
                      
                      {/* Fake direct download triggers */}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Descarga simulada de la plantilla Dinero_en_Orden_v1.xlsx completada con éxito.');
                        }}
                        className="cursor-pointer block text-center w-full bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold py-2.5 px-3 rounded-lg text-white transition border border-slate-700"
                      >
                        📥 Descargar Dinero_en_Orden_v1.xlsx
                      </a>
                    </div>

                    <button
                      onClick={handleResetCheckout}
                      className="cursor-pointer text-xs font-mono text-slate-500 hover:text-white transition-colors"
                    >
                      Cerrar ventana de simulación
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
