
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  Type, 
  Sparkles, 
  Feather, 
  Fingerprint, 
  Crown, 
  Heart, 
  Palette, 
  Layers, 
  Eye, 
  Target, 
  Zap, 
  CheckCircle2,
  Maximize,
  PenTool
} from 'lucide-react';

export const Branding = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const brandMethodology = [
    { 
      step: "01", 
      title: "Archetype Extraction", 
      desc: "We define the psychological core of your brand using Jungian archetypes to ensure a consistent personality." 
    },
    { 
      step: "02", 
      title: "Visual Synthesis", 
      desc: "Merging strategy with high-art. We create a visual system that represents your brand's unique value proposition." 
    },
    { 
      step: "03", 
      title: "Ecosystem Design", 
      desc: "Building the guidelines. We define how the brand breathes across social, digital, and physical touchpoints." 
    },
    { 
      step: "04", 
      title: "Market Resonance", 
      desc: "Launching the identity with a strategic narrative that commands attention and builds immediate trust." 
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section theme="light" className="!py-40 relative overflow-hidden border-b border-gray-100">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
        >
          <div className="text-[40rem] font-display font-bold text-indigo-600 select-none">
            DNA
          </div>
        </motion.div>

        <div className="text-center max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="w-12 h-[1px] bg-indigo-600" />
            <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[10px]">
              The Art of Influence
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-7xl md:text-[11rem] font-display font-bold leading-[0.85] mb-12 tracking-tighter"
          >
            Distinct <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Identity.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl text-gray-500 font-light max-w-3xl mx-auto leading-relaxed"
          >
            "Your brand isn't what you say it is. It's the emotional echo you leave in the minds of your audience."
          </motion.p>
        </div>
      </Section>

      {/* Brand DNA Architecture */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 md:order-1">
            <motion.div 
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-indigo-50 rounded-[5rem] p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
                <Fingerprint size={300} className="text-indigo-600" />
              </div>
              <div className="relative z-10">
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center text-indigo-600 shadow-xl mb-12">
                   <Target size={32} />
                </div>
                <h3 className="text-5xl font-display font-bold text-gray-900 mb-6">Genetic <br />Coding.</h3>
                <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
                  We treat brand identity as biological data. We map out your core values, competitive landscape, and user desires to engineer a brand that feels alive.
                </p>
              </div>
            </motion.div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-400/10 blur-[100px] rounded-full -z-10" />
          </div>
          
          <div className="space-y-12 order-1 md:order-2">
            <h2 className="text-5xl font-display font-bold text-gray-900 leading-tight">Unforgettable <br />First Impressions.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">
              We build brands that resonate. From typography to color psychology, every detail is engineered to create a cohesive narrative that speaks to your audience's subconscious.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                      <Eye size={16} />
                   </div>
                   <h5 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Visual Voice</h5>
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed">Defining the tone and aesthetic language of your company through rigorous research.</p>
               </div>
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
                      <Layers size={16} />
                   </div>
                   <h5 className="font-bold text-gray-900 uppercase text-xs tracking-widest">Logo Systems</h5>
                 </div>
                 <p className="text-sm text-gray-400 leading-relaxed">Scalable marks that work with surgical precision from 16px to 100ft.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Semiotics Lab */}
      <Section theme="dark" className="bg-[#0a0a0a]">
        <div className="text-center mb-24">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-4 inline-block">The Methodology</span>
          <h2 className="text-5xl md:text-7xl font-display text-white italic">The Semiotics Lab</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { icon: <Type />, title: "Typography", desc: "Custom font systems designed for maximum readability and distinct character personality." },
             { icon: <Sparkles />, title: "Motion Logo", desc: "Kinetic identities designed specifically for high-frame-rate digital environments." },
             { icon: <Feather />, title: "Brand Voice", desc: "Copywriting that sounds exactly like your brand feels. Consistent across every channel." },
             { icon: <Heart />, title: "Subconscious Link", desc: "Emotional mapping to ensure your brand triggers trust and desire at first sight." }
           ].map((item, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.05)' }}
               className="p-12 rounded-[3.5rem] border border-white/5 bg-white/[0.02] transition-all"
             >
                <div className="mb-10 text-indigo-400">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </Section>

      {/* Strategic Roadmap */}
      <Section theme="light">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-display text-gray-900 mb-8">Identity <span className="italic text-indigo-600">Synthesis.</span></h2>
          <p className="text-gray-500 text-xl font-light">The roadmap from a raw concept to a market-leading heritage brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {brandMethodology.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-10 border border-gray-100 rounded-[3rem] bg-gray-50/50 hover:bg-white transition-all group"
            >
              <div className="text-5xl font-display text-indigo-200 group-hover:text-indigo-600 transition-colors mb-6">{s.step}</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Expression Ecosystem */}
      <Section theme="light" className="!pt-0">
        <div className="bg-gray-900 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-display mb-8">Brand <br /><span className="text-indigo-400 italic">Ecosystems.</span></h2>
              <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
                A brand is a living entity. We build comprehensive design systems that maintain their soul across digital, print, and experiential mediums.
              </p>
              <div className="space-y-6">
                {[
                  "Component-Driven Design Systems",
                  "Omnichannel Content Strategies",
                  "Motion-First Interactive Assets",
                  "Physical Brand Collateral"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-300">
                    <CheckCircle2 size={18} className="text-indigo-500" />
                    <span className="font-bold text-xs uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517398823963-c2dc6fc3e837?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=600&auto=format&fit=crop"
              ].map((url, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10"
                >
                  <img src={url} alt="Brand Work" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* The Visual Lab Explorer */}
      <Section theme="light">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-display mb-12 italic">The Lab</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-24">
              {[ 
                { c: '#4F46E5', n: 'Royal Indigo' }, 
                { c: '#6366F1', n: 'Kinetic Blue' }, 
                { c: '#818CF8', n: 'Soft Iris' }, 
                { c: '#A5B4FC', n: 'Pastel Slate' }, 
                { c: '#121212', n: 'Obsidian' }
              ].map(color => (
                <motion.div 
                  key={color.c} 
                  whileHover={{ y: -10 }}
                  className="space-y-4"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-2xl" style={{ backgroundColor: color.c }} />
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{color.n}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-24">
              <div className="text-left space-y-4">
                 <Crown className="text-indigo-600" size={32} />
                 <h4 className="text-2xl font-display font-bold">Authority</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Brands that command leadership positions in their niche through visual power.</p>
              </div>
              <div className="text-left space-y-4">
                 <PenTool className="text-indigo-600" size={32} />
                 <h4 className="text-2xl font-display font-bold">Craftsmanship</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Artisanal attention to every letterform and pixel stroke in your identity.</p>
              </div>
              <div className="text-left space-y-4">
                 <Maximize className="text-indigo-600" size={32} />
                 <h4 className="text-2xl font-display font-bold">Scalability</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">Systems built to grow with your ambition, from startup to IPO and beyond.</p>
              </div>
            </div>
         </div>
      </Section>

      {/* Final Call to Action */}
      <Section theme="light" className="!pt-0">
        <div className="bg-indigo-600 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.5" />
                 <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="0.5" />
              </svg>
           </div>
           <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 relative z-10">Sign Your <br /><span className="italic">Manifesto.</span></h2>
           <p className="text-xl md:text-2xl text-indigo-100 font-light mb-12 max-w-2xl mx-auto relative z-10">
             Your brand is waiting to be born. Let's engineer an identity that outlasts the competition.
           </p>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl relative z-10"
           >
             Start Your Identity Scan
           </motion.button>
        </div>
      </Section>
    </div>
  );
};
