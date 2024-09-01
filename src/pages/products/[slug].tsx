import { useState } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import { coffeeProducts } from "@/shared/data/coffeeProducts";
import ProductImage from "@/components/Products/ProductImage";
import ProductInfo from "@/components/Products/ProductInfo";
import PriceDisplay from "@/components/Products/PriceDisplay";
import RelatedProducts from "@/components/Products/RelatedProducts";
import Counter from "@/shared/components/Counter/Counter";
import { useSetAtom } from "jotai";
import { cartItemsAtom } from "@/shared/store/cartItem";
import { calculateDiscountPrice } from "@/shared/utils/utils";

interface ProductDetailProps {
  product: {
    id: number;
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
    id: number;
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
  const [quantity, setQuantity] = useState(1);
  const setCartItems = useSetAtom(cartItemsAtom);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const discountedPrice = calculateDiscountPrice(
      product.price,
      product.discount
    );

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex === -1) {
        return [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            discountedPrice: discountedPrice,
            discountPercentage: product.discount,
            quantity: quantity,
            image: product.image,
          },
        ];
      }

      return prevItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    });
  };

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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <div className="w-full sm:w-auto">
              <Counter
                value={quantity}
                onChange={setQuantity}
                min={1}
                max={100}
              />
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#661d0a] text-white py-2 px-4 rounded hover:bg-[#4a1507] transition-colors"
            >
              Add to Cart
            </button>
          </div>
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
