'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Linkedin, Mail, ChevronRight, Scale, Award, Briefcase } from 'lucide-react'

const teamMembers = [
  {
    name: 'Robert Morrison',
    title: 'Managing Partner',
    specialty: 'Mergers & Acquisitions',
    image: '/images/hero-main-hero-1766162800595.png',
    bio: 'Over 25 years leading complex M&A transactions exceeding $50B in aggregate value. Former chair of the ABA Business Law Section.',
    credentials: ['Harvard Law, J.D.', 'Chambers Band 1', 'Legal 500 Hall of Fame'],
    email: 'rmorrison@morrisonassociates.com',
    linkedin: '#'
  },
  {
    name: 'Patricia Chen',
    title: 'Senior Partner',
    specialty: 'Securities & Capital Markets',
    image: '/images/practice-areas-feature-1766162800949.png',
    bio: 'Recognized authority on public offerings and securities compliance. Advised on 200+ IPOs and secondary offerings totaling $30B+.',
    credentials: ['Yale Law, J.D.', 'Best Lawyers in America', 'NACD Board Leadership Fellow'],
    email: 'pchen@morrisonassociates.com',
    linkedin: '#'
  },
  {
    name: 'Michael Thornton',
    title: 'Senior Partner',
    specialty: 'Corporate Governance',
    image: '/images/practice-areas-feature-1766162804219.png',
    bio: 'Strategic counsel to Fortune 500 boards on governance, fiduciary duties, and stakeholder engagement. Published author on corporate law.',
    credentials: ['Stanford Law, J.D.', 'Super Lawyers Top 100', 'ACC Value Champion'],
    email: 'mthornton@morrisonassociates.com',
    linkedin: '#'
  },
  {
    name: 'Sarah Williams',
    title: 'Partner',
    specialty: 'Private Equity',
    image: '/images/practice-areas-feature-1766162814293.png',
    bio: 'Extensive experience structuring complex PE transactions, fund formations, and portfolio company acquisitions across multiple sectors.',
    credentials: ['Columbia Law, J.D.', 'Rising Star Award', 'IFLR1000 Recommended'],
    email: 'swilliams@morrisonassociates.com',
    linkedin: '#'
  },
  {
    name: 'David Park',
    title: 'Partner',
    specialty: 'Cross-Border Transactions',
    image: '/images/firm-overview-background-1766162812768.png',
    bio: 'Specializes in international M&A and joint ventures with particular focus on Asia-Pacific markets. Fluent in Mandarin and Korean.',
    credentials: ['NYU Law, J.D., LL.M.', 'BTI Client Service All-Star', 'Who\'s Who Legal'],
    email: 'dpark@morrisonassociates.com',
    linkedin: '#'
  },
  {
    name: 'Jennifer Martinez',
    title: 'Partner',
    specialty: 'Strategic Transactions',
    image: '/images/insights-blog-feature-1766162813425.png',
    bio: 'Guides clients through transformative strategic acquisitions, divestitures, and corporate restructurings with precision and foresight.',
    credentials: ['UChicago Law, J.D.', 'M&A Advisor Emerging Leader', 'Benchmark Litigation Star'],
    email: 'jmartinez@morrisonassociates.com',
    linkedin: '#'
  }
]

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  return (
    <section id="team" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1E3A5F 0px, #1E3A5F 1px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(90deg, #1E3A5F 0px, #1E3A5F 1px, transparent 1px, transparent 60px)`
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent-500" />
            <span className="text-accent-500 font-semibold tracking-wider uppercase text-sm">Leadership</span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-500 mb-6 tracking-tight">
            Distinguished
            <span className="block text-secondary-500 mt-2">Legal Minds</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our partners bring decades of experience counseling Fortune 500 companies, private equity firms, and emerging enterprises on their most critical transactions and strategic initiatives.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500 via-primary-500/40 to-transparent opacity-60" />
                
                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 font-medium mb-1">{member.title}</p>
                      <p className="text-sm text-white/80 flex items-center gap-2">
                        <Scale className="w-4 h-4" />
                        {member.specialty}
                      </p>
                    </div>
                    <ChevronRight className={`w-6 h-6 transition-transform duration-300 ${selectedMember === index ? 'rotate-90' : ''}`} />
                  </div>
                </div>
              </div>

              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${selectedMember === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 border-t-4 border-accent-500">
                  <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
                  
                  {/* Credentials */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-primary-500 font-semibold mb-3">
                      <Award className="w-5 h-5" />
                      <span>Credentials</span>
                    </div>
                    <ul className="space-y-2">
                      {member.credentials.map((credential, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                          <span>{credential}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Mail className="w-4 h-4" />
                      Contact
                    </a>
                    <a
                      href={member.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-gray-100 text-primary-500 rounded-lg hover:bg-primary-500 hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Closed State Bottom Bar */}
              <div className={`p-6 transition-all duration-500 ${selectedMember === index ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 opacity-100'}`}>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    View Profile
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 p-12 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          <div className="relative max-w-3xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Experience Matters in Complex Transactions
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our team's collective expertise spans thousands of transactions and decades of practice. Let us apply that experience to your most important legal challenges.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-500 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:gap-4 group shadow-lg"
            >
              <span>Schedule a Consultation</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}