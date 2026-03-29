'use client';
import React, { useState, useMemo } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(10000);
  const [period, setPeriod] = useState(12);
  const [frequency, setFrequency] = useState<'monthly' | 'weekly'>('monthly');
  const [loanType, setLoanType] = useState('Business');

  const INTEREST_RATE = 0.06; // 6% p.a.
  const LTV_RATIO = 0.70; // Collateral should be ~30% more than loan

  const results = useMemo(() => {
    const r = INTEREST_RATE / 12;
    const P = amount;
    const n = period;
    
    const monthly = r === 0 ? P / n : (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalRepayment = monthly * n;
    const totalInterest = totalRepayment - P;
    const installment = frequency === 'monthly' ? monthly : (monthly * 12) / 52;
    const requiredCollateral = P / LTV_RATIO;

    return {
      installment,
      totalRepayment,
      totalInterest,
      requiredCollateral
    };
  }, [amount, period, frequency]);

  const fmt = (val: number) =>
    "Ksh " + val.toLocaleString("en-KE", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <section className="relative bg-[#0c3a30] py-24 px-4 overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Content */}
        <div>
          <span className="text-[#d9f99d] text-sm font-bold tracking-widest uppercase mb-4 block">
            Plan Your Hustle
          </span>
          <h3 className="text-white text-4xl md:text-6xl font-medium leading-tight mb-6">
            Calculate your <span className="italic font-light text-emerald-200">repayments.</span>
          </h3>
          <p className="text-emerald-100/70 text-lg font-light leading-relaxed mb-8 max-w-md">
            Transparent micro-lending. Adjust the sliders to see how our {INTEREST_RATE * 100}% p.a. rate fits your budget.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {['Personal', 'Business', 'Emergency', 'Micro'].map((type) => (
              <button 
                key={type}
                onClick={() => setLoanType(type)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  loanType === type ? 'bg-[#d9f99d] text-[#0c3a30]' : 'bg-white/5 text-white/40 border border-white/10'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Right: The Calculator Card */}
        <div className="bg-emerald-950/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          
          {/* Input Controls */}
          <div className="space-y-10">
            {/* Amount Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-white/60 text-sm font-medium">Loan Amount</label>
                <span className="text-2xl font-bold text-white">{fmt(amount)}</span>
              </div>
              <input 
                type="range" min={1000} max={100000} step={500} value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d9f99d]"
              />
            </div>

            {/* Period Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-white/60 text-sm font-medium">Duration (Months)</label>
                <span className="text-2xl font-bold text-white">{period} mo</span>
              </div>
              <input 
                type="range" min={1} max={36} step={1} value={period}
                onChange={(e) => setPeriod(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#d9f99d]"
              />
            </div>

            {/* Frequency Toggle */}
            <div className="flex items-center justify-between p-1 bg-white/5 rounded-2xl border border-white/5">
              <button 
                onClick={() => setFrequency('monthly')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${frequency === 'monthly' ? 'bg-white/10 text-white' : 'text-white/30'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setFrequency('weekly')}
                className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${frequency === 'weekly' ? 'bg-white/10 text-white' : 'text-white/30'}`}
              >
                Weekly
              </button>
            </div>
          </div>

          {/* Result Area */}
          <div className="mt-12 pt-10 border-t border-white/5 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-white/40 text-sm">Required Collateral Value</span>
              <span className="text-white font-medium">{fmt(results.requiredCollateral)}</span>
            </div>
            
            <div className="bg-[#d9f99d]/10 rounded-2xl p-6 flex justify-between items-center border border-[#d9f99d]/10">
              <div>
                <p className="text-[#d9f99d] text-xs font-bold uppercase tracking-wider mb-1">
                  {frequency === 'monthly' ? 'Monthly' : 'Weekly'} Installment
                </p>
                <p className="text-white text-3xl font-extrabold">{fmt(results.installment)}</p>
              </div>
              <div className="text-right">
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider mb-1">Total Payback</p>
                <p className="text-white/60 text-sm font-bold">{fmt(results.totalRepayment)}</p>
              </div>
            </div>

            <button className="w-full bg-[#d9f99d] text-[#0c3a30] py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/10">
              Apply for {loanType} Loan
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Calculator;