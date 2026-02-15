
import React from 'react';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`font-heading ${className}`}>
      <span className="text-2xl font-bold tracking-tighter text-brand-green dark:text-brand-green-dark">WELWITCHIA</span>
      <span className="block text-xs font-medium tracking-[0.4em] text-brand-gold dark:text-brand-gold-dark mt-[-4px] ml-px">STYLE</span>
    </div>
  );
};
