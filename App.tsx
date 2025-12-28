
import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { WebDesign } from './pages/WebDesign';
import { SaaSDevelopment } from './pages/SaaSDevelopment';
import { SEOOptimization } from './pages/SEOOptimization';
import { Branding } from './pages/Branding';
import { OurStory } from './pages/OurStory';
import { PortfolioPage } from './pages/PortfolioPage';
import { Careers } from './pages/Careers';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const CustomCursor = () => {
  const mouseX = useSpring(0, { damping: 20, stiffness: 200 });
  const mouseY = useSpring(0, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:block"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="15" stroke="rgba(79, 70, 229, 0.3)" strokeWidth="1" />
        <motion.circle 
          cx="16" 
          cy="16" 
          r="4" 
          fill="#6366f1"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </svg>
    </motion.div>
  );
};

const Home = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <>
    <div className="relative h-screen w-full bg-[#121212]">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </div>
      <div className="relative z-10 h-full">
        <Hero onNavigate={onNavigate} />
      </div>
    </div>

    <Section theme="light" id="services">
      <Services />
    </Section>

    <div className="relative h-32 bg-white overflow-hidden flex items-center">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-20 items-center"
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-4xl font-display text-gray-200">DATA DRIVEN</span>
            <div className="w-4 h-4 bg-indigo-600 rounded-full" />
            <span className="text-4xl font-display italic text-gray-200">HIGH PERFORMANCE</span>
            <div className="w-4 h-4 bg-violet-400 rotate-45" />
          </div>
        ))}
      </motion.div>
    </div>

    <Section theme="dark" id="stats">
      <Stats />
    </Section>

    <Section theme="light" id="portfolio">
      <Portfolio />
    </Section>

    <Section theme="dark" id="testimonials">
      <Testimonials />
    </Section>

    <Section theme="light" id="contact">
      <Contact />
    </Section>
  </>
);

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const navigate = (page: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="relative overflow-x-hidden antialiased bg-[#FCFBF7]">
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="flex flex-col items-center gap-8"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-[2rem] border-4 border-indigo-600/30"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-8 h-8 bg-indigo-500 rounded-lg shadow-[0_0_30px_rgba(79,70,229,0.5)]"
                />
                <div className="absolute -top-2 -right-2">
                  <Sparkles size={24} className="text-violet-400 animate-pulse" />
                </div>
              </div>

              <div className="text-center">
                <div className="text-white font-bold tracking-[0.5em] uppercase text-xs mb-2 opacity-50">Pixel</div>
                <h1 className="text-white font-display text-6xl md:text-8xl italic font-bold tracking-tight">
                  Vision<span className="text-indigo-500">.</span>
                </h1>
              </div>
            </motion.div>
            
            <div className="mt-20 w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-indigo-500"
              />
            </div>
            <p className="mt-4 text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold">Engineering Excellence</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <Navbar onNavigate={navigate} current={currentPage} />
        
        <main className="min-h-screen">
          <AnimatePresence mode="wait">
            {currentPage === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Home onNavigate={navigate} /></motion.div>}
            {currentPage === 'web-design' && <motion.div key="web" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><WebDesign /></motion.div>}
            {currentPage === 'saas-development' && <motion.div key="saas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><SaaSDevelopment /></motion.div>}
            {currentPage === 'seo-optimization' && <motion.div key="seo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><SEOOptimization /></motion.div>}
            {currentPage === 'branding' && <motion.div key="branding" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Branding /></motion.div>}
            {currentPage === 'our-story' && <motion.div key="story" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><OurStory /></motion.div>}
            {currentPage === 'portfolio-page' && <motion.div key="port" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PortfolioPage /></motion.div>}
            {currentPage === 'careers' && <motion.div key="jobs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Careers /></motion.div>}
            {currentPage === 'contact-page' && <motion.div key="reach" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ContactPage onNavigate={navigate} /></motion.div>}
            {currentPage === 'privacy-policy' && <motion.div key="privacy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><PrivacyPolicy /></motion.div>}
            {currentPage === 'terms-of-service' && <motion.div key="terms" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><TermsOfService /></motion.div>}
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigate} />
      </div>

      <style>{`
        body {
          cursor: none;
        }
        a, button, [role="button"] {
          cursor: none;
        }
      `}</style>
    </div>
  );
};

export default App;
