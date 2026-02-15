
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon } from './Icons';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-8 w-14 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
    >
      <span className="sr-only">Toggle theme</span>
      <span className={`transform transition-transform duration-300 ease-in-out ${theme === 'light' ? 'translate-x-1' : 'translate-x-7'} inline-block w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center`}>
        {theme === 'light' ? (
          <SunIcon className="w-4 h-4 text-yellow-500" />
        ) : (
          <MoonIcon className="w-4 h-4 text-blue-500" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
