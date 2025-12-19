'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#practice-areas', label: 'Practice Areas' },
    { href: '#about', label: 'About' },
    { href: '#insights', label: 'Insights' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="flex flex-col">
              <span
                className={`text-2xl lg:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-primary-500' : 'text-white'
                }`}
              >
                Morrison
              </span>
              <span
                className={`text-xs lg:text-sm font-light tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-secondary-500' : 'text-white/90'
                }`}
              >
                & Associates
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 xl:px-5 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-md relative group ${
                  isScrolled
                    ? 'text-secondary-500 hover:text-primary-500'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 transition-all duration-300 transform origin-left scale-x-0 group-hover:scale-x-100 ${
                    isScrolled ? 'bg-primary-500' : 'bg-white'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`inline-flex items-center px-6 xl:px-8 py-3 text-sm xl:text-base font-semibold transition-all duration-300 rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                isScrolled
                  ? 'bg-primary-500 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-500 hover:bg-gray-50'
              }`}
            >
              Schedule a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled
                ? 'text-secondary-500 hover:text-primary-500 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-medium text-secondary-500 hover:text-primary-500 hover:bg-gray-50 rounded-md transition-all duration-300 transform hover:translate-x-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-6 py-3 text-base font-semibold text-center text-white bg-primary-500 hover:bg-primary-600 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  )
}