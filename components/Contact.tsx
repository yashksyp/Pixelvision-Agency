
import React from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, User, Mail, Briefcase, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[4rem] p-10 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.06)] overflow-hidden relative border border-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-[1px] bg-indigo-600" />
            <span className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px]">
              Inquiry Form
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-8xl font-display mb-10 leading-[0.9] text-gray-900">
            The <br /><span className="italic text-indigo-600">Blueprint</span> <br />starts here.
          </h2>
          <p className="text-gray-400 text-xl font-light mb-12 max-w-sm leading-relaxed">
            We are selective with our partnerships to ensure every project reaches its absolute peak potential.
          </p>
          
          <div className="space-y-10">
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3 group-hover:text-indigo-600 transition-colors">Strategic Link</p>
              <p className="text-3xl font-display text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer border-b border-gray-100 pb-2">hello@pixelvision.ads</p>
            </div>
            <div className="group">
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 mb-3 group-hover:text-indigo-600 transition-colors">Press & Media</p>
              <p className="text-3xl font-display text-gray-900 hover:text-indigo-600 transition-colors cursor-pointer border-b border-gray-100 pb-2">press@pixelvision.ads</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <User size={12} className="text-indigo-600" /> Identity
              </label>
              <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-indigo-600 py-5 px-8 rounded-3xl outline-none transition-all font-medium text-gray-900" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                <Mail size={12} className="text-indigo-600" /> Reach
              </label>
              <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border-b-2 border-transparent focus:border-indigo-600 py-5 px-8 rounded-3xl outline-none transition-all font-medium text-gray-900" />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <Briefcase size={12} className="text-indigo-600" /> Capital Range
            </label>
            <div className="relative">
              <select className="w-full bg-gray-50 border-b-2 border-transparent focus:border-indigo-600 py-5 px-8 rounded-3xl outline-none transition-all appearance-none font-medium text-gray-900 cursor-pointer">
                <option>Strategic ($25k - $50k)</option>
                <option>Enterprise ($50k - $150k)</option>
                <option>Unlimited / Custom</option>
              </select>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ArrowRight size={16} className="rotate-90" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
              <MessageSquare size={12} className="text-indigo-600" /> The Manifesto
            </label>
            <textarea rows={5} placeholder="Tell us about the impact you want to create..." className="w-full bg-gray-50 border-b-2 border-transparent focus:border-indigo-600 py-6 px-8 rounded-[2rem] outline-none transition-all resize-none font-medium text-gray-900"></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-indigo-600 text-white rounded-[2rem] py-6 font-bold flex items-center justify-center gap-4 hover:bg-indigo-700 transition-all group mt-6 shadow-[0_20px_40px_rgba(79,70,229,0.2)]"
          >
            Submit Inquiry
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
          
          <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Privacy Protected. No Spam. 100% Secure.
          </p>
        </form>
      </div>

      {/* Decorative SVG Overlay */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
};
