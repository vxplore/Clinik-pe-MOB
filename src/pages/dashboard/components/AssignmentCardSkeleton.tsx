const AssignmentCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-3 space-y-2 animate-pulse">
      {/* Top row skeleton */}
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>

        {/* Badge skeleton */}
        <div className="h-6 w-16 bg-gray-200 rounded-full" />
      </div>

      {/* Meta row skeleton */}
      <div className="flex items-center gap-4">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-3 w-28 bg-gray-200 rounded" />
      </div>

      {/* Progress bar skeleton */}
      <div className="h-1.5 w-full bg-gray-200 rounded-full" />
    </div>
  );
};

export default AssignmentCardSkeleton;
