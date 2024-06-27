import { Body, Controller, Get, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { CookieService } from "./cookie.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { SessionInfo } from "../common/decorators/session-info.decorator";
import { SignInDto, SignUpDto } from "./dto";
import { ISession } from "src/common/interfaces";

@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  @Post("signup")
  async signup(
    @Body() userDto: SignUpDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { accessToken } = await this.authService.signup(userDto);
    this.cookieService.setToken(res, accessToken);

    return { accessToken, message: "User successfully registered" };
  }

  @Post("signin")
  async signin(
    @Body() userDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { accessToken } = await this.authService.signin(userDto);
    this.cookieService.setToken(res, accessToken);

    return { accessToken, message: "User successfully logged in" };
  }

  @Post("signout")
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  signout(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }

  @Get("session")
  @UseGuards(JwtAuthGuard)
  getSessionInfo(@SessionInfo() session: ISession) {
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
