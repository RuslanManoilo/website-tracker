import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { WatchList } from "./watch-list.model";
import { WatchItemType } from "src/common/enums";
import { IWatchListItemCreationAttrs } from "src/common/interfaces";

@Table({ tableName: "watch_list_items" })
export class WatchListItem extends Model<WatchListItem, IWatchListItemCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => WatchList)
    @Column({ type: DataType.INTEGER })
    watchListId: number;

    @BelongsTo(() => WatchList)
    watchList: WatchList;

    @Column({ type: DataType.STRING })
    data: string;

    @Column({ type: DataType.ENUM(WatchItemType.WEBSITE) })
    type: WatchItemType;
}