import React from 'react';
import Link from 'next/link';
import { Users, PiggyBank, BarChart3, Smartphone, ArrowUpRight } from 'lucide-react';

const loans = [
  {
    icon: Users,
    title: "Personal Loans",
    description: "Life happens. Whether it's school fees or home repairs, get the boost you need with manageable terms.",
    href: "#",
    tag: "Individual"
  },
  {
    icon: PiggyBank,
    title: "Business Loans",
    description: "Fuel your hustle. Scale your inventory or upgrade your equipment with capital designed for growth.",
    href: "#",
    tag: "Enterprise"
  },
  {
    icon: BarChart3,
    title: "Emergency Loans",
    description: "Fast-track funding for life's unexpected moments. Approval in hours, because every second matters.",
    href: "#",
    tag: "Urgent"
  },
  {
    icon: Smartphone,
    title: "Micro Loans",
    description: "Small amounts, big impact. Accessible credit for traders looking to bridge a short-term gap.",
    href: "#",
    tag: "Traders"
  },
];

const Loans: React.FC = () => {
  return (
    <section className="relative text-[#0c3a30] py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="bg-[#0c3a30] text-[#d9f99d] text-sm font-bold tracking-widest uppercase mb-4 block w-fit py-1 px-4 rounded-xl">
              Our Offerings
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              All your lending needs in a <span className="italic font-light ">single platform.</span>
            </h3>
          </div>
          <p className="max-w-sm text-lg font-light leading-relaxed">
            Accessible credit with transparent terms, helping you bridge the gap between where you are and where you want to be.
          </p>
        </div>

        {/* Loans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loans.map((loan, index) => {
            const IconComponent = loan.icon;
            return (
              <Link
                key={index}
                href={loan.href}
                className="group relative p-8 rounded-[2rem] bg-[#0c3a30] border border-white/5 hover:border-emerald-400/30 transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-[#d9f99d] size-12 rounded-2xl grid place-content-center shadow-[0_0_20px_rgba(217,249,157,0.2)] group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="size-6 text-[#0c3a30]" />
                    </div>
                    <ArrowUpRight className="text-white/20 group-hover:text-[#d9f99d] transition-colors" />
                  </div>

                  <h4 className="text-white text-xl font-bold mb-3 tracking-tight">
                    {loan.title}
                  </h4>
                  <p className="text-emerald-100/70 text-sm leading-relaxed font-light">
                    {loan.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest text-emerald-400/60 uppercase">
                    {loan.tag}
                  </span>
                  <span className="text-xs text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all font-medium">
                    Apply Now
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