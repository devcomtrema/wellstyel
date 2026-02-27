
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import Authority from './components/Authority';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosECondicoes from './pages/TermosECondicoes';
import Acessibilidade from './pages/Acessibilidade';
import PrivacidadeSaudeWhatsapp from './pages/PrivacidadeSaudeWhatsapp';

function HomeMain() {
  return (
    <main>
      <Hero />
      <Authority />
      <Products />
      <Benefits />
      <Testimonials />
      <Contact />
    </main>
  );
}

function AppContent() {
  return (
    <div className="bg-white dark:bg-dark-bg text-light-text dark:text-dark-text font-sans transition-colors duration-500">
      <Header />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-e-condicoes" element={<TermosECondicoes />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
        <Route path="/privacidade-saude-whatsapp" element={<PrivacidadeSaudeWhatsapp />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  useTheme(); // Initialize theme

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen bg-white dark:bg-dark-bg">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-green"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    }>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
