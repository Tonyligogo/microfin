import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const founders = [
    {
      name: "Founder Name One",
      role: "Managing Director",
      image: "/Amokahi.jpeg" // Replace with your actual path
    },
    {
      name: "Founder Name Two",
      role: "Operations Director",
      image: "/Amokahi.jpeg" // Replace with your actual path
    }
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-12 lg:px-24 selection:bg-[#42cdf5]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content Section */}
        <div className="text-center mb-24">
          <span className="text-[#0a90b0] text-sm font-black uppercase tracking-[0.3em] mb-6 block">
            Our Story
          </span>
          <h2 className="text-4xl md:text-7xl text-[#0a4a5e] font-medium tracking-tighter mb-10 leading-[1.1]">
            Bridging the gap for <br />
            <span className="italic font-light text-[#42cdf5]">Kenyan Hustlers.</span>
          </h2>
          <p className="text-xl text-[#0a4a5e]/70 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            Amokahi Enterprises was founded on the belief that access to credit should be fast, fair, and transparent. We understand the rhythm of the local market and the unique challenges faced by traders and individuals alike.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Regulated & Transparent', 'Fast Documentation', 'Flexible Repayments'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-[#42cdf5]" />
                <span className="text-[#0a4a5e] font-bold text-sm uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Founders Section --- */}
        <div className="pt-24 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-5xl font-medium text-[#0a4a5e] mb-6">
              The <span className="italic font-light text-[#42cdf5]">Founders</span>
            </h3>
            <p className="text-[#0a4a5e]/60 font-light">
              Led by a team of dedicated professionals committed to financial inclusion and ethical lending practices in the heart of Nairobi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="group relative">
                {/* Image Container with Cyan Border Effect */}
                <div className="relative h-[450px] w-full rounded-[2.5rem] overflow-hidden bg-[#062d3a] transition-transform duration-500 group-hover:scale-[1.02] shadow-xl">
                  <Image 
                    src={founder.image} 
                    alt={founder.name} 
                    fill 
                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  
                  {/* Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#062d3a] via-[#062d3a]/60 to-transparent">
                    <h4 className="text-white text-2xl font-bold tracking-tight">{founder.name}</h4>
                    <p className="text-[#42cdf5] text-sm font-black uppercase tracking-widest mt-1">{founder.role}</p>
                  </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-[#42cdf5]/10 rounded-[2.5rem] group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* --- Partners Section --- */}
        <div className="mt-24 pt-12 border-t border-[#42cdf5]/20 flex flex-col md:flex-row items-center justify-between gap-8">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a4a5e]/30">Trusted Partners</span>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
             <span className="text-2xl font-black tracking-tighter text-[#42cdf5]">SAFARICOM</span>
             <span className="text-2xl font-black tracking-tighter text-[#42cdf5]">CO-OPERATIVE BANK</span>
             <span className="text-2xl font-black tracking-tighter text-[#42cdf5]">EQUITY</span>
             <span className="text-2xl font-black tracking-tighter text-[#42cdf5] font-serif">KCB</span>
             <span className="text-2xl font-black tracking-tighter text-[#42cdf5]">SBM BANK</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;