import React from "react";

const PaymentCardSkeleton: React.FC = () => {
  return (
    <div className="w-full rounded-xl border border-[#E5E7EB] bg-white p-4 animate-pulse">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="h-6 w-24 rounded bg-gray-300"></div>
        <div className="h-6 w-16 rounded-full bg-gray-300"></div>
      </div>

      {/* Payment method */}
      <div className="mt-3 h-4 w-32 rounded bg-gray-300"></div>

      {/* Date */}
      <div className="mt-4 flex items-center gap-2">
        <div className="h-4 w-4 rounded bg-gray-300"></div>
        <div className="h-4 w-40 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default PaymentCardSkeleton;
