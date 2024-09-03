import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useAtom, useSetAtom } from "jotai";
import ProductImage from "@/components/Products/ProductImage";
import ProductInfo from "@/components/Products/ProductInfo";
import PriceDisplay from "@/components/Products/PriceDisplay";
import RelatedProducts from "@/components/Products/RelatedProducts";
import Counter from "@/shared/components/Counter/Counter";
import ErrorMessage from "@/shared/components/ErrorMessage/ErrorMessage";
import SkeletonProductDetail from "@/shared/components/Skeleton/SkeletonProductDetail";
import SkeletonRelatedProducts from "@/shared/components/Skeleton/SkeletonRelatedProducts";
import { cartItemsAtom } from "@/shared/store/cartAtoms";
import { calculateDiscountPrice, getRandomItems } from "@/shared/utils/utils";
import { CartItem, Product } from "@/types/types";
import { fetchAllProducts, fetchProductById } from "@/shared/services/api";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  const {
    data: product,
    isLoading: productLoading,
    error: productError,
  } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: !!id,
  });

  const {
    data: allProducts,
    isLoading: allProductsLoading,
    error: allProductsError,
  } = useQuery<Product[], Error>({
    queryKey: ["allProducts"],
    queryFn: fetchAllProducts,
  });

  const relatedProducts = useMemo(() => {
    if (allProducts && product) {
      return getRandomItems(
        allProducts.filter((p) => p.id !== product.id),
        4
      );
    }
    return [];
  }, [allProducts, product]);

  const handleAddToCart = () => {
    if (!product) return;

    const discountedPrice = calculateDiscountPrice(product.price, product.discount);
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      discountedPrice: discountedPrice,
      discountPercentage: product.discount,
      quantity: quantity,
      image: product.image,
    };

    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    let newItems: CartItem[];

    if (existingItemIndex === -1) {
      newItems = [...cartItems, newItem];
    } else {
      newItems = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item
      );
    }

    setCartItems(newItems);
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

  if (productLoading) return <SkeletonProductDetail />;
  if (productError) return <ErrorMessage message={productError.message} />;
  if (!product) return <ErrorMessage message="Product not found" />;

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
