import { formatPrice, calculateDiscountPrice } from "@/shared/utils/utils";
import { Product } from "@/types/types";

interface PriceDisplayProps extends Pick<Product, "price" | "discount"> {}

export default function PriceDisplay({ price, discount }: PriceDisplayProps) {
  const discountedPrice = calculateDiscountPrice(price, discount);

  return (
    <div className="mb-4">
      {discount > 0 ? (
        <div>
          <span className="line-through text-gray-500 text-xl">{formatPrice(price)}</span>
          <span className="ml-2 text-2xl font-bold text-[#661d0a]">{formatPrice(discountedPrice)}</span>
          <span className="ml-2 bg-red-700 text-white px-2 py-1 rounded text-xs">{discount}% OFF</span>
        </div>
      ) : (
        <span className="text-2xl font-bold text-[#661d0a]">{formatPrice(price)}</span>
      )}
    </div>
  );
}
