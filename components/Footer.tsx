'use client';

import Link from 'next/link';
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    { name: 'Mergers & Acquisitions', href: '/practice-areas/ma' },
    { name: 'Securities Law', href: '/practice-areas/securities' },
    { name: 'Corporate Governance', href: '/practice-areas/governance' },
    { name: 'Private Equity', href: '/practice-areas/private-equity' },
  ];

  const firmLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Insights', href: '/insights' },
  ];

  const resourceLinks = [
    { name: 'Client Portal', href: '/portal' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Publications', href: '/publications' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { Icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-[#0F1419] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl font-bold text-white mb-4 transition-colors group-hover:text-accent-500">
                Morrison & Associates
              </h3>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Strategic legal counsel for complex corporate transactions, delivering sophisticated M&A and securities expertise with unwavering commitment to client success.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-gray-400 hover:text-accent-500 transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1301 Avenue of the Americas<br />New York, NY 10019</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent-500 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+1 (212) 555-0100</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent-500 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@morrisonlaw.com</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 relative inline-block">
              Practice Areas
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-500"></span>
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-accent-500 transition-colors inline-flex items-center group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-500 transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 relative inline-block">
              Firm
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-500"></span>
            </h4>
            <ul className="space-y-3">
              {firmLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-accent-500 transition-colors inline-flex items-center group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-500 transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent-500"></span>
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-accent-500 transition-colors inline-flex items-center group"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent-500 transition-all group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
              <p>© {currentYear} Morrison & Associates. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-accent-500 transition-colors">
                  Privacy Policy
                </Link>
                <span className="text-gray-700">|</span>
                <Link href="/terms" className="hover:text-accent-500 transition-colors">
                  Terms of Service
                </Link>
                <span className="text-gray-700">|</span>
                <Link href="/disclaimer" className="hover:text-accent-500 transition-colors">
                  Legal Disclaimer
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-accent-500 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Attorney Advertising Notice */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
              Attorney Advertising. Prior results do not guarantee a similar outcome. The information on this website is for general information purposes only and is not intended to constitute legal advice. No attorney-client relationship is formed by use of this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}