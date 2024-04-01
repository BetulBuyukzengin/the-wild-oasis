import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading: isLoggingIn, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData("user", user);
      toast.success("Successfully user login");
      //   queryClient.invalidateQueries({
      //     active: true,
      //   });
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Email or password is wrong");
    },
  });
  return { isLoggingIn, login };
}
