
import { apiRequest } from "../../../client/ApiAgents";
import type {  AssignmentPaymentPayload, AssignmentPaymentsData, AssignmentPaymentTypesData } from "../assignment.types";

export const getAssignmentPayment = (id: string) => {
    return apiRequest<AssignmentPaymentsData>({
        method: "get",
        url: `assignments/${id}/payments`,
    });
}

export const getAssignmentPaymentTypes = () => {
    return apiRequest<AssignmentPaymentTypesData>({
        method: "get",
        url: `assignments/payment-types`
    });

}

export const addAssignmentPayment = ( payload: AssignmentPaymentPayload , id: string) => {
    return apiRequest({
        method: "post",
        url: `assignments/${id}/payments`,
        data : payload,
    });

}
