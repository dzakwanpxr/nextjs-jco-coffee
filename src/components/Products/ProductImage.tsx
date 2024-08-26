import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        style={{ width: "100%", height: "100%" }}
        priority
        className="hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}
