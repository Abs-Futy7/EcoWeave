'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import RequestDemoModal from '@/components/layout/RequestDemoModal';

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Make Compliance Profitable?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Join forward-thinking factories using EcoWeave to prevent pollution, 
              protect profits, and build trust with buyers.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
              >
                Request Demo
              </Button>
              <Button variant="outline" size="lg">
                <a href="mailto:info@ecoweave.ai">Contact Sales</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
