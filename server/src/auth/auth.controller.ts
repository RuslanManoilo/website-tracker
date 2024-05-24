import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup(@Body() userDto: CreateUserDto) {
    return this.authService.signup(userDto);
  }

  @Post("signin")
  signin(@Body() userDto: CreateUserDto) {
    return;
  }
}