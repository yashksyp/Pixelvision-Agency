
import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { val: "250+", label: "Projects Delivered" },
  { val: "$45M+", label: "Client Revenue" },
  { val: "99%", label: "Client Satisfaction" },
  { val: "12", label: "Global Awards" },
];

export const Stats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1, type: "spring" }}
        >
          <div className="text-5xl md:text-7xl font-display text-indigo-400 mb-4">{stat.val}</div>
          <div className="text-gray-400 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};
