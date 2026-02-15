
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { t } = useTranslation();
  const { ref, animationClasses } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send to an API
    alert('Thank you for your message!');
  };
  
  return (
    <section id="contact" className="py-20 sm:py-32 bg-brand-green dark:bg-dark-card text-white" ref={ref as React.RefObject<HTMLDivElement>}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${animationClasses}`}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">{t('contact.title')}</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 bg-white/10 dark:bg-dark-bg/50 p-8 rounded-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="name"
              placeholder={t('contact.form.name')}
              required
              className="w-full bg-white/20 dark:bg-white/10 border-0 rounded-md py-3 px-4 text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="email"
              placeholder={t('contact.form.email')}
              required
              className="w-full bg-white/20 dark:bg-white/10 border-0 rounded-md py-3 px-4 text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
            />
            <textarea
              name="message"
              rows={4}
              placeholder={t('contact.form.message')}
              required
              className="w-full bg-white/20 dark:bg-white/10 border-0 rounded-md py-3 px-4 text-white placeholder-gray-300 focus:ring-2 focus:ring-white"
            ></textarea>
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-10 py-4 bg-brand-gold dark:bg-brand-gold-dark hover:opacity-90 text-white font-bold rounded-full transition-transform transform hover:scale-105"
            >
              {t('contact.form.submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
