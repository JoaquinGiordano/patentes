'use client';

import { useEffect, useState } from 'react';

export default function useTimer() {
  const DEFAULT_TIME = 30;

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);
  const [time, setTime] = useState(DEFAULT_TIME);

  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerInterval);
      setTimeout(() => {
        reset();
      }, 1000);
    }
  }, [time]);

  const start = () => {
    setIsTimerRunning(true);
    setTimerInterval(
      setInterval(() => {
        setTime(actualTime => actualTime - 1);
      }, 1000)
    );
  };

  const reset = () => {
    setIsTimerRunning(false);
    setTime(DEFAULT_TIME);
    clearInterval(timerInterval);
  };

  const toggle = () => {
    if (time == DEFAULT_TIME) {
      start();
    } else {
      reset();
    }
  };

  return { time, start, reset, toggle, isTimerRunning };
}
