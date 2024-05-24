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
    private userRepository: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const newUser = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue("USER");

    await newUser.$set("roles", [role.id]);

    const user = await this.userRepository.findOne({
      where: { id: newUser.id },
      include: [{ model: Role, attributes: ["value", "description"] }],
    });

    return user;
  }

  async getUserByEmail(email: string) {
    const existUser = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });

    return existUser;
  }
}
