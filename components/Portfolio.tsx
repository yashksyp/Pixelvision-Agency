
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Lumea AI",
    cat: "Web App / Branding",
    img: "https://picsum.photos/800/600?random=1",
    kpi: "+240% Growth"
  },
  {
    title: "FinTrack Elite",
    cat: "Dashboard / SaaS",
    img: "https://picsum.photos/800/600?random=2",
    kpi: "$12M Generated"
  },
  {
    title: "Vortex Labs",
    cat: "Marketing / SEO",
    img: "https://picsum.photos/800/600?random=3",
    kpi: "Rank #1 for 'AI SaaS'"
  },
  {
    title: "Aura Skincare",
    cat: "E-Commerce / Shopify",
    img: "https://picsum.photos/800/600?random=4",
    kpi: "12.4% Conv. Rate"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display"
        >
          Selected <span className="italic">Work</span>
        </motion.h2>
        <button className="text-indigo-600 font-bold border-b-2 border-indigo-600 hover:text-indigo-800 hover:border-indigo-800 transition-all">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] mb-6">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold">
                  View Case Study
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest">{p.kpi}</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-display mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm tracking-wide font-medium">{p.cat}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
