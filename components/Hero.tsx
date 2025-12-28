
import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Command } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Scanlines = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
    <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(255,255,255,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-full px-6 text-center overflow-hidden">
      <Scanlines />
      
      {/* Background Spatial Typography */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-bold select-none text-white pointer-events-none whitespace-nowrap"
      >
        VISION
      </motion.div>

      <motion.div
        style={{ y: y1, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl relative z-10"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-10">
          <div className="w-10 h-[1px] bg-indigo-500/50" />
          <span className="text-indigo-400 font-bold tracking-[0.5em] uppercase text-[10px]">
            Future Engineering Studio
          </span>
          <div className="w-10 h-[1px] bg-indigo-500/50" />
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-white text-7xl md:text-[10rem] font-display leading-[0.85] mb-12 tracking-tighter"
        >
          Bespoke <br />
          <span className="relative inline-block italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-violet-300 bg-[length:200%_auto] animate-shimmer">
            Masterpieces.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-16 font-light leading-relaxed italic"
        >
          We architect elite digital ecosystems that redefine performance. Pixel-perfect aesthetics met with sub-second engineering.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('contact-page')}
            className="group relative px-12 py-6 bg-white text-gray-900 rounded-2xl font-bold overflow-hidden transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-xs">
              Start The Blueprint
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button 
            whileHover={{ opacity: 1, x: 5 }}
            onClick={() => onNavigate('portfolio-page')}
            className="text-gray-500 hover:text-white transition-all uppercase tracking-[0.3em] text-[10px] font-bold flex items-center gap-3"
          >
            View Selected Works <Command size={14} />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-indigo-500/0 via-indigo-500 to-indigo-500/0 animate-pulse" />
      </motion.div>
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </div>
  );
};
