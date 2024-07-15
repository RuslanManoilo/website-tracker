import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length, MinLength } from "class-validator";
import { AppWarning } from "src/common/constants";

export class SignInDto {
    @ApiProperty({ example: "alvaro_capibara@example.com" })
    @IsString({ message: AppWarning.IS_STRING })
    @IsEmail({}, { message: AppWarning.IS_EMAIL })
    readonly email: string;
  
    @ApiProperty({ example: "qwerty12345" })
    @IsString({ message: AppWarning.IS_STRING })
    @MinLength(6, { message: AppWarning.MIN_LENGTH, context: "password" })
    readonly password: string;
}