import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import HowItWorksTimeline from '@/components/sections/HowItWorksTimeline';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import { beneficiaries } from '@/lib/content';

export const metadata: Metadata = {
  title: 'EcoWeave - AI-Powered Textile Compliance Risk Platform',
  description: 'Predict high-risk discharge periods and turn compliance into profit-protecting decisions with forensic validation and financial risk translation.',
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Problem Section */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Fines Alone Don't Work</h2>
          <div className="space-y-4 text-lg text-foreground/70">
            <p>
              Operating an Effluent Treatment Plant (ETP) is expensive. Inspections are predictable. 
              Fixed fines are often cheaper than treatment costs.
            </p>
            <p>
              The result? <span className="text-primary font-semibold">Strategic bypass becomes rational</span>—
              especially during night shifts, high-production periods, or when inspectors aren't expected.
            </p>
            <p className="text-foreground font-semibold">
              EcoWeave changes the equation by making the financial risk of non-compliance 
              impossible to ignore.
            </p>
          </div>
        </div>
      </section>

      <FeaturesGrid />

      <HowItWorksTimeline />

      {/* Example Alert Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Real Alert Example</h2>
          
          <div className="bg-destructive/5 border-2 border-destructive/30 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive mt-1.5"></div>
              <div>
                <h3 className="text-xl font-bold mb-2">HIGH RISK: Batch 3B-045 - Line 2</h3>
                <p className="text-sm text-foreground/60">Detected: Feb 13, 2026 at 10:45 PM</p>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 mb-6 space-y-4">
              <div>
                <p className="text-sm text-foreground/60 mb-1">Risk Score</p>
                <p className="text-3xl font-bold text-destructive">84/100</p>
              </div>

              <div className="border-t border-border pt-4">
                <p className="font-semibold mb-3">Financial Impact Analysis:</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-foreground/60">Potential Loss (Fine + Shutdown + Buyer Risk)</p>
                    <p className="text-2xl font-bold text-destructive">৳500,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">ETP Operation Cost (This Batch)</p>
                    <p className="text-2xl font-bold text-primary">৳15,000</p>
                  </div>
                </div>
                <p className="text-primary font-semibold">Net Savings by Treating: ৳485,000 (97% reduction)</p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6">
              <p className="font-semibold mb-2">Recommended Action:</p>
              <p className="text-foreground/70 mb-4">
                Run ETP for next discharge cycle (Batch 3B-045). Monitor chemical input levels. 
                Estimated treatment time: 4 hours. Deadline: 6:00 AM Feb 14.
              </p>
              <p className="text-sm text-foreground/60">
                Forensic validation: Production volume, chemical usage, and electricity consumption 
                patterns all indicate high-risk discharge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficiaries */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Who Benefits</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {beneficiaries.map((beneficiary, index) => (
              <div key={index} className="bg-background rounded-xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6">{beneficiary.title}</h3>
                <ul className="space-y-3">
                  {beneficiary.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triangulation Trust Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Forensic-Level Trust: The Triangulation Engine</h2>
          <p className="text-lg text-foreground/70 text-center mb-12 max-w-3xl mx-auto">
            Cross-verify three independent data sources to detect inconsistencies and build confidence in compliance data.
          </p>

          <div className="relative">
            {/* Triangle Diagram */}
            <div className="flex justify-center mb-12">
              <div className="relative w-full max-w-md aspect-square">
                {/* Triangle Points */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-center shadow-lg">
                  Production Volume
                </div>
                <div className="absolute bottom-0 left-0 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-center shadow-lg">
                  Chemical Invoices
                </div>
                <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-center shadow-lg">
                  Electricity Usage
                </div>

                {/* Triangle Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="50%" y1="10%" x2="10%" y2="90%" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                  <line x1="50%" y1="10%" x2="90%" y2="90%" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                  <line x1="10%" y1="90%" x2="90%" y2="90%" stroke="currentColor" strokeWidth="2" className="text-primary/30" />
                </svg>

                {/* Center Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border-2 border-primary rounded-full px-6 py-4 text-center shadow-xl">
                  <p className="font-bold text-primary">Validation</p>
                  <p className="text-xs text-foreground/60">Cross-Check</p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="bg-card border border-border rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold mb-4">Example: Mismatch Detection</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Expected chemical usage (per production):</span>
                  <span className="font-semibold">2,500 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Invoice shows purchased:</span>
                  <span className="font-semibold">1,800 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Electricity usage correlation:</span>
                  <span className="font-semibold text-destructive">-32% variance</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 text-destructive rounded-full text-xs font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Anomaly Flagged for Investigation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Preview */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Compliance Reports</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4">For Factories</h3>
              <ul className="space-y-3 text-foreground/70 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Daily/weekly risk scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Cost savings from interventions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Operational recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Trend analysis</span>
                </li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-xl font-semibold mb-4">For Buyers & Regulators</h3>
              <ul className="space-y-3 text-foreground/70 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Verified compliance scores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Forensic validation attestation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Continuous monitoring evidence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Export-ready documentation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/sample-report">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                View Full Sample Report
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Enterprise-Grade Security</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Encrypted Storage</h3>
                <p className="text-sm text-foreground/70">All data encrypted at rest and in transit with AES-256</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Read-Only Access</h3>
                <p className="text-sm text-foreground/70">EcoWeave never modifies your data</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Role-Based Access Control</h3>
                <p className="text-sm text-foreground/70">Granular permissions for your team</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Audit Logs</h3>
                <p className="text-sm text-foreground/70">Complete activity tracking and compliance records</p>
              </div>
            </div>
          </div>

          <p className="text-center text-foreground/70 mt-8">
            Enterprise tier includes optional on-premise or private cloud deployment
          </p>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center text-foreground/70 mb-12">Start with a pilot and scale as you see results</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pilot', desc: '3-month test with 1 line', features: ['Basic risk scoring', 'Monthly reports', 'Email support'] },
              { name: 'Standard', desc: 'Full deployment', features: ['Up to 5 lines', 'Real-time alerts', 'Buyer reports', 'API access'] },
              { name: 'Enterprise', desc: 'Multi-facility', features: ['Unlimited lines', 'Custom integration', 'On-premise option', 'Dedicated support'] },
            ].map((tier, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6 border border-border text-center">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-sm text-foreground/60 mb-6">{tier.desc}</p>
                <ul className="space-y-2 mb-6 text-sm text-left">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/pricing">
                  <button className="w-full px-4 py-2 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
                    Learn More
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <CTA />
    </>
  );
}
