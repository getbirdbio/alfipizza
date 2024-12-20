'use client'

import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'compact';
}

export const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
  // Map product names to actual image filenames
  const getImagePath = (product: Product) => {
    // If the product has an image path defined, use it
    if (product.image) {
      return product.image;
    }

    // Otherwise, use the image map for pizzas
    const imageMap: { [key: string]: string } = {
      'CHEESY GARLIC': '/pizzas/cheesy_garlic.png',
      'GARLIC BREAD': '/pizzas/garlic_bread.png',
      'NAP GARLIC PARMESAN': '/pizzas/nap_garlic_parm.png',
      'GARLIC AND RICOTTA': '/pizzas/garlic_ricotta.png',
      'MARGHERITA': '/pizzas/margherita.png',
      'SICILIAN': '/pizzas/sicilian.png',
      'FUNGHI': '/pizzas/fungi.png',
      'DIAVOLA': '/pizzas/diavola.png',
      'QUATRO STAGIONI': '/pizzas/quatro-stagioni.png',
      'MELANZANE': '/pizzas/melanzane.png',
      'MEXICANA': '/pizzas/mexicana.png',
      'DOUBLE PEPPERONI': '/pizzas/double_pepperoni.png',
      'CHORIZO': '/pizzas/chorizo_pine.png',
      'PANCETTA': '/pizzas/pancetta_avo.png',
    };

    return imageMap[product.name] || '/pizzas/placeholder.png';
  };

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
      <div className={`relative mb-6 ${product.category === 'DIPS' ? 'w-[200px] h-[200px]' : 'w-[280px] h-[280px]'}`}>
        <Image
          src={getImagePath(product)}
          alt={product.name}
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col items-center min-h-[120px] justify-between">
        {/* Name */}
        <h2 className={`font-recoleta text-[#f6f6ed] mb-4 text-center uppercase ${product.category === 'DIPS' ? 'text-2xl' : 'text-4xl'}`}>
          {product.name}
        </h2>

        {/* Description */}
        {product.description && (
          <p className="text-base font-messina text-[#f6f6ed] text-center leading-snug tracking-wide mb-4">
            {product.description}
          </p>
        )}

        {/* Price */}
        {product.price > 0 && (
          <div className="text-center">
            <div className="text-lg font-messina text-[#f6f6ed] tracking-wider">
              R{product.price}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}; 