import { WatchListItem } from "src/watch-list/watch-list-item.model";

export interface IWatchListCreationAttrs {
    readonly ownerId: number,
    readonly items?: WatchListItem[], 
}