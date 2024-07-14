import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { AccountService } from "./account.service";
import { PatchAccountDto } from "./dto/patch-account.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { SessionInfo } from "src/common/decorators";
import { ISession } from "src/common/interfaces";

@Controller("account")
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getAccount(@SessionInfo() session: ISession) {
    return this.accountService.getByUser(session.id);
  }

  @Patch()
  patchAccount(
    @Body() dto: PatchAccountDto,
    @SessionInfo() session: ISession
  ) {
    return this.accountService.patchAccount(session.id, dto);
  }
}
