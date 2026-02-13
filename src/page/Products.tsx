"use client";

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { products, categories } from '@/data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Chair');
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const cardWidth = isMobile ? 240 : 268;
    const gap = isMobile ? 16 : 24;
    const step = cardWidth + gap;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 bg-[#F7F7F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E1E] inline-block pb-2 ">
            Best Selling Product
          </h2>

          {/* Category Pills */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors border min-h-[44px]',
                  activeCategory === cat
                    ? 'bg-gray-200 text-[#1E1E1E] border-gray-200'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product area with arrows + scrollable grid */}
        <div className="relative flex items-center gap-2 sm:gap-4 mt-8 sm:mt-10">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1E1E1E] hover:bg-gray-50 active:bg-gray-100 transition-colors z-10 min-w-[44px] min-h-[44px]"
            aria-label="Previous products"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </button>

          {/* Scrollable product grid */}
          <div
            ref={scrollRef}
            className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide flex gap-4 sm:gap-6 pb-4 snap-x snap-mandatory"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[240px] sm:w-[268px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  {/* Product image */}
                  <div className="w-full aspect-[268/280] bg-[#FAFAFA] flex items-center justify-center p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 pb-5 relative">
                    <p className="text-sm text-[#8D8D8D] mb-1">{product.category}</p>
                    <h3 className="font-bold text-[#0D1B39] text-lg">{product.name}</h3>
                    <div className="flex items-center gap-0.5 mt-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <div className="mt-3 flex items-end justify-between">
                      <span className="text-xl font-bold text-[#1E1E1E]">$ {product.price}</span>
                      <button
                        className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-[#0D1B39] text-white flex items-center justify-center hover:bg-gray-800 active:bg-gray-700 transition-colors shadow-md -mb-1"
                        aria-label="Add to cart"
                      >
                        <Plus className="w-5 h-5" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1E1E1E] hover:bg-gray-50 active:bg-gray-100 transition-colors z-10 min-w-[44px] min-h-[44px]"
            aria-label="Next products"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
          </button>
        </div>

        {/* View All link */}
        <div className="text-center mt-10">
          <Link
            href="#"
            className="text-[#E58411] font-medium hover:text-[#c9710e] transition-colors inline-flex items-center gap-1"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
