// import React from 'react'
import PaymentCard from "./PaymentCard";
import PaymentStatCard from "./PaymentStatCard";
import PaymentCardSkeleton from "./PaymentCardSkeleton";
import PaymentStatCardSkeleton from "./PaymentStatCardSkeleton";
import { type AssignmentPaymentsData } from "../../../../apis/modules/assignment/assignment.types";
export interface AssignmentPaymentsDataProps {
  payments?: AssignmentPaymentsData;
  isLoading: boolean;
  error: Error | null;
}

const PaymentTab = ({
  payments,
  isLoading,
  error,
}: AssignmentPaymentsDataProps) => {
  console.log("PaymentTab props - payments:", payments);

  const paymentList = payments?.payments || [];
  const { currency, statistics } = payments || {};
  console.log("Currency:", currency);
  console.log("Statistics:", statistics);
  console.log("PaymentTab props - paymentList:", paymentList);
  console.log("Payments in PaymentTab:", payments);
  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {isLoading ? (
        <>
          <PaymentStatCardSkeleton />
          <h1 className="text-base font-semibold">Payment History</h1>
          {Array.from({ length: 3 }).map((_, index) => (
            <PaymentCardSkeleton key={index} />
          ))}
        </>
      ) : (
        <>
          <PaymentStatCard
            items={[
              { label: "Total", value: `₹${statistics?.total_amount}` },
              {
                label: "Discount",
                value: `₹${statistics?.discount_amount}`,
                valueColor: "#16A34A",
              },
              { label: "Payable", value: `₹${statistics?.payable_amount}` },
              {
                label: "Paid",
                value: `₹${statistics?.paid_amount}`,
                valueColor: "#16A34A",
              },
            ]}
          />
          <h1 className="text-base font-semibold">Payment History</h1>
          {paymentList.map((payment, index) => (
            <PaymentCard
              key={payment.id || index}
              amount={payment.amount}
              method={payment.method}
              dateTime={payment.paid_at}
              status={payment.status}
              note={payment.note}
              type={payment.type}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default PaymentTab;
