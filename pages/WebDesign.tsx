
import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  Palette, 
  Layout as LayoutIcon, 
  Eye, 
  Layers, 
  MousePointer2, 
  Zap, 
  Component, 
  Smartphone, 
  Globe,
  CheckCircle2,
  Cpu,
  Figma,
  Code2,
  Sparkles as SparklesIcon
} from 'lucide-react';

const FloatingPane = ({ delay = 0, x = 0, y = 0, scale = 1, rotation = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: rotation - 10 }}
    animate={{ 
      opacity: [0.1, 0.2, 0.1], 
      scale: [scale, scale * 1.05, scale],
      y: [y, y - 20, y],
      rotate: [rotation, rotation + 5, rotation]
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none z-0"
    style={{ left: `${x}%`, top: `${y}%` }}
  >
    <div className="w-48 h-64 bg-indigo-500/5 backdrop-blur-3xl rounded-[3rem] border border-indigo-500/10 shadow-2xl" />
  </motion.div>
);

const KineticGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none overflow-hidden">
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id="coutureGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#4f46e5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#coutureGrid)" />
    </svg>
    <motion.div 
      animate={{ 
        background: [
          'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 70% 60%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 30% 30%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)'
        ]
      }}
      transition={{ duration: 15, repeat: Infinity }}
      className="absolute inset-0"
    />
  </div>
);

export const WebDesign = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const processSteps = [
    { 
      step: "01", 
      title: "Archetype Discovery", 
      desc: "We analyze your brand's DNA to identify its unique digital silhouette. This isn't just a brief; it's a deep-dive into the psychology of your users." 
    },
    { 
      step: "02", 
      title: "Visual Prototyping", 
      desc: "High-fidelity blueprints that focus on spatial harmony and kinetic energy. We build the skeleton before we stitch the skin." 
    },
    { 
      step: "03", 
      title: "Kinetic Stitching", 
      desc: "We apply motion design as a fundamental layer, not an afterthought. Every transition is engineered to guide the eye." 
    },
    { 
      step: "04", 
      title: "Surgical Refinement", 
      desc: "Rigorous testing across the device spectrum. We optimize every pixel for speed, accessibility, and emotional impact." 
    }
  ];

  const tools = [
    { name: "React", icon: <Code2 size={24} />, color: "text-blue-400" },
    { name: "Three.js", icon: <Globe size={24} />, color: "text-white" },
    { name: "Framer Motion", icon: <Zap size={24} />, color: "text-purple-400" },
    { name: "Tailwind CSS", icon: <Palette size={24} />, color: "text-cyan-400" },
    { name: "Figma", icon: <Component size={24} />, color: "text-rose-400" },
    { name: "Vite", icon: <Zap size={24} />, color: "text-yellow-400" }
  ];

  return (
    <div className="pt-20">
      {/* Refined High-Aesthetic Hero Header */}
      <Section theme="light" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden !py-0">
        <KineticGrid />
        
        {/* Floating Glassmorphism Elements */}
        <FloatingPane x={10} y={20} delay={0} scale={1} rotation={15} />
        <FloatingPane x={80} y={15} delay={2} scale={0.8} rotation={-10} />
        <FloatingPane x={15} y={70} delay={4} scale={1.2} rotation={5} />
        <FloatingPane x={75} y={65} delay={1} scale={0.9} rotation={-5} />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="w-16 h-[1px] bg-indigo-600/30" />
            <span className="text-indigo-600 font-bold uppercase tracking-[0.6em] text-[10px]">
              The High-End Digital Atelier
            </span>
            <div className="w-16 h-[1px] bg-indigo-600/30" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[9rem] font-display font-bold leading-[0.8] mb-12 tracking-tighter text-gray-900"
          >
            Digital <br />
            <span className="relative inline-block italic">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-600 bg-[length:200%_auto] animate-shimmer">
                Couture.
              </span>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
                className="absolute -bottom-4 left-0 h-2 bg-indigo-600/10 rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-500 font-light leading-relaxed mb-16"
          >
            Beyond responsive. We engineer high-performance, kinetic digital experiences that pulse with the rhythm of your brand's unique narrative.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "backOut" }}
            className="flex flex-col sm:flex-row justify-center items-center gap-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="px-14 py-6 bg-indigo-600 text-white rounded-[2rem] font-bold uppercase tracking-widest text-xs shadow-2xl transition-all"
            >
              Begin Commission
            </motion.button>
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-100">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Expert" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="h-12 flex items-center pl-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Trusted by 50+ Global Brands
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Decorative Scroll Prompt */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-indigo-600/30 to-indigo-600/60" />
          <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-indigo-600/40">Scroll to Explore</span>
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
      </Section>

      {/* The Core Pillars */}
      <Section theme="light" className="!pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center gap-8 mb-6">
                <div className="w-20 h-20 rounded-3xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-xl shadow-indigo-200">
                  <Palette size={32} />
                </div>
                <h3 className="text-4xl font-display font-bold text-gray-900">Chromatic Precision</h3>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed md:pl-28">
                We use psychological color mapping to trigger subconscious trust. Every hex code is selected based on its ability to drive user action.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-8 mb-6">
                <div className="w-20 h-20 rounded-3xl bg-black flex items-center justify-center text-white shrink-0 shadow-xl shadow-gray-300">
                  <LayoutIcon size={32} />
                </div>
                <h3 className="text-4xl font-display font-bold text-gray-900">Liquid Spatiality</h3>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed md:pl-28">
                Traditional responsive design is static. Our layouts are "liquid"—they flow and adapt with organic movement across every resolution.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-4 rounded-[4rem] border-2 border-gray-100 shadow-2xl relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop" 
                alt="Web Design Process"
                className="rounded-[3.5rem] w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white animate-pulse">
                    <MousePointer2 size={32} />
                 </div>
              </div>
            </motion.div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-violet-400/10 blur-[100px] rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-400/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </Section>

      {/* The Couture Journey (Process) */}
      <Section theme="dark" className="relative">
        <div className="text-center mb-24">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Workflow</span>
          <h2 className="text-5xl md:text-7xl font-display text-white italic">The Couture Journey</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-white/[0.08] transition-all"
            >
              <div className="text-5xl font-display text-indigo-500/20 group-hover:text-indigo-500/100 transition-colors mb-6">{s.step}</div>
              <h4 className="text-2xl font-bold mb-4 text-white">{s.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Tech Stack Visualizer */}
      <Section theme="light">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-display text-gray-900 mb-6">Engineered with <span className="text-indigo-600">Precision</span></h2>
          <p className="text-gray-500">We utilize the peak of modern web technology to ensure speed, security, and fluid motion.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.05 }}
              className="p-8 border border-gray-100 bg-gray-50 rounded-3xl flex flex-col items-center gap-4 group transition-all hover:bg-indigo-600 hover:border-indigo-600"
            >
              <div className={`${tool.color} group-hover:text-white transition-colors`}>
                {tool.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Methodology: Standard vs Couture */}
      <Section theme="dark" className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="p-12 border border-white/5 rounded-[4rem] bg-white/[0.02]">
            <h3 className="text-3xl font-display text-gray-500 mb-10">Standard Agency</h3>
            <ul className="space-y-6">
              {[
                "Template-based frameworks",
                "Generic animation presets",
                "Sub-optimal performance metrics",
                "Standard grid layouts",
                "Predictable user flows"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-500">
                   <div className="w-2 h-2 bg-gray-800 rounded-full" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 border border-indigo-500/30 rounded-[4rem] bg-indigo-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8">
              <SparklesIcon className="text-indigo-400 opacity-20" size={100} />
            </div>
            <h3 className="text-3xl font-display text-white mb-10 italic">PixelVision Couture</h3>
            <ul className="space-y-6">
              {[
                "Bespoke component engineering",
                "Signature kinetic movement",
                "99+ Core Web Vital performance",
                "Organic, liquid spatial design",
                "Psychology-driven user mapping"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-indigo-100">
                   <CheckCircle2 className="text-indigo-400 shrink-0" size={20} />
                   {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Micro-Aesthetics Section */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <Zap />, title: "Micro-Interaction", desc: "Small details that trigger dopamine. Hover states that feel tactile." },
            { icon: <Cpu />, title: "Hardware-Accel", desc: "GPU-powered transitions for buttery smooth 60fps experiences." },
            { icon: <Smartphone />, title: "Thumb-Driven", desc: "Mobile interfaces designed specifically for single-hand ergonomics." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-12 border border-gray-100 rounded-[3rem] bg-white"
            >
              <div className="text-indigo-600 mb-8">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}</div>
              <h4 className="text-2xl font-display font-bold mb-4 text-gray-900">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section theme="light" className="!pt-0">
        <div className="bg-indigo-600 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
              </svg>
           </div>
           <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 relative z-10">Own the <br /><span className="italic">Digital Aisle.</span></h2>
           <p className="text-xl md:text-2xl text-indigo-100 font-light mb-12 max-w-2xl mx-auto relative z-10">
             Your brand deserves more than a website. It deserves a destination.
           </p>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl relative z-10"
           >
             Start Your Journey
           </motion.button>
        </div>
      </Section>
    </div>
  );
};
