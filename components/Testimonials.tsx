
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TESTIMONIALS } from '../constants';
import { StarIcon } from './ui/Icons';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, animationClasses } = useScrollAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 sm:py-32" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${animationClasses}`}>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">{t('testimonials.clients')}</p>
        </div>
        <div className="relative max-w-3xl mx-auto h-80">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-dark-card rounded-xl shadow-lg">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4 border-4 border-brand-gold" />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-brand-gold dark:text-brand-gold-dark' : 'text-gray-300 dark:text-gray-600'}`} />
                  ))}
                </div>
                <p className="italic text-lg mb-4">"{testimonial.comment}"</p>
                <h4 className="font-bold font-heading text-lg">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
