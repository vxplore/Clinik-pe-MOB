import { useMutation, useQuery } from "@tanstack/react-query";
import type { ApiError } from "../../../apis/client/ApiError";
import { addAssignmentPayment, getAssignmentPaymentTypes } from "../../../apis/modules/assignment/tabs/assignmentpayment.api";
import type { AssignmentPaymentPayload } from "../../../apis/modules/assignment/assignment.types";


export function useAssignmentPaymentTypes() {
    const query = useQuery({
        queryKey: ["assignment-payment-types"],
        queryFn: () => getAssignmentPaymentTypes(),
        retry: false,
        staleTime: 5 * 60 * 1000,
        enabled: true,
    });
    console.log("Assignment Payment Types query data:", query.data);
    return {
        paymentTypes: query.data?.data.payment_types,
        isLoading: query.isLoading,
        error: query.error as ApiError | null,
    };
}


export function useAssignmentPaymentAddition(id: string) {
  return useMutation({
    mutationFn: (payload: AssignmentPaymentPayload) =>
      addAssignmentPayment(payload, id),
    retry: false,
  });
}
