import { WatchItemType } from "src/common/enums";

export class AddWatchListItemDto {
  readonly type: WatchItemType;
  readonly data: string;
}
