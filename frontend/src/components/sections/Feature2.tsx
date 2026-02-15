import React from 'react'

function Feature2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-3 px-4 py-1.5 bg-[#004737]/5 border border-[#004737]/10 rounded-full">
            <span className="text-[#004737] text-sm font-medium tracking-wider uppercase">Platform Features</span>
          </div>
          <h2 className="text-5xl font-bold mb-5 text-[#004737] tracking-tight">
            Turn Data Into Compliance Intelligence
          </h2>
          <div className="w-24 h-0.5 bg-linear-to-r from-transparent via-[#004737]/40 to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-[#2d5f4f]/80 max-w-2xl mx-auto font-light leading-relaxed">
            AI-powered risk scoring and forensic validation to prevent pollution and protect profits.
          </p>
        </div>

        {/* Feature 1 - Predict High-Risk Batches */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Visual Elements */}
          <div className="flex-1 relative h-100 w-full">
            <div className="relative h-full flex items-center justify-center p-8">
              {/* Background Cards with Animation Effect */}
              <div className="absolute top-0 left-0 bg-white rounded-2xl shadow-lg p-6 w-64 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#004737] rounded-lg flex items-center justify-center text-white">
                    📊
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Data Ingested</h3>
                <p className="text-sm text-gray-600">Production data uploaded from batch #2847</p>
              </div>

              <div className="absolute top-20 right-0 bg-white rounded-2xl shadow-lg p-6 w-64 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#004737] rounded-lg flex items-center justify-center text-white">
                    ⚠️
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Risk Detected</h3>
                <p className="text-sm text-gray-600">High-risk pattern flagged in real-time</p>
              </div>

              <div className="absolute bottom-0 left-12 bg-white rounded-2xl shadow-lg p-6 w-64 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#004737] rounded-lg flex items-center justify-center text-white">
                    ✓
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Alert Sent</h3>
                <p className="text-sm text-gray-600">Notification delivered via email & SMS</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Predict <span className="text-[#004737]">High-Risk Batches</span> Before They Discharge
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI analyzes historical data to identify patterns and predict which batches are likely to discharge high levels of pollutants, allowing you to take proactive measures.
            </p>
          </div>
        </div>

        {/* Feature 2 - Money-First Alerts */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          {/* Right Side - Visual Elements */}
          <div className="flex-1 relative h-100 w-full">
            <div className="relative h-full flex items-center justify-center p-8">
              {/* Cost Comparison Card */}
              <div className="absolute top-0 right-0 bg-white rounded-2xl shadow-xl p-6 w-72 border-2 border-red-200 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white text-xl">
                    💰
                  </div>
                  <h3 className="font-bold text-gray-900">Cost Comparison</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Estimated Loss:</span>
                    <span className="text-lg font-bold text-red-600">৳500,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">ETP Cost:</span>
                    <span className="text-lg font-bold text-green-600">৳15,000</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-[#004737] font-medium">Action: Run ETP + verify log</p>
                  </div>
                </div>
              </div>

              {/* Alert Checklist */}
              <div className="absolute top-24 left-0 bg-white rounded-2xl shadow-lg p-6 w-64 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-[#004737]">✓</span> Alert Checklist
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-sm text-gray-700">Shift supervisor notified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-sm text-gray-700">SMS sent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-500">Action pending</span>
                  </div>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="absolute bottom-0 right-12 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#004737]/10 text-[#004737] rounded-full text-xs font-medium">Night shift</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Risk ≥ 75</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">Triangulation mismatch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Send <span className="text-[#004737]">Money-First Alerts</span> Only When It Matters
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Instead of generic reminders, EcoWeave sends shift-specific alerts that show the financial logic clearly: estimated loss if ETP is bypassed vs cost to run ETP—so teams act fast to protect production and exports.
            </p>
            <div className="bg-[#f9f9f9] border-l-4 border-[#004737] p-4 rounded-r-lg">
              <p className="text-sm text-gray-700 font-mono">
                Estimated loss: ৳500,000 • ETP cost: ৳15,000 • Action: Run ETP + verify log
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 - Forensic Verification */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Visual Elements */}
          <div className="flex-1 relative h-100 w-full">
            <div className="relative h-full flex items-center justify-center p-8">
              {/* Triangle Diagram */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 w-80 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-48 h-40">
                    {/* Triangle points */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#004737] text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg">
                      Production
                    </div>
                    <div className="absolute bottom-0 left-0 bg-[#004737] text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg">
                      Invoices
                    </div>
                    <div className="absolute bottom-0 right-0 bg-[#004737] text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg">
                      Electricity
                    </div>
                    {/* Triangle lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160">
                      <line x1="100" y1="20" x2="20" y2="140" stroke="#004737" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="100" y1="20" x2="180" y2="140" stroke="#004737" strokeWidth="2" strokeDasharray="4 4" />
                      <line x1="20" y1="140" x2="180" y2="140" stroke="#004737" strokeWidth="2" strokeDasharray="4 4" />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">⚠️ Mismatch detected</div>
                </div>
              </div>

              {/* Report Preview */}
              <div className="absolute bottom-0 right-0 bg-white rounded-2xl shadow-lg p-5 w-72 border border-gray-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#004737] rounded-lg flex items-center justify-center text-white text-sm">
                    📄
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">Monthly Compliance Report</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Batches Monitored:</span>
                    <span className="font-semibold">248</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">High-Risk Flagged:</span>
                    <span className="font-semibold text-red-600">12</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600">Compliance Rate:</span>
                    <span className="font-semibold text-green-600">95.2%</span>
                  </div>
                </div>
              </div>

              {/* Evidence Badge */}
              <div className="absolute top-1/2 left-0 bg-white rounded-xl shadow-lg p-3 border border-gray-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Audit Trail</p>
                    <p className="text-xs text-gray-600">Complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Data Into <span className="text-[#004737]">Audit-Ready Evidence</span> Automatically
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              EcoWeave cross-checks production ↔ chemical invoices ↔ electricity to flag inconsistencies, then generates buyer/regulator-friendly compliance reports—complete with evidence trails and anomaly summaries.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#004737]/5 text-[#004737] rounded-lg text-sm font-medium border border-[#004737]/20">
                Triangulation checks
              </span>
              <span className="px-4 py-2 bg-[#004737]/5 text-[#004737] rounded-lg text-sm font-medium border border-[#004737]/20">
                Evidence trail
              </span>
              <span className="px-4 py-2 bg-[#004737]/5 text-[#004737] rounded-lg text-sm font-medium border border-[#004737]/20">
                Monthly compliance pack
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature2
