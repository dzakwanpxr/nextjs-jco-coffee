import SkeletonProductCard from "@/shared/components/Skeleton/SkeletonProductCard";

export default function SkeletonProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {[...Array(8)].map((_, index) => (
        <SkeletonProductCard key={index} />
      ))}
    </div>
  );
}
