import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { AppWarning } from "src/common/constants";
import { UserRole } from "src/common/enums";

export class CreateRoleDto {
    @ApiProperty({ example: "USER", description: "Role value" })
    @IsString({ message: AppWarning.IS_STRING })
    readonly value: string;

    @ApiProperty({ example: "User", description: "Role description" })
    @IsString({ message: AppWarning.IS_STRING })
    readonly description: string;
}