
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BENEFITS } from '../constants';
import { BenefitIcon } from './ui/Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Benefits = () => {
  const { t } = useTranslation();
  const { ref, animationClasses } = useScrollAnimation();

  return (
    <section id="benefits" className="py-20 sm:py-32 bg-gray-50 dark:bg-dark-card" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${animationClasses}`}>
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">
            {t('benefits.title')}
            </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={benefit.id} className="text-center p-8 bg-white dark:bg-dark-bg rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-green/10 dark:bg-brand-green-dark/10 mx-auto mb-6">
                <BenefitIcon icon={benefit.icon} className="h-8 w-8 text-brand-green dark:text-brand-green-dark" />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{t(benefit.titleKey)}</h3>
              <p className="text-gray-600 dark:text-gray-400">{t(benefit.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
