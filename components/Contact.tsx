'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formId: 'contact',
          formData: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (!response.ok) throw new Error('Submission failed');

      setStatus({
        type: 'success',
        message:
          'Your inquiry has been received. A member of our team will respond within 24 hours.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'An error occurred while submitting your inquiry. Please try again or contact us directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-accent-500 to-transparent mb-6 mx-auto" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-secondary-500 max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential consultation to discuss your strategic legal
            objectives
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl shadow-primary-500/5 p-8 md:p-10 border border-slate-200/60">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-primary-500 mb-2 tracking-wide"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-secondary-500 placeholder-slate-400 focus:outline-none focus:border-accent-500 focus:bg-white transition-all duration-300 hover:border-slate-300"
                    placeholder="John Morrison"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-primary-500 mb-2 tracking-wide"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-secondary-500 placeholder-slate-400 focus:outline-none focus:border-accent-500 focus:bg-white transition-all duration-300 hover:border-slate-300"
                    placeholder="jmorrison@company.com"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-primary-500 mb-2 tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-xl text-secondary-500 placeholder-slate-400 focus:outline-none focus:border-accent-500 focus:bg-white transition-all duration-300 hover:border-slate-300 resize-none"
                    placeholder="Describe your legal needs and strategic objectives..."
                  />
                </div>

                {status.type && (
                  <div
                    className={`p-5 rounded-xl border-2 ${
                      status.type === 'success'
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-red-50 border-red-200 text-red-800'
                    }`}
                  >
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-accent-500 to-amber-600 hover:from-accent-600 hover:to-amber-700 text-white font-bold py-5 px-8 rounded-xl shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-8">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-xl p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-8 tracking-tight">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80 mb-1 tracking-wide">
                        Email
                      </div>
                      <a
                        href="mailto:inquiries@morrisonassociates.com"
                        className="text-base font-medium hover:text-accent-300 transition-colors duration-300"
                      >
                        inquiries@morrisonassociates.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80 mb-1 tracking-wide">
                        Phone
                      </div>
                      <a
                        href="tel:+12125551234"
                        className="text-base font-medium hover:text-accent-300 transition-colors duration-300"
                      >
                        +1 (212) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/80 mb-1 tracking-wide">
                        Office
                      </div>
                      <div className="text-base font-medium leading-relaxed">
                        350 Fifth Avenue, Suite 6400<br />
                        New York, NY 10118
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200/60">
                <h4 className="text-lg font-bold text-primary-500 mb-4">
                  Office Hours
                </h4>
                <div className="space-y-3 text-secondary-500">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-sm">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-sm">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-sm">Closed</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-secondary-500 leading-relaxed">
                    Emergency consultations available for time-sensitive matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}