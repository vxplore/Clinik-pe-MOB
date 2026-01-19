// import React from 'react'
import PaymentCard from "./PaymentCard";
import PaymentStatCard from "./PaymentStatCard";
const PaymentTab = () => {
  const payments = [
    {
      amount: "₹3,000",
      method: "UPI Payment",
      dateTime: "15 Jan 2024, 02:30 PM",
      status: "Paid",
    },
    {
      amount: "₹5,000",
      method: "Cash",
      dateTime: "16 Jan 2024, 10:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      <PaymentStatCard
        items={[
          { label: "Total", value: "₹12,500" },
          { label: "Discount", value: "₹500", valueColor: "#16A34A" },
          { label: "Payable", value: "₹12,000" },
          { label: "Paid", value: "₹8,000", valueColor: "#16A34A" },
        ]}
      />
      <h1 className="text-base font-semibold">Payment History</h1>
      {payments.map((payment, index) => (
        <PaymentCard
          key={index}
          amount={payment.amount}
          method={payment.method}
          dateTime={payment.dateTime}
          status={payment.status}
        />
      ))}
    </div>
  );
};

export default PaymentTab;
