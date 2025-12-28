
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  Briefcase, 
  Zap, 
  Coffee, 
  Globe, 
  Heart, 
  Shield, 
  ArrowUpRight, 
  Users, 
  Compass, 
  Star,
  ChevronRight,
  Code2,
  Palette,
  TrendingUp
} from 'lucide-react';

export const Careers = () => {
  const perks = [
    { icon: <Zap />, title: "Hypergrowth", desc: "Work at the absolute cutting edge of creative tech and AI orchestration." },
    { icon: <Globe />, title: "Nomad Ready", desc: "A truly distributed culture. Work from the studio or the edge of the world." },
    { icon: <Shield />, title: "Total Care", desc: "Comprehensive health, dental, and mental wellness blueprints for your life." },
    { icon: <Star />, title: "Ownership", desc: "Equity packages that ensure you share in the success of the legacy we build." },
    { icon: <Users />, title: "Elite Peers", desc: "Surround yourself with the top 1% of designers and engineers globally." },
    { icon: <Compass />, title: "Sabbaticals", desc: "Paid time off for radical inquiry and creative rejuvenation every 3 years." }
  ];

  const jobs = [
    { 
      title: "Senior Product Architect", 
      type: "Full-time", 
      loc: "San Francisco / Remote",
      dept: "Design",
      icon: <Palette size={20} className="text-rose-500" />
    },
    { 
      title: "Lead Frontend Engineer", 
      type: "Full-time", 
      loc: "London / Remote",
      dept: "Engineering",
      icon: <Code2 size={20} className="text-blue-500" />
    },
    { 
      title: "Growth Strategist", 
      type: "Contract", 
      loc: "Remote",
      dept: "Marketing",
      icon: <TrendingUp size={20} className="text-emerald-500" />
    },
    { 
      title: "Head of AI Research", 
      type: "Full-time", 
      loc: "New York / Hybrid",
      dept: "R&D",
      icon: <Zap size={20} className="text-amber-500" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Visionary Hero */}
      <Section theme="light" className="!py-40 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none">
          <Briefcase size={600} className="text-indigo-600" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="w-12 h-[1px] bg-indigo-600" />
            <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[10px]">
              The Collective
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[10rem] font-display font-bold leading-[0.85] mb-12 tracking-tighter text-gray-900"
          >
            Engineering <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 underline decoration-indigo-200 decoration-8 underline-offset-[20px]">Rebellion.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed"
          >
            We don't hire "staff." We recruit visionaries who believe that technology should be as beautiful as it is powerful.
          </motion.p>
        </div>
      </Section>

      {/* Perks & Values */}
      <Section theme="light" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 border border-gray-100 bg-gray-50/50 rounded-[3.5rem] hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-10 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {React.cloneElement(p.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">{p.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Life at the Lab - Visual Section */}
      <Section theme="dark" className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display text-white mb-8">Life at <br /><span className="text-indigo-400 italic">The Lab.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              Our studio isn't an office; it's a creative playground. We cultivate an environment of radical freedom where the only metric that matters is the quality of the output.
            </p>
            <div className="space-y-8">
              {[
                "Quarterly Creative Sprints in Tokyo, Paris, or SF.",
                "Uncapped hardware & research budgets.",
                "Direct mentorship from founding partners.",
                "1 day a week dedicated to 'Blue Sky' R&D."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Culture" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Culture" />
                </motion.div>
             </div>
             <div className="space-y-4 pt-12">
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden aspect-square">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Culture" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden aspect-[3/4]">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Culture" />
                </motion.div>
             </div>
          </div>
        </div>
      </Section>

      {/* Open Positions */}
      <Section theme="light">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-display text-gray-900 italic">Join the Arch.</h2>
          <p className="text-gray-500 text-lg font-light mt-6">Apply to the roles currently seeking visionaries.</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {jobs.map((j, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 15 }}
              className="p-10 border border-gray-100 rounded-[3rem] bg-gray-50/30 hover:bg-white hover:shadow-2xl transition-all group flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="flex items-center gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                  {j.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 block mb-1">{j.dept}</span>
                  <h4 className="text-3xl font-display font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{j.title}</h4>
                  <p className="text-gray-400 text-sm mt-1">{j.loc} • {j.type}</p>
                </div>
              </div>
              <button className="px-10 py-4 bg-white border border-gray-200 rounded-2xl font-bold flex items-center gap-3 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all shadow-sm">
                Apply Now <ArrowUpRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final Call to Talent */}
      <Section theme="light" className="!pt-0">
        <div className="bg-indigo-600 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
              </svg>
           </div>
           
           <div className="relative z-10">
             <h2 className="text-5xl md:text-9xl font-display font-bold mb-10 leading-none">Don't see <br /><span className="italic">your role?</span></h2>
             <p className="text-xl md:text-2xl text-indigo-100 font-light mb-12 max-w-2xl mx-auto">
               We're always looking for geniuses who don't fit into a box. Send us your portfolio and a manifesto on why you belong here.
             </p>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl"
             >
               General Application
             </motion.button>
           </div>
        </div>
      </Section>
    </div>
  );
};
