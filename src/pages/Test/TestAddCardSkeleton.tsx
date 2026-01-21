import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@mantine/core";

const TestAddCardSkeleton: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-[#F3F4F6] shadow-sm bg-white p-4 animate-pulse">
      {/* Title & description */}
      <div className="h-6 w-48 rounded bg-gray-300"></div>
      <div className="mt-2 h-4 w-56 rounded bg-gray-200"></div>

      {/* Bottom row */}
      <div className="mt-4 flex items-center justify-between">
        {/* Prices */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-16 rounded bg-gray-300"></div>
          <div className="h-6 w-20 rounded bg-gray-300"></div>
        </div>

        {/* Add button skeleton */}
        <Button px={16} py={4} leftSection={<Plus size={20} />} disabled>
          Add
        </Button>
      </div>
    </div>
  );
};

export default TestAddCardSkeleton;
