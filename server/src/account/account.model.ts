import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { SWAGGER } from "src/common/constants";
import { IAccountCreationAttrs } from "src/common/interfaces";
import { User } from "src/users/users.model";

@Table({ tableName: "accounts" })
export class Account extends Model<Account, IAccountCreationAttrs> {
    @ApiProperty({ example: 69, description: SWAGGER.PRIMARY_KEY })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ required: false, example: false })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    isMonitoringEnabled: boolean;

    @ApiProperty({ example: 77, description: SWAGGER.OWNER })
    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER, unique: true })
    owner: number;

    @BelongsTo(() => User)
    user: User;
}