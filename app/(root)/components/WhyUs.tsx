import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

const WhyChooseAmokahi: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-0 md:pt-24 md:pb-24 px-4 md:px-12 lg:px-24 selection:bg-[#42cdf5]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#0a90b0] text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
            The Advantage
          </span>
          <h2 className="text-4xl md:text-6xl text-[#0a4a5e] font-medium tracking-tight">
            Why Choose <span className="italic font-light text-[#42cdf5]">Amokahi?</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Speed & Process */}
          <div className="bg-[#0a4a5e] rounded-[3rem] p-10 flex flex-col min-h-[520px] overflow-hidden group border border-white/5 shadow-2xl">
            <div className="flex-1 relative flex items-center justify-center">
              {/* Cyan Glow behind icon */}
              <div className="absolute w-32 h-32 bg-[#42cdf5]/20 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative z-10 w-28 h-36 border-2 border-[#42cdf5]/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-28 bg-gradient-to-br from-[#42cdf5] to-[#0a90b0] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(66,205,245,0.3)]">
                   <Clock className="size-10 text-[#062d3a]" />
                </div>
              </div>
              
              {/* Floating Status Labels */}
              <div className="absolute top-12 left-2 bg-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-2xl border border-cyan-50">
                <div className="w-5 h-5 rounded-full bg-[#42cdf5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#062d3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-[10px] font-black text-[#0a4a5e] uppercase tracking-tighter">ID Verified</span>
              </div>
              
              <div className="absolute bottom-12 right-2 bg-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-2xl border border-cyan-50">
                <div className="w-5 h-5 rounded-full bg-[#42cdf5] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#062d3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-[10px] font-black text-[#0a4a5e] uppercase tracking-tighter">Approved</span>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Swift Decisions</h3>
              <p className="text-cyan-100/60 text-sm leading-relaxed font-light">
                We value your time. Our team provides an assessment of your requirements in minutes, ensuring you get funding exactly when you need it.
              </p>
            </div>
          </div>

          {/* Card 2: Flexible Repayments */}
          <div className="bg-[#0a4a5e] rounded-[3rem] p-10 flex flex-col min-h-[520px] overflow-hidden border border-white/5 shadow-2xl">
            <div className="flex-1 relative flex items-center justify-center pt-8">
              <div className="w-full h-44 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden backdrop-blur-md">
                <div className="h-8 bg-white/10 w-full flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#42cdf5]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[9px] text-white/40 font-black uppercase tracking-widest">Schedule</span>
                </div>
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className="h-2 w-28 bg-[#42cdf5]/30 rounded-full" />
                    <div className="h-4 w-14 bg-[#42cdf5] rounded-lg" />
                  </div>
                  <div className="flex justify-between items-center opacity-40">
                    <div className="h-2 w-20 bg-white/20 rounded-full" />
                    <div className="h-4 w-12 bg-white/20 rounded-lg" />
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Tailored Flexibility</h3>
              <p className="text-cyan-100/60 text-sm leading-relaxed font-light">
                Weekly or monthly installments designed to match Kenyan business cycles. Repay comfortably without straining your daily operations.
              </p>
            </div>
          </div>

          {/* Card 3: Trust & Experience (Restored Image Logic) */}
          <div className="bg-[#0a4a5e] rounded-[3rem] p-10 flex flex-col min-h-[520px] overflow-hidden border border-white/5 shadow-2xl">
            <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-3 pt-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                // Use new Cyan for placeholders (i % 2 === 0 ?)
                <div key={i} className={`rounded-2xl overflow-hidden border border-white/5 transition-all group-hover:scale-105 duration-300 ${i % 2 === 0 ? 'bg-[#42cdf5]/10' : 'bg-white/5'}`}>
                  {/* Restored YOUR ORIGINAL Conditional Logic here */}
                  {(i === 2 || i === 4 || i === 6 || i === 8) && (
                    <div className="relative w-full h-full">
                      <Image 
                        src={`/client${i}.jpg`} 
                        alt="Amokahi Client" 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Community Focused</h3>
              <p className="text-cyan-100/60 text-sm leading-relaxed font-light">
                Life happens unexpectedly. From emergency funding to personal boosts, we provide a transparent bridge for the short-term gaps.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseAmokahi;