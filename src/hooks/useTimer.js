'use client';

import { useEffect, useRef, useState } from 'react';

export default function useTimer() {
  const DEFAULT_TIME = 30;

  const timer = useRef(null);
  const [time, setTime] = useState(DEFAULT_TIME);

  useEffect(() => {
    if (time <= 0 && timer.current) {
      setTimeout(() => {
        reset();
      }, 1000);
    }
  }, [time]);

  const start = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setTime(actualTime => actualTime - 1);
    }, 1000);
    setTime(DEFAULT_TIME - 1);
  };

  const reset = () => {
    setTime(DEFAULT_TIME);
    clearInterval(timer.current);
    timer.current = null;
  };

  return { time, start, reset, timer };
}
