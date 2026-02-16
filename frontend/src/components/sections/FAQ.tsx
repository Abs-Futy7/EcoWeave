'use client';

import React from 'react';
import { faqs } from '@/lib/content';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const faqVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FAQ() {
  return (
    <section id="faq" className="flex flex-col py-20 px-6 items-center justify-center">
      <motion.div
        className="inline-block mb-10"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
          FAQ
        </span>
      </motion.div>
      <div className="max-w-8xl mx-auto flex gap-12 items-start justify-center ">
        <motion.div
          className="text-start mt-3 mr-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-[#004737]">Have Questions? We have</h2>
          <h2 className="text-4xl font-bold mb-4 text-[#004737] tracking-tight -mt-4">you covered.</h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about EcoWeave
          </p>
        </motion.div>

        <div className="space-y-3 max-w-[600px]">
          {faqs.map((faq, index) => (
            <motion.details
              key={index}
              className="group border-b border-border overflow-hidden"
              variants={faqVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <summary className="cursor-pointer px-6 py-4 font-semibold text-lg flex justify-between items-center hover:text-primary transition-colors">
                {faq.question}
                <span className="text-primary group-open:rotate-90 transition-transform">+</span>
              </summary>
              <motion.div
                className="px-6 pb-6 text-foreground/70"
                variants={faqVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {faq.answer}
              </motion.div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
