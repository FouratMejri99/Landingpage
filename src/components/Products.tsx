"use client";

import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: 'Modern Lounge Chair',
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 124,
    category: 'Chairs',
    image: 'bg-amber-200',
  },
  {
    id: 2,
    name: 'Wooden Coffee Table',
    price: 189,
    originalPrice: 249,
    rating: 4.9,
    reviews: 89,
    category: 'Tables',
    image: 'bg-amber-300',
  },
  {
    id: 3,
    name: 'Velvet Sofa Set',
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviews: 203,
    category: 'Sofas',
    image: 'bg-amber-400',
  },
  {
    id: 4,
    name: 'Minimalist Lamp',
    price: 79,
    originalPrice: 99,
    rating: 4.6,
    reviews: 67,
    category: 'Lamps',
    image: 'bg-amber-100',
  },
  {
    id: 5,
    name: 'Dining Chair Set',
    price: 449,
    originalPrice: 599,
    rating: 4.8,
    reviews: 156,
    category: 'Chairs',
    image: 'bg-amber-500',
  },
  {
    id: 6,
    name: 'Bookshelf Unit',
    price: 349,
    originalPrice: 449,
    rating: 4.7,
    reviews: 98,
    category: 'Storage',
    image: 'bg-amber-600',
  },
];

export default function Products() {
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
            Our Products
          </span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Popular Furniture
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most loved furniture pieces, chosen by thousands of happy customers.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {['All', 'Chairs', 'Tables', 'Sofas', 'Lamps', 'Storage'].map((category, index) => (
            <button
              key={category}
              className={cn(
                'px-6 py-2 rounded-full font-medium transition-colors',
                index === 0
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-amber-100 hover:text-amber-600'
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className={cn('aspect-square relative', product.image)}>
                <div className="absolute inset-0 flex items-center justify-center text-amber-800 font-medium">
                  {product.name} Image
                </div>
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-amber-600 hover:text-white transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-amber-600 hover:text-white transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
                {/* Sale Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Sale
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-amber-600 font-medium">{product.category}</p>
                <h3 className="text-lg font-semibold text-gray-900 mt-1">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="ml-1 text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-white border-2 border-amber-600 text-amber-600 font-semibold rounded-lg hover:bg-amber-600 hover:text-white transition-colors">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
