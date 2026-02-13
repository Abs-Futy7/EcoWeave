'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function SampleReportPage() {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sampleBatches = [
    { id: 'B-2401', line: 2, shift: '3A', risk: 84, status: 'High Risk', production: '2,500 kg', treatment: 'Not Run' },
    { id: 'B-2398', line: 1, shift: '2B', risk: 62, status: 'Medium Risk', production: '1,800 kg', treatment: 'Partial' },
    { id: 'B-2395', line: 3, shift: '1A', risk: 28, status: 'Low Risk', production: '1,200 kg', treatment: 'Complete' },
    { id: 'B-2392', line: 2, shift: '2A', risk: 71, status: 'Medium Risk', production: '2,100 kg', treatment: 'Complete' },
    { id: 'B-2389', line: 1, shift: '1B', risk: 45, status: 'Low Risk', production: '1,500 kg', treatment: 'Complete' },
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-6 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg animate-in slide-in-from-right">
          ✓ Mock download initiated (no actual file)
        </div>
      )}

      {/* Header */}
      <section className="py-12 px-6 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Compliance Risk Report</h1>
              <p className="text-foreground/70">Sample Factory • February 2026</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleDownload}>
                Download PDF
              </Button>
              <Button variant="primary">Request Real Report</Button>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Row */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">Compliance Score</p>
              <p className="text-4xl font-bold text-primary mb-1">76/100</p>
              <p className="text-sm text-green-600">↑ 12% from last month</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">High-Risk Batches</p>
              <p className="text-4xl font-bold text-destructive mb-1">8</p>
              <p className="text-sm text-foreground/60">Out of 142 total batches</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">Anomalies Flagged</p>
              <p className="text-4xl font-bold text-orange-600 mb-1">3</p>
              <p className="text-sm text-foreground/60">Require investigation</p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <p className="text-sm text-foreground/60 mb-2">Cost Savings</p>
              <p className="text-4xl font-bold text-primary mb-1">৳2.4M</p>
              <p className="text-sm text-foreground/60">Violations prevented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Trend Chart Placeholder */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">Risk Trend (30 Days)</h2>
            
            <div className="h-64 flex items-end gap-2">
              {[45, 52, 48, 65, 72, 84, 79, 62, 58, 71, 68, 55, 61, 73, 68, 64, 59, 54, 62, 70, 76, 72, 68, 64, 60, 58, 65, 70, 75, 76].map((value, index) => {
                const color = value >= 70 ? 'bg-destructive' : value >= 50 ? 'bg-orange-500' : 'bg-primary';
                return (
                  <div
                    key={index}
                    className={`flex-1 ${color} rounded-t transition-all hover:opacity-80 cursor-pointer`}
                    style={{ height: `${value}%` }}
                    title={`Day ${index + 1}: ${value}`}
                  ></div>
                );
              })}
            </div>

            <div className="flex justify-between mt-4 text-sm text-foreground/60">
              <span>Feb 1</span>
              <span>Feb 15</span>
              <span>Feb 28</span>
            </div>

            <div className="flex gap-6 mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span className="text-sm text-foreground/70">Low Risk (0-49)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded"></div>
                <span className="text-sm text-foreground/70">Medium Risk (50-69)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-destructive rounded"></div>
                <span className="text-sm text-foreground/70">High Risk (70-100)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Table */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-2xl font-bold">Recent Batches</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Batch ID</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Line</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Shift</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Risk Score</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Production</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold">Treatment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sampleBatches.map((batch) => (
                    <tr key={batch.id} className="hover:bg-muted/50">
                      <td className="px-6 py-4 font-mono text-sm">{batch.id}</td>
                      <td className="px-6 py-4 text-sm">Line {batch.line}</td>
                      <td className="px-6 py-4 text-sm">{batch.shift}</td>
                      <td className="px-6 py-4">
                        <span className="text-2xl font-bold">{batch.risk}</span>
                        <span className="text-sm text-foreground/60">/100</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          batch.status === 'High Risk' ? 'bg-destructive/10 text-destructive' :
                          batch.status === 'Medium Risk' ? 'bg-orange-500/10 text-orange-600' :
                          'bg-primary/10 text-primary'
                        }`}>
                          {batch.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground/70">{batch.production}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          batch.treatment === 'Complete' ? 'bg-green-500/10 text-green-600' :
                          batch.treatment === 'Partial' ? 'bg-orange-500/10 text-orange-600' :
                          'bg-destructive/10 text-destructive'
                        }`}>
                          {batch.treatment}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Anomaly Callout */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6">Flagged Anomalies</h2>
            
            <div className="space-y-4">
              <div className="bg-destructive/5 border border-destructive/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Chemical Usage Mismatch - Line 2</h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      Reported chemical consumption shows 1,800 kg for batch B-2401, but production volume 
                      (2,500 kg) and electricity usage suggest expected consumption of 2,400-2,600 kg.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-foreground/60">Confidence: <span className="font-semibold text-destructive">92%</span></span>
                      <span className="text-foreground/60">Impact: <span className="font-semibold">High</span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/5 border border-orange-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Unusual Discharge Timing Pattern</h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      3 high-risk batches discharged between 11 PM - 3 AM over 7 days. Historical pattern 
                      shows less than 1 night discharge per week.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-foreground/60">Confidence: <span className="font-semibold text-orange-600">78%</span></span>
                      <span className="text-foreground/60">Impact: <span className="font-semibold">Medium</span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/5 border border-orange-500/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-2"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Electricity Variance - Line 1</h3>
                    <p className="text-sm text-foreground/70 mb-3">
                      Electricity consumption 18% below expected for production volume in week 3. 
                      Possible ETP underutilization.
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-foreground/60">Confidence: <span className="font-semibold text-orange-600">65%</span></span>
                      <span className="text-foreground/60">Impact: <span className="font-semibold">Medium</span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Recommendations</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Immediate Actions
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Investigate chemical usage mismatch on Line 2</li>
                <li>• Review shift schedules and discharge timing policies</li>
                <li>• Verify ETP operation logs against reported batches</li>
              </ul>
            </div>

            <div className="bg-background rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Optimization Opportunities
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Consolidate high-risk batches to dedicated ETP time slots</li>
                <li>• Implement automated data logging to reduce manual errors</li>
                <li>• Consider API integration with electricity meters</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Want Real Reports for Your Factory?</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get customized compliance risk reports based on your actual production data. 
              Start with a 2-week pilot deployment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg">
                Request Demo
              </Button>
              <Button variant="outline" size="lg">
                <a href="/contact">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
