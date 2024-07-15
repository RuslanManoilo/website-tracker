import { ApiProperty } from "@nestjs/swagger";
import { SWAGGER } from "src/common/constants";
import { WatchItemType } from "src/common/enums";

export class WatchListItemDto {
  @ApiProperty({ example: 111, description: SWAGGER.PRIMARY_KEY })
  readonly id: number;

  @ApiProperty({ example: 77, description: SWAGGER.OWNER })
  readonly watchListId: number;

  @ApiProperty({ example: "https://example.com", description: "Item URL" })
  readonly data: string;

  @ApiProperty({ example: "WEBSITE", description: "Item type" })
  readonly type: WatchItemType;
}
