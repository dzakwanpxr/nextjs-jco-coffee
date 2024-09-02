export default function SkeletonProductCard() {
  return (
    <div className="rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-gray-300 h-64 w-full"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
}
