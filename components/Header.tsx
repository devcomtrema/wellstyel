
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../constants';
import { Logo } from './ui/Logo';
import LanguageSwitcher from './ui/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold">
            <Logo className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.key} href={link.href} className="text-sm font-medium hover:text-brand-green dark:hover:text-brand-green-dark transition-colors">
                {t(link.key)}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
             <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
