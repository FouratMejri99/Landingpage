"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';

const colorSwatches = [
  { color: '#E58411;', label: 'Tan' },
  { color: '#2DD4BF', label: 'Teal' },
  { color: '#6B7280', label: 'Grey' },
];

export default function Hero() {
  const [selectedColor, setSelectedColor] = useState(0);

  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 sm:pt-60">
      {/* Background Image - with priority loading */}
      <Image
        src="/bg.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
        style={{ objectPosition: 'center bottom' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Pill-shaped color selector - upper left */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-[5%] xl:left-[10%] 2xl:left-[17%] top-[25%] xl:top-[30%] 2xl:top-[50%] z-10 hidden 2xl:block"
      >
        <div className="relative flex items-center gap-1 sm:gap-1.5 md:gap-2 px-1.5 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 rounded-full bg-white/20 backdrop-blur-sm shadow-lg">
          {colorSwatches.map((swatch, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedColor(i)}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border-2 border-white/90 flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: swatch.color }}
              aria-label={`Color ${swatch.label}`}
            >
              {selectedColor === i && <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" strokeWidth={3} />}
            </button>
          ))}
          {/* Pointer */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white/20" />
        </div>
      </motion.div>

      {/* Circular glassy badge - below the pill */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="absolute left-[60%] xl:left-[12%] 2xl:left-[19%] top-[32%] xl:top-[38%] 2xl:top-[57%] z-10 w-8 sm:w-10 md:w-12 lg:w-14 h-8 sm:h-10 md:h-12 lg:h-14 rounded-full hidden 2xl:flex items-center justify-center pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4))',
          boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
          border: '1px solid rgba(255,255,255,0.5)',
        }}
      >
        <div className="w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1.5 sm:h-2 md:h-2.5 lg:h-3 rounded-full bg-white shadow-sm" />
      </motion.div>

      {/* Left Bottom Pointer - smaller decorative pointer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute z-10 hidden 2xl:flex items-center gap-2"
        style={{
          left: '8%',
          bottom: '36%',
        }}
      >
        <div className="w-4 sm:w-5 md:w-6 lg:w-7 h-4 sm:h-5 md:h-6 lg:h-7 rounded-full border-2 border-white/60 flex items-center justify-center">
          <div className="w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:w-2 rounded-full bg-white" />
        </div>
      </motion.div>

      {/* Right Pointer - smaller decorative pointer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute z-10 hidden 2xl:flex flex-col items-center gap-2"
        style={{
          right: '2%',
          top: '71%',
          transform: 'translateY(-50%)',
        }}
      >

    
        <div className="w-5 sm:w-6 md:w-7 lg:w-8 h-5 sm:h-6 md:h-7 lg:h-8 rounded-full border-2 border-white/60 flex items-center justify-center">
          <div className="w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:w-2 rounded-full bg-white/50" />
        </div>
      </motion.div>

      {/* Bottom fade into Features (gray-50) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35%] min-h-[280px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(249, 250, 251, 0.3) 70%, rgb(249, 250, 251) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-12 sm:pt-0 sm:pb-16 lg:py-20 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Content - shifted up a bit, search bar closer to text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full -mt-180 sm:-mt-180 md:-mt-180 lg:-mt-180"
        >
          <h1 className="font-Gilroy-Bold text-white font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight" style={{ fontFamily: 'bold, sans-serif', letterSpacing: '-0.01em' }}>
            <span className="block">Make Your Interior More</span>
            <span className="block">Minimalistic &amp; Modern</span>
          </h1>
          <p className="font-Gilroy-Regular text-white mt-4 text-base sm:text-lg md:text-xl" style={{ fontFamily: 'Gilroy-Regular, sans-serif', lineHeight: '160%', textAlign: 'center', opacity: 0.9 }}>
            <span className="block">Turn your room with panto into a lot more minimalist</span>
            <span className="block">and modern with ease and speed</span>
          </p>
          
          {/* Search Bar - full width on mobile, max width on larger */}
          <div className="mt-6 flex items-center justify-center w-full px-2 sm:px-0">
            <div className="relative w-full max-w-[344px] h-12 sm:h-14">
              <input
                type="text"
                placeholder="Search furniture"
                className="w-full h-full text-white placeholder-white/60 text-base sm:text-lg outline-none rounded-full pl-5 pr-12 border border-white/60 bg-white/15 backdrop-blur-sm"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

