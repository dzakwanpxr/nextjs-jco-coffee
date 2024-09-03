export default function SkeletonRelatedProducts() {
  return (
    <div className="mt-12">
      <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((i) => (
          <div key={i} className="border rounded-lg p-2 flex flex-col items-center">
            <div className="bg-gray-300 w-[150px] h-[150px] rounded-lg mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
