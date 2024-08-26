import Image from "next/image";

export default function HomePageHeader() {
  return (
    <header className="relative h-[400px] max-w-7xl mx-auto overflow-hidden">
      <Image
        src="/m1.jpg"
        alt="J.CO Coffee"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
      <h1 className="absolute top-1/2 left-8 -translate-y-1/2 text-4xl text-white font-bold shadow-text">
        Our Coffee
      </h1>
    </header>
  );
}
