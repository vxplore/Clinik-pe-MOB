import { apiRequest } from "../../client/ApiAgents";
import { type StatisticsResponse } from "./dashboard.types";



export function getStatistics() {
    return apiRequest<StatisticsResponse>({
        url: "assignments/statistics",
        method: "get",
        data: {},
    });
}
