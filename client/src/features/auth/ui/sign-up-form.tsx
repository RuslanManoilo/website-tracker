import { ROUTES } from "@/shared/constants/routes";
import { useSignUpForm } from "../model/use-sign-up-form";
import { UIButton, UILink, UITextField } from "@/shared/ui";

export function SignUpForm() {
  const { register, handleSubmit, isPending, errorMessage } = useSignUpForm();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <UITextField
        label="Email"
        inputProps={{
          type: "email",
          ...register("email", { required: true }),
          placeholder: "Enter your Email",
        }}
      />

      <UITextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
          placeholder: "Enter your Password",
        }}
      />

      <UIButton disabled={isPending} variant="primary">
        Sign Up
      </UIButton>

      <UILink className="text-center" href={ROUTES.SIGN_IN}>
        Already have an account? Sign In
      </UILink>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
    </form>
  );
}
