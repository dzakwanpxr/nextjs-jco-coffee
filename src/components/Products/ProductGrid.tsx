import ProductCard from "@/shared/components/ProductCard/ProductCard";

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  discount: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
