import ProductGrid from "@/components/Products/ProductGrid";
import { coffeeProducts } from "@/shared/data/coffeeProducts";

export default function Products() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <h1 className="text-center text-4xl md:text-5xl text-[#661d0a] mb-8">
          Our Products
        </h1>
        <ProductGrid products={coffeeProducts} />
      </section>
    </main>
  );
}
