'use client'

import Image from 'next/image';
import { Product } from '@/data/products';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

function getImagePath(product: Product): string {
  return product.image || '/pizzas/default.png';
}

export function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  if (variant === 'compact') {
    return (
      <div className="flex flex-col items-center w-[200px]">
        {/* Image Container */}
        <div className="relative mb-4 w-[160px] h-[160px]">
          <Image
            src={getImagePath(product)}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col items-center min-h-[80px] justify-between">
          {/* Name */}
          <h2 className="text-xl font-recoleta text-[#f6f6ed] mb-2 text-center uppercase leading-tight">
            {product.name}
          </h2>

          {/* Description */}
          {product.description && (
            <p className="text-sm font-messina text-[#f6f6ed] text-center leading-tight tracking-wide opacity-90">
              {product.description}
            </p>
          )}

          {/* Price */}
          {product.price > 0 && (
            <div className="text-center mt-2">
              <div className="text-lg font-messina text-[#f6f6ed] tracking-wider">
                R{product.price}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-[280px]">
      {/* Image Container */}
      <div className="relative mb-6 w-[280px] h-[280px]">
        <Image
          src={getImagePath(product)}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 280px) 100vw, 280px"
        />
      </div>

      {/* Product Info */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-recoleta text-[#f6f6ed]">{product.name}</h3>
        <p className="text-sm text-[#f6f6ed] opacity-80">{product.description}</p>
        {product.subDescription && (
          <p className="text-xs text-[#f6f6ed] opacity-60 italic">{product.subDescription}</p>
        )}
        <p className="text-lg font-semibold text-[#f6f6ed]">R{product.price}</p>
      </div>
    </div>
  );
} 