import type { Metadata } from 'next';
import { services } from '@/lib/content';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services - EcoWeave Implementation & Support',
  description: 'Comprehensive onboarding, integration, and support services for textile factories implementing EcoWeave compliance risk platform.',
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-foreground/70">
            End-to-end support from onboarding to ongoing optimization
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Deliverables:</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                              <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Timeline:</h4>
                        <p className="text-2xl font-bold text-primary">{service.timeline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get in 2 Weeks */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">From Zero to Monitoring in 2 Weeks</h2>
          
          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {[
                {
                  day: 'Days 1-2',
                  title: 'Discovery & Setup',
                  tasks: ['Initial consultation call', 'Factory process mapping', 'Data template customization', 'Team account creation'],
                },
                {
                  day: 'Days 3-5',
                  title: 'Data Collection',
                  tasks: ['Historical data upload', 'Production line configuration', 'Initial data validation', 'Anomaly review'],
                },
                {
                  day: 'Days 6-10',
                  title: 'Model Calibration',
                  tasks: ['AI model training on your data', 'Baseline risk score establishment', 'Alert threshold configuration', 'Test alerts review'],
                },
                {
                  day: 'Days 11-12',
                  title: 'Training & Integration',
                  tasks: ['Team training sessions', 'Dashboard walkthrough', 'Report generation demo', 'Alert response procedures'],
                },
                {
                  day: 'Days 13-14',
                  title: 'Go Live',
                  tasks: ['Production monitoring begins', 'Real-time alert activation', 'First compliance report', 'Support handoff to ongoing team'],
                },
              ].map((phase, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-32">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold text-center">
                      {phase.day}
                    </div>
                  </div>
                  <div className="flex-1 bg-background rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-foreground/70">
                          <svg className="w-4 h-4 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Ongoing Support</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: 'Pilot Support',
                features: ['Email support (48h response)', 'Monthly check-in calls', 'Knowledge base access', 'Quarterly reviews'],
              },
              {
                tier: 'Standard Support',
                features: ['Priority email (24h response)', 'Direct phone/SMS support', 'Bi-weekly optimization calls', 'Buyer report assistance'],
                highlighted: true,
              },
              {
                tier: 'Enterprise Support',
                features: ['Dedicated account manager', '24/7 emergency support line', 'Weekly strategic reviews', 'Custom integration support', 'On-site visits (quarterly)'],
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 border-2 ${
                  tier.highlighted ? 'border-primary bg-primary/5' : 'border-border bg-card'
                }`}
              >
                <h3 className="text-xl font-bold mb-6">{tier.tier}</h3>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
