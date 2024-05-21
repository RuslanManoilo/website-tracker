import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "src/roles/roles.service";
import { Role } from "src/roles/roles.model";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const newUser = await this.userModel.create(dto);
    const role = await this.rolesService.getRoleByValue("USER");

    await newUser.$set("roles", [role.id]);

    const user = await this.userModel.findOne({
      where: { id: newUser.id },
      include: [{ model: Role, attributes: ["value", "description"] }],
    });

    return user;
  }
}
