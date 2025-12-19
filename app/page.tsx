import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <CTA />
      <About />
      <Testimonials />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
