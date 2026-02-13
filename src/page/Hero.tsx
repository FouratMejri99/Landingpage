"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const colorSwatches = [
  { color: '#E58411;', label: 'Tan' },
  { color: '#2DD4BF', label: 'Teal' },
  { color: '#6B7280', label: 'Grey' },
];

export default function Hero() {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - show more of the bottom */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.jpg)', backgroundPosition: 'center bottom' }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Pill-shaped color selector - upper left */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute left-[17%] top-[37%] z-10 hidden sm:block"
      >
        <div className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-white/20 backdrop-blur-sm shadow-lg">
          {colorSwatches.map((swatch, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedColor(i)}
              className="w-8 h-8 rounded-full border-2 border-white/90 flex items-center justify-center transition-transform hover:scale-110"
              style={{ backgroundColor: swatch.color }}
              aria-label={`Color ${swatch.label}`}
            >
              {selectedColor === i && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
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
        className="absolute left-[19%] top-[46%] z-10 w-14 h-14 rounded-full hidden sm:flex items-center justify-center pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.4))',
          boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
          border: '1px solid rgba(255,255,255,0.5)',
        }}
      >
        <div className="w-3 h-3 rounded-full bg-white shadow-sm" />
      </motion.div>

      {/* Left Bottom Pointer - smaller decorative pointer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="absolute z-10 hidden sm:flex items-center gap-2"
        style={{
          left: '8%',
          bottom: '43%',
        }}
      >
        <div className="w-7 h-7 rounded-full border-2 border-white/60 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </motion.div>

      {/* Right Pointer - smaller decorative pointer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute z-10 hidden lg:flex flex-col items-center gap-2"
        style={{
          right: '3%',
          top: '65%',
          transform: 'translateY(-50%)',
        }}
      >

    
        <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
      </motion.div>

      {/* Bottom fade into Features (gray-50) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[35%] min-h-[280px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(249, 250, 251, 0.3) 70%, rgb(249, 250, 251) 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-20 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Content - shifted up a bit, search bar closer to text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full -mt-12 sm:-mt-16"
        >
          <h1 className="font-Gilroy-Bold text-white weight-400 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight" style={{ fontFamily: 'Gilroy-Bold, sans-serif', letterSpacing: '-0.01em' }}>
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
