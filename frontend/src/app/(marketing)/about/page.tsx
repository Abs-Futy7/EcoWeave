import type { Metadata } from 'next';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About EcoWeave - Our Mission & Team',
  description: 'Learn about EcoWeave\'s mission to make pollution financially irrational in Bangladesh\'s textile industry.',
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 px-6 text-center bg-card">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About EcoWeave</h1>
          <p className="text-xl text-foreground/70">
            Making factory self-interest align with ecological impact through financial intelligence
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-foreground/70 mb-4">
                Traditional enforcement—fixed fines and predictable inspections—has failed to prevent 
                strategic pollution in Bangladesh's textile sector. Factories make rational economic 
                decisions to bypass ETPs when treatment costs exceed penalty risks.
              </p>
              <p className="text-lg text-foreground/70 mb-4">
                <span className="text-primary font-semibold">EcoWeave changes the equation.</span> We use 
                forensic data validation and AI-powered risk scoring to translate environmental violations 
                into quantified financial risks that factories cannot ignore: fines, production shutdowns, 
                buyer contract losses, and export blacklisting.
              </p>
              <p className="text-lg text-foreground/70">
                When the financial cost of pollution exceeds the cost of compliance by 97%, the choice 
                becomes obvious—and the rivers win.
              </p>
            </div>
            <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Impact by Numbers</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">3+</p>
                  <p className="text-foreground/70">Rivers at Critical Risk</p>
                  <p className="text-sm text-foreground/60">Buriganga, Turag, Shitalakkhya</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">400+</p>
                  <p className="text-foreground/70">Textile Factories in Dhaka Region</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary mb-2">10M+</p>
                  <p className="text-foreground/70">People Affected by Pollution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bangladesh Context Matters */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Bangladesh Rivers Matter</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Buriganga River',
                status: 'Biologically Dead',
                impact: 'Main waterway through Dhaka, receives untreated industrial discharge from hundreds of factories.',
              },
              {
                title: 'Turag River',
                status: 'Critically Polluted',
                impact: 'Chromium and toxic dye levels exceed safe limits by 10-20x. Local communities suffer waterborne diseases.',
              },
              {
                title: 'Shitalakkhya River',
                status: 'High Risk',
                impact: 'Major textile clusters upstream. Fish populations collapsed. Agricultural irrigation contaminated.',
              },
            ].map((river, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-2">{river.title}</h3>
                <p className="text-destructive font-semibold text-sm mb-4">{river.status}</p>
                <p className="text-foreground/70 text-sm">{river.impact}</p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-4">The Textile-Pollution Connection</h3>
            <p className="text-foreground/70 mb-4">
              Bangladesh's Ready-Made Garment (RMG) sector generates $35+ billion in annual exports 
              and employs 4 million workers. But textile processing—dyeing, washing, finishing—generates 
              massive toxic wastewater containing chromium, lead, cadmium, and azo dyes.
            </p>
            <p className="text-foreground/70">
              Most factories have ETPs (Effluent Treatment Plants), but operating them costs ৳10,000-20,000 
              per batch. With fixed fines of ৳50,000-100,000 and infrequent inspections, strategic bypass 
              becomes economically rational—especially during night shifts or high-production periods.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Team Member 1', role: 'Co-Founder & CEO', bio: 'Environmental tech entrepreneur with experience in industrial compliance systems.' },
              { name: 'Team Member 2', role: 'Co-Founder & CTO', bio: 'ML engineer specializing in anomaly detection and forensic data analysis.' },
              { name: 'Team Member 3', role: 'Chief Compliance Officer', bio: '15+ years in Bangladesh textile industry compliance and regulation.' },
            ].map((member, idx) => (
              <div key={idx} className="bg-card rounded-xl p-6 border border-border text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Open methodology. Verifiable data. No black boxes. Factories and regulators see exactly how scores are calculated.',
              },
              {
                title: 'Verification',
                description: 'Forensic-level triangulation of multiple data sources. Trust through validation, not self-reporting.',
              },
              {
                title: 'Practicality',
                description: 'Solutions that work within existing factory operations. No expensive hardware requirements. Start with CSV uploads.',
              },
              {
                title: 'Measurable Impact',
                description: 'Track cost savings, risk reduction, and compliance improvement. Every alert shows financial justification.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
