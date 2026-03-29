import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, Award, ShieldCheck, Zap } from 'lucide-react';
import Amokahi from '@/public/Amokahi.jpeg';

const About: React.FC = () => {
  return (
    <section className="relative bg-white py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- Left Side: Content --- */}
          <div className="lg:col-span-7 relative z-10">
            <span className="bg-[#0c3a30] text-[#d9f99d] text-sm font-bold tracking-widest uppercase mb-4 block w-fit py-1 px-4 rounded-xl">
              About Amokahi Enterprises
            </span>

            <h2 className="text-4xl md:text-6xl font-medium text-[#0c3a30] leading-[1.1] mb-8">
              Empowering Kenyans with <br />
              <span className="italic font-light text-emerald-600/80">fair and fast</span> micro-loans.
            </h2>

            <p className="text-[#0c3a30]/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10">
              As a founder-led institution, we are committed to democratizing credit access. 
              We bridge the gap for local entrepreneurs with transparent capital solutions 
              designed to move at the speed of your hustle.
            </p>

            {/* Feature Highlights (Mini Stats) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10 border-t border-[#0c3a30]/10">
              <div className="flex items-start gap-3">
                <Zap className="size-5 text-emerald-600 mt-1" />
                <div>
                  <p className="text-xl font-bold text-[#0c3a30]">5 Mins</p>
                  <p className="text-xs text-[#0c3a30]/50 uppercase font-bold tracking-wider">Fast Approval</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="size-5 text-emerald-600 mt-1" />
                <div>
                  <p className="text-xl font-bold text-[#0c3a30]">Transparent</p>
                  <p className="text-xs text-[#0c3a30]/50 uppercase font-bold tracking-wider">No Hidden Fees</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="size-5 text-emerald-600 mt-1" />
                <div>
                  <p className="text-xl font-bold text-[#0c3a30]">Collateral</p>
                  <p className="text-xs text-[#0c3a30]/50 uppercase font-bold tracking-wider">Asset-Backed</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Side: Founder Image --- */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden aspect-[4/5] border-[12px] border-white shadow-2xl group">
              <Image 
                src={Amokahi}
                alt="Founder of Amokahi Enterprises" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Floating ID/Verified Badge */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 border border-emerald-50">
                <div className="size-10 rounded-full bg-[#0c3a30] flex items-center justify-center">
                   <ArrowUpRight className="size-5 text-[#d9f99d]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0c3a30] uppercase tracking-tighter">Our Founder</p>
                  <p className="text-[10px] text-[#0c3a30]/50">Amokahi Enterprises</p>
                </div>
              </div>
            </div>

            {/* Decorative Background Grid behind image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 opacity-20 pointer-events-none">
                <div className="w-full h-full border-t border-r border-[#0c3a30] rounded-tr-[3rem]" />
            </div>
          </div>
        </div>

        {/* --- Partners Strip --- */}
        <div className="mt-24 pt-12 border-t border-[#0c3a30]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0c3a30]/40">Trusted Partners</span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 grayscale contrast-125">
             <span className="text-2xl font-black tracking-tighter">SAFARICOM</span>
             <span className="text-2xl font-black tracking-tighter">ABSA</span>
             <span className="text-2xl font-black tracking-tighter">EQUITY</span>
             <span className="text-2xl font-black tracking-tighter font-serif">KCB</span>
             <span className="text-2xl font-black tracking-tighter italic underline decoration-emerald-500 underline-offset-4">M-KOPA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;