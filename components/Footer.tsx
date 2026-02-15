
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from './ui/Logo';
import ThemeToggle from './ui/ThemeToggle';
import { NAV_LINKS } from '../constants';
import { SocialIcons } from './ui/Icons';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-100 dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
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
            <h4 className="font-bold font-heading tracking-wider uppercase">{t('footer.quickLinks')}</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="hover:text-brand-green dark:hover:text-brand-green-dark transition-colors">{t(link.key)}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Theme Toggle */}
          <div>
            <h4 className="font-bold font-heading tracking-wider uppercase">Settings</h4>
             <div className="mt-4 flex justify-center md:justify-start">
               <ThemeToggle />
             </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Welwitchia Style. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
