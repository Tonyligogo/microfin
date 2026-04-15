import React from 'react';
import { Smartphone, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#062d3a] text-white font-sans selection:bg-[#42cdf5]/30">
      
      {/* Background Grid Pattern - Updated to Cyan stroke */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H90 V90 H10 Z' fill='none' stroke='%2342cdf5' stroke-width='0.5'/%3E%3C/svg%3E")`,
          maskImage: 'radial-gradient(circle, black 0%, transparent 80%)'
        }}
      />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-8 lg:px-20">
        <div className="text-2xl font-serif font-bold tracking-tight">Amokahi</div>
        
        <a 
          href="tel:+254725116023"
          className="inline-block bg-[#42cdf5] text-[#062d3a] px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all cursor-pointer"
        >
          Contact us
        </a>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-16 pb-24">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-[5.5rem] font-medium tracking-tight leading-[1.1] text-white">
            Quick Loans. Fair Terms.<br /> 
            <span className="italic font-light text-[#42cdf5]">No Hidden Fees.</span>
          </h1>
          <p className="mt-8 max-w-lg mx-auto text-cyan-100/60 text-lg font-light leading-relaxed">
            Get access to affordable personal and business loans in minutes. Apply online, receive quick approval, and manage repayments easily.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          
          {/* Card 1: Fast Approval */}
          <div className="relative aspect-[1.1/1] rounded-[2.5rem] bg-cyan-950/30 backdrop-blur-xl border border-white/5 p-10 flex flex-col justify-between overflow-hidden group hover:border-[#42cdf5]/30 transition-all duration-500">
            <div>
              <span className="px-3 py-1 bg-[#42cdf5]/10 rounded-full text-[10px] tracking-widest text-[#42cdf5] font-bold uppercase border border-[#42cdf5]/20">Timely</span>
            </div>
            
            <div className="relative z-10">
              <Zap className="size-8 text-[#42cdf5] mb-4" />
              <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">Fast Approval</h4>
              <p className="text-sm text-cyan-100/50 font-medium leading-relaxed">
                Get a decision in minutes. We value your time as much as your hustle.
              </p>
            </div>
          </div>

          {/* Card 2: Flexible Payments */}
          <div className="relative aspect-[1.1/1] rounded-[2.5rem] bg-[#0891b2]/20 backdrop-blur-2xl border border-[#42cdf5]/20 p-10 flex flex-col items-center justify-center overflow-hidden shadow-2xl group hover:border-[#42cdf5]/50 transition-all duration-500">
            <div className="relative w-full flex-1 flex flex-col items-center justify-center">
               <div className="w-16 h-16 bg-[#42cdf5] rounded-2xl rotate-12 flex items-center justify-center shadow-[0_0_30px_rgba(66,205,245,0.3)] group-hover:rotate-0 transition-transform duration-500">
                  <Smartphone className="size-8 text-[#062d3a]" />
               </div>
               <div className="mt-6 text-center">
                  <h4 className="text-2xl font-bold text-white mb-2">Flexible Payments</h4>
                  <p className="text-xs text-[#42cdf5] uppercase tracking-widest font-bold">Weekly or Monthly</p>
               </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/5 rounded-3xl" />
          </div>

          {/* Card 3: Secure & Confidential */}
          <div className="relative aspect-[1.1/1] rounded-[2.5rem] bg-cyan-950/30 backdrop-blur-xl border border-white/5 p-10 flex flex-col justify-between overflow-hidden group hover:border-[#42cdf5]/30 transition-all duration-500">
            <div>
              <span className="px-3 py-1 bg-[#42cdf5]/10 rounded-full text-[10px] tracking-widest text-[#42cdf5] font-bold uppercase border border-[#42cdf5]/20">Privacy First</span>
            </div>

            <div className="relative z-10">
              <ShieldCheck className="size-8 text-[#42cdf5] mb-4" />
              <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">Secure & <br />Confidential</h4>
              <p className="text-sm text-cyan-100/50 font-medium leading-relaxed">
                Your data and transactions are protected with bank-grade encryption.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Hero;