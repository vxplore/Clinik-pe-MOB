import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../apis/modules/profile/profile.api";
import type { ApiError } from "../../../apis/client/ApiError";

export function useProfile() {
  const query = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,

   
    retry: false,         
    staleTime: 5 * 60 * 1000, 
  });
  
  return {
    profile: query.data?.data.profile ?? null, 
    isLoading: query.isLoading,
    error: query.error as ApiError | null,
  };
}
