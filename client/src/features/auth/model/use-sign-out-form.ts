import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";
import { authControllerSignout } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { useResetSession } from "@/entities/session/queries";

export function useSignOutForm() {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: authControllerSignout,
    async onSuccess() {
      router.push(ROUTES.SIGN_IN);
      resetSession();
    },
  });

  return {
    signOut: signOutMutation.mutate,
    isPending: signOutMutation.isPending,
  };
}
