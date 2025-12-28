
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section } from '../components/Section';
import { 
  Search, 
  TrendingUp, 
  BarChart, 
  Map, 
  SearchCode, 
  Globe2, 
  Zap, 
  ShieldCheck, 
  MousePointer2,
  PieChart,
  Target,
  LineChart,
  Server,
  Smartphone,
  CheckCircle2
} from 'lucide-react';

export const SEOOptimization = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  const seoLifecycle = [
    { 
      step: "01", 
      title: "Neural Audit", 
      desc: "We don't just scan for broken links. We analyze your site's semantic structure and intent-mapping against the latest core updates." 
    },
    { 
      step: "02", 
      title: "Semantic Architecture", 
      desc: "Building a topical authority map. We structure your content hubs to dominate entire search categories, not just single keywords." 
    },
    { 
      step: "03", 
      title: "Technical Hardening", 
      desc: "Optimizing Core Web Vitals to the extreme. We ensure Google's crawlers find a frictionless, lightning-fast experience." 
    },
    { 
      step: "04", 
      title: "Authority Scaling", 
      desc: "High-tier digital PR and link-earning. We secure placements on industry-leading domains to signal maximum trust." 
    }
  ];

  return (
    <div className="pt-20">
      {/* Dynamic Hero Section */}
      <Section theme="light" className="!py-32 overflow-hidden relative border-b border-gray-100">
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <svg className="w-full h-full opacity-[0.05]" viewBox="0 0 100 100">
            <defs>
              <pattern id="seoGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#4F46E5" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#seoGrid)" />
          </svg>
        </motion.div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-indigo-600" />
              <span className="text-indigo-600 font-bold uppercase tracking-[0.3em] text-[10px]">
                Algorithm Mastery
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-[9rem] font-display font-bold mb-10 leading-[0.85] text-gray-900 tracking-tighter"
            >
              Omniscient <br /><span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Growth.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-500 font-light mb-12 max-w-lg leading-relaxed"
            >
              We hack the search equilibrium. Our strategies don't just follow the rules—they define the high-visibility landscape for market leaders.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
              {['LSI Analysis', 'Schema V3', 'Edge SEO', 'Entity Mapping'].map((tag, idx) => (
                <motion.span 
                  key={tag} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="px-6 py-2 bg-indigo-50 text-indigo-600 rounded-full font-bold text-[10px] uppercase tracking-widest border border-indigo-100"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="bg-white p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-gray-100 relative z-10"
            >
              <div className="flex justify-between items-center mb-12">
                <div>
                  <h3 className="text-4xl font-display font-bold text-gray-900">SERP Dominance</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-indigo-600 font-bold text-sm tracking-widest uppercase">Live Metrics</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                  <TrendingUp size={32} />
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-end gap-3 h-48">
                  {[35, 55, 45, 75, 60, 85, 100].map((h, i) => (
                    <div key={i} className="flex-1 group relative">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: "circOut" }}
                        className="w-full bg-indigo-500 rounded-t-2xl group-hover:bg-indigo-400 transition-colors relative"
                      >
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                           {h}%
                         </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest pt-4 border-t border-gray-100">
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                  <span>Forecast</span>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative background blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-violet-400/20 blur-[80px] rounded-full z-0" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-400/20 blur-[80px] rounded-full z-0" />
          </div>
        </div>
      </Section>

      {/* Strategic Pillars */}
      <Section theme="dark" className="relative">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl md:text-7xl font-display text-white mb-8">The Three <span className="italic text-indigo-400">Pillars.</span></h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Successful SEO is a multi-dimensional war. We attack from three distinct angles to ensure your brand's total market capture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: <SearchCode size={40} />, 
              title: "Technical SEO", 
              desc: "Deep-infrastructure optimization. We fix indexing, rendering, and crawlability issues at the root level.",
              stat: "100/100 Lighthouse"
            },
            { 
              icon: <PieChart size={40} />, 
              title: "Semantic Content", 
              desc: "Building context-rich content hubs that satisfy user intent and demonstrate high E-E-A-T scores.",
              stat: "+240% Time on Site"
            },
            { 
              icon: <ShieldCheck size={40} />, 
              title: "Authority Design", 
              desc: "Strategic link-building and digital PR that signals your domain as a primary industry resource.",
              stat: "DA 70+ Network"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-12 border border-white/5 bg-white/5 rounded-[3.5rem] group hover:bg-white/[0.08] transition-all"
            >
              <div className="text-indigo-400 mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-2xl font-display font-bold mb-4 text-white">{item.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed mb-8">{item.desc}</p>
              <div className="pt-6 border-t border-white/10 text-xs font-bold uppercase tracking-widest text-indigo-400">
                Avg. Result: {item.stat}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* The Strategic Lifecycle */}
      <Section theme="light">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">The Process</span>
            <h2 className="text-5xl md:text-7xl font-display text-gray-900 italic">Lifecycle Dominance.</h2>
          </div>
          <div className="text-right">
             <p className="text-gray-500 font-light max-w-sm">From the initial neural scan to perpetual authority scaling, we leave no pixel unturned.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {seoLifecycle.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-10 border border-gray-100 rounded-[3rem] bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="text-5xl font-display text-indigo-200 group-hover:text-indigo-600 transition-colors mb-6">{s.step}</div>
              <h4 className="text-2xl font-bold mb-4 text-gray-900">{s.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Core Web Vitals Visualization */}
      <Section theme="dark" className="bg-[#0a0a0a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl font-display text-white mb-8">Google <span className="text-indigo-400 italic">Vitals.</span></h2>
            <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
              We optimize for speed not just for users, but for the Google ranking algorithms. Our technical team treats every millisecond as a potential ranking factor.
            </p>
            
            <div className="space-y-10">
              {[
                { label: "LCP (Largest Contentful Paint)", val: "0.8s", score: 98 },
                { label: "FID (First Input Delay)", val: "12ms", score: 100 },
                { label: "CLS (Cumulative Layout Shift)", val: "0.01", score: 99 }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-bold uppercase tracking-widest">{item.label}</span>
                    <span className="text-indigo-400 font-bold">{item.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.score}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white/5 border border-white/10 rounded-[4rem] p-12 flex items-center justify-center overflow-hidden">
               <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-20 border border-indigo-500/20 rounded-full border-dashed"
               />
               <div className="relative z-10 text-center">
                 <div className="text-[12rem] font-display font-bold text-indigo-400 leading-none">99</div>
                 <div className="text-gray-400 font-bold uppercase tracking-[0.3em] mt-4">Performance Score</div>
               </div>
            </div>
            {/* Speed dots */}
            {[...Array(5)].map((_, i) => (
              <motion.div 
                key={i}
                animate={{ x: [0, 400], opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="absolute h-[1px] bg-indigo-500"
                style={{ top: `${20 * (i + 1)}%`, left: '-50px', width: '40px' }}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Comparison Grid */}
      <Section theme="light">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-display text-gray-900 mb-6">The <span className="text-indigo-600">Evolution</span> of Search.</h2>
          <p className="text-gray-500">Standard SEO is dying. Semantic entity-based optimization is the future. We bridge that gap.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-12 border border-gray-100 rounded-[4rem] bg-gray-50">
            <h3 className="text-3xl font-display text-gray-400 mb-10">Legacy SEO</h3>
            <ul className="space-y-6">
              {[
                "Keyword stuffing (Density focused)",
                "Low-quality directory links",
                "Thin content for every variation",
                "Ignoring user engagement metrics",
                "Manual, slow metadata updates"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-400 line-through decoration-gray-300">
                   <div className="w-2 h-2 bg-gray-300 rounded-full shrink-0" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-12 border border-indigo-500/30 rounded-[4rem] bg-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Zap className="text-indigo-600" size={120} />
            </div>
            <h3 className="text-3xl font-display text-gray-900 mb-10 italic">PixelVision Kinetic SEO</h3>
            <ul className="space-y-6">
              {[
                "Semantic Entity Mapping",
                "Digital PR Authority Building",
                "Dynamic LSI Content Hubs",
                "Behavioral CRO & Engagement Loop",
                "Edge-Side SEO Injection"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-900 font-medium">
                   <CheckCircle2 className="text-indigo-600 shrink-0" size={20} />
                   {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Global Reach Section */}
      <Section theme="light" className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Globe2 />, title: "Multilingual SEO", desc: "Expanding your reach into international markets with native semantic mapping." },
            { icon: <Target />, title: "Precision Targeting", desc: "Focusing on high-intent keywords that actually drive conversion, not just traffic." },
            { icon: <LineChart />, title: "Attribution Modeling", desc: "Understanding exactly which organic touchpoints lead to your revenue." },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-12 border border-gray-100 rounded-[3rem] bg-gray-50/30"
            >
              <div className="text-indigo-600 mb-8">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 40 })}</div>
              <h4 className="text-2xl font-display font-bold mb-4 text-gray-900">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section theme="light" className="!pt-0">
        <div className="bg-indigo-600 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <circle cx="50" cy="50" r="50" fill="none" stroke="white" strokeWidth="0.1" />
                 <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="0.1" />
                 <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.1" />
              </svg>
           </div>
           <h2 className="text-5xl md:text-8xl font-display font-bold mb-10 relative z-10">Capture the <br /><span className="italic">Top Spot.</span></h2>
           <p className="text-xl md:text-2xl text-indigo-100 font-light mb-12 max-w-2xl mx-auto relative z-10">
             Visibility is currency. Start your climb to the top of the search landscape today.
           </p>
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-6 bg-white text-indigo-600 rounded-2xl font-bold text-lg shadow-2xl relative z-10"
           >
             Get a Free Audit
           </motion.button>
        </div>
      </Section>
    </div>
  );
};
