'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Scale } from 'lucide-react'
import { useState } from 'react'

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/consultation-cta-background-1766162824426.png"
          alt="Legal consultation background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/95 via-primary-500/90 to-[#B45309]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(180,83,9,0.3),transparent_50%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-8 border border-white/20">
            <Scale className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to Navigate Your
            <span className="block mt-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Complex Transaction?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Schedule a confidential consultation with our M&A and securities experts. 
            We'll assess your strategic objectives and provide actionable counsel tailored to your transaction.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#pricing"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-primary-500 bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-white/20 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                Schedule a Consultation
                <ArrowRight 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? 'translate-x-1' : ''
                  }`} 
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
            >
              View Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/90">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">$50B+</div>
                <div className="text-sm font-light text-white/70">Transaction Value</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm font-light text-white/70">Client Support</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm font-light text-white/70">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B45309] to-transparent opacity-50" />
    </section>
  )
}