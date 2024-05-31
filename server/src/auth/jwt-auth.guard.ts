import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Request } from "express";
import { CookieService } from "./cookie.service";
import { JwtService } from "@nestjs/jwt";
import { AppError } from "src/helpers/errors";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext) { 
    const request = context.switchToHttp().getRequest() as Request;
    const token = request.cookies[CookieService.tokenKey];

    if (!token) throw new UnauthorizedException({ message: AppError.UNAUTHORIZED });

    try {
      const sessioninfo = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });

      request["session"] = sessioninfo;
    } catch (error) {
      throw new UnauthorizedException({ message: AppError.UNAUTHORIZED });
    }

    return true;
  }
}
