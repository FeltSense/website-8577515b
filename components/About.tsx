'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Scale, Users, Trophy, Globe } from 'lucide-react';

const stats = [
  {
    icon: Scale,
    value: '35+',
    label: 'Years of Excellence',
    description: 'Delivering strategic legal counsel'
  },
  {
    icon: Trophy,
    value: '$50B+',
    label: 'Transactions Closed',
    description: 'Complex M&A and securities deals'
  },
  {
    icon: Users,
    value: '200+',
    label: 'Fortune 500 Clients',
    description: 'Trusted by industry leaders'
  },
  {
    icon: Globe,
    value: '15',
    label: 'Global Jurisdictions',
    description: 'Cross-border transaction expertise'
  }
];

const values = [
  {
    title: 'Strategic Excellence',
    description: 'We approach every engagement with rigorous analytical frameworks and creative problem-solving to deliver optimal outcomes in complex corporate transactions.'
  },
  {
    title: 'Client-Centric Partnership',
    description: 'Our commitment extends beyond legal advice—we serve as strategic advisors, integrating seamlessly with your team to advance your business objectives.'
  },
  {
    title: 'Substantive Expertise',
    description: 'Decades of experience in M&A, securities, and corporate governance provide our clients with sophisticated counsel grounded in practical business acumen.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, #1E3A5F 0px, #1E3A5F 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #1E3A5F 0px, #1E3A5F 1px, transparent 1px, transparent 60px)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 leading-tight">
            Built on Integrity, Driven by Results
          </h2>
          <p className="text-xl text-secondary-500 leading-relaxed">
            For over three decades, Morrison & Associates has provided sophisticated legal counsel to corporations navigating their most consequential transactions and strategic initiatives.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/practice-areas-feature-1766162804219.png"
                alt="Morrison & Associates legal professionals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent" />
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-slate-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-500/10 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-accent-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-500">98%</div>
                  <div className="text-sm text-secondary-500">Client Retention</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-secondary-500 leading-relaxed mb-6">
                Established in 1988, our firm has evolved into a preeminent legal advisor for complex corporate matters, specializing in mergers and acquisitions, securities offerings, and corporate governance. Our practice encompasses the full spectrum of strategic transactions, from billion-dollar public company acquisitions to emerging growth company financings.
              </p>
              <p className="text-lg text-secondary-500 leading-relaxed mb-6">
                What distinguishes Morrison & Associates is our integration of legal expertise with commercial pragmatism. We do not merely identify issues—we architect solutions that advance our clients' strategic imperatives while managing risk effectively. Our attorneys combine sophisticated technical knowledge with extensive transaction experience, enabling us to navigate the most complex deals with precision and efficiency.
              </p>
              <p className="text-lg text-secondary-500 leading-relaxed">
                Our client relationships are characterized by deep industry knowledge, responsiveness, and a commitment to delivering practical counsel that drives business success. We serve as trusted advisors to boards, executive teams, and investors across multiple sectors, earning recognition for our ability to close challenging transactions and provide strategic guidance on mission-critical matters.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Consultation
                <span className="text-lg">→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-28"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-500/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-primary-500" />
                </div>
                <div className="text-4xl font-bold text-primary-500 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-secondary-500 mb-1">{stat.label}</div>
                <div className="text-sm text-secondary-500/70">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Our Guiding Principles
            </h3>
            <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
              The values that define our practice and drive exceptional outcomes for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="h-full bg-gradient-to-br from-white to-slate-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group hover:-translate-y-1">
                  {/* Accent Bar */}
                  <div className="absolute top-0 left-0 w-1 h-16 bg-accent-500 rounded-l-xl" />
                  
                  <h4 className="text-xl font-bold text-primary-500 mb-4 group-hover:text-accent-500 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-secondary-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}