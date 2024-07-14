import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { WatchListService } from "./watch-list.service";
import { AddWatchListItemDto } from "./dto";
import { SessionInfo } from "src/common/decorators";
import { ISession } from "src/common/interfaces";

@Controller("watch-list")
@UseGuards(JwtAuthGuard)
export class WatchListController {
  constructor(private readonly watchListService: WatchListService) {}

  @Get()
  getWatchList(@SessionInfo() session: ISession) {
    return this.watchListService.getByUser(session.watchListId);
  }

  @Post("item")
  addWatchListItem(
    @Body() dto: AddWatchListItemDto,
    @SessionInfo() session: ISession
  ) {
    return this.watchListService.addWatchListItem(session.watchListId, dto);
  }

  @Delete("item/:id")
  @HttpCode(204)
  deleteWatchListItem(
    @Param("id") id: number,
    @SessionInfo() session: ISession
  ) {
    return this.watchListService.removeWatchListItem(session.watchListId, id);
  }
}
