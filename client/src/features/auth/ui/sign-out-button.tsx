import { UIButton } from "@/shared/ui";
import { useSignOutForm } from "../model/use-sign-out-form";

export function SignOutButton() {
  const { signOut, isPending } = useSignOutForm();

  return (
    <UIButton
      variant="outlined"
      disabled={isPending}
      onClick={() => signOut({})}
    >
      Sign Out
    </UIButton>
  );
}
