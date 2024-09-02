import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import ProductImage from "@/components/Products/ProductImage";
import ProductInfo from "@/components/Products/ProductInfo";
import PriceDisplay from "@/components/Products/PriceDisplay";
import RelatedProducts from "@/components/Products/RelatedProducts";
import Counter from "@/shared/components/Counter/Counter";
import { useAtom, useSetAtom } from "jotai";
import { cartAtom, cartItemsAtom } from "@/shared/store/cartItem";
import { calculateDiscountPrice } from "@/shared/utils/utils";
import ErrorMessage from "@/shared/components/ErrorMessage/ErrorMessage";
import SkeletonProductDetail from "@/shared/components/Skeleton/SkeletonProductDetail";
import SkeletonRelatedProducts from "@/shared/components/Skeleton/SkeletonRelatedProducts";

interface CoffeeProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  ingredients: string[];
  nutritionFacts: { [key: string]: string };
}

const fetchProductById = async (id: string): Promise<CoffeeProduct> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coffee/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

const fetchAllProducts = async (): Promise<CoffeeProduct[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/coffee`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useAtom(cartAtom);

  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useQuery<CoffeeProduct, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: !!id,
  });

  const {
    data: allProducts,
    isLoading: allProductsLoading,
    error: allProductsError,
  } = useQuery<CoffeeProduct[], Error>({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  const relatedProducts =
    allProducts && product
      ? getRandomItems(
          allProducts.filter((p) => p.id !== product.id),
          4
        ).map(({ id, name, image }) => ({ id, name, image }))
      : [];

  if (productLoading) return <SkeletonProductDetail />;
  if (productError) return <ErrorMessage message={productError.message} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  const handleAddToCart = () => {
    if (!product) return;

    const discountedPrice = calculateDiscountPrice(product.price, product.discount);
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      discountedPrice: discountedPrice,
      discountPercentage: product.discount,
      quantity: quantity,
      image: product.image,
    };

    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((item) => item.id === product.id);
      let newItems;

      if (existingItemIndex === -1) {
        newItems = [...prevCart.items, newItem];
      } else {
        newItems = prevCart.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      const newTotalAmount = newItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0);

      return {
        ...prevCart,
        items: newItems,
        totalAmount: newTotalAmount,
      };
    });
  };

  const renderRelatedProducts = () => {
    if (allProductsError) {
      return <ErrorMessage message="Failed to load related products" />;
    }
    if (allProductsLoading) {
      return <SkeletonRelatedProducts />;
    }
    return <RelatedProducts products={relatedProducts} />;
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
              <Counter key={product.id} value={quantity} onChange={setQuantity} min={1} max={100} />
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#ff6600] hover:bg-[#e65c00] text-white py-2 px-4 rounded transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {renderRelatedProducts()}
    </div>
  );
}
