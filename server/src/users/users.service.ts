import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { RolesService } from "src/roles/roles.service";
import { AccountService } from "src/account/account.service";
import { WatchListService } from "src/watch-list/watch-list.service";
import { User } from "./users.model";
import { Role } from "src/roles/roles.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserRole } from "src/common/enums";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private readonly rolesService: RolesService,
    private readonly accountService: AccountService,
    private readonly watchListService: WatchListService
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue(UserRole.USER);
    const account = await this.accountService.create(newUser.id);
    const watchList = await this.watchListService.create(newUser.id);

    await newUser.$set("roles", [role.id]);
    await newUser.update({ accountId: account.id});
    await newUser.update({ watchListId: watchList.id});

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
