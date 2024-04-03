import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    // onSuccess: () => {
    onSuccess: ({ user }) => {
      toast.success("User account successfully updated");
      // manually updating data in cache - To update image successfully
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateUser };
}
