
import React from 'react';
import { Theme } from '../types';

interface SectionProps {
  children: React.ReactNode;
  theme: Theme;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, theme, id, className = '' }) => {
  const bgClass = theme === 'dark' ? 'bg-[#121212] text-white' : 'bg-[#FCFBF7] text-gray-900';
  
  return (
    <section id={id} className={`py-24 md:py-32 px-6 overflow-hidden ${bgClass} ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};
