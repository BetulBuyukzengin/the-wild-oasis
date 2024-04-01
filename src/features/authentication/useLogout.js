import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      //The delete all data from cache by logout
      queryClient.removeQueries();
      toast.success("Successfully logged out");
      navigate("/login", { replace: true });
    },
    onError: () => {
      toast.error("An error occured while logging out ");
    },
  });
  return { isLoading, logout };
}
