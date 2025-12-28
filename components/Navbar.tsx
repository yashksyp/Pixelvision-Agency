
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  current: string;
}

const PixelLogo = ({ scrolled, isDarkPage }: { scrolled: boolean; isDarkPage: boolean }) => {
  // Always dark text if scrolled, otherwise follow page theme
  const isLightText = !scrolled && isDarkPage;
  const mainColor = isLightText ? "text-white" : "text-gray-900";
  const accentColor = "text-indigo-600";

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4 cursor-pointer group"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: scrolled ? 180 : 0 }}
          transition={{ type: "spring", damping: 15 }}
          className={`absolute inset-0 rounded-2xl border-2 transition-colors duration-500 ${
            isLightText ? 'border-white/20 group-hover:border-white' : 'border-gray-200 group-hover:border-indigo-600'
          }`}
        />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
          <motion.rect 
            x="4" y="4" width="6" height="6" rx="1" 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className={isLightText ? "fill-white" : "fill-indigo-600"} 
          />
          <motion.rect 
            x="14" y="14" width="6" height="6" rx="1" 
            animate={{ scale: [1, 0.8, 1], rotate: [0, -90, 0] }}
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className={isLightText ? "fill-indigo-400" : "fill-gray-900"} 
          />
        </svg>
      </div>
      
      <div className={`flex flex-col leading-none transition-colors duration-300 ${mainColor}`}>
        <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-70">Pixel</span>
        <span className="text-2xl font-display italic font-bold tracking-tighter">Vision<span className={accentColor}>.</span></span>
      </div>
    </motion.div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, current }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkPage = current === 'home' || current === 'saas-development' || current === 'our-story';
  
  const navLinks = [
    { name: 'Services', href: '#services', page: 'home' },
    { name: 'Portfolio', page: 'portfolio-page' },
    { name: 'Story', page: 'our-story' },
    { name: 'Careers', page: 'careers' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-[2.5rem] ${
          scrolled ? 'bg-white/80 backdrop-blur-2xl shadow-xl border border-gray-100' : 'bg-transparent'
        }`}>
          <PixelLogo scrolled={scrolled} isDarkPage={isDarkPage} />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => onNavigate(link.page)}
                className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:text-indigo-600 ${
                  !scrolled && isDarkPage ? 'text-white/70' : 'text-gray-500'
                } ${current === link.page ? 'text-indigo-600 !opacity-100' : ''}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('contact-page')}
              className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 shadow-2xl ${
                !scrolled && isDarkPage 
                  ? 'bg-white text-gray-900 hover:bg-indigo-50' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20'
              }`}
            >
              Consult Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors ${!scrolled && isDarkPage ? 'text-white' : 'text-gray-900'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[49] bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-10"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-5xl font-display italic text-white hover:text-indigo-400 transition-colors"
                  onClick={() => { onNavigate(link.page); setMobileMenuOpen(false); }}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => { onNavigate('contact-page'); setMobileMenuOpen(false); }}
                className="mt-8 px-12 py-6 bg-indigo-600 text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs shadow-2xl"
              >
                Book a Strategy Call
              </button>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-10 right-10 text-white/50 hover:text-white"
            >
              <X size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
