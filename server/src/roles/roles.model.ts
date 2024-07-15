import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { SWAGGER } from "src/common/constants";
import { IRoleCreationAttrs } from "src/common/interfaces";
import { UserRoles } from "src/user-roles/user-roles.model";
import { User } from "src/users/users.model";

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleCreationAttrs> {
  @ApiProperty({ example: "111", description: SWAGGER.PRIMARY_KEY })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "USER", description: "Role value" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: "User", description: "Role description" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
