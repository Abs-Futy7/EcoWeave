import React from 'react';
import { faqs } from '@/lib/content';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about EcoWeave
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-background rounded-xl border border-border overflow-hidden"
            >
              <summary className="cursor-pointer p-6 font-semibold text-lg flex justify-between items-center hover:text-primary transition-colors">
                {faq.question}
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-foreground/70">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
