
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  Zap, 
  Globe2, 
  Star,
  Eye,
  ArrowRight,
  ShieldCheck,
  Cpu,
  BrainCircuit,
  Terminal,
  Layers,
  SearchCode,
  TrendingUp
} from 'lucide-react';

export const OurStory = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);

  const milestones = [
    { year: '2018', title: 'The Genesis', desc: 'Born in a garage with 2 laptops and a shared dream of merging code with high-art.', icon: <Zap /> },
    { year: '2020', title: 'Global Resonance', desc: 'Reached our 100th client milestone and expanded to a distributed team.', icon: <Globe2 /> },
    { year: '2022', title: 'AI Lab Launch', desc: 'Launched our proprietary AI engine, setting benchmarks for performance.', icon: <Star /> },
    { year: '2024', title: 'The Flagship', desc: 'Opened our digital couture studio in SF\'s historic Design District.', icon: <Eye /> }
  ];

  const team = [
    {
      name: "Abhishek Kashyap",
      role: "Founder",
      tagline: "The Visionary Strategist",
      bio: "Mastermind of the PixelVision ecosystem, bridging the gap between business logic and aesthetic perfection.",
      icon: <BrainCircuit size={40} />,
      color: "from-indigo-600 to-blue-600",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Ayush Gupta",
      role: "Co-founder",
      tagline: "The Design Architect",
      bio: "Curator of visual harmony, Ayush ensures every pixel resonates with the soul of the brand.",
      icon: <Layers size={40} />,
      color: "from-violet-600 to-purple-600",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Deepak Rathour",
      role: "CTO",
      tagline: "The Lead Engineer",
      bio: "Deepak commands the binary pulse of our studio, architecting sub-second systems that never sleep.",
      icon: <Terminal size={40} />,
      color: "from-cyan-600 to-teal-600",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Shashwat Mishra",
      role: "CSO",
      tagline: "The Algorithm Architect",
      bio: "The Chief SEO Officer decoding the complex neural patterns of search engines to ensure global dominance.",
      icon: <SearchCode size={40} />,
      color: "from-emerald-600 to-teal-500",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0a0a0a]">
      {/* Immersive Hero */}
      <Section theme="dark" className="relative !p-0 min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 50 Q 25 10, 50 50 T 100 50" stroke="#4f46e5" fill="none" strokeWidth="0.1" />
          </svg>
        </motion.div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="w-12 h-[1px] bg-indigo-500" />
            <span className="text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px]">
              Origin Story
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[11rem] font-display font-bold leading-[0.85] mb-12 tracking-tighter text-white"
          >
            Design <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Biological.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed italic"
          >
            "We didn't set out to build an agency. We set out to build the future of human-digital interaction."
          </motion.p>
        </div>
      </Section>

      {/* The Founding Architects Section - Highly Animated */}
      <Section theme="dark" className="bg-[#0a0a0a] relative py-40">
        <div className="text-center mb-32 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-8 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-indigo-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
          >
            The Architects of Vision
          </motion.div>
          <h2 className="text-6xl md:text-[8rem] font-display text-white mb-6 tracking-tighter text-center">Founding <span className="italic">Nodes.</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed text-center">
            Meet the minds behind the machine. Four specialists, one singular obsession: <br /><strong>Digital Perfection.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group h-[600px] perspective-1000"
            >
              <motion.div 
                whileHover={{ rotateY: 3, rotateX: -3, scale: 1.01 }}
                className="w-full h-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3.5rem] p-8 overflow-hidden relative shadow-2xl transition-all duration-700 group-hover:border-indigo-500/50 flex flex-col justify-between"
              >
                {/* Profile Image with mask */}
                <div className="absolute top-0 right-0 w-full h-1/2 opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white mb-6 shadow-xl`}>
                    {member.icon}
                  </div>
                </div>
                
                <div className="relative z-10 space-y-3">
                  <span className="text-indigo-400 font-bold uppercase tracking-[0.3em] text-[10px]">{member.role}</span>
                  <h3 className="text-4xl font-display font-bold text-white group-hover:translate-x-2 transition-transform duration-500">{member.name}</h3>
                  <p className="text-white/60 font-bold italic text-base leading-tight">{member.tagline}</p>
                  <p className="text-gray-500 text-sm font-light leading-relaxed pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    {member.bio}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 right-8">
                  {member.role === 'CSO' ? (
                    <TrendingUp className="text-emerald-500/20 group-hover:text-emerald-500 transition-colors animate-pulse" size={20} />
                  ) : (
                    <Cpu className="text-indigo-500/20 group-hover:text-indigo-500 transition-colors animate-pulse" size={20} />
                  )}
                </div>
              </motion.div>
              
              {/* Background Glow */}
              <div className={`absolute -inset-4 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 blur-[50px] transition-opacity duration-700 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Connection Lines (SVGs) */}
        <div className="absolute inset-0 z-0 opacity-10 hidden lg:block">
           <svg className="w-full h-full" viewBox="0 0 1200 800">
             <motion.path 
               d="M 150 400 Q 600 150 1050 400" 
               stroke="#4f46e5" 
               strokeWidth="0.5" 
               fill="none"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 2.5 }}
             />
             <motion.path 
               d="M 150 450 Q 600 700 1050 450" 
               stroke="#4f46e5" 
               strokeWidth="0.5" 
               fill="none"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               transition={{ duration: 2.5, delay: 0.5 }}
             />
           </svg>
        </div>
      </Section>

      {/* Manifesto Section */}
      <Section theme="light" className="relative rounded-t-[5rem] -mt-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="flex items-center gap-4 text-indigo-600">
               <Eye size={32} />
               <h2 className="text-5xl font-display font-bold text-gray-900">The Manifesto.</h2>
            </div>
            <p className="text-2xl text-gray-500 font-light leading-relaxed">
              In a world of generic templates, we stand for the <span className="text-indigo-600 font-bold italic">Unrepeatable</span>. 
            </p>
            <div className="space-y-8 pt-6">
              {[
                { title: "Design as Data", desc: "Aesthetic choices backed by cognitive science." },
                { title: "Code as Art", desc: "Software that flows like a high-performance engine." },
                { title: "Scale as a Mindset", desc: "Systems ready for millions from the first commit." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 border-l-2 border-gray-100 pl-8 hover:border-indigo-600 transition-colors py-2 group cursor-default">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-[10px] group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ rotate: 3, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="rounded-[4rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Studio Life"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section theme="dark" className="bg-[#0a0a0a]">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-display italic text-white mb-6">The Kinetic Path</h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">Chronological Evolution</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-24">
          {milestones.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-center md:text-left">
                <span className="text-7xl font-display text-indigo-500/20 block mb-4">{m.year}</span>
                <h3 className="text-3xl font-bold mb-4 text-white uppercase tracking-tighter">{m.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{m.desc}</p>
              </div>
              <div className="w-[1px] h-32 bg-white/10 hidden md:block" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section theme="light" className="!pt-0">
        <div className="bg-indigo-600 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <h2 className="text-5xl md:text-9xl font-display font-bold mb-10 leading-none">Join the <br /><span className="italic">Revolution.</span></h2>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl flex items-center gap-4 mx-auto"
           >
             Explore Roles <ArrowRight />
           </motion.button>
        </div>
      </Section>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};
