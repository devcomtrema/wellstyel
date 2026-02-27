
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './ui/Logo';
import { NAV_LINKS } from '../constants';
import { SocialIcons } from './ui/Icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <footer className="bg-gray-100 dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800"><div className="container mx-auto px-4 py-12"></div></footer>;
  }

  return (
    <footer className="bg-gray-100 dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Logo and Social */}
          <div>
            <div className="inline-block">
              <Logo className="h-10 w-auto mx-auto md:mx-0" />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0">
              {t('hero.subheadline')}
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <SocialIcons />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-heading tracking-wider uppercase text-light-text dark:text-white transition-colors">{t('footer.quickLinks')}</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.key}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green-dark transition-colors"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Policy Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 text-sm">
            <Link 
              to="/politica-privacidade" 
              className="text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green-dark transition-colors font-medium"
            >
              {t('footer.privacy')}
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link 
              to="/termos-e-condicoes" 
              className="text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green-dark transition-colors font-medium"
            >
              {t('footer.terms')}
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link 
              to="/acessibilidade" 
              className="text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green-dark transition-colors font-medium"
            >
              {t('footer.accessibility')}
            </Link>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <Link 
              to="/privacidade-saude-whatsapp" 
              className="text-gray-600 dark:text-gray-400 hover:text-brand-green dark:hover:text-brand-green-dark transition-colors font-medium"
            >
              {t('footer.waHealth')}
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 transition-colors">
            &copy; {new Date().getFullYear()} Welwitchia Style. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
