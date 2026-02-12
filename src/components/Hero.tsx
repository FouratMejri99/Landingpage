"use client";

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDF8F3]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-amber-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-amber-600 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
              New Arrivals
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Discover the
              <span className="text-amber-600"> Best </span>
              Furniture
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              Transform your space with our curated collection of premium furniture.
              Designed for comfort, crafted for style.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                Shop Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors">
                View Collection
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-amber-800 text-xl font-medium">Hero Image Placeholder</span>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="text-amber-600" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
