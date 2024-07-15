import { ApiProperty } from "@nestjs/swagger";
import { SWAGGER } from "src/common/constants";

export class SessionDto {
  @ApiProperty({ example: 69, description: SWAGGER.PRIMARY_KEY })
  readonly id: number;

  @ApiProperty({ example: "alvaro_capibara@example.com" })
  readonly email: string;

  @ApiProperty({ example: 77 })
  readonly accountId: number;

  @ApiProperty({ example: 69 })
  readonly watchListId: number;

  @ApiProperty({
    example: [
      {
        value: "USER",
        id: 88,
        description: "Користувач",
        UserRoles: { id: 69, userId: 74, roleId: 88 },
      },
    ],
  })
  readonly roles: string[];

  @ApiProperty({ example: 1234567890 })
  readonly iat: number;

  @ApiProperty({ example: 1234567890 })
  readonly exp: number;
}
