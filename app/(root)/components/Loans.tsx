import React from 'react';
import Link from 'next/link';
import { Users, PiggyBank, Smartphone, ArrowUpRight, Car, CheckCircle2, Zap } from 'lucide-react';

const loans = [
  {
    icon: PiggyBank,
    title: "Business Loans",
    requirements: ["Cash Flow Analysis", "Business Certificate", "M-Pesa + Bank Statements", "Photos of Business"],
    href: "tel:+254725116023",
    tag: "Enterprise"
  },
  {
    icon: Users,
    title: "Personal Loans",
    requirements: ["CRB Listing Status", "Original ID", "M-Pesa Statement", "Personal Photos"],
    href: "tel:+254725116023",
    tag: "Individual"
  },
  {
    icon: Car,
    title: "Logbook Loans",
    requirements: ["Logbook", "Insurance Cover", "Personal Effects"],
    href: "tel:+254725116023",
    tag: "Asset-Backed"
  },
  {
    icon: Smartphone,
    title: "Micro Loans",
    requirements: ["CRB Listing Status", "M-Pesa History"],
    href: "tel:+254725116023",
    tag: "Traders"
  },
  {
    icon: Zap,
    title: "Emergency Loans",
    requirements: ["CRB Listing Status"],
    href: "tel:+254725116023",
    tag: "Urgent"
  },
];

const Loans: React.FC = () => {
  return (
    <section className="relative bg-white text-[#0a4a5e] py-24 px-4 md:px-12 lg:px-24 overflow-hidden selection:bg-[#42cdf5]/30">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="bg-[#0a90b0] text-white text-sm font-bold tracking-widest uppercase mb-4 block w-fit py-1.5 px-5 rounded-full shadow-sm">
              Our Offerings
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]">
              Tailored solutions for <span className="italic font-light text-[#42cdf5]">every requirement.</span>
            </h3>
          </div>
          <p className="max-w-sm text-lg font-light leading-relaxed text-[#0a4a5e]/70">
            We process applications as soon as requirements are met, ensuring you get capital at the speed of your hustle.
          </p>
        </div>

        {/* Loans Grid - Adjusted to 3 columns on desktop to fit 5 items nicely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loans.map((loan, index) => {
            const IconComponent = loan.icon;
            return (
              <Link
                key={index}
                href={loan.href}
                className="group relative p-10 rounded-[2.5rem] bg-[#0a4a5e] border border-white/5 hover:border-[#42cdf5]/40 transition-all duration-500 flex flex-col justify-between min-h-[420px] overflow-hidden shadow-xl"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-[#42cdf5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <div className="bg-[#42cdf5] size-14 rounded-2xl grid place-content-center shadow-[0_0_20px_rgba(66,205,245,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="size-7 text-[#062d3a]" />
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-[#42cdf5] transition-colors" />
                  </div>

                  <h4 className="text-white text-3xl font-bold mb-8 tracking-tight">
                    {loan.title}
                  </h4>
                  
                  {/* Requirements List */}
                  <div className="space-y-4">
                    <p className="text-[#42cdf5] text-[10px] font-black uppercase tracking-widest mb-4">Mandatory Requirements:</p>
                    {loan.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-[#42cdf5] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-sm font-light leading-tight">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-10 pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-[#42cdf5] uppercase">
                    {loan.tag}
                  </span>
                  <span className="text-sm text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all font-bold">
                    Contact Us Now
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Loans;