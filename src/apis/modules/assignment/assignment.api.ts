import { apiRequest } from "../../client/ApiAgents";
import type { AssignmentsResponse } from "./assignment.types";

//eta filters  types
export interface AssignmentFilters {
    status?: string;
    day?: string;
    pageSize?: number;
    pageNumber?: number;
    [key: string]: string | number | undefined;
}

export function getAssignments(filters?: AssignmentFilters) {
    return apiRequest<AssignmentsResponse>({
        url: "assignments",
        method: "get",
        params: filters,
    });
}
