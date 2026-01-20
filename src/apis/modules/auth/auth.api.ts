import { apiRequest } from "../../client/ApiAgents";
import { type LoginResponse, type LoginPayload } from "./auth.types";



export function loginApi(payload: LoginPayload) {
    return apiRequest<LoginResponse>({
        url: "authenticate",
        method: "post",
        data: payload,
    });
}

export function logout() {
    return apiRequest({
        url: "logout",
        method: "post",
        data: {},
    });
}