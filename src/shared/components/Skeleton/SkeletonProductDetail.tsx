export default function SkeletonProductDetail() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="flex flex-col md:flex-row gap-8">
        {/* ProductImage Skeleton */}
        <div className="md:w-1/2">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-300"></div>
        </div>

        {/* ProductInfo Skeleton */}
        <div className="md:w-1/2">
          {/* Product Name */}
          <div className="h-9 bg-gray-300 rounded w-3/4 mb-4"></div>

          {/* Product Description */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
            <ul className="list-disc list-inside space-y-1">
              {[1, 2, 3, 4].map((i) => (
                <li
                  key={i}
                  className="h-4 bg-gray-300 rounded w-2/3 ml-4 list-none"
                ></li>
              ))}
            </ul>
          </div>

          {/* Nutrition Facts */}
          <div className="mb-4">
            <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
            <table className="w-full">
              <tbody>
                {[1, 2, 3, 4].map((i) => (
                  <tr key={i}>
                    <td className="pr-4">
                      <div className="h-4 bg-gray-300 rounded w-24"></div>
                    </td>
                    <td>
                      <div className="h-4 bg-gray-300 rounded w-16"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PriceDisplay Skeleton */}
          <div className="mb-4 flex items-center">
            <div className="h-6 bg-gray-300 rounded w-24 mr-2"></div>
            <div className="h-6 bg-gray-300 rounded w-32 mr-2"></div>
            <div className="h-6 bg-gray-300 rounded w-16"></div>
          </div>

          {/* Counter and Add to Cart Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-auto">
              <div className="h-10 bg-gray-300 rounded w-32"></div>
            </div>
            <div className="w-full sm:w-auto flex-grow">
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* RelatedProducts Skeleton */}
      <div className="mt-12">
        <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border rounded-lg p-2 flex flex-col items-center"
            >
              <div className="bg-gray-300 w-[150px] h-[150px] rounded-lg mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
