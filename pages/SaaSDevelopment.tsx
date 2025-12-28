
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  Database, 
  ShieldCheck, 
  Server, 
  Cpu, 
  Lock, 
  ArrowUpRight,
  Workflow,
  Cloud
} from 'lucide-react';

export const SaaSDevelopment = () => {
  const metrics = [
    { label: "Performance", val: "99.99%", sub: "Uptime SLA" },
    { label: "Latency", val: "<120ms", sub: "Global Edge" },
    { label: "Security", val: "SOC2", sub: "Ready foundations" },
    { label: "Scale", val: "∞", sub: "Auto-scaling" }
  ];

  return (
    <div className="bg-[#0a0a0a]">
      {/* Hero Section - Zero padding gap */}
      <Section theme="dark" className="relative !p-0 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="techGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#techGrid)" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 px-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-[1px] bg-indigo-500" />
              <span className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[10px]">
                Architecting Giants
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-display font-bold mb-8 leading-[0.85] tracking-tighter text-white"
            >
              Unbreakable <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 italic">Software.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl font-light mb-12 max-w-lg leading-relaxed"
            >
              We engineer enterprise-grade SaaS platforms that redefine market standards through performance and precision.
            </motion.p>
            <div className="flex flex-wrap gap-4">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold flex items-center gap-3 uppercase tracking-widest text-xs"
               >
                 View The Blueprint <ArrowUpRight size={18} />
               </motion.button>
            </div>
          </div>
          
          <div className="relative hidden lg:flex justify-center">
            <div className="relative w-[500px] h-[500px]">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 border border-indigo-500/20 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="p-16 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10">
                    <Cloud size={100} className="text-indigo-400" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Metrics */}
      <div className="bg-white py-24 px-6 border-y border-gray-100">
        <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl md:text-7xl font-display font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">{m.val}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">{m.label}</div>
              <div className="text-[10px] text-gray-300 mt-1 uppercase font-bold">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Framework */}
      <Section theme="light" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Server />, title: "Edge Logic", desc: "Serverless architectures distributed globally for zero-latency response." },
            { icon: <Database />, title: "Data Integrity", desc: "Multi-layered validation and real-time syncing across all nodes." },
            { icon: <Lock />, title: "Quantum Sec", desc: "Encryption standards built to withstand the next decade of threats." }
          ].map((item, i) => (
            <div key={i} className="p-12 border border-gray-100 rounded-[3.5rem] bg-gray-50/30 hover:bg-white hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-10">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h4 className="text-3xl font-display font-bold text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section theme="light" className="!pt-0">
        <div className="bg-[#0a0a0a] rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <h2 className="text-5xl md:text-9xl font-display font-bold mb-10 italic">Scale to ∞.</h2>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             className="px-12 py-6 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-2xl"
           >
             Initialize Project
           </motion.button>
        </div>
      </Section>
    </div>
  );
};
