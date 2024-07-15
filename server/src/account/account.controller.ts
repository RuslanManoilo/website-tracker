import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { AccountService } from "./account.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionInfo } from "src/common/decorators";
import { PatchAccountDto } from "./dto";
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Account } from "./account.model";
import { AppError } from "src/common/constants";
import { SessionDto } from "src/auth/dto";

@ApiTags("Account")
@Controller("account")
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Get account by user" })
  @ApiOkResponse({ type: Account })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  getAccount(@SessionInfo() session: SessionDto) {
    return this.accountService.getByUser(session.id);
  }
  
  @Patch()
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Monitoring on/off" })
  @ApiOkResponse({ type: Account })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  patchAccount(@Body() dto: PatchAccountDto, @SessionInfo() session: SessionDto) {
    return this.accountService.patchAccount(session.id, dto);
  }
}
