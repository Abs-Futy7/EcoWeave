'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { FileSpreadsheet, Upload, SearchCheck, AlertTriangle, FileBarChart } from 'lucide-react';
import { howItWorksSteps } from '@/lib/content';

const stepIcons = [
  <FileSpreadsheet className="h-6 w-6" />,
  <Upload className="h-6 w-6" />,
  <SearchCheck className="h-6 w-6" />,
  <AlertTriangle className="h-6 w-6" />,
  <FileBarChart className="h-6 w-6" />,
];

const stepImages = [
  '/fileupload.png',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop',
];

export default function HowItWorksTimeline() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentStep((prev) => (prev + 1) % howItWorksSteps.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <section id="how-it-works" className="p-8 md:p-12 relative overflow-hidden">
      
      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="relative mx-auto mb-12 max-w-2xl text-center">
          <div className="inline-block mb-3 px-4 py-1.5 bg-[#004737]/5 border border-[#004737]/10 rounded-full">
            <span className="text-[#004737] text-sm font-medium tracking-wider uppercase">The Process</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-5 text-[#004737] tracking-tight" >
              How It Works
            </h2>
            <p className="text-xl text-[#2d5f4f]/80 font-light leading-relaxed">
              From data ingestion to actionable alerts in 5 simple steps
            </p>
          </div>
          
        </div>
        
    

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10 md:items-stretch">
          <div className="order-2 space-y-8 md:order-1">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentStep ? 1 : 0.8,
                  x: 0,
                  scale: index === currentStep ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14',
                    index === currentStep
                      ? 'border-[#004737] bg-[#004737]/10 text-[#004737] scale-110 [box-shadow:0_0_15px_rgba(0,71,55,0.3)]'
                      : 'border-[#2d5f4f]/30 bg-[#e8f5f1]',
                  )}
                >
                  {stepIcons[index]}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl text-[#004737]" >
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              'relative order-1 h-50 overflow-hidden rounded-xl border border-[#004737]/20 [box-shadow:0_5px_30px_-15px_rgba(0,71,55,0.3)] md:order-2 md:h-full',
            )}
          >
            <AnimatePresence mode="wait">
              {howItWorksSteps.map(
                (step, index) =>
                  index === currentStep && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <img
                        src={stepImages[index]}
                        alt={step.title}
                        className="h-full w-full transform object-cover transition-transform hover:scale-105"
                        width={800}
                        height={1000}
                      />
                      <div className="absolute right-0 bottom-0 left-0 h-2/3 bg-linear-to-b from-transparent to-[#004737]/50" />

                      <div className="absolute bottom-4 left-4  p-2">
                        <span className="text-[#e8f5f1] text-4xl font-light">
                          {step.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
