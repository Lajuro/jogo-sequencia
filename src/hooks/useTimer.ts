import { useState, useEffect } from 'react';

const useTimer = (start: boolean) => {
  const [elapsedTime, setElapsedTime] = useState<string>('00:00');
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    if (start) {
      setStartTime(new Date());
    } else {
      setElapsedTime('00:00');
    }
  }, [start]);

  useEffect(() => {
    if (!startTime) return;

    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - startTime.getTime()) / 1000);
      const minutes = String(Math.floor(diff / 60)).padStart(2, '0');
      const seconds = String(diff % 60).padStart(2, '0');
      setElapsedTime(`${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  return elapsedTime;
};

export default useTimer;
