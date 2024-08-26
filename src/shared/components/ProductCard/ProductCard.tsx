import Image from "next/image";
import { formatPrice, calculateDiscountPrice } from "@/shared/utils/utils";
import Link from "next/link";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  discount: number;
  description: string;
}

export default function ProductCard({
  slug,
  name,
  image,
  price,
  discount,
  description,
}: ProductCardProps) {
  const discountedPrice = calculateDiscountPrice(price, discount);

  return (
    <Link href={`/products/${slug}`}>
      <div className="relative rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg group cursor-pointer">
        <div className="relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={300}
            height={250}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-white p-5 text-center text-sm">{description}</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl mb-2.5 text-gray-800">{name}</h3>
          <div className="flex items-center gap-2.5">
            {discount > 0 ? (
              <>
                <span className="line-through text-gray-500">
                  {formatPrice(price)}
                </span>
                <span className="font-bold text-[#661d0a]">
                  {formatPrice(discountedPrice)}
                </span>
              </>
            ) : (
              <span className="font-bold text-[#661d0a]">
                {formatPrice(price)}
              </span>
            )}
          </div>
        </div>
        {discount > 0 && (
          <span className="absolute top-2.5 right-2.5 bg-red-700 text-white px-2.5 py-1 rounded text-xs">
            {discount}% OFF
          </span>
        )}
      </div>
    </Link>
  );
}
