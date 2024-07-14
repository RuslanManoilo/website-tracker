import { WatchItemType } from "src/common/enums";

export class WatchListItemDto {
  readonly id: number;
  readonly watchListId: number;
  readonly data: string;
  readonly type: WatchItemType;
}
