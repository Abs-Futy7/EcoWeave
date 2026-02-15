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
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                    {index}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-foreground/70 mb-6">{phase.description}</p>
                    
                    {phase.details && (
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
                Flexible pricing plans
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              The perfect plan for any textile facility
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our plans are designed to streamline your compliance workflow. Choose from scalable pricing solutions that grow with your manufacturing needs.
            </p>
          </div>
          
          {/* Pricing Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 relative transition-all ${
                  tier.highlighted 
                    ? 'bg-linear-to-br from-emerald-800 to-emerald-900 text-white shadow-2xl transform scale-105' 
                    : 'bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {tier.highlighted && (
                  <div className="absolute -top-3 right-8 px-4 py-1.5 bg-white text-emerald-800 text-xs font-semibold rounded-full shadow-md flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Popular
                  </div>
                )}
                
                {/* Icon */}
                <div className="mb-6">
                  {index === 0 && (
                    <svg className={`w-12 h-12 ${tier.highlighted ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className={`w-12 h-12 ${tier.highlighted ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className={`w-12 h-12 ${tier.highlighted ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )}
                </div>

                {/* Tier Name */}
                <h3 className={`text-2xl font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {tier.name}
                </h3>
                
                {/* Description */}
                <p className={`text-sm mb-6 ${tier.highlighted ? 'text-green-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
                
                {/* Price */}
                <div className="mb-8">
                  <span className={`text-4xl font-bold ${tier.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {tier.price}
                  </span>
                  {tier.price !== 'Contact Us' && tier.price !== 'Custom' && (
                    <span className={`text-sm ml-2 ${tier.highlighted ? 'text-green-200' : 'text-gray-500'}`}>
                      per month
                    </span>
                  )}
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg 
                        className={`w-5 h-5 shrink-0 mt-0.5 ${tier.highlighted ? 'text-green-300' : 'text-green-600'}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${tier.highlighted ? 'text-green-50' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button
                  className={`w-full py-3.5 rounded-full font-semibold transition-all ${
                    tier.highlighted
                      ? 'bg-white text-emerald-800 hover:bg-green-50 shadow-lg'
                      : 'bg-linear-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg'
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
