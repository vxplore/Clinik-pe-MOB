import { apiRequest } from "../../../client/ApiAgents";
import type { AssignmentSamplesData } from "../assignment.types";


export function getAssignmentSample(id: string) {
    return apiRequest<AssignmentSamplesData>({
        method: "get",
        url: `assignments/${id}/samples`,
    });
}


export function markSampleAsCollected(booking_id: string, sample_id: string, assignment_id: string) {
    return apiRequest({
        method: "post",
        url: `assignments/${assignment_id}/samples/collect`,
        data: {
            sample: sample_id,
            booking_id: booking_id,
        },
    });
}