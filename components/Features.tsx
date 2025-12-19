'use client'

import { Scale, TrendingUp, Award, Target, Lock, Lightbulb } from 'lucide-react'
import { useState } from 'react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features: Feature[] = [
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Decades of Combined Experience',
      description: 'High-stakes corporate transactions demand seasoned counsel. Our attorneys bring extensive experience navigating complex deals and regulatory frameworks.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Deep M&A & Securities Expertise',
      description: 'Specialized knowledge in mergers and acquisitions, securities law, and regulatory compliance ensures comprehensive guidance through sophisticated transactions.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: 'Our results speak for themselves. We deliver successful deal closures and favorable outcomes in the most challenging legal environments.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Business Alignment',
      description: 'Legal solutions crafted to advance your business objectives. We think strategically, aligning counsel with your broader corporate vision and market position.',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Confidential, Personalized Service',
      description: 'Discretion and personalized attention for every corporate client. Your matters receive dedicated focus with the utmost confidentiality and professionalism.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Cutting-Edge Market Intelligence',
      description: 'Thought leadership and proactive knowledge of evolving market trends ensure your legal strategy remains ahead of regulatory developments and industry shifts.',
    },
  ]

  return (
    <section id="features" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1E3A5F 0px, #1E3A5F 1px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(90deg, #1E3A5F 0px, #1E3A5F 1px, transparent 1px, transparent 60px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-500/5 border border-primary-500/10 rounded-full">
              <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary-500 uppercase tracking-wider">Our Distinction</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Choose{' '}
            <span className="text-primary-500 relative inline-block">
              Morrison & Associates
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-500/30 rounded-full" />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic legal counsel backed by unparalleled expertise, unwavering commitment, and a proven record of excellence in complex corporate matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`
                relative h-full p-8 bg-white rounded-2xl border-2 transition-all duration-500 ease-out
                ${hoveredIndex === index 
                  ? 'border-primary-500 shadow-2xl shadow-primary-500/10 -translate-y-2' 
                  : 'border-gray-100 shadow-lg shadow-gray-200/50'
                }
              `}>
                {/* Gradient Overlay on Hover */}
                <div className={`
                  absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 
                  opacity-0 transition-opacity duration-500
                  ${hoveredIndex === index ? 'opacity-100' : ''}
                `} />

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`
                    inline-flex p-4 rounded-xl transition-all duration-500
                    ${hoveredIndex === index 
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30 scale-110' 
                      : 'bg-primary-500/10 text-primary-500'
                    }
                  `}>
                    {feature.icon}
                  </div>
                  
                  {/* Decorative Corner */}
                  <div className={`
                    absolute -top-2 -right-2 w-20 h-20 bg-accent-500/5 rounded-full blur-xl
                    transition-opacity duration-500
                    ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
                  `} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Border Accent */}
                <div className={`
                  absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full
                  transition-all duration-500 origin-left
                  ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}
                `} />
              </div>

              {/* External Glow Effect */}
              <div className={`
                absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl
                transition-opacity duration-500 -z-10
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
              `} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-2xl shadow-primary-500/20">
            <div className="text-left">
              <p className="text-white font-semibold text-lg mb-1">Ready to discuss your matter?</p>
              <p className="text-primary-100 text-sm">Schedule a confidential consultation with our team.</p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 px-8 py-3 bg-white text-primary-500 font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}