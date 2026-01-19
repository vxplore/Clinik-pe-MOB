import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Select, TextInput } from "@mantine/core";
import { paymentSchema, type PaymentFormData } from "./validation";

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      amount: "",
      method: "",
    },
  });

  const onSubmit = (data: PaymentFormData) => {
    console.log("Payment added:", data);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 border-t pt-2">
      <Controller
        name="amount"
        control={control}
        render={({ field }) => (
          <TextInput
            label="Amount"
            placeholder="Enter amount"
            type="number"
            {...field}
            value={field.value || ""}
            required
            error={errors.amount?.message}
          />
        )}
      />

      <Controller
        name="method"
        control={control}
        render={({ field }) => (
          <Select
            label="Payment Method"
            placeholder="Select payment method"
            data={[
              { value: "cash", label: "Cash" },
              { value: "card", label: "Card" },
            ]}
            {...field}
            required
            error={errors.method?.message}
          />
        )}
      />

      <div className="flex gap-2 pt-4">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          New Payment
        </Button>
      </div>
    </form>
  );
};

export default PaymentModal;
