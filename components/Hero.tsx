'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Scale } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-main-hero-1766162800595.png"
          alt="Morrison & Associates - Strategic Legal Counsel"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/95 via-primary-500/90 to-secondary-500/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-5xl">
          {/* Logo/Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
              <Scale className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-white/90 text-sm font-semibold tracking-wider uppercase">Morrison & Associates</h2>
              <p className="text-white/60 text-xs">Established Legal Excellence</p>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight"
          >
            Strategic legal counsel for{' '}
            <span className="text-accent-500 relative inline-block">
              complex corporate
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-1 left-0 right-0 h-1 bg-accent-500/30 origin-left"
              />
            </span>{' '}
            transactions
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 max-w-4xl leading-relaxed font-light"
          >
            Delivering sophisticated M&A and securities expertise with unwavering commitment to client success. 
            Our strategic approach transforms complex legal challenges into competitive advantages.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6 sm:gap-12 mb-10 sm:mb-12 pb-8 border-b border-white/20"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">$15B+</div>
              <div className="text-sm text-white/70">Transaction Value</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">500+</div>
              <div className="text-sm text-white/70">Deals Closed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">98%</div>
              <div className="text-sm text-white/70">Client Retention</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <Link
              href="#pricing"
              className="group relative px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent-600 hover:shadow-2xl hover:shadow-accent-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="#features"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center gap-2 text-white/60 text-sm"
          >
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-accent-500 border-2 border-white/20" />
              <div className="w-8 h-8 rounded-full bg-accent-600 border-2 border-white/20" />
              <div className="w-8 h-8 rounded-full bg-accent-700 border-2 border-white/20" />
            </div>
            <span>Trusted by Fortune 500 companies and leading enterprises</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}