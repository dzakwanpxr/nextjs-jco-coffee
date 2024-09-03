import { useQuery } from "@tanstack/react-query";
import HomePageHeader from "@/components/Home/HomePageHeader";
import HomePageStory from "@/components/Home/HomePageStory";
import HomePageProducts from "@/components/Home/HomePageProducts";
import { getRandomItems } from "@/shared/utils/utils";
import { fetchAllProducts } from "@/shared/services/api";
import ErrorMessage from "@/shared/components/ErrorMessage/ErrorMessage";
import SkeletonProductGrid from "@/shared/components/Skeleton/SkeletonProductGrid";

export default function Home() {
  const {
    data: allProducts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  const featuredCoffeeProducts = allProducts ? getRandomItems(allProducts, 3) : [];

  if (error) return <ErrorMessage message="Failed to load products" />;

  return (
    <main className="min-h-screen">
      <HomePageHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageStory />
        {isLoading ? <SkeletonProductGrid count={3} /> : <HomePageProducts products={featuredCoffeeProducts} />}
      </div>
    </main>
  );
}
