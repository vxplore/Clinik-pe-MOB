import { useQuery } from "@tanstack/react-query";
import type { ApiError } from "../../../apis/client/ApiError";
import { getStatistics } from "../../../apis/modules/dashboard/dashboard.api";

export function useStatistics() {
  const query = useQuery({
    queryKey: ["statistics"],
    queryFn: getStatistics,

   
    retry: false,         
    staleTime: 5 * 60 * 1000, 
  });
  
  return {
    statistics: query.data?.data.statistics ?? null, 
    isLoading: query.isLoading,
    error: query.error as ApiError | null,
  };
}
