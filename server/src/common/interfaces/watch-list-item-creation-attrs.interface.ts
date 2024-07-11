import { WatchItemType } from "../enums";

export interface IWatchListItemCreationAttrs {
    readonly watchListId: number,
    readonly data: string,
    readonly type: WatchItemType
}