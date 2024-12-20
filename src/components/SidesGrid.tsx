'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const sides = [
  {
    id: 1,
    name: 'GARLIC PIZZA BREAD',
    description: 'With rosemary & sea salt',
    price: 'R55',
    image: '/sides/garlic-bread.jpg'
  },
  {
    id: 2,
    name: 'GARLIC PIZZA BREAD WITH CHEESE',
    description: 'Classic garlic bread topped with mozzarella',
    price: 'R65',
    image: '/sides/garlic-bread-cheese.jpg'
  },
  {
    id: 3,
    name: 'MIXED SALAD',
    description: 'Mixed leaves, tomato, radish, vinaigrette',
    price: 'R45',
    image: '/sides/salad.jpg'
  },
  {
    id: 4,
    name: 'GORDAL OLIVES',
    description: 'Premium Spanish olives',
    price: 'R45',
    image: '/sides/olives.jpg'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const SidesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Sides</h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {sides.map((side) => (
            <motion.div
              key={side.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={side.image}
                  alt={side.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={side.id <= 3}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{side.name}</h3>
                  <span className="text-lg font-medium">{side.price}</span>
                </div>
                <p className="text-gray-600">{side.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SidesGrid 