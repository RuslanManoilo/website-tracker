import { ApiProperty } from "@nestjs/swagger";
import { WatchListItemDto } from "./watch-list-item.dto";
import { SWAGGER } from "src/common/constants";

export class WatchListDto {
  @ApiProperty({ example: 111, description: SWAGGER.PRIMARY_KEY })
  readonly id: number;

  @ApiProperty({ example: 77, description: SWAGGER.OWNER })
  readonly ownerId: number;

  @ApiProperty({
    example: [
      { id: 44, watchListId: 77, data: "https://example.com", type: "WEBSITE" },
    ],
    description: "Watch list items",
  })
  readonly items: WatchListItemDto[];
}
