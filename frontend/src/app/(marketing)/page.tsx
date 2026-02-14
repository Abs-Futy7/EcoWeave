import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import HowItWorksTimeline from '@/components/sections/HowItWorksTimeline';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import { beneficiaries } from '@/lib/content';
import Navbar from '@/components/layout/Navbar';
import Pricings from '@/components/sections/Pricings';

export const metadata: Metadata = {
  title: 'EcoWeave - AI-Powered Textile Compliance Risk Platform',
  description: 'Predict high-risk discharge periods and turn compliance into profit-protecting decisions with forensic validation and financial risk translation.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] max-w-8xl mx-auto">
      <Navbar/>
      <Hero />
      <FeaturesGrid />
      <HowItWorksTimeline />
      <Pricings />
      <FAQ />
      <CTA />
    </div>
  );
}
