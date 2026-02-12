"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    content: 'Panto furniture has completely transformed how I approach my design projects. The quality and attention to detail are unmatched in the industry.',
    rating: 5,
    avatar: 'bg-amber-200',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Home Owner',
    content: 'We purchased our entire living room set from Panto and couldn\'t be happier. The delivery was fast and the assembly was a breeze.',
    rating: 5,
    avatar: 'bg-amber-300',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Architect',
    content: 'As an architect, I\'m very particular about furniture. Panto consistently delivers pieces that are both functional and aesthetically pleasing.',
    rating: 5,
    avatar: 'bg-amber-400',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-600 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their Panto experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-amber-200" size={40} />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${testimonial.avatar} flex items-center justify-center`}>
                  <span className="text-amber-800 font-medium">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
