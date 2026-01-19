import React from "react";
import { Calendar } from "lucide-react";

interface PaymentCardProps {
  amount: string;
  method: string;
  dateTime: string;
  status: string
}

const statusStyles: Record<
  PaymentCardProps["status"],
  { bg: string; text: string }
> = {
  Paid: {
    bg: "bg-green-100",
    text: "text-green-700",
  },
  Pending: {
    bg: "bg-yellow-100",
    text: "text-yellow-700",
  },
  Failed: {
    bg: "bg-red-100",
    text: "text-red-700",
  },
};

const PaymentCard: React.FC<PaymentCardProps> = ({
  amount,
  method,
  dateTime,
  status,
}) => {
  const statusStyle = statusStyles[status];

  return (
    <div className="w-full rounded-xl border border-[#E5E7EB] bg-white p-4">
      {/* Top row */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900">{amount}</h3>

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
        <span>{dateTime}</span>
      </div>
    </div>
  );
};

export default PaymentCard;
