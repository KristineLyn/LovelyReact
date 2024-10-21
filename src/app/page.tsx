"use client";

import { useEffect, useState } from 'react';

const Home = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-center flex flex-col justify-between">
      <header className="p-8 text-4xl font-cursive text-pink-600">
        To the one who inspires me every day, Darmi Yanti
      </header>

      <main className="grid grid-cols-2 gap-6 px-16 py-8">
        <section className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-cursive text-pink-600 mb-4">Our Gallery</h2>
          <p className="text-base text-gray-700">A collection of our special moments.</p>
        </section>

        <section className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-cursive text-pink-600 mb-4">Our Song</h2>
          <p className="text-base text-gray-700">Listen to the melody that brings back all the memories.</p>
        </section>

        <section className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-cursive text-pink-600 mb-4">Why You're So Special</h2>
          <p className="text-base text-gray-700">You bring light and warmth wherever you go.</p>
        </section>

        <section className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
          <h2 className="text-2xl font-cursive text-pink-600 mb-4">Time Since We Met</h2>
          <p className="text-2xl mt-4 font-mono text-pink-800">{time}</p>
        </section>
      </main>

      <footer className="p-8 text-pink-600 text-sm">
        Built with love, for DY – the one who makes every moment special.
      </footer>
    </div>
  );
};

export default Home;
