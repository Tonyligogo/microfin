import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, MessageCircle } from 'lucide-react'

const Footer = () => {
  const whatsappNumber = "+254725116023";
  const whatsappMessage = encodeURIComponent("Hello Amokahi Enterprises, I would like to inquire about a loan.");

  return (
    <footer className="bg-[#062d3a] px-4 py-16 md:p-24 text-white selection:bg-[#42cdf5]/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <h2 className='text-white text-4xl font-bold tracking-tighter'>
              Amokahi<span className="text-[#42cdf5]">.</span>
            </h2>
            <p className="my-6 leading-relaxed text-cyan-100/60 font-light text-sm">
              Making lending easy and accessible to everyone in Kenya. From business scale-ups to emergency bridges, we move at the speed of your life.
            </p>
            
            <div className="flex items-center space-x-3">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mr-2">Follow us:</p>
              <Link href="#" className="size-10 rounded-xl grid place-content-center bg-white/5 hover:bg-[#42cdf5] text-white hover:text-[#062d3a] transition-all duration-300 border border-white/10">
                <Facebook className="size-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" className="size-10 rounded-xl grid place-content-center bg-white/5 hover:bg-[#25D366] text-white transition-all duration-300 border border-white/10">
                <MessageCircle className="size-5" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="#" className="size-10 rounded-xl grid place-content-center bg-white/5 hover:bg-[#42cdf5] text-white hover:text-[#062d3a] transition-all duration-300 border border-white/10">
                <Instagram className="size-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Dynamic Product Links */}
          <div className="lg:col-span-1 md:pl-10">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-[#42cdf5]">Our Loans</h3>
            <ul className="space-y-4">
              {['Logbook Loans', 'Personal Loans', 'Business Loans', 'Micro Loans', 'Emergency Loans'].map((item) => (
                <li key={item}>
                  <Link href="#loans" className="text-cyan-100/60 hover:text-[#42cdf5] text-sm transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1 md:pl-10">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-[#42cdf5]">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Process', 'Contact', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-cyan-100/60 hover:text-[#42cdf5] text-sm transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-[#42cdf5]">Find Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#42cdf5]/50 transition-colors">
                  <MapPin className="size-5 text-[#42cdf5]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Head Office</p>
                  <p className="text-cyan-100/50 text-xs mt-1">Umoja, Nairobi</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#42cdf5]/50 transition-colors">
                  <Phone className="size-5 text-[#42cdf5]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Call or Text</p>
                  <Link href="tel:+254725116023" className="text-cyan-100/50 text-xs mt-1 hover:text-[#42cdf5] transition-colors">
                    +254725116023
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 border-dashed mt-20 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm font-medium">© 2026 Amokahi Enterprises. All Rights Reserved.</p>
              <p className='text-white/30 text-[10px] mt-2 max-w-xl uppercase tracking-wider leading-relaxed'>
                Regulated by the Central Bank of Kenya (CBK) guidelines for Non-Deposit Taking Microfinance Institutions.
              </p>
            </div>
            
            <div className="flex gap-6">
               <Link href="#" className="text-[10px] uppercase font-bold tracking-widest text-white/20 hover:text-[#42cdf5]">Terms</Link>
               <Link href="#" className="text-[10px] uppercase font-bold tracking-widest text-white/20 hover:text-[#42cdf5]">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;