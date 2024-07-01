import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { IAccountCreationAttrs } from "src/common/interfaces";
import { User } from "src/users/users.model";

@Table({ tableName: "accounts" })
export class Account extends Model<Account, IAccountCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    isBlockingEnabled: boolean;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    owner: number;

    @BelongsTo(() => User)
    user: User;
}