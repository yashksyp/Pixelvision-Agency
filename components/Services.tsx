
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, Zap, BarChart3, Globe, Smartphone } from 'lucide-react';

const serviceList = [
  {
    icon: <Globe size={32} />,
    title: "Global Strategy",
    desc: "Aesthetic interfaces designed for user engagement and high retention."
  },
  {
    icon: <Code size={32} />,
    title: "Elite Engineering",
    desc: "Scalable, secure full-stack applications built with modern frameworks."
  },
  {
    icon: <Rocket size={32} />,
    title: "Growth Hacking",
    desc: "Data-driven organic growth strategies that put you on page one."
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Precision Analytics",
    desc: "Precision-targeted PPC campaigns focused on ROAS and lead generation."
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile First",
    desc: "Fast, responsive native-feeling experiences for any device."
  },
  {
    icon: <Zap size={32} />,
    title: "Infinite Scale",
    desc: "Deep-dive analysis of your current stack to find bottlenecks and scale."
  }
];

export const Services: React.FC = () => {
  return (
    <div className="relative">
      {/* Decorative background SVG */}
      <div className="absolute top-0 right-0 -z-10 opacity-[0.03]">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="198" stroke="black" strokeWidth="4" strokeDasharray="20 20" />
        </svg>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-indigo-600" />
            <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs">Capabilities</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display mb-8"
          >
            Engineered for <br /><span className="italic text-indigo-600">performance.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-xl font-light leading-relaxed max-w-xl"
          >
            We don't just build websites; we create conversion engines that integrate seamlessly with your business goals.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -15, transition: { duration: 0.3 } }}
            className="relative p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(79,70,229,0.1)] transition-all duration-500 group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10L50 50M50 10L10 50" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <motion.div 
              className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-indigo-600 transition-all duration-500 shadow-sm"
              whileHover={{ rotate: 15 }}
            >
              <span className="text-indigo-600 group-hover:text-white transition-colors">
                {service.icon}
              </span>
            </motion.div>
            
            <h3 className="text-2xl font-display mb-5 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
            <p className="text-gray-500 leading-relaxed font-light">{service.desc}</p>
            
            <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
              Learn More 
              <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                <ArrowRight size={14} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ArrowRight = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);
