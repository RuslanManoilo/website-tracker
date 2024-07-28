import { SignUpForm } from "@/features/auth";
import { UIHeader } from "@/shared/ui";
import { UIFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export function SignUpPage() {
  return (
    <UIFormPageLayout
      title="Sign Up"
      header={<UIHeader />}
      form={<SignUpForm />}
    />
  );
}
