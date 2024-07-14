import { WatchListItemDto } from "./watch-list-item.dto";

export class WatchListDto {
  readonly id: number;
  readonly ownerId: number;
  readonly items: WatchListItemDto[];
}
