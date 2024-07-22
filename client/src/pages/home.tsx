import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UISelectField } from "@/shared/ui/ui-select-field";
import { UILink } from "@/shared/ui/ui-link";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";

export function HomePage() {
  const { data } = useSessionQuery();

  return (
    <main className={`min-h-screen`}>

      <UIHeader
        right={
          <div className="flex gap-4 items-center">
            {data?.email} <SignOutButton />
          </div>
        }
      />



      <UIButton variant="primary">Hello</UIButton>
      <UIButton variant="secondary">TEST</UIButton>
      <UIButton variant="outlined">Sign Out</UIButton>
      <UIButton disabled variant="primary">
        Sign Out
      </UIButton>
      <UITextField
        label="Email"
        inputProps={{ placeholder: "Enter your Email" }}
      />
      <UITextField
        error="Error"
        inputProps={{ placeholder: "Enter your Email" }}
      />
      <UITextField />
      <UISelectField
        options={[
          { value: "1", label: "One" },
          { value: "2", label: "Two" },
        ]}
      />
      <UILink href="/">LINK</UILink>
      <UISpinner className="w-20 h-20 text-teal-600" />
      {/* <UIPageSpinner /> */}
    </main>
  );
}
