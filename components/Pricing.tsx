'use client';

import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Pricing() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    'Priority access to senior partner consultations',
    'Comprehensive initial case assessment and strategy session',
    'Exclusive insights report on current M&A market trends',
    'Waived initial consultation fee (valued at $500)',
    'Direct access to our transaction precedent library'
  ];

  return (
    <section id="pricing" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-500 tracking-wide uppercase">Limited Founding Member Access</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 leading-tight">
            Reserve Your Strategic Advantage
          </h2>
          <p className="text-lg md:text-xl text-secondary-500 leading-relaxed">
            Secure priority access to our distinguished legal counsel with an exclusive pre-engagement reservation
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-3xl opacity-75 blur group-hover:opacity-100 transition duration-500"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-br from-accent-500 to-amber-600 text-white px-6 py-3 rounded-bl-3xl font-bold text-sm tracking-wide shadow-lg">
                FOUNDING MEMBER
              </div>

              <div className="p-8 md:p-12">
                {/* Price */}
                <div className="mb-8 pt-8">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-6xl md:text-7xl font-bold text-primary-500">$29</span>
                    <span className="text-2xl text-secondary-500 font-medium">one-time</span>
                  </div>
                  <p className="text-secondary-500 text-lg">
                    Reservation fee credited toward initial engagement
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 group/item"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <Check className="w-4 h-4 text-white stroke-[3]" />
                      </div>
                      <span className="text-secondary-500 leading-relaxed text-base md:text-lg">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://buy.stripe.com/prod_TJtceEOGnyYvh1"
                  className="block w-full"
                >
                  <button className="w-full bg-gradient-to-r from-primary-500 to-[#2A5080] hover:from-primary-600 hover:to-[#345A90] text-white font-bold text-lg py-5 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 group">
                    <span>Reserve Your Priority Access</span>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>
                </a>

                {/* Urgency Text */}
                <div className="mt-6 text-center">
                  <p className="text-secondary-500 text-sm">
                    <span className="font-semibold text-primary-500">47 executives</span> have already reserved their priority access
                  </p>
                  <p className="text-accent-500 font-semibold text-sm mt-2">
                    Limited to 100 founding members
                  </p>
                </div>
              </div>

              {/* Bottom Accent Bar */}
              <div className="h-2 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 text-center space-y-3">
            <p className="text-sm text-secondary-500/70 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Secure payment processing through Stripe
            </p>
            <p className="text-sm text-secondary-500/70">
              100% satisfaction guarantee • No recurring charges
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}