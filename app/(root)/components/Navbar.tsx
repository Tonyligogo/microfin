'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow fixed left-0 md:left-4 right-0 md:right-4 z-50 top-0 md:top-4 py-2 md:py-4 md:rounded-xl">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className='text-primary text-4xl font-bold'>Amokahi</h1>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="tel:+254724134495"
              className="block bg-secondary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 "
            >
              Call Us: +254 724 134 495
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:ring-2 focus:ring-secondary p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto shadow-lg z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="tel:+254724134495"
              className="bg-secondary px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 "
            >
               Call Us: +254 724 134 495
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar