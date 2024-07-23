import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const ACCOUNT_KEY = ["account"];

export function useAccountQuery() {
  return useQuery({
    queryKey: ACCOUNT_KEY,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSuccess(data) {
      queryClient.setQueryData(ACCOUNT_KEY, data);
    },
    onSettled: async () => {
      queryClient.invalidateQueries({
        queryKey: ACCOUNT_KEY,
      });
    },
  });
}
