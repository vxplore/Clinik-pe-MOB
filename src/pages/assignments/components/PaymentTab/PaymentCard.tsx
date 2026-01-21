import React from "react";
import { Calendar } from "lucide-react";

interface PaymentCardProps {
  amount: string;
  method: string;
  dateTime: {
    timestamp: string;
    date: string;
    time: string;
  };
  status: string;
  note?: string;
  type: string;
}

const statusStyles: Record<
  PaymentCardProps["status"],
  { bg: string; text: string }
> = {
  paid: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  pending: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  failed: {
    bg: "bg-red-100",
    text: "text-red-700",
  },
};

const PaymentCard: React.FC<PaymentCardProps> = ({
  note,
  amount,
  method,
  dateTime,
  status,
  type,
  }) => {
  console.log("Rendering PaymentCard with props:", {
    type,
    note,
    amount});
  const statusStyle = statusStyles[status];

  return (
    <div className="w-full rounded-xl border border-[#E5E7EB] bg-white p-4">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900">₹ {amount}</h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}
        >
          {status}
        </span>
      </div>

      {/* Payment method */}
      <p className="mt-1 text-sm text-gray-600">{method}</p>

      {/* Date */}
      <div className="mt-2 flex items-center gap-2 text-xs text-[#6B7280]">
        <Calendar size={14} />
        <span>{dateTime.timestamp}</span>
      </div>
    </div>
  );
};

export default PaymentCard;
