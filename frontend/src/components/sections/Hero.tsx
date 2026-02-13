'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Play } from 'lucide-react';
import Button from '@/components/ui/Button';
import RequestDemoModal from '@/components/layout/RequestDemoModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen bg-[#003F3A] flex items-center justify-center px-6 pt-24 pb-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <h1 className="text-[#00D9CC] text-6xl md:text-7xl lg:text-8xl font-regular leading-[1.1] tracking-tighter">
              Make Pollution<br />
              Financially Irrational
            </h1>

            {/* Subheadline */}
            <p className="text-white text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              The ultimate platform to predict high-risk discharge periods with forensic validation
              <br />
              and turn compliance into profit-protecting decisions for textile factories.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#004737] px-10 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                GET STARTED
              </button>
              
              <Link href="/pricing">
                <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                  <Play className="w-4 h-4 fill-white" />
                  HOW IT WORKS
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
