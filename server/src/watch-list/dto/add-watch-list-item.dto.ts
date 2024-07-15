import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsString } from "class-validator";
import { AppWarning } from "src/common/constants";
import { WatchItemType } from "src/common/enums";

export class AddWatchListItemDto {
  @ApiProperty({ example: "WEBSITE", description: "Item type" })
  @IsEnum(WatchItemType, { message: AppWarning.IS_ENUM })
  readonly type: WatchItemType;
  
  @ApiProperty({ example: "https://example.com", description: "Item URL" })
  @IsString({ message: AppWarning.IS_STRING })
  readonly data: string;
}
