import React from 'react';
import { Star } from 'lucide-react';

// Custom Placeholder Avatar Component
const InitialAvatar = ({ name }: { name: string}) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <div className="size-10 rounded-full flex items-center justify-center font-black text-xs bg-[#42cdf5] text-[#062d3a]">
      {initials}
    </div>
  );
};

const mainTestimonial = {
  quote: "Amokahi transformed my biashara! I applied in the morning for stock capital, and the cash was in my M-Pesa before my first customer arrived. Simply incredible.",
  name: "Michael R.",
  title: "Shop Owner, Kisumu"
};

const otherTestimonials = [
  {
    quote: "As someone who hates bank queues, I was amazed by how friendly the app is. No paperwork, just a transparent process on my phone.",
    name: "Sarah L.",
    title: "Trader, Gikomba"
  },
  {
    quote: "I was stuck with an unexpected home repair bill, but this tool helped me bridge the gap quickly. Manageable weekly terms gave me peace.",
    name: "David K.",
    title: "Nurse, Nairobi"
  },
  {
    quote: "Needed capital for my agribusiness hustle. The automated collateral appraisal made it fast and fair. Highly recommend to all entrepreneurs.",
    name: "Emily W.",
    title: "Agribusiness"
  },
  {
    quote: "Bridged my seasonal stock gap effortlessly. Their transparent ROI calculation made financial decisions simple for my hardware business.",
    name: "James T.",
    title: "Hardware Owner"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-12 lg:px-24 selection:bg-[#42cdf5]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Matches the style of previous sections */}
        <div className="text-center mb-16">
          <span className="bg-[#0a90b0] text-white w-fit py-1.5 px-5 rounded-full mx-auto text-sm font-bold tracking-widest uppercase mb-4 block shadow-sm">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-6xl font-medium text-[#0a4a5e] tracking-tight">
            Kenyans trust <span className="italic font-light text-[#42cdf5]">Amokahi Enterprises</span>
          </h2>
        </div>

        {/* --- Testimonials Grid Structure --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Feature Testimonial (Left Column, Deep Cyan Card) */}
          <div className="lg:col-span-5 h-full relative group p-10 lg:p-14 rounded-[3rem] bg-[#0a4a5e] overflow-hidden flex flex-col justify-between min-h-[550px] border border-white/5 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#42cdf5]/10 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start justify-center flex-1">
               <div className="flex items-center gap-1 mb-6">
                 {[...Array(5)].map((_, i) => <Star key={i} className="size-5 text-[#42cdf5]" fill="currentColor" stroke="none" />)}
                 <span className="text-sm text-white/40 font-black ml-2 uppercase tracking-tighter">Verified Review</span>
               </div>
               <p className="text-white text-3xl md:text-4xl font-medium leading-[1.2] tracking-tight mb-12">
                 {`"${mainTestimonial.quote}"`}
               </p>
            </div>

            <div className="relative z-10 border-t border-white/10 pt-8 flex items-center gap-5">
              <InitialAvatar name={mainTestimonial.name}/>
              <div>
                <h4 className="text-white text-xl font-bold tracking-tight">{mainTestimonial.name}</h4>
                <p className="text-[#42cdf5] text-xs font-black uppercase tracking-widest">{mainTestimonial.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column Grid (2x2 Glassmorphism Cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherTestimonials.map((t, index) => (
              <div 
                key={index} 
                className="group p-10 rounded-[2.5rem] bg-[#f8fafc] border border-slate-200 hover:border-[#42cdf5]/30 hover:bg-white hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="flex-1 mb-8">
                    <div className="flex items-center gap-1 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 text-[#0a90b0]" fill="currentColor" stroke="none" />)}
                    </div>
                    <p className="text-[#0a4a5e] text-lg font-light leading-relaxed font-sans group-hover:text-black transition-colors">
                        {`"${t.quote}"`}
                    </p>
                </div>
                
                <div className="border-t border-slate-200 group-hover:border-[#42cdf5]/20 pt-6 mt-6 flex items-center gap-4">
                    <InitialAvatar name={t.name}/>
                    <div>
                        <h4 className="text-[#0a4a5e] text-lg font-bold tracking-tight">{t.name}</h4>
                        <p className="text-[#0a90b0] text-[10px] font-black uppercase tracking-widest">{t.title}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;