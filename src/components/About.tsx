"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-amber-800 text-xl font-medium">About Image Placeholder</span>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-amber-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-600 rounded-2xl opacity-20"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
              Crafting Comfort for Over 20 Years
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              At Panto, we believe that beautiful furniture should be accessible to everyone.
              Founded in 2004, we've been dedicated to creating thoughtfully designed,
              sustainably sourced furniture that transforms houses into homes.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              Our team of skilled artisans combines traditional craftsmanship with modern
              techniques to deliver furniture that stands the test of time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-amber-600">20+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-600">50K+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-amber-600">500+</h3>
                <p className="text-gray-600">Products</p>
              </div>
            </div>

            <button className="mt-10 px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
