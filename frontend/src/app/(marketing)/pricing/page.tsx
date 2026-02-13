import type { Metadata } from 'next';
import { workflow, pricingTiers } from '@/lib/content';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'How It Works & Pricing - EcoWeave',
  description: 'Learn how EcoWeave transforms operational data into compliance intelligence. Transparent pricing for factories of all sizes.',
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 px-6 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">How EcoWeave Works</h1>
          <p className="text-xl text-foreground/70">
            From raw operational data to actionable compliance intelligence in a few simple steps
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-center gap-6 flex-wrap">
            {['Overview', 'Workflow', 'Pricing', 'FAQ'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section id="overview" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Platform Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">The Challenge</h3>
                <p className="text-foreground/70">
                  Textile factories in Bangladesh face increasing pressure from buyers for environmental 
                  compliance, but ETP operation is expensive and inspections are predictable. Fixed fines 
                  often make strategic bypass economically rational.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">The EcoWeave Solution</h3>
                <p className="text-foreground/70">
                  We change the economics by predicting high-risk discharge periods using existing 
                  operational data, translating violations into quantified financial risks (fines + 
                  shutdowns + buyer contract loss), and providing shift-specific alerts that make 
                  compliance the profitable choice.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-foreground/70">Risk Prediction Accuracy</span>
                  <span className="text-2xl font-bold text-primary">85%+</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-foreground/70">Average Cost Savings</span>
                  <span className="text-2xl font-bold text-primary">97%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-foreground/70">Deployment Time</span>
                  <span className="text-2xl font-bold text-primary">2 weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Data Validation Rate</span>
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Detail */}
      <section id="workflow" className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Detailed Workflow</h2>
          
          <div className="space-y-12">
            {workflow.map((phase, index) => (
              <div key={index} className="bg-background rounded-xl p-8 border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {index}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-foreground/70 mb-6">{phase.description}</p>
                    
                    {phase.details && (
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-sm text-foreground/70">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Transparent Pricing</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your facility size. All plans include core risk scoring and forensic validation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-background rounded-xl p-8 border-2 ${
                  tier.highlighted ? 'border-primary shadow-xl scale-105' : 'border-border'
                } relative`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-primary mb-4">{tier.price}</p>
                <p className="text-foreground/70 mb-6">{tier.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    tier.highlighted
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">All Plans Include:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Forensic data validation',
                'AI risk scoring',
                'Financial impact analysis',
                'Encrypted data storage',
                'Role-based access control',
                'Regular platform updates',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTA />
    </div>
  );
}
