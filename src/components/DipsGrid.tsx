'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const dips = [
  {
    id: 1,
    name: 'GARLIC & HERB',
    description: 'Classic garlic and herb dip',
    price: 'R20',
    image: '/dips/garlic-herb.jpg'
  },
  {
    id: 2,
    name: 'XL GARLIC & HERB',
    description: 'Extra large portion of our classic garlic and herb dip',
    price: 'R35',
    image: '/dips/xl-garlic-herb.jpg'
  },
  {
    id: 3,
    name: 'CHIMICHURRI',
    description: 'Fresh herb and garlic sauce',
    price: 'R22',
    image: '/dips/chimichurri.jpg'
  },
  {
    id: 4,
    name: 'HICKORY SMOKED BBQ',
    description: 'Smoky barbecue sauce',
    price: 'R20',
    image: '/dips/bbq.jpg'
  },
  {
    id: 5,
    name: 'TRUFFLE MAYO',
    description: 'Truffle-infused mayonnaise',
    price: 'R22',
    image: '/dips/truffle-mayo.jpg'
  },
  {
    id: 6,
    name: 'VEGAN HOLY F*CK MAYO',
    description: 'Spicy vegan mayonnaise',
    price: 'R20',
    image: '/dips/vegan-spicy-mayo.jpg'
  },
  {
    id: 7,
    name: 'VEGAN GARLIC & HERB',
    description: 'Plant-based garlic and herb dip',
    price: 'R20',
    image: '/dips/vegan-garlic-herb.jpg'
  },
  {
    id: 8,
    name: 'CHILLI OIL',
    description: 'Spicy infused oil',
    price: 'R15',
    image: '/dips/chilli-oil.jpg'
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

const DipsGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Dips</h1>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {dips.map((dip) => (
            <motion.div
              key={dip.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-40 w-full">
                <Image
                  src={dip.image}
                  alt={dip.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={dip.id <= 4}
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{dip.name}</h3>
                  <span className="text-lg font-medium">{dip.price}</span>
                </div>
                <p className="text-sm text-gray-600">{dip.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default DipsGrid 