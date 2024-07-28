import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { WatchListService } from "./watch-list.service";
import { AddWatchListItemDto, WatchListDto, WatchListItemDto, WatchListQueryDto } from "./dto";
import { SessionInfo } from "src/common/decorators";
import { SessionDto } from "src/auth/dto";
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AppError } from "src/common/constants";

@ApiTags("Watch List")
@Controller("watch-list")
@UseGuards(JwtAuthGuard)
export class WatchListController {
  constructor(private readonly watchListService: WatchListService) {}

  @Get()
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Get watch list by user" })
  @ApiResponse({ status: 200, type: WatchListDto })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  getWatchList(@Query() query: WatchListQueryDto, @SessionInfo() session: SessionDto) {
    return this.watchListService.getByUser(session.watchListId, query);
  }

  @Post("item")
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Add item to watch list" })
  @ApiResponse({ status: 200, type: WatchListItemDto })
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  addWatchListItem(
    @Body() dto: AddWatchListItemDto,
    @SessionInfo() session: SessionDto
  ) {
    return this.watchListService.addWatchListItem(session.watchListId, dto);
  }

  @Delete("item/:id")
  @ApiBearerAuth("accessToken")
  @ApiOperation({ summary: "Remove item from watch list" })
  @ApiResponse({ status: 204, description: "Successful operation" })
  @ApiResponse({ status: 400, description: AppError.ITEM_NOT_FOUND})
  @ApiResponse({ status: 401, description: AppError.UNAUTHORIZED })
  @HttpCode(204)
  deleteWatchListItem(
    @Param("id") id: number,
    @SessionInfo() session: SessionDto
  ) {
    return this.watchListService.removeWatchListItem(session.watchListId, id);
  }
}
