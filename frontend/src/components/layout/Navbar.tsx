'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navbarItems } from '@/lib/navbar';
import RequestDemoModal from './RequestDemoModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#003F3A] border-b border-[#004737]/20">
        <div className='max-w-7xl mx-auto w-full flex items-center justify-between py-5 px-6'>
          {/* Logo Section */}
          <Link href="/" className='flex items-center gap-2'>
            <Image 
              src="/logo/logo2.png" 
              alt="EcoWeave Logo" 
              width={32} 
              height={32}
              className='rounded-lg'
            />
            <h1 className="text-xl font-bold text-white">EcoWeave</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-10'>
            {navbarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right Side - Desktop */}
          <div className='hidden lg:flex items-center gap-4'>
            <button className='text-white/80 hover:text-white text-sm font-medium uppercase flex items-center gap-1'>
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-[#004737] px-6 py-2.5 rounded-full font-bold text-sm uppercase hover:bg-gray-100 transition-all duration-300"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 text-white transition-colors'
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden bg-[#004737] border-t border-white/10'
            >
              <div className='flex flex-col px-6 py-4 gap-3'>
                {navbarItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`py-2 text-sm font-medium uppercase tracking-wide transition-colors duration-200 ${
                        isActive ? 'text-white' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className='flex flex-col gap-2 pt-3 border-t border-white/10'>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="bg-white text-[#004737] px-6 py-3 rounded-full font-bold text-sm uppercase hover:bg-gray-100 transition-all duration-300 w-full"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Request Demo Modal */}
      <RequestDemoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
