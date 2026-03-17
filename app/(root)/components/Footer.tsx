import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary px-4 py-16 md:p-16 text-white">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <h1 className='text-white text-4xl font-bold'>Amokahi</h1>
            <p className="my-6 leading-relaxed">
              We are your go-to source for all your borrowing needs, whether it&apos;s a personal loan, car loan, mortgage, or anything in between. Our mission is to make lending easy and accessible to everyone, regardless of their financial situation.
            </p>
            
            <div className="flex items-center space-x-2">
                <p>Follow us:</p>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Facebook className="size-4" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Linkedin className="size-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="size-9 rounded-full grid place-content-center bg-white text-primary">
                <Instagram className="size-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1 md:mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white">
                  Features Overview
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Member Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Financial Reporting
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Payment Integration
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-1 md:mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 md:mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            
            <div className="mb-4">
              <div className="flex items-start space-x-3 mb-2">
                <MapPin className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <p>Nile Road Kanu Office</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center space-x-3 mb-1">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <div>
                  <Link href="tel:+254724134495">
                    +254 724 134 495
                  </Link>
                </div>
              </div>
             
            </div>

            {/* Email */}
            {/* <div className="mb-4">
              <div className="flex items-center space-x-3 mb-1">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <div>
                  <Link href="mailto:thomasodhiambo800@gmail.com" className="hover:text-blue-400 transition-colors duration-200">
                    thomasodhiambo800@gmail.com
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-gray-400 border-dashed mt-16">
        <div className="max-w-7xl mt-16">
          <div className="text-center">
            <p>© 2026 Amokahi Enterprises. All Rights Reserved.</p>
            <p className='text-white/50'>Regulated by the Central Bank of Kenya (CBK) guidelines for Non-Deposit Taking Amokahiance Institutions.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer