import React from 'react';
import { howItWorksSteps } from '@/lib/content';

export default function HowItWorksTimeline() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70">
            From data ingestion to actionable alerts in 5 simple steps
          </p>
        </div>

        <div className="space-y-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="flex gap-6 group">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                {index !== howItWorksSteps.length - 1 && (
                  <div className="w-0.5 h-full bg-border ml-6 mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
