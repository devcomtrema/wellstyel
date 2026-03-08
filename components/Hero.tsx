
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const { t } = useTranslation();
  const { ref, animationClasses } = useScrollAnimation();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://thursd.com/storage/media/82566/Welwitschia-a-plant-that-can-survive-for-hundreds-of-years.jpg"
        alt="Premium cosmetic products"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className={`relative z-20 container mx-auto px-4 transition-all duration-1000 ease-out ${animationClasses}`}>
        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-shadow-lg">
          {t('hero.headline')}
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow">
          {t('hero.subheadline')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="w-full sm:w-auto px-8 py-3 bg-brand-green hover:bg-opacity-90 dark:bg-brand-green-dark dark:hover:bg-opacity-90 text-white font-bold rounded-full transition-transform transform hover:scale-105">
            {t('hero.ctaExplore')}
          </a>
          <a href="#products" className="w-full sm:w-auto px-8 py-3 bg-white/20 border border-white hover:bg-white/30 backdrop-blur-sm text-white font-bold rounded-full transition-transform transform hover:scale-105">
            {t('hero.ctaCatalog')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
