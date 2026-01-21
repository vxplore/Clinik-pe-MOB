import { useQuery } from "@tanstack/react-query";
import type { ApiError } from "../../../apis/client/ApiError";
import { getOtherTests } from "../../../apis/modules/tests/tests.api";

export function useOtherTests(id: string, pageSize: number, pageNumber: number, search: string) {
  const query = useQuery({
    queryKey: ["otherTests", id, pageSize, pageNumber, search],
    queryFn: () => getOtherTests(id, pageSize, pageNumber, search),

    
    retry: false,         
    staleTime: 5 * 60 * 1000, 
  });
  
  return {
    tests: query.data?.data.tests ?? null, 
    isLoading: query.isLoading,
    error: query.error as ApiError | null,
  };
}
