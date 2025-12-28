
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom AI",
    content: "PixelVision transformed our digital presence. Within 3 months of our new site launch, we saw a 40% increase in conversions.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    name: "James Wilson",
    role: "CEO, FinStream",
    content: "The engineering depth at this agency is unparalleled. They built a custom dashboard for us that handles millions of events daily without breaking a sweat.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 inline-block"
        >
          Social Proof
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display text-white"
        >
          What our <span className="italic">partners</span> say.
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-12 rounded-[3rem] relative"
          >
            <Quote className="absolute top-8 right-8 text-indigo-500/20" size={60} />
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-indigo-400 text-indigo-400" />)}
            </div>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-10 italic">"{t.content}"</p>
            <div className="flex items-center gap-4">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full grayscale" />
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-indigo-400 text-sm">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};