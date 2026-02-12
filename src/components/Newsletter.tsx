"use client";

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-amber-500 font-medium text-sm uppercase tracking-wider">
            Newsletter
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-6 text-lg text-gray-400">
            Be the first to know about new arrivals, exclusive offers, and design inspiration.
          </p>

          {/* Form */}
          <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
