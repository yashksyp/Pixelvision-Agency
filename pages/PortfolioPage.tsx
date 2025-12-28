
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  ArrowUpRight, 
  Filter, 
  ExternalLink, 
  Trophy, 
  TrendingUp, 
  Zap, 
  Layers, 
  Target,
  ChevronRight,
  Maximize2
} from 'lucide-react';

const categories = ["All Work", "Web Design", "SaaS", "Branding", "Marketing"];

const projects = [
  {
    id: 1,
    title: "Lumea AI",
    client: "Lumea Technologies",
    cat: "Web Design",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    kpi: "+240% Growth",
    color: "indigo",
    desc: "A generative AI platform requiring a high-fidelity interface that balances complex data with intuitive user flows."
  },
  {
    id: 2,
    title: "FinTrack Elite",
    client: "FT Global",
    cat: "SaaS",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    kpi: "$12M Revenue",
    color: "emerald",
    desc: "Real-time financial analytics dashboard for enterprise hedge funds, focusing on sub-second latency and precision."
  },
  {
    id: 3,
    title: "Vortex Labs",
    client: "Vortex Web3",
    cat: "Marketing",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    kpi: "#1 Ranking",
    color: "violet",
    desc: "Aggressive SEO and performance marketing campaign that captured 40% of the organic 'Blockchain SaaS' market."
  },
  {
    id: 4,
    title: "Aura Skincare",
    client: "Aura Paris",
    cat: "Branding",
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1200&auto=format&fit=crop",
    kpi: "12.4% Conv.",
    color: "rose",
    desc: "A luxury brand identity and e-commerce experience that redefined digital elegance in the beauty space."
  },
  {
    id: 5,
    title: "EcoDrive",
    client: "GreenMove",
    cat: "SaaS",
    img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=1200&auto=format&fit=crop",
    kpi: "500k Users",
    color: "cyan",
    desc: "Fleet management software utilizing IoT data to reduce carbon footprints by 30% for logistics companies."
  },
  {
    id: 6,
    title: "Nexus VR",
    client: "Nexus Entertainment",
    cat: "Web Design",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=1200&auto=format&fit=crop",
    kpi: "Best UX '24",
    color: "purple",
    desc: "Immersive WebGL experience for the world's first decentralized virtual reality social network."
  }
];

export const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("All Work");

  const filteredProjects = projects.filter(p => 
    activeTab === "All Work" ? true : p.cat === activeTab
  );

  return (
    <div className="pt-20">
      {/* Dynamic Hero Header */}
      <Section theme="light" className="!py-32 relative overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none">
          <Trophy size={600} className="text-indigo-600" />
        </div>
        
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-[1px] bg-indigo-600" />
            <span className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[10px]">
              Case Studies
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[11rem] font-display font-bold leading-[0.85] mb-12 tracking-tighter text-gray-900"
          >
            Digital <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Masterpieces.</span>
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12 pt-10">
            <p className="text-xl text-gray-500 font-light max-w-xl leading-relaxed">
              We don't just ship features; we engineer legacies. Explore the archive of brands that chose to dominate rather than compete.
            </p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-2 bg-gray-50 rounded-[2rem] border border-gray-100">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 ${
                    activeTab === cat 
                      ? 'bg-indigo-600 text-white shadow-lg' 
                      : 'text-gray-400 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Project Grid */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[4rem] bg-gray-100 mb-10 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-12 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-gray-900 mb-6"
                    >
                      <Maximize2 size={24} />
                    </motion.div>
                    <p className="text-white text-lg font-light leading-relaxed max-w-xs mb-8">
                      {p.desc}
                    </p>
                    <div className="flex gap-4">
                      <span className="px-6 py-2 bg-white/20 backdrop-blur rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30">
                        View Strategy
                      </span>
                    </div>
                  </div>

                  {/* KPI Badge */}
                  <div className="absolute top-10 left-10 flex flex-col gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="px-6 py-2 bg-white text-indigo-600 font-bold text-[10px] uppercase tracking-widest rounded-full shadow-xl flex items-center gap-2"
                    >
                      <TrendingUp size={12} />
                      {p.kpi}
                    </motion.div>
                  </div>
                </div>

                <div className="flex justify-between items-start px-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600 mb-2 block">{p.cat}</span>
                    <h3 className="text-4xl font-display font-bold text-gray-900 mb-2 group-hover:translate-x-2 transition-transform duration-500">{p.title}</h3>
                    <p className="text-gray-400 font-light text-sm italic">{p.client}</p>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-14 h-14 border border-gray-100 rounded-full flex items-center justify-center text-gray-300 group-hover:text-indigo-600 group-hover:border-indigo-600 transition-all"
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      {/* Success Metrics / ROI Visualizer */}
      <Section theme="dark" className="bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 80 Q 25 20, 50 80 T 100 80" stroke="white" fill="none" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <h2 className="text-6xl font-display text-white mb-8">Engineered <br /><span className="text-indigo-400 italic">Outcomes.</span></h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              Our work is measured by the delta we create. We focus on the KPIs that drive valuation and market share.
            </p>
            
            <div className="space-y-12">
              {[
                { label: "Aggregate Client Growth", val: "+420%", icon: <TrendingUp /> },
                { label: "Design Awards Secured", val: "24+", icon: <Trophy /> },
                { label: "Lines of Code Engineered", val: "2.4M", icon: <Zap /> }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 group"
                >
                  <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    {React.cloneElement(stat.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-white">{stat.val}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="p-16 border border-white/5 bg-white/[0.02] rounded-[5rem] backdrop-blur-xl">
               <div className="flex justify-between items-center mb-12">
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs">Industry Dominance</h4>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                  </div>
               </div>
               
               <div className="space-y-8">
                 {[ 
                   { n: "Performance", v: 98 }, 
                   { n: "Conversion", v: 85 }, 
                   { n: "Retainment", v: 92 },
                   { n: "Scalability", v: 100 }
                 ].map((bar, i) => (
                   <div key={i} className="space-y-3">
                     <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                       <span>{bar.n}</span>
                       <span>{bar.v}%</span>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${bar.v}%` }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500"
                        />
                     </div>
                   </div>
                 ))}
               </div>
               
               <p className="text-gray-500 text-[10px] mt-12 text-center uppercase tracking-widest">Data aggregated from 2024 client audits</p>
             </div>
          </div>
        </div>
      </Section>

      {/* The Gallery Explorer CTA */}
      <Section theme="light">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "View Technical Specs", 
              desc: "Deep dive into our engineering documentation and stack choices.",
              icon: <Layers />
            },
            { 
              title: "Request a Workshop", 
              desc: "Collaborate with our strategists to map your project's DNA.",
              icon: <Target />
            },
            { 
              title: "Client Testimonials", 
              desc: "Read first-hand accounts of the PixelVision impact.",
              icon: <ExternalLink />
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 border border-gray-100 rounded-[3.5rem] bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="text-indigo-600 mb-8 group-hover:scale-110 transition-transform">
                {React.cloneElement(card.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">{card.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{card.desc}</p>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600">
                Explore <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* High-Performance Final CTA */}
      <Section theme="light" className="!pt-0">
        <div className="bg-indigo-600 rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.1" />
                 <circle cx="50" cy="50" r="35" fill="none" stroke="white" strokeWidth="0.1" />
              </svg>
           </div>
           
           <div className="relative z-10">
             <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-5xl md:text-8xl font-display font-bold mb-10 leading-tight"
             >
               Ready to <br /><span className="italic">Ascend?</span>
             </motion.h2>
             <p className="text-xl md:text-2xl text-indigo-100 font-light mb-12 max-w-2xl mx-auto">
               Your project is the next masterpiece waiting to happen. Let's engineer its success together.
             </p>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl"
             >
               Start Your Case Study
             </motion.button>
           </div>
        </div>
      </Section>
    </div>
  );
};
