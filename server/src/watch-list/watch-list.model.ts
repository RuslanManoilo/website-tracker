import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";
import { WatchListItem } from "./watch-list-item.model";
import { IWatchListCreationAttrs } from "src/common/interfaces";

@Table({ tableName: "watch_lists" })
export class WatchList extends Model<WatchList, IWatchListCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, unique: true })
  ownerId: number;

  @BelongsTo(() => User)
  owner: User;

  @HasMany(() => WatchListItem)
  items: WatchListItem[];
}
