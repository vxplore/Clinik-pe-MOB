import React from "react";

const ActivitiesTabSkeleton: React.FC = () => {
  return (
    <div className="relative py-4">
      {/* Timeline line */}
      <div className="absolute left-[6px] top-0 bottom-0 w-[2px] bg-gray-200" />

      {/* Skeleton Activities */}
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="relative flex gap-4 animate-pulse">
            {/* Timeline dot */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-[14px] h-[14px] rounded-full bg-gray-300" />
            </div>

            {/* Activity card skeleton */}
            <div className="flex-1 bg-white rounded-lg shadow-sm border border-[#E5E7EB] p-4 -mt-1">
              <div className="h-5 w-32 rounded bg-gray-300 mb-2"></div>
              <div className="h-4 w-48 rounded bg-gray-200 mb-2"></div>
              <div className="h-3 w-24 rounded bg-gray-200"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesTabSkeleton;
