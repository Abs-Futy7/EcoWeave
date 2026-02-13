import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo/logo2.png" 
                alt="EcoWeave Logo" 
                width={32} 
                height={32}
                className='rounded-lg'
              />
              <h3 className="text-lg font-bold text-primary">EcoWeave</h3>
            </div>
            <p className="text-sm text-foreground/70 mb-4">
              AI-driven forensic risk platform making textile pollution financially irrational in Bangladesh.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/sample-report" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Sample Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Dhaka, Bangladesh</li>
              <li>
                <a href="mailto:info@ecoweave.ai" className="hover:text-primary transition-colors">
                  info@ecoweave.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} EcoWeave. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
