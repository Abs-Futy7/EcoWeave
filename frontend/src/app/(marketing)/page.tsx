import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import HowItWorksTimeline from '@/components/sections/HowItWorksTimeline';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import { beneficiaries } from '@/lib/content';
import Navbar from '@/components/layout/Navbar';
import Pricings from '@/components/sections/Pricings';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/sections/Testimonials';
import Feature2 from '@/components/sections/Feature2';

export const metadata: Metadata = {
  title: 'EcoWeave - AI-Powered Textile Compliance Risk Platform',
  description: 'Predict high-risk discharge periods and turn compliance into profit-protecting decisions with forensic validation and financial risk translation.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white max-w-8xl mx-auto">
      <Navbar/>
      <Hero />
      <Feature2 />
      <HowItWorksTimeline />
      <Testimonials/>
      <Pricings />
      <FAQ />
      <CTA />
      <Footer/>
    </div>
  );
}
