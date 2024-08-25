import HomePageHeader from "@/components/Home/HomePageHeader";
import HomePageStory from "@/components/Home/HomePageStory";
import HomePageProducts from "@/components/Home/HomePageProducts";
import { coffeeProducts } from "@/shared/data/coffeeProducts";

export default function Home() {
  const featuredCoffeeProducts = coffeeProducts.slice(0, 3);

  return (
    <main className="min-h-screen">
      <HomePageHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HomePageStory />
        <HomePageProducts products={featuredCoffeeProducts} />
      </div>
    </main>
  );
}
