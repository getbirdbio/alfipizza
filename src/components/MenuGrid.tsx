'use client'

import { products } from '@/data/products'
import { ProductCard } from './ProductCard'
import Location from './Location'

export default function MenuGrid() {
  return (
    <div className="space-y-16 py-16">
      {/* Garlic Section */}
      <section id="garlic" className="scroll-mt-16">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-8">GARLIC</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-12 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'GARLIC')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Classics Section */}
      <section id="classics" className="scroll-mt-16">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-8">THE CLASSICS</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-12 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'CLASSICS')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Alfi Favs Section */}
      <section id="alfi-favs" className="scroll-mt-16">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-8">ALFI FAVS</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-12 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'ALFI_FAVS')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Location Section */}
      <Location />
    </div>
  )
} 