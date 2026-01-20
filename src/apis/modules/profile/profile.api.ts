import { apiRequest } from "../../client/ApiAgents";
import type { ProfileResponse } from "./profile.types";

export function getProfile() {
    return apiRequest<ProfileResponse>({
        url: "profile",
        method: "get",
        data: {},
    });
}

