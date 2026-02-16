'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

function Feature2() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            variants={badgeVariants}
            className="inline-block mb-3 px-4 py-1.5 bg-[#004737]/5 border border-[#004737]/10 rounded-full hover:shadow-md hover:border-[#004737]/20 transition-all duration-300"
          >
            <span className="text-[#004737] text-sm font-medium tracking-wider uppercase">Platform Features</span>
          </motion.div>
          <motion.h2
            variants={headerVariants}
            className="text-5xl font-bold mb-5 text-[#004737] tracking-tight"
          >
            Turn Data Into Compliance Intelligence
          </motion.h2>
          <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-[#004737]/40 to-transparent mx-auto mb-6"></div>
          <motion.p
            variants={headerVariants}
            className="text-xl text-[#2d5f4f]/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            AI-powered risk scoring and forensic validation to prevent pollution and protect profits.
          </motion.p>
        </motion.div>

        {/* Feature 1 - Predict High-Risk Batches */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-22"
          variants={featureVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Visual Elements */}
          <motion.div
            className="flex-1 relative h-120 rounded-2xl p-5"
            variants={imageVariants}
          >
            
            <Image src="/feature1.png" alt="Predict High-Risk Batches" width={400} height={500} className='rounded-2xl hover:shadow-lg transition-shadow duration-300'/>
          </motion.div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              variants={featureVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter"
            >
              Predict <span className="text-[#004737]">High-Risk Batches</span> Before They Discharge
            </motion.h1>
            <motion.p
              variants={featureVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our AI analyzes historical data to identify patterns and predict which batches are likely to discharge high levels of pollutants, allowing you to take proactive measures.
            </motion.p>
          </div>
        </motion.div>

        {/* Feature 2 - Money-First Alerts */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 max-w-6xl mx-auto px-22"
          variants={featureVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Right Side - Visual Elements */}
          <motion.div
            className="flex-1 relative h-120 rounded-2xl p-5"
            variants={imageVariants}
          >
            <Image src="/feature3.png" alt="Money-First Alerts" width={500} height={500} className='rounded-2xl hover:shadow-lg transition-shadow duration-300 mt-22'/>
          </motion.div>

          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              variants={featureVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter"
            >
              Send <span className="text-[#004737]">Money-First Alerts</span> Only When It Matters
            </motion.h1>
            <motion.p
              variants={featureVariants}
              className="text-md text-gray-600 leading-relaxed mb-4"
            >
              Instead of generic reminders, EcoWeave sends shift-specific alerts that show the financial logic clearly: estimated loss if ETP is bypassed vs cost to run ETP—so teams act fast to protect production and exports.
            </motion.p>
            
          </div>
        </motion.div>

        {/* Feature 3 - Forensic Verification */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-22"
          variants={featureVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side - Visual Elements */}
          <motion.div
            className="flex-1 relative h-120 w-full"
            variants={imageVariants}
          >
            <Image src="/feature2.png" alt="Forensic Verification" width={400} height={500} className='rounded-2xl hover:shadow-lg transition-shadow duration-300'/>
          </motion.div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <motion.h1
              variants={featureVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter"
            >
              Turn Data Into <span className="text-[#004737]">Audit-Ready Evidence</span> Automatically
            </motion.h1>
            <motion.p
              variants={featureVariants}
              className="text-lg text-gray-600 leading-relaxed mb-6"
            >
              EcoWeave cross-checks production ↔ chemical invoices ↔ electricity to flag inconsistencies, then generates buyer/regulator-friendly compliance reports—complete with evidence trails and anomaly summaries.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                'Triangulation checks',
                'Evidence trail',
                'Monthly compliance pack',
              ].map((item, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="px-4 py-2 bg-[#004737]/5 text-[#004737] rounded-lg text-sm font-medium border border-[#004737]/20 hover:bg-[#004737]/10 hover:border-[#004737]/40 transition-all duration-300 cursor-default"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Feature2
