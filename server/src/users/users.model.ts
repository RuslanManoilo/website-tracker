import { BelongsToMany, Column, DataType, HasOne, Model, Table } from "sequelize-typescript";
import { Account } from "src/account/account.model";
import { IUserCreationAttrs } from "src/common/interfaces";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/user-roles/user-roles.model";

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasOne(() => Account)
  account: Account;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
