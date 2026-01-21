import React from "react";

const PaymentStatCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-xl bg-white p-0">
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-100 px-4 py-3 animate-pulse"
          >
            <div className="h-3 w-12 rounded bg-gray-300"></div>
            <div className="mt-3 h-5 w-20 rounded bg-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentStatCardSkeleton;
