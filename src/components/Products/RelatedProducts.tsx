import Link from "next/link";
import Image from "next/image";

interface RelatedProduct {
  id: number;
  name: string;
  image: string;
}

interface RelatedProductsProps {
  products: RelatedProduct[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border rounded-lg p-2 hover:shadow-md transition-shadow flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-lg mb-2"
              />
              <p className="text-sm font-semibold text-center">
                {product.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
