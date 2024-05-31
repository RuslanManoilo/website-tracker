import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Reflector } from "@nestjs/core";
import { Request } from "express";
import { CookieService } from "./cookie.service";
import { AppError } from "src/helpers/errors";
import { ROLES_KEY } from "./decorator/roles-auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector
  ) {}

  canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true;
    
    const request = context.switchToHttp().getRequest() as Request;
    const token = request.cookies[CookieService.tokenKey];

    if (!token) throw new UnauthorizedException({ message: AppError.UNAUTHORIZED });

    try {
      const userInfo = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });

      request["session"] = userInfo;

      return userInfo.roles.some(role => requiredRoles.includes(role.value));

    } catch (error) {
      throw new HttpException(AppError.FORBIDDEN, HttpStatus.FORBIDDEN);
    }

  }
}
