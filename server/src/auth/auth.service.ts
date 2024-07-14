import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { UsersService } from "src/users/users.service";
import { PasswordService } from "./password.service";
import { User } from "src/users/users.model";
import { SignInDto, SignUpDto } from "./dto";
import { AppError } from "src/common/constants";

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private passwordService: PasswordService
  ) {}

  private async validateUser(dto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(dto.email);
    if (!user) throw new UnauthorizedException({ message: AppError.WRONG_DATA });

    const passwordEquals = await this.passwordService.comparePassword(
      dto.password,
      user.password
    );

    if (user && passwordEquals) return user;

    throw new UnauthorizedException({ message: AppError.WRONG_DATA });
  }

  private async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      accountId: user.accountId,
      watchListId: user.watchListId,
      roles: user.roles,
    };
    return {
      accessToken: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET }),
    };
  }

  async signup(dto: SignUpDto) {
    const isExistUser = await this.userService.getUserByEmail(dto.email);
    if (isExistUser) throw new BadRequestException(AppError.USER_EXIST);

    const hashPassword = await this.passwordService.hashPassword(dto.password);

    const newUser = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    });

    return this.generateToken(newUser);
  }

  async signin(dto: SignInDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }
}
