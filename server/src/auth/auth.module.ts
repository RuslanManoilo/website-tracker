import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { PasswordService } from "./password.service";
import { CookieService } from "./cookie.service";
import { GUARDS } from "./guards";

@Module({
  controllers: [AuthController],
  providers: [AuthService, PasswordService, CookieService, ...GUARDS],
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: "24h",
      },
    }),
  ]
})

export class AuthModule {}
