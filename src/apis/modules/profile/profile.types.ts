export interface ProfileResponse {
    profile: {
        user_id: string;
        name: string;
        email: string;
        mobile: string;
        time_zone: string;
        organization_id: string;
        central_account_id: string;
        profile_image: string | null;
    }

}