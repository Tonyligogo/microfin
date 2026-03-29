import React from 'react';
import Image from 'next/image';

const WhyChooseAmokahi: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-0 md:pt-24 md:pb-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#0c3a30] font-serif">
            Why Choose Us?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Speed & Process (Resonates with "Minutes" Approval) */}
          <div className="bg-[#0c3a30] rounded-[3rem] p-10 flex flex-col min-h-[520px] overflow-hidden group border border-emerald-900/20">
            <div className="flex-1 relative flex items-center justify-center">
              {/* Pulsing Glow behind icon */}
              <div className="absolute w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse" />
              
              <div className="relative z-10 w-28 h-36 border-2 border-emerald-400/20 rounded-full flex items-center justify-center">
                <div className="w-20 h-28 bg-gradient-to-br from-[#d9f99d] to-[#3abf7d] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(58,191,125,0.3)]">
                   <svg className="w-10 h-10 text-[#0c3a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
              </div>
              
              {/* Floating Status Labels - Replicating your design reference */}
              <div className="absolute top-12 left-2 bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-xl">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-[10px] font-bold text-[#0c3a30]">ID Verified</span>
              </div>
              
              <div className="absolute bottom-12 right-2 bg-white rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-xl">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <span className="text-[10px] font-bold text-[#0c3a30]">Collateral Appraised</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Swift Decisions</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                We value your time. Our team provides an assessment of your ID and collateral in minutes, moving at the speed of your life.
              </p>
            </div>
          </div>

          {/* Card 2: Flexible Repayments (Resonates with Business/Hustle Loans) */}
          <div className="bg-[#0c3a30] rounded-[3rem] p-10 flex flex-col min-h-[520px] overflow-hidden border border-emerald-900/20">
            <div className="flex-1 relative flex items-center justify-center pt-8">
              <div className="w-full h-44 bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden backdrop-blur-md">
                <div className="h-7 bg-white/10 w-full flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">Repayment Schedule</span>
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-24 bg-emerald-400/20 rounded-full" />
                    <div className="h-3 w-12 bg-emerald-400 rounded-full" />
                  </div>
                  <div className="flex justify-between items-center opacity-50">
                    <div className="h-3 w-20 bg-white/10 rounded-full" />
                    <div className="h-3 w-12 bg-white/10 rounded-full" />
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Tailored Flexibility</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
                Whether for school fees or scaling your business inventory, our weekly and monthly installments are designed for Kenyan business cycles.
              </p>
            </div>
          </div>

          {/* Card 3: Trust & Expertise (Resonates with Personal/Emergency Loans) */}
          <div className="bg-[#0c3a30] rounded-[3rem] p-10 flex flex-col min-h-[520px] overflow-hidden border border-emerald-900/20">
            <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-3 pt-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className={`rounded-xl overflow-hidden border border-white/5 transition-transform hover:scale-105 duration-300 ${i % 2 === 0 ? 'bg-[#d9f99d]/10' : 'bg-white/5'}`}>
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
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Community Focused</h3>
              <p className="text-emerald-100/70 text-sm leading-relaxed">
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