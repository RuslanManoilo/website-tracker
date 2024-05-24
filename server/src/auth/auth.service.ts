import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AppError } from "src/helpers/errors";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { PasswordService } from "./password.service";
import { User } from "src/users/users.model";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService
  ) {}

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  async signup(dto: CreateUserDto) {
    const isExistUser = await this.userService.getUserByEmail(dto.email);
    if (isExistUser) throw new BadRequestException(AppError.USER_EXIST);

    const hashPassword = await this.passwordService.hashPassword(dto.password);

    const newUser = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    });

    return this.generateToken(newUser);
  }
}
