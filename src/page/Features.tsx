"use client";

import { motion } from 'framer-motion';
import { features } from '@/data/features';

export default function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Column Horizontal Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title.replace('\n', ' ')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {feature.isMain ? (
                <div className="mb-2 sm:mb-4">
                  <h3 className="font-Gilroy-Bold text-2xl sm:text-3xl lg:text-[42px] leading-tight text-[#1E1E1E] px-3 py-2 sm:px-4 sm:py-2 inline-block" style={{ fontWeight: 600 }}>
                    {feature.title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h3>
                </div>
              ) : (
                <>
                  <h3 className="font-Gilroy-Bold text-[#1E1E1E] text-base sm:text-lg mb-2 sm:mb-3" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="font-Gilroy-Regular text-[#1E1E1E] text-sm mb-3 sm:mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <button className="text-[#E58411] font-Gilroy-Medium hover:text-[#c9710e] transition-colors flex items-center gap-2 text-sm">
                    More Info
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
