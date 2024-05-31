import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { Response } from "express";
import { CookieService } from "./cookie.service";
import { SessionInfo } from "./decorator/session-info.decorator";
import { GetSessionInfoDto } from "./dto/session-info.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  @Post("signup")
  async signup(
    @Body() userDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { token } = await this.authService.signup(userDto);
    this.cookieService.setToken(res, token);

    return { message: "User successfully registered" };
  }

  @Post("signin")
  async signin(
    @Body() userDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { token } = await this.authService.signin(userDto);
    this.cookieService.setToken(res, token);

    return { message: "User successfully logged in" };
  }

  @Post("signout")
  @UseGuards(JwtAuthGuard)
  signout(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
    return { message: "User successfully logged out" };
  }

  @Get("session")
  @UseGuards(JwtAuthGuard)
  getSessionInfo(@SessionInfo() session: GetSessionInfoDto) {
    return session;
  }

  // Використання RolesGuard для приватних маршрутів
  // @Get("session")
  // @Roles("ADMIN")
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // getSessionInfo(@SessionInfo() session: GetSessionInfoDto) {
  //   return session;
  // }
}
