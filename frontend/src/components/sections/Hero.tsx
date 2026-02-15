import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero1() {
  return (
    <div className="relative w-full bg-white mt-16">
      <div className="absolute h-full w-full bg-green-50/30 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]"></div>
      <section className="relative z-10 mx-auto max-w-full">
        

        <div className="z-10 mx-auto max-w-7xl gap-12 px-4 py-28 text-gray-700 md:px-8">
          <div className="mx-auto max-w-3xl space-y-5 text-center lg:leading-5">
            <h1 className="font-geist group mx-auto w-fit rounded-3xl border-2 border-green-200 bg-linear-to-tr from-green-50 via-emerald-50 to-transparent px-5 py-2 text-sm text-[#047857] tracking-wide font-medium inline-flex items-center">
              Textile Compliance Monitoring
              <ArrowRight className="ml-2 inline h-4 w-4 duration-300 group-hover:translate-x-1" />
            </h1>

            <h2 className="font-geist mx-auto bg-[linear-gradient(180deg,#047857_0%,rgba(16,185,129,0.7)_202.08%)] bg-clip-text text-4xl tracking-tighter text-transparent md:text-6xl font-bold">
              Prevent ETP Bypass with{' '}
              <span className="bg-linear-to-r from-emerald-800 to-[#004737] bg-clip-text text-transparent">
                AI-Powered Risk Scoring
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Real-time compliance monitoring using data triangulation and multi-factor validation to detect wastewater treatment bypasses before they happen. Protect your facility from fines, shutdowns, and export contract loss.
            </p>
            <div className="items-center justify-center space-y-3 gap-x-3 sm:flex sm:space-y-0">
             
                  <a
                    href="/dashboard"
                    className="group border-input inline-flex w-full items-center justify-center rounded-full border bg-[#262626] px-10 py-4 text-center text-white transition-colors hover:bg-green-50 sm:w-auto"
                  >
                    Get Started
                  </a>
                
            </div>
          </div>
          <div className="mx-10 mt-20">
            <Image
              src="/dashboard.png"
              width={1200}
              height={800}
              className="w-full rounded-lg border shadow-lg"
              alt="EcoWeave Dashboard showing real-time compliance monitoring and risk analysis"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
