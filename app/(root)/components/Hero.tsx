import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-primary text-white font-sans selection:bg-[#3abf7d]/30">
      
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 H90 V90 H10 Z' fill='none' stroke='%233abf7d' stroke-width='0.5'/%3E%3C/svg%3E")`,
          maskImage: 'radial-gradient(circle, black 0%, transparent 80%)'
        }}
      />

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-4 py-8 lg:px-20">
        <div className="text-2xl font-serif font-bold tracking-tight">Amokahi</div>
        
        <nav className="hidden">
          <ul className="flex gap-8 text-sm font-medium text-emerald-100/70">
            {['About us', 'Features', 'Pricing', 'Resources', 'Contact us'].map((item) => (
              <li key={item} className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                {item}
                {item === 'Features' && (
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <a 
  href="tel:+254724134495"
  className="inline-block bg-[#d9f99d] text-[#0c3a30] px-7 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-900/40 hover:brightness-110 transition-all cursor-pointer"
>
  Contact us
</a>
      </header>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-16 pb-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-[5.5rem] font-medium tracking-tight leading-[1.1] text-white">
            Quick Loans. Fair Terms.<br /> No Hidden Fees.
            {/* <span className="italic font-light text-secondary">No Hidden Fees.</span> */}
          </h1>
          <p className="mt-8 max-w-lg mx-auto text-emerald-100/70 text-lg font-light leading-relaxed">
            Get access to affordable personal and business loans in minutes. Apply online, receive quick approval, and manage repayments easily — all from one secure digital platform. 
          </p>
        </div>

        {/* Feature Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
  
  {/* Card 1: Fast Approval */}
  <div className="relative aspect-[1.1/1] rounded-[2.5rem] bg-emerald-900/20 backdrop-blur-xl border border-white/5 p-10 flex flex-col justify-between overflow-hidden group hover:border-emerald-400/30 transition-all duration-500">
    <div>
      <span className="px-3 py-1 bg-[#d9f99d]/10 rounded-full text-[10px] tracking-widest text-[#d9f99d] font-bold uppercase">Timely</span>
    </div>
    
    <div className="relative z-10">
      <h4 className="text-3xl font-bold text-white/90 mb-3 tracking-tight">Fast Approval</h4>
      <p className="text-sm text-emerald-100/50 font-medium leading-relaxed">
        Get a decision in minutes. We value your time as much as your hustle.
      </p>
    </div>
  </div>

  {/* Card 2: Flexible Payments (Center Feature) */}
  <div className="relative aspect-[1.1/1] rounded-[2.5rem] bg-emerald-900/30 backdrop-blur-2xl border border-white/10 p-10 flex flex-col items-center justify-center overflow-hidden shadow-2xl group hover:border-emerald-400/30 transition-all duration-500">
    {/* Floating Element - Replicating the 'Wealthly' center card vibe */}
    <div className="relative w-full flex-1 flex flex-col items-center justify-center">
       <div className="w-16 h-16 bg-gradient-to-br from-[#d9f99d] to-[#3abf7d] rounded-2xl rotate-12 flex items-center justify-center shadow-lg group-hover:rotate-0 transition-transform duration-500">
          <svg className="w-8 h-8 text-[#0c3a30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
       </div>
       <div className="mt-6 text-center">
          <h4 className="text-2xl font-bold text-white mb-2">Flexible Payments</h4>
          <p className="text-xs text-emerald-100/40 uppercase tracking-widest font-bold">Weekly or Monthly</p>
       </div>
    </div>
    {/* Background Decorative Squares */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/5 rounded-3xl" />
  </div>

  {/* Card 3: Secure & Confidential */}
  <div className="relative aspect-[1.1/1] rounded-[2.5rem] bg-emerald-900/20 backdrop-blur-xl border border-white/5 p-10 flex flex-col justify-between overflow-hidden group hover:border-emerald-400/30 transition-all duration-500">
    <div>
      <span className="px-3 py-1 bg-[#d9f99d]/10 rounded-full text-[10px] tracking-widest text-[#d9f99d] font-bold uppercase">Privacy First</span>
    </div>

    <div>
      <h4 className="text-3xl font-bold text-white/90 mb-3 tracking-tight">Secure & <br />Confidential</h4>
      <p className="text-sm text-emerald-100/50 font-medium leading-relaxed">
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