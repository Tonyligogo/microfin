import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AmokahiCTA: React.FC = () => {
  return (
    <section className="px-4 py-12 md:px-12 lg:px-24 bg-white selection:bg-[#42cdf5]/30">
      <div className="relative max-w-7xl mx-auto overflow-hidden bg-[#062d3a] rounded-[3.5rem] py-24 px-8 text-center border border-white/5 shadow-2xl">
        
        {/* --- Background Patterns --- */}
        {/* Updated Grid Wireframe with Cyan hue */}
        <div 
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(66,205,245,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(66,205,245,0.2) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)'
          }}
        />

        {/* Decorative Floating Squares - Cyan themed */}
        <div className="absolute top-10 right-10 w-24 h-24 border border-[#42cdf5]/20 rounded-[2rem] opacity-40 pointer-events-none rotate-12" />
        <div className="absolute bottom-[-20px] left-10 w-32 h-32 border border-[#42cdf5]/10 rounded-[2.5rem] opacity-30 pointer-events-none -rotate-12" />

        {/* --- Content --- */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-[#42cdf5] text-sm font-black uppercase tracking-[0.3em] mb-6 block">
            Ready to grow?
          </span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tighter leading-[1.1]">
            Get your <br />
            <span className="italic font-light text-[#42cdf5]">loan today!</span>
          </h2>
          
          <p className="mt-8 text-cyan-100/60 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
            Get a clear picture of your micro-loan options today. 
            Apply now and fuel your <span className="text-white font-medium">biashara</span> with peace of mind.
          </p>

          <div className="mt-12 flex justify-center">
            {/* High-Contrast Cyan Button */}
            <button className="group flex items-center gap-3 bg-[#42cdf5] text-[#062d3a] px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300">
              Get in touch
              <div className="bg-[#062d3a] rounded-full p-1 group-hover:bg-white transition-colors">
                <ArrowUpRight className="size-5 text-[#42cdf5] group-hover:rotate-45 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Decorative Blurred Accents (Cyan Glows) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#42cdf5]/10 blur-[140px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
};

export default AmokahiCTA;