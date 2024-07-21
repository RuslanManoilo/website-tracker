import { useQuery } from "@tanstack/react-query";
import {
  authControllerGetSessionInfo,
  authControllerSignin,
} from "@/shared/api/generated";
import { useEffect } from "react";
import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UISelectField } from "@/shared/ui/ui-select-field";
import { UILink } from "@/shared/ui/ui-link";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UIHeader } from "@/shared/ui/ui-header";

export function HomePage() {
  useEffect(() => {
    authControllerSignin({
      email: "alvaro_capibara@example.com",
      password: "qwerty12345",
    });
  });

  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main
      className={`min-h-screen`}
    >

      <UIHeader right={data?.email} />
      <UIButton variant="primary">Hello</UIButton>
      <UIButton variant="secondary">TEST</UIButton>
      <UIButton variant="outlined">Sign Out</UIButton>
      <UIButton disabled variant="primary">Sign Out</UIButton>
      <UITextField label="Email" inputProps={{placeholder: "Enter your Email"}} />
      <UITextField error="Error" inputProps={{placeholder: "Enter your Email"}} />
      <UITextField />
      <UISelectField options={[{value: "1", label: "One"}, {value: "2", label: "Two"}]} />
      <UILink href="/">LINK</UILink>
      <UISpinner className="w-20 h-20 text-teal-600" />
      {/* <UIPageSpinner /> */}
    </main>
  );
}
