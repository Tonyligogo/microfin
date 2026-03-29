import React from 'react';
import { Star } from 'lucide-react'; // Ensure lucide-react is installed

// Custom Placeholder Avatar Component
const InitialAvatar = ({ name }: { name: string}) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  return (
    <div className="size-10 rounded-full flex items-center justify-center font-bold text-lg bg-[#d9f99d]">
      {initials}
    </div>
  );
};

const mainTestimonial = {
  quote: "Amokahi transformed my biashara! I applied in the morning for stock capital, and the cash was in my M-Pesa before my first customer arrived. Simply incredible.",
  name: "Michael R.",
  title: "Shop Owner, Kisumu",
  avatarColor: "bg-[#d9f99d] text-[#0c3a30]"
};

const otherTestimonials = [
  {
    quote: "As someone who hates bank queues, I was amazed by how friendly the app is. No paperwork, just a transparent process on my phone.",
    name: "Sarah L.",
    title: "Trader, Gikomba",
    avatarColor: "bg-emerald-100 text-[#0c3a30]"
  },
  {
    quote: "I was stuck with an unexpected home repair bill, but this tool helped me bridge the gap quickly. Manageable weekly terms gave me peace.",
    name: "David K.",
    title: "Nurse, Nairobi",
    avatarColor: "bg-emerald-100 text-[#0c3a30]"
  },
  {
    quote: "Needed capital for my agribusiness hustle. The automated collateral appraisal made it fast and fair. Highly recommend to all entrepreneurs.",
    name: "Emily W.",
    title: "Agribusiness",
    avatarColor: "bg-emerald-100 text-[#0c3a30]"
  },
  {
    quote: "Bridged my seasonal stock gap effortlessly. Their transparent ROI calculation made financial decisions simple for my hardware business.",
    name: "James T.",
    title: "Hardware Owner",
    avatarColor: "bg-emerald-100 text-[#0c3a30]"
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Optional Header - Matches the style of previous sections */}
        <div className="text-center mb-16">
          <span className="bg-[#0c3a30] text-[#d9f99d] w-fit py-1 px-4 rounded-xl mx-auto text-sm font-bold tracking-widest uppercase mb-4 block">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0c3a30]">
            Kenyans trust Amokahi Enterprises
          </h2>
        </div>

        {/* --- Testimonials Grid Structure --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Feature Testimonial (Left Column, Cols 1-5) */}
          <div className="lg:col-span-5 h-full relative group p-10 lg:p-12 rounded-[2.5rem] bg-[#0c3a30] overflow-hidden flex flex-col justify-end min-h-[500px] border border-emerald-900/20 shadow-2xl">

            <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1">
               <div className="flex items-center gap-1 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} className="size-4 text-[#d9f99d]" fill="currentColor" stroke="none" />)}
                 <span className="text-[10px] text-white/50 font-bold ml-1">5.0</span>
               </div>
               <p className="text-white text-3xl font-medium leading-tight tracking-tight mb-12">
                 {`"${mainTestimonial.quote}"`}
               </p>
            </div>

            <div className="relative z-10 border-t border-white/5 pt-8 mt-8 flex items-center justify-center gap-4">
              <InitialAvatar name={mainTestimonial.name}/>
              <div>
                <h4 className="text-white text-xl font-bold tracking-tight">{mainTestimonial.name}</h4>
                <p className="text-emerald-100/60 text-sm font-medium">{mainTestimonial.title}</p>
              </div>
            </div>
          </div>

          {/* Right Column Grid (2x2 Regular Cards, Cols 6-12) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            {otherTestimonials.map((t, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-[2.5rem] bg-slate-50 backdrop-blur-3xl border border-slate-100 hover:border-slate-200 transition-all flex flex-col justify-between"
              >
                <div className="flex-1 mb-10">
                    <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 text-amber-400" fill="currentColor" stroke="none" />)}
                        <span className="text-[10px] text-[#0c3a30] font-bold ml-1">5.0</span>
                    </div>
                    <p className="text-[#0c3a30] text-lg font-light leading-relaxed font-sans opacity-90 group-hover:opacity-100 transition-opacity">
                        {`"${t.quote}"`}
                    </p>
                </div>
                
                <div className="border-t border-slate-100 pt-6 mt-6 flex items-center gap-4">
                    <InitialAvatar name={t.name}/>
                    <div>
                        <h4 className="text-[#0c3a30] text-lg font-bold tracking-tight">{t.name}</h4>
                        <p className="text-[#0c3a30]/80 text-xs font-medium">{t.title}</p>
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