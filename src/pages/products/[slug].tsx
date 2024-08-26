import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { coffeeProducts } from "@/shared/data/coffeeProducts";
import ProductImage from "@/components/Products/ProductImage";
import ProductInfo from "@/components/Products/ProductInfo";
import PriceDisplay from "@/components/Products/PriceDisplay";
import RelatedProducts from "@/components/Products/RelatedProducts";

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    ingredients: string[];
    nutritionFacts: { [key: string]: string };
  };
  relatedProducts: Array<{
    id: string;
    name: string;
    slug: string;
    image: string;
  }>;
}

export default function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ProductImage src={product.image} alt={product.name} />
        </div>
        <div className="md:w-1/2">
          <ProductInfo
            name={product.name}
            description={product.description}
            ingredients={product.ingredients}
            nutritionFacts={product.nutritionFacts}
          />
          <PriceDisplay price={product.price} discount={product.discount} />
          <button className="bg-[#661d0a] text-white py-2 px-4 rounded hover:bg-[#4a1507] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      <RelatedProducts products={relatedProducts} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = coffeeProducts.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = coffeeProducts.find((p) => p.slug === params?.slug);

  if (!product) {
    return { notFound: true };
  }

  const relatedProducts = coffeeProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4)
    .map(({ id, name, slug, image }) => ({ id, name, slug, image }));

  return {
    props: {
      product,
      relatedProducts,
    },
  };
};
