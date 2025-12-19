'use client';

import { Scale, TrendingUp, FileText, Shield, Building2, Globe, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    icon: TrendingUp,
    title: 'Mergers & Acquisitions',
    description: 'Strategic advisory and execution of complex M&A transactions, from due diligence through closing and post-merger integration.',
    features: [
      'Buy-side and sell-side representation',
      'Cross-border transactions',
      'Private equity transactions',
      'Joint ventures and strategic alliances'
    ],
    image: '/images/practice-areas-feature-1766162804219.png'
  },
  {
    icon: FileText,
    title: 'Securities & Capital Markets',
    description: 'Comprehensive counsel on securities offerings, regulatory compliance, and capital markets transactions for public and private companies.',
    features: [
      'IPOs and secondary offerings',
      'PIPE transactions',
      'SEC compliance and reporting',
      'Private placements'
    ],
    image: '/images/practice-areas-feature-1766162800949.png'
  },
  {
    icon: Building2,
    title: 'Corporate Governance',
    description: 'Expert guidance on governance structures, fiduciary duties, and regulatory compliance to ensure best practices and risk mitigation.',
    features: [
      'Board advisory services',
      'Shareholder disputes',
      'Executive compensation',
      'Corporate restructuring'
    ],
    image: '/images/practice-areas-feature-1766162814293.png'
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Proactive compliance strategies and risk assessment for navigating complex regulatory environments across multiple jurisdictions.',
    features: [
      'Regulatory investigations',
      'Compliance program development',
      'Industry-specific regulations',
      'Government relations'
    ],
    image: '/images/insights-blog-feature-1766162813425.png'
  },
  {
    icon: Scale,
    title: 'Commercial Litigation',
    description: 'Aggressive representation in high-stakes commercial disputes, with a focus on efficient resolution and protection of business interests.',
    features: [
      'Contract disputes',
      'Business torts',
      'Arbitration and mediation',
      'Class action defense'
    ],
    image: '/images/careers-feature-1766162831685.png'
  },
  {
    icon: Globe,
    title: 'International Transactions',
    description: 'Sophisticated cross-border transaction support with deep understanding of international regulatory frameworks and cultural nuances.',
    features: [
      'Foreign investment',
      'International joint ventures',
      'Trade compliance',
      'Multi-jurisdictional disputes'
    ],
    image: '/images/firm-overview-background-1766162812768.png'
  }
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/5 rounded-full mb-6">
            <Scale className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-500 tracking-wider uppercase">Practice Areas</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary-500 mb-6 tracking-tight">
            Strategic Legal Excellence
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            Delivering sophisticated counsel across the full spectrum of corporate legal services, from complex transactions to high-stakes litigation.
          </p>
        </div>

        {/* Featured Service Showcase */}
        <div className="mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-2xl shadow-2xl shadow-primary-500/5 overflow-hidden border border-gray-100">
            <div className="relative h-64 lg:h-full min-h-[400px] order-2 lg:order-1">
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent"></div>
            </div>
            <div className="p-8 lg:p-12 order-1 lg:order-2">
              <div className="inline-flex p-3 bg-primary-500/10 rounded-xl mb-6">
                {(() => {
                  const Icon = services[activeService].icon;
                  return <Icon className="w-8 h-8 text-primary-500" />;
                })()}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>
              <ul className="space-y-3 mb-8">
                {services[activeService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <ChevronRight className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:translate-x-1">
                Learn More
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`group relative p-8 bg-white rounded-xl border-2 transition-all duration-300 text-left hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 ${
                  activeService === index
                    ? 'border-primary-500 shadow-xl shadow-primary-500/10'
                    : 'border-gray-100 hover:border-primary-500/30'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeService === index ? 'opacity-100' : ''
                }`} style={{
                  background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.02) 0%, rgba(180, 83, 9, 0.02) 100%)'
                }}></div>

                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl mb-6 transition-all duration-300 ${
                    activeService === index
                      ? 'bg-primary-500 shadow-lg shadow-primary-500/30'
                      : 'bg-primary-500/10 group-hover:bg-primary-500 group-hover:shadow-lg group-hover:shadow-primary-500/30'
                  }`}>
                    <Icon className={`w-7 h-7 transition-colors duration-300 ${
                      activeService === index
                        ? 'text-white'
                        : 'text-primary-500 group-hover:text-white'
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-500 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-6 inline-flex items-center gap-2 text-primary-500 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 lg:mt-32 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl">
            <div className="bg-white rounded-xl px-8 py-12 lg:px-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-secondary-500 mb-4">
                Need Strategic Legal Counsel?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team of seasoned attorneys stands ready to provide sophisticated guidance tailored to your unique business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30">
                  Schedule Consultation
                </button>
                <button className="px-8 py-4 bg-white text-primary-500 rounded-lg font-semibold border-2 border-primary-500 hover:bg-primary-50 transition-all duration-300">
                  View All Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}