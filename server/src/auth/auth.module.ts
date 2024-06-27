import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { PasswordService } from "./password.service";
import { CookieService } from "./cookie.service";
import { GUARDS } from "./guards";
import { options } from "src/config";

@Module({
  controllers: [AuthController],
  providers: [AuthService, PasswordService, CookieService, ...GUARDS],
  imports: [UsersModule, JwtModule.registerAsync(options())],
  exports: [JwtModule],
})
export class AuthModule {}
