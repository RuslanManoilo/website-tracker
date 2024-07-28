import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class WatchListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}
