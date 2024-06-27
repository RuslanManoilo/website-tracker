import { IsEmail, IsString, Length, MinLength } from "class-validator";
import { AppWarning } from "src/common/constants";

export class SignUpDto {
  @IsString({ message: AppWarning.IS_STRING })
  @IsEmail({}, { message: AppWarning.IS_EMAIL })
  readonly email: string;

  @IsString({ message: AppWarning.IS_STRING })
  @MinLength(6, { message: AppWarning.MIN_LENGTH, context: "password" })
  readonly password: string;
}
