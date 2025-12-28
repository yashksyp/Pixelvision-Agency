
import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Instagram, ArrowUpRight, Send, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const serviceLinks = [
    { name: 'Web Design', id: 'web-design' },
    { name: 'SaaS Development', id: 'saas-development' },
    { name: 'SEO Optimization', id: 'seo-optimization' },
    { name: 'Branding', id: 'branding' },
  ];

  const agencyLinks = [
    { name: 'Our Story', id: 'our-story' },
    { name: 'Portfolio', id: 'portfolio-page' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact-page' },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div 
              className="flex items-center gap-3 mb-8 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl border-2 border-white/20 group-hover:border-indigo-500 transition-colors" />
                <div className="w-4 h-4 bg-indigo-500 rounded-sm" />
                <div className="absolute -top-1 -right-1">
                  <Sparkles size={14} className="text-violet-400" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500">Pixel</span>
                <span className="text-2xl font-display italic font-bold tracking-tight">Vision<span className="text-indigo-500">.</span></span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-xs">Crafting high-impact digital experiences for forward-thinking brands since 2018.</p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-indigo-400">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group w-full text-left font-medium"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-indigo-400">Agency</h4>
            <ul className="space-y-4">
              {agencyLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-white transition-colors flex items-center justify-between group w-full text-left font-medium"
                  >
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] mb-8 text-indigo-400">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Stay ahead with our latest insights on tech and marketing.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl flex-grow focus:outline-none focus:border-indigo-500 transition-all text-sm" />
              <button className="bg-indigo-600 px-6 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/10">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© 2025 PixelVision Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <button onClick={() => onNavigate('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate('terms-of-service')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-600/5 blur-[150px] z-0 pointer-events-none" />
    </footer>
  );
};
