import { SignInForm } from "@/features/auth";
import { UIHeader } from "@/shared/ui";
import { UIFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export function SignInPage() {
  return (
    <UIFormPageLayout
      title="Sign In"
      header={<UIHeader />}
      form={<SignInForm />}
    />
  );
}
