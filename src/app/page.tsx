import Timer from './components/Timer';
import Router from './Router'; // Import the custom Router component

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white text-center flex flex-col justify-between">
      <header className="p-8 text-4xl font-cursive text-pink-600">
        To the one who inspires me every day
      </header>

      <main className="grid grid-cols-2 gap-6 px-16 py-8">
        <section
          className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
        >
          <h2 className="text-2xl font-cursive text-pink-600 mb-4">Our Gallery</h2>
          <p className="text-base text-gray-700 mb-4">
            A collection of our special moments.
          </p>
          <Router to="./gallery">View Gallery</Router>
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
          <Timer />
        </section>
      </main>

      <footer className="p-8 text-pink-600 text-sm">
        Built with love, for DY – the one who makes every moment special.
      </footer>
    </div>
  );
};

export default Home;
