'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { useState } from 'react'

export default function Testimonials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const testimonials = [
    {
      quote: "Morrison & Associates provided exceptional guidance through our $2.3B acquisition. Their strategic foresight and meticulous attention to regulatory complexities were instrumental in achieving a seamless transaction with no post-closing disputes.",
      name: "Katherine Pemberton",
      role: "Chief Executive Officer, Vanguard Industries",
      image: "/images/testimonial-client-testimonials-0-1766162791851.jpg",
      rating: 5
    },
    {
      quote: "The team's expertise in securities law proved invaluable during our IPO process. They navigated SEC requirements with precision and delivered strategic counsel that exceeded our expectations at every stage.",
      name: "Michael Chen",
      role: "General Counsel, TechCore Solutions",
      image: "/images/testimonial-client-testimonials-0-1766162792753.jpg",
      rating: 5
    },
    {
      quote: "Outstanding counsel on our cross-border merger. Morrison & Associates demonstrated sophisticated understanding of international corporate law and delivered results that protected our interests while maintaining aggressive timelines.",
      name: "Sarah Morrison",
      role: "CFO, Global Capital Partners",
      image: "/images/testimonial-client-testimonials-0-1766162793496.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-gray-50 to-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Client Success</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-500 mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent-500 text-accent-500 transition-transform duration-300"
                      style={{
                        transform: hoveredCard === index ? `scale(1.2) rotate(${i * 12}deg)` : 'scale(1) rotate(0deg)',
                        transitionDelay: `${i * 30}ms`
                      }}
                    />
                  ))}
                </div>

                <svg className="w-10 h-10 text-primary-500/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-secondary-500 text-base lg:text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary-500/20 transition-all duration-300 group-hover:ring-4 group-hover:ring-accent-500/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-500 text-lg mb-1 transition-colors duration-300 group-hover:text-accent-500">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-secondary-500/80">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-2xl transform origin-left transition-transform duration-500"
                style={{
                  transform: hoveredCard === index ? 'scaleX(1)' : 'scaleX(0)'
                }}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary-500/80 text-sm italic">
            Results achieved in prior matters are not indicative of future outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}