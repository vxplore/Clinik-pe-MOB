// hooks/useSidebarData.ts
import { useQuery } from "@tanstack/react-query";

export function useSidebarData() {
  return useQuery({
    queryKey: ["sidebar"],
    // queryFn: fetchSidebarItems, // API call
  });
}
