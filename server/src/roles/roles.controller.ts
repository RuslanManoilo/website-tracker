import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Role } from "./roles.model";
import { AppError } from "src/common/constants";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { RolesGuard } from "src/auth/guards/roles.guard";
import { Roles } from "src/common/decorators";
import { UserRole } from "src/common/enums";

@ApiTags("Roles")
@Controller("roles")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN)
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Create role ( Admin only! )" })
  @ApiResponse({ status: 201, type: Role })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  @ApiResponse({ status: 403, description: AppError.FORBIDDEN })
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }
}
