import { Body, Controller, Get, HttpCode, Post, Res, UseGuards } from "@nestjs/common";
import { Response } from "express";
import { AuthService } from "./auth.service";
import { CookieService } from "./cookie.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { SessionInfo } from "../common/decorators/session-info.decorator";
import { SessionDto, SignInDto, SignUpDto } from "./dto";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppError } from "src/common/constants";

@ApiTags("Authentication")
@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  @Post("signup")
  @ApiOperation({ summary: "User registration" })
  @ApiResponse({ status: 201, schema: { example: { accessToken: "accessTokenExample1234567890", message: "User successfully registered" }}, description: "Successful operation" })
  @ApiResponse({ status: 400, description: AppError.USER_EXIST })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  async signup(
    @Body() userDto: SignUpDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const { accessToken } = await this.authService.signup(userDto);
    this.cookieService.setToken(res, accessToken);

    return { accessToken, message: "User successfully registered" };
  }

  @Post("signin")
  @ApiOperation({ summary: "User authentication" })
  @ApiResponse({ status: 201, schema: { example: { accessToken: "accessTokenExample1234567890", message: "User successfully logged in" }}, description: "Successful operation" })
  @ApiResponse({ status: 400, description: AppError.WRONG_DATA })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
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
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Logout" })
  @ApiResponse({ status: 204, description: "Successful operation" })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  signout(@Res({ passthrough: true }) res: Response) {
    this.cookieService.removeToken(res);
  }

  @Get("session")
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Get session info" })
  @ApiResponse({ status: 200, type: SessionDto, description: "Successful operation" })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  getSessionInfo(@SessionInfo() session: SessionDto) {
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
