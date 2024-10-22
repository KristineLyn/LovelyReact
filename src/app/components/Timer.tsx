"use client";

import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-07-24T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - targetDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime(`${days} Hari:${hours} Jam:${minutes} Menit:${seconds} Detik`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl mt-4 font-mono text-pink-800">
      {time}
    </div>
  );
};

export default Timer;
