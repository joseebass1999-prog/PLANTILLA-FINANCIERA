// src/hooks/useUrgencyTimer.ts
import { useState, useEffect } from 'react';

const INITIAL_SECONDS = 895; // 14 mins and 55 secs
const STORAGE_KEY = 'dinero_en_orden_timer_v2';

export function useUrgencyTimer() {
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed > 0) {
          return parsed;
        }
      }
    }
    return INITIAL_SECONDS;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 1) {
          localStorage.setItem(STORAGE_KEY, INITIAL_SECONDS.toString());
          return INITIAL_SECONDS;
        }
        localStorage.setItem(STORAGE_KEY, next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format MM:SS
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Spots Left logic - Synchronized to decrease from 7 down to 1 over the 15 minutes
  let spotsLeft = 1;
  if (secondsLeft > 770) {
    spotsLeft = 7;
  } else if (secondsLeft > 640) {
    spotsLeft = 6;
  } else if (secondsLeft > 510) {
    spotsLeft = 5;
  } else if (secondsLeft > 380) {
    spotsLeft = 4;
  } else if (secondsLeft > 260) {
    spotsLeft = 3;
  } else if (secondsLeft > 120) {
    spotsLeft = 2;
  } else {
    spotsLeft = 1;
  }

  // Get current day name in Spanish
  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado'
  ];
  const currentDayName = daysOfWeek[new Date().getDay()];

  return {
    secondsLeft,
    formattedTime,
    spotsLeft,
    currentDayName
  };
}
