import ProductCard from "@/shared/components/ProductCard/ProductCard";
import { Product } from "@/types/types";

export default function HomePageProducts({ products }: { products: Product[] }) {
  return (
    <section className="py-12 ">
      <h2 className="text-center text-3xl text-[#661d0a] mb-8 uppercase font-bold">Our Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
