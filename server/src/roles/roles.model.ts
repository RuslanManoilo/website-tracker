import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { IRoleCreationAttrs } from "src/common/interfaces";
import { UserRoles } from "src/user-roles/user-roles.model";
import { User } from "src/users/users.model";

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
