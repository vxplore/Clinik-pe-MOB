import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="flex flex-col h-full animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="h-8 w-32 bg-gray-200 rounded" />
        <div className="h-6 w-6 bg-gray-200 rounded" />
      </div>

      {/* Menu skeleton */}
      <nav className="flex-1 p-4">
        <ul className="space-y-3">
          {Array.from({ length: 5 }).map((_, idx) => (
            <li key={idx} className="flex items-center gap-3 px-3 py-2">
              <div className="h-5 w-5 bg-gray-200 rounded" />
              <div className="h-4 w-28 bg-gray-200 rounded" />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarSkeleton;
