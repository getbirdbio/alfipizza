'use client'

import { products } from '@/data/products'
import { ProductCard } from './ProductCard'
import Location from './Location'

export default function MenuGrid() {
  return (
    <div className="space-y-32 py-16">
      {/* Garlic Section */}
      <section id="garlic" className="scroll-mt-24">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">GARLIC</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'GARLIC')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Classics Section */}
      <section id="classics" className="scroll-mt-24">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">THE CLASSICS</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'CLASSICS')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Alfi Favs Section */}
      <section id="alfi-favs" className="scroll-mt-24">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">ALFI FAVS</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'ALFI_FAVS')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Dips Section */}
      <section id="dips" className="scroll-mt-24">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">DIP SAUCE</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'DIPS')
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>

      {/* Drinks Section */}
      <section id="drinks" className="scroll-mt-24">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">DRINKS</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'DRINKS')
            .map(product => (
              <ProductCard key={product.id} product={product} variant="compact" />
            ))}
        </div>
      </section>

      {/* Dessert Section */}
      <section id="dessert" className="scroll-mt-24">
        <h2 className="text-5xl font-recoleta text-[#f6f6ed] text-center mb-16">DESSERT</h2>
        <div className="flex flex-wrap justify-center items-start gap-x-16 gap-y-24 max-w-7xl mx-auto px-4">
          {products
            .filter(p => p.category === 'DESSERT')
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