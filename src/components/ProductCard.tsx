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
        <div className="relative mb-2 w-[160px] h-[160px]">
          <Image
            src={getImagePath(product)}
            alt={product.name}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Name */}
        <h2 className="text-xl font-recoleta text-[#f6f6ed] text-center uppercase leading-tight">
          {product.name}
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-[280px]">
      {/* Image Container */}
      <div className="relative mb-3 w-[280px] h-[280px]">
        <Image
          src={getImagePath(product)}
          alt={product.name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 280px) 100vw, 280px"
        />
      </div>

      {/* Name */}
      <h3 className="text-2xl font-recoleta text-[#f6f6ed] text-center">
        {product.name}
      </h3>
    </div>
  );
} 