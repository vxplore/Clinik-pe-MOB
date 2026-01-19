import React from "react";

interface AmountItem {
  label: string;
  value: string;
  valueColor?: string; // optional (green for discount/paid)
}

interface AmountSummaryCardProps {
  items: AmountItem[];
}

const PaymentStatCard: React.FC<AmountSummaryCardProps> = ({ items }) => {
  return (
    <div className="rounded-xl bg-white p-0">
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg bg-gray-100 px-4 py-3">
            <p className="text-xs text-gray-500">{item.label}</p>
            <p
              className="mt-1 text-base font-semibold"
              style={{ color: item.valueColor ?? "#111827" }}
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentStatCard;
