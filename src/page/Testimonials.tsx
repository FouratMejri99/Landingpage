"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsToShow = 3;
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  const scroll = (direction: 'left' | 'right') => {
    const next = direction === 'left'
      ? Math.max(0, currentIndex - 1)
      : Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(next);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const cardWidth = isMobile ? 280 : 320;
    const gap = isMobile ? 16 : 24;
    scrollRef.current?.scrollTo({
      left: next * (cardWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-[#E58411] font-medium text-xs sm:text-sm uppercase tracking-wider">
            TESTIMONIALS
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E1E]">
            Our Client Reviews
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1E1E1E] hover:bg-gray-50 active:bg-gray-100 transition-colors z-10 min-w-[44px] min-h-[44px]"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </button>

          <div
            ref={scrollRef}
            className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide flex gap-4 sm:gap-6 pb-4 snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
              >
                {/* Card: background with white card overlay */}
                <div className="relative h-[380px] sm:h-[420px] rounded-xl sm:rounded-2xl overflow-hidden">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img
                      src={t.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* White card */}
                  <div className="absolute bottom-4 left-3 right-3 sm:bottom-6 sm:left-4 sm:right-4 rounded-xl sm:rounded-2xl bg-white shadow-xl pt-12 sm:pt-14 pb-4 sm:pb-6 px-4 sm:px-5 text-center overflow-visible">
                    <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white overflow-hidden shadow-lg bg-gray-100">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-[#1E1E1E] text-sm sm:text-base">{t.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1">{t.role}</p>
                    <p className="mt-2 sm:mt-3 text-[#1E1E1E] text-xs sm:text-sm leading-relaxed line-clamp-4">
                      &ldquo;{t.content}&rdquo;
                    </p>
                    <div className="flex justify-center gap-0.5 mt-3 sm:mt-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                            i <= t.rating
                              ? 'text-[#E58411] fill-[#E58411]'
                              : 'text-gray-200'
                          }`}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1E1E1E] hover:bg-gray-50 active:bg-gray-100 transition-colors z-10 min-w-[44px] min-h-[44px]"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
