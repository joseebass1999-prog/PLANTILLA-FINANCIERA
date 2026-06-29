import { useState, useEffect } from 'react';

export default function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState(899); // 14 mins 59 secs (resets or counts down)
  const [currentDay, setCurrentDay] = useState('');
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const [remainingLicenses, setRemainingLicenses] = useState(7);

  // Set the dynamic day in Spanish
  useEffect(() => {
    const days = [
      'domingo',
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
    ];
    const today = new Date();
    const dayName = days[today.getDay()];
    // Capitalize first letter
    setCurrentDay(dayName.charAt(0).toUpperCase() + dayName.slice(1));
  }, []);

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Live purchaser notification alerts
  useEffect(() => {
    const randomCities = [
      'Bogotá',
      'Medellín',
      'Santiago',
      'Ciudad de México',
      'Lima',
      'Buenos Aires',
      'Quito',
      'San José'
    ];

    const showAlert = () => {
      const selectedCity = randomCities[Math.floor(Math.random() * randomCities.length)];
      
      // Update licenses (between 5 and 7) and set the dynamic message using the updated state
      setRemainingLicenses((prev) => {
        // Keeps licenses fluctuating between 5 and 7
        const next = prev <= 5 ? 7 : prev - 1;
        setActiveAlert(
          `🔥 Alguien en ${selectedCity} acaba de adquirir "Dinero en Orden". ¡Quedan sólo ${next} cupos!`
        );
        return next;
      });

      // Hide alert after 4.5 seconds
      setTimeout(() => {
        setActiveAlert(null);
      }, 4500);
    };

    // Initial alert after 4 seconds
    const initialTimer = setTimeout(showAlert, 4000);

    // Loop alerts every 12 seconds
    const alertInterval = setInterval(showAlert, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(alertInterval);
    };
  }, []);

  return (
    <>
      {/* Top Urgency Header */}
      <div 
        id="top-urgency-banner" 
        className="bg-[#0f172a] border-b border-[#881337]/40 text-white text-xs md:text-sm py-2.5 px-4 font-medium sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-95"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Left: Blinking FOMO Indicator */}
          <div className="flex items-center gap-2">
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 font-black text-[10px] px-2 py-0.5 rounded uppercase tracking-wider animate-pulse shrink-0">
              FOMO / CUPOS LIMITADOS
            </span>
            <span className="text-slate-700 hidden md:inline">|</span>
            <span className="text-slate-300 font-semibold tracking-wide text-center sm:text-left">
              ¡Atención! Quedan solo <span className="font-extrabold text-[#fcd34d]">{remainingLicenses} licencias disponibles</span> para este <span className="text-white underline font-bold">{currentDay}</span>! Oferta de un único pago ($9) se cerrará pronto.
            </span>
          </div>

          {/* Right: Timer & Offer Details */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 font-mono text-[#fcd34d] font-bold bg-black/40 px-2.5 py-1 rounded border border-yellow-500/10">
              <svg className="w-4 h-4 text-[#fcd34d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[10px] text-slate-400 font-sans tracking-wide mr-1">EL DESCUENTO EXPIRA EN:</span>
              <span className="text-sm font-black tracking-wider">{formatTime(timeLeft)}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating purchase notification (bottom left) */}
      <div
        id="purchase-toast-container"
        className={`fixed bottom-5 left-5 z-50 transition-all duration-500 transform ${
          activeAlert ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 border border-emerald-500/30 text-white rounded-xl p-4 shadow-2xl max-w-sm flex items-start gap-3 backdrop-blur-md bg-opacity-95">
          <div className="bg-emerald-500/20 text-emerald-300 p-2.5 rounded-lg shrink-0 border border-emerald-500/20">
            <svg className="w-5 h-5 animate-bounce text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-white">¡Nueva Licencia Adquirida!</p>
            <p className="text-xs text-emerald-100 mt-1">{activeAlert}</p>
          </div>
        </div>
      </div>
    </>
  );
}
