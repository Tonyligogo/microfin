import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AmokahiCTA: React.FC = () => {
  return (
    <section className="px-4 md:py-12 md:px-12 lg:px-24 bg-white">
      <div className="relative max-w-7xl mx-auto overflow-hidden bg-[#0c3a30] rounded-[3rem] py-20 px-8 text-center border border-white/5 shadow-2xl">
        
        {/* --- Background Patterns --- */}
        {/* Replicating the grid wireframe seen in your reference images */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
          }}
        />

        {/* Decorative Floating Squares */}
        <div className="absolute top-10 right-10 w-24 h-24 border border-emerald-400/20 rounded-2xl opacity-40 pointer-events-none" />
        <div className="absolute bottom-[-20px] left-10 w-32 h-32 border border-emerald-400/10 rounded-[2rem] opacity-30 pointer-events-none" />

        {/* --- Content --- */}
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
            Get your <br />
            <span className="italic font-light text-emerald-200">loan in seconds!</span>
          </h2>
          
          <p className="mt-6 text-emerald-100/70 text-lg font-light leading-relaxed">
            Get a clear picture of your micro-loan options with ease. 
            Simulate now and plan for your biashara with peace of mind.
          </p>

          <div className="mt-10 flex justify-center">
            {/* Replicating the gradient pill button with arrow */}
            <button className="group flex items-center gap-2 bg-[#d9f99d] text-[#0c3a30] px-10 py-4 rounded-full text-lg font-bold shadow-xl shadow-emerald-900/40 hover:brightness-110 transition-all">
              Get in touch
              <ArrowUpRight className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Decorative Blurred Accents (Glows) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
};

export default AmokahiCTA;