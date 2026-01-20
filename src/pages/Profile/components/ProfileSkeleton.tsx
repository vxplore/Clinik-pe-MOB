export const ProfileSkeleton = () => {
  return (
    <div className="min-h-full app-frame flex flex-col">
      {/* Header Skeleton */}
      <div className="relative">
        {/* Avatar Skeleton */}
        {/* <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow animate-pulse" />
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-gray-200 rounded-full shadow animate-pulse" />
          </div>
        </div> */}

        {/* Header Background Skeleton */}
        <div className="relative rounded-2xl h-[100px] rounded-b-[48px] overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 animate-pulse" />
        </div>
      </div>

      {/* Form Fields Skeleton */}
      <div className="px-4 pt-8 pb-6 space-y-4">
        {/* Name Field */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
          <div className="h-12 bg-white rounded-xl border border-gray-100 animate-pulse" />
        </div>

        {/* Mobile Field */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
          <div className="h-12 bg-white rounded-xl border border-gray-100 animate-pulse" />
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse" />
          <div className="h-12 bg-white rounded-xl border border-gray-100 animate-pulse" />
        </div>

        {/* Update Button Skeleton */}
        <div className="w-full mt-6 h-14 rounded-2xl bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
};
