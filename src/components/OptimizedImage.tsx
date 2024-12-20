'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  fill = false,
  sizes = '100vw'
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="absolute inset-0 bg-gray-200 animate-pulse"
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      
      <Image
        src={src}
        alt={alt}
        className={`duration-700 ease-in-out ${
          isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        priority={priority}
        fill={fill}
        sizes={sizes}
      />
    </div>
  )
} 