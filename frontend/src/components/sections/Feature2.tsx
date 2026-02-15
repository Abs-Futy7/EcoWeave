import Image from 'next/image'
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-22">
          {/* Left Side - Visual Elements */}
          <div className="flex-1 relative h-120 rounded-2xl p-5">
            
            <Image src="/feature1.png" alt="Predict High-Risk Batches" width={400} height={500} className='rounded-2xl'/>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tighter tracking-tighter">
              Predict <span className="text-[#004737]">High-Risk Batches</span> Before They Discharge
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our AI analyzes historical data to identify patterns and predict which batches are likely to discharge high levels of pollutants, allowing you to take proactive measures.
            </p>
          </div>
        </div>

        {/* Feature 2 - Money-First Alerts */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 max-w-6xl mx-auto px-22">
          {/* Right Side - Visual Elements */}
          <div className="flex-1 relative h-120 w-full">
            <Image src="/feature3.png" alt="Money-First Alerts" width={400} height={500} className='rounded-2xl'/>
          </div>

          {/* Left Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tighter tracking-tighter">
              Send <span className="text-[#004737]">Money-First Alerts</span> Only When It Matters
            </h1>
            <p className="text-md text-gray-600 leading-relaxed mb-4">
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
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-22">
          {/* Left Side - Visual Elements */}
          <div className="flex-1 relative h-120 w-full">
            <Image src="/feature2.png" alt="Forensic Verification" width={400} height={500} className='rounded-2xl'/>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tighter tracking-tighter">
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
