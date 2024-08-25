import ProductCard from "@/shared/components/ProductCard/ProductCard";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
}

interface HomePageProductsProps {
  products: Product[];
}

export default function HomePageProducts({ products }: HomePageProductsProps) {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl text-[#661d0a] mb-8 uppercase font-bold">
        Our Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
