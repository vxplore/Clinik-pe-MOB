import { useMutation } from "@tanstack/react-query";
import { logout } from "../../../apis/modules/auth/auth.api";
export function useLogout() {
  const mutation = useMutation({
    mutationFn: logout,
    onSettled: () => {
      window.location.replace("/login");
    },
  });

  return {
    logout: mutation.mutate,
    isLoading: mutation.isPending,
  };
}
