
import React from 'react';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useTheme(); // Initialize theme

  return (
    <div className="bg-white dark:bg-dark-bg text-light-text dark:text-dark-text font-sans transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <Authority />
        <Products />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
