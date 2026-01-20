export function AssignmentPageCardSkeleton() {
  return (
    <div className="w-full rounded-xl bg-white border shadow-sm border-gray-200 p-4 animate-pulse">
      {/* Top Row */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
          <div className="h-4 w-40 bg-gray-200 rounded" />
        </div>

        {/* Badge skeleton */}
        <div className="h-6 w-32 bg-gray-200 rounded-full" />
      </div>

      {/* Address section */}
      <div className="mt-3 flex items-start gap-2">
        <div className="mt-0.5 h-4 w-4 bg-gray-200 rounded flex-shrink-0" />

        <div className="flex-1">
          <div className="h-4 w-48 bg-gray-200 rounded mb-2" />
          <div className="h-3 w-32 bg-gray-200 rounded" />
        </div>

        <div className="rounded-lg bg-gray-200 p-4 h-10 w-10 flex-shrink-0" />
      </div>

      {/* Divider */}
      <div className="my-3 h-px bg-gray-100" />

      {/* Bottom Row */}
      <div className="flex justify-between">
        <div>
          <div className="h-3 w-12 bg-gray-200 rounded mb-1" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        <div>
          <div className="h-3 w-16 bg-gray-200 rounded mb-1" />
          <div className="h-4 w-28 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
}
