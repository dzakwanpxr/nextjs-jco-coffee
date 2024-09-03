import ProductGrid from "@/components/Products/ProductGrid";
import ErrorMessage from "@/shared/components/ErrorMessage/ErrorMessage";
import SkeletonProductGrid from "@/shared/components/Skeleton/SkeletonProductGrid";
import { Product } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const {
    data: coffeeProducts,
    isLoading,
    error,
  } = useQuery<Product[], Error>({
    queryKey: ["coffeeProducts"],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coffee`);
      if (!response.ok) {
        throw new Error("An error occurred while fetching the data");
      }
      return response.json();
    },
  });

  if (error) return <ErrorMessage message={error instanceof Error ? error.message : "An unknown error occurred"} />;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <h1 className="text-center text-4xl md:text-5xl text-[#661d0a] mb-8">Our Products</h1>
        {isLoading ? <SkeletonProductGrid count={8} /> : <ProductGrid products={coffeeProducts ?? []} />}
      </section>
    </main>
  );
}
