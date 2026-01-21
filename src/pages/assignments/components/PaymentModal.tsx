import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Select, TextInput } from "@mantine/core";
import { paymentSchema, type PaymentFormData } from "./validation";
import {
  useAssignmentPaymentAddition,
  useAssignmentPaymentTypes,
} from "../hooks/usePayment";
import { useQueryClient } from "@tanstack/react-query";
import { notify } from "../../../app/notifications";
import { useParams } from "react-router-dom";

interface PaymentModalProps {
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const { paymentTypes, isLoading } = useAssignmentPaymentTypes();
  const { id } = useParams<{ id: string }>();
  console.log("Assignment ID in PaymentModal:", id);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      amount: "",
      mode: "",
    },
  });

  const paymentMethodOptions =
    paymentTypes?.map((type) => ({
      value: type.key,
      label: type.value,
    })) || [];

  const queryClient = useQueryClient();
  const paymentMutation = useAssignmentPaymentAddition(id!);

  const onSubmit = (data: PaymentFormData) => {
    paymentMutation.mutate(
      {
        amount: Number(data.amount),
        mode: data.mode,
      },
      {
        onSuccess: (response) => {
          queryClient.invalidateQueries({
            queryKey: ["assignments-payments", id],
          });
          onClose();
          notify.success(response.message || "Payment added successfully");
        },
        onError: (response) => {
          notify.error(response?.message || "Failed to add payment");
        },
      },
    );
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
        name="mode"
        control={control}
        render={({ field }) => (
          <Select
            label="Payment Method"
            placeholder="Select payment method"
            data={paymentMethodOptions}
            {...field}
            required
            disabled={isLoading}
            error={errors.mode?.message}
          />
        )}
      />

      <div className="flex gap-2 pt-4">
        <Button variant="outline" onClick={onClose} className="flex-1">
          Cancel
        </Button>
        <Button
          type="submit"
          loading={paymentMutation.isPending}
          className="flex-1"
          disabled={isLoading}
        >
          New Payment
        </Button>
      </div>
    </form>
  );
};

export default PaymentModal;
