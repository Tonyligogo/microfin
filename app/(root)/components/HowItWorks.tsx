'use client'; 

import React, { useState } from 'react';
import { BarChart3, PiggyBank, Smartphone, CheckCircle2, ClipboardCheck, Briefcase, Car, ShieldAlert, Zap } from 'lucide-react';

const loanTypes = [
  { 
    id: 'business', 
    label: 'Business Loans', 
    icon: Briefcase,
    requirements: ["Cash Flow Analysis", "Business Certificate", "M-Pesa Statement", "Bank Statement", "Business Photo"] 
  },
  { 
    id: 'personal', 
    label: 'Personal Loans', 
    icon: Smartphone,
    requirements: ["CRB Listing Status", "Original ID", "M-Pesa Statement", "Recent Photos"] 
  },
  { 
    id: 'logbook', 
    label: 'Logbook Loans', 
    icon: Car,
    requirements: ["Original Logbook", "Comprehensive Insurance", "Personal Effects Assessment"] 
  },
  { 
    id: 'emergency', 
    label: 'Emergency / Micro', 
    icon: Zap,
    requirements: ["CRB Listing Status", "Immediate Processing"] 
  }
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('business');

  const steps = [
    {
      icon: ClipboardCheck,
      title: "Meet Requirements",
      // Dynamic description based on the active tab
      description: loanTypes.find(l => l.id === activeTab)?.requirements.join(", ") + ".",
      step: "01"
    },
    {
      icon: PiggyBank,
      title: "Quick Approval",
      description: "Our team reviews your specific documentation and provides a decision in minutes.",
      step: "02"
    },
    {
      icon: BarChart3,
      title: "Receive Funds",
      description: "Once approved, money is sent directly to your M-Pesa or bank account.",
      step: "03"
    },
    {
      icon: CheckCircle2,
      title: "Flexible Repayments",
      description: "Pay back in weekly or monthly installments that fit your specific hustle.",
      step: "04"
    },
  ];

  return (
    <section className="relative bg-[#062d3a] px-4 py-24 md:px-12 lg:px-24 overflow-hidden selection:bg-[#42cdf5]/30">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#42cdf5] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="text-[#42cdf5] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              The Process
            </span>
            <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              From Application to <br />
              <span className="italic font-light text-[#42cdf5]">Approval in Minutes.</span>
            </h3>
          </div>
          
          {/* Loan Type Switcher */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
            {loanTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === type.id 
                  ? 'bg-[#42cdf5] text-[#062d3a] shadow-lg shadow-cyan-500/20' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <type.icon className="size-4" />
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#42cdf5]/30 to-transparent" />

          {steps.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="group relative flex flex-col items-start">
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className={`size-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10 ${
                    index === 0 ? 'bg-white shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'bg-[#0a90b0] text-white shadow-lg'
                  } group-hover:scale-110 group-hover:rotate-3`}>
                    <IconComponent className={`size-8 ${index === 0 ? 'text-[#0a90b0]' : 'text-white'}`} />
                  </div>
                  
                  {/* Step Number Badge */}
                  <span className="absolute -top-3 -right-3 bg-[#42cdf5] text-[#062d3a] text-[10px] font-bold px-2 py-1 rounded-md z-20 shadow-md">
                    {item.step}
                  </span>
                </div>

                {/* Text Content */}
                <div className="space-y-3 min-h-[120px]">
                  <h4 className="text-white text-xl font-bold tracking-tight group-hover:text-[#42cdf5] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-cyan-100/60 text-sm leading-relaxed font-light pr-4 transition-all">
                    {item.description}
                  </p>
                </div>

                {/* Mobile Accent */}
                <div className="mt-6 w-8 h-[2px] bg-[#42cdf5]/30 rounded-full lg:hidden" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;