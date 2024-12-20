import { Product } from '@/data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
}

export const ProductGrid = ({ title, products }: ProductGridProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}; 