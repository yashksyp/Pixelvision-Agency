
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Contact } from '../components/Contact';
import { MapPin, Mail, Phone, Clock, MessageSquare, Linkedin, Twitter, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20">
      <Section theme="light" className="!py-32 relative overflow-hidden">
        {/* Dynamic Background Element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="contactGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#4F46E5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactGrid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-32">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-3 mb-10"
                >
                  <div className="w-12 h-[1px] bg-indigo-600" />
                  <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[10px]">
                    Direct Access
                  </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-7xl md:text-[11rem] font-display font-bold text-gray-900 leading-[0.85] tracking-tighter"
                >
                    Let's <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Sync.</span>
                </motion.h1>
                <p className="text-2xl text-gray-500 font-light mt-12 max-w-2xl mx-auto leading-relaxed">
                  Available for strategic partnerships, high-stakes engineering, and radical design projects globally.
                </p>
            </div>

            {/* Access Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                {[
                  { icon: <MapPin />, title: "HQ Studio", detail: "88 Design District\nSan Francisco, CA", sub: "Global Operations" },
                  { icon: <Mail />, title: "Intelligence", detail: "hello@pixelvision.ads", sub: "Response < 24h" },
                  { icon: <Phone />, title: "The Line", detail: "+1 (555) 123-4567", sub: "Mon-Fri 9am-6pm" },
                  { icon: <Clock />, title: "Timeline", detail: "Expedited Launch", sub: "Priority Onboarding" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    className="p-10 border border-gray-100 bg-gray-50/50 rounded-[3rem] text-center group transition-all hover:bg-white hover:shadow-xl"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-8 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-[10px]">{item.title}</h4>
                    <p className="text-lg font-display text-gray-900 mb-2 whitespace-pre-line leading-tight">{item.detail}</p>
                    <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest">{item.sub}</p>
                  </motion.div>
                ))}
            </div>

            {/* Main Contact Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
              <Contact />
            </div>
            
            {/* Social Connectivity */}
            <div className="mt-32 pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="max-w-sm">
                 <h4 className="text-3xl font-display font-bold text-gray-900 mb-4">Digital Nodes</h4>
                 <p className="text-gray-500 font-light">Follow our latest research and design drops across the ecosystem.</p>
               </div>
               <div className="flex gap-4">
                 {[
                   { icon: <Linkedin />, name: "LinkedIn" },
                   { icon: <Twitter />, name: "Twitter / X" },
                   { icon: <MessageSquare />, name: "Discord" }
                 ].map((social, i) => (
                   <motion.button 
                     key={i}
                     whileHover={{ scale: 1.05 }}
                     className="px-8 py-4 bg-gray-50 border border-gray-100 rounded-2xl flex items-center gap-3 font-bold text-gray-900 hover:bg-white transition-all"
                   >
                     {social.icon}
                     <span className="text-xs uppercase tracking-widest">{social.name}</span>
                   </motion.button>
                 ))}
               </div>
            </div>
        </div>
      </Section>
    </div>
  );
};
