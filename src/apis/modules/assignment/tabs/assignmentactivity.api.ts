
import { apiRequest } from "../../../client/ApiAgents";
import type { AssignmentActivitiesData } from "../assignment.types";


export const getAssignmentActivities = (id: string) => {
    return apiRequest<AssignmentActivitiesData>({
        method: "get",
        url: `assignments/${id}/activities`,
    });
}