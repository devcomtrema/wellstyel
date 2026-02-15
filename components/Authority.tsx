
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapIcon } from './ui/Icons';

const Authority = () => {
  const { t } = useTranslation();
  const { ref, animationClasses } = useScrollAnimation();

  return (
    <section id="origin" className="py-20 sm:py-32 bg-gray-50 dark:bg-dark-card" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${animationClasses}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-brand-gold dark:text-brand-gold-dark">{t('authority.title')}</h2>
            <p className="text-lg mb-8 leading-relaxed">
              {t('authority.text')}
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-gold/10 dark:bg-brand-gold-dark/10 border-2 border-brand-gold dark:border-brand-gold-dark">
              <span className="font-bold text-brand-gold dark:text-brand-gold-dark tracking-wider uppercase text-sm">{t('authority.seal')}</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <MapIcon className="w-full max-w-md h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;
