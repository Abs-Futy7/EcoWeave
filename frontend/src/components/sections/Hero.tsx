'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.3,
    },
  },
};

export default function Hero1() {
  return (
    <div className="relative w-full mt-16">
      <div className="absolute h-full w-full bg-green-50/30 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]"></div>
      <section className="relative z-10 mx-auto max-w-full">
        

        <div className="z-10 mx-auto max-w-7xl gap-12 px-4 py-28 text-gray-700 md:px-8">
          <motion.div
            className="mx-auto max-w-3xl space-y-5 text-center lg:leading-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={itemVariants}
              className="font-geist group mx-auto w-fit rounded-3xl border-2 border-green-200 bg-linear-to-tr from-green-50 via-emerald-50 to-transparent px-5 py-2 text-sm text-[#047857] tracking-wide font-medium inline-flex items-center hover:shadow-lg hover:border-green-300 transition-all duration-300"
            >
              Textile Compliance Monitoring
              <ArrowRight className="ml-2 inline h-4 w-4 duration-300 group-hover:translate-x-1" />
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="font-geist mx-auto bg-[linear-gradient(180deg,#047857_0%,rgba(16,185,129,0.7)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl font-bold"
            >
              Prevent ETP Bypass with{' '}
              
              <span className="bg-linear-to-r from-emerald-800 to-[#004737] bg-clip-text text-transparent">
                AI-Powered Risk Scoring
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-gray-600 text-lg leading-relaxed"
            >
              Real-time compliance monitoring using data triangulation and multi-factor validation to detect wastewater treatment bypasses before they happen. Protect your facility from fines, shutdowns, and export contract loss.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0"
            >
             
                  <motion.a
                    href="/dashboard"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group border-input inline-flex w-full items-center justify-center rounded-full border bg-[#262626] px-10 py-4 text-center text-white transition-all duration-300 hover:bg-green-600 hover:shadow-lg sm:w-auto"
                  >
                    Get Started
                  </motion.a>
                
            </motion.div>
          </motion.div>
          <motion.div
            className="mx-10 mt-20"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/dashboard.png"
              width={1200}
              height={800}
              className="w-full rounded-lg border shadow-lg hover:shadow-2xl transition-shadow duration-300"
              alt="EcoWeave Dashboard showing real-time compliance monitoring and risk analysis"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
