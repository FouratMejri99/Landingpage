"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Experiences - Image left, Text right */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            {/* Decorative grey rounded rectangle behind image - hidden on small to avoid overflow */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-[90%] bg-gray-100 rounded-2xl sm:rounded-3xl hidden sm:block" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src="/2.jpg"
                alt="Living room experience"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <p className="text-[#E58411] font-medium text-xs sm:text-sm uppercase tracking-wider">
              EXPERIENCES
            </p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E1E1E] leading-tight">
              We Provide You The Best Experience
            </h2>
            <p className="mt-4 sm:mt-6 text-[#5C5C5C] text-sm sm:text-base leading-relaxed max-w-lg">
              You don&apos;t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[#E58411] font-medium hover:text-[#c9710e] transition-colors"
            >
              More Info
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Section 2: Materials - Text left, Images right (stack on mobile, collage on desktop) */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-1"
          >
            <p className="text-[#E58411] font-medium text-xs sm:text-sm uppercase tracking-wider">
              MATERIALS
            </p>
            <h2 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E1E1E] leading-tight">
              Very Serious Materials For Making Furniture
            </h2>
            <p className="mt-4 sm:mt-6 text-[#5C5C5C] text-sm sm:text-base leading-relaxed max-w-lg">
              Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[#E58411] font-medium hover:text-[#c9710e] transition-colors"
            >
              More Info
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:order-2"
          >
            {/* Mobile: simple vertical stack of 3 images */}
            <div className="flex flex-col gap-4 sm:hidden">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src="/6.jpg" alt="Interior" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] max-h-[280px]">
                <img src="/8.jpg" alt="Interior" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] max-h-[300px]">
                <img src="/1.jpg" alt="Furniture materials" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Desktop: overlapping collage */}
            <div className="hidden sm:block relative min-h-[320px] lg:min-h-[400px]">
              <div className="absolute left-0 top-0 flex flex-col gap-4 z-10">
                <div className="rounded-2xl overflow-hidden shadow-lg w-44 sm:w-52 aspect-[4/3]">
                  <img src="/6.jpg" alt="Interior" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg w-44 sm:w-52 aspect-[3/4]">
                  <img src="/1.jpg" alt="Interior" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-lg w-56 sm:w-64 lg:w-72 aspect-[3/4] z-0">
                <img src="/8.jpg" alt="Furniture materials" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
