import { Module } from "@nestjs/common";
import { WatchListController } from "./watch-list.controller";
import { WatchListService } from "./watch-list.service";
import { AuthModule } from "src/auth/auth.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { WatchList } from "./watch-list.model";
import { WatchListItem } from "./watch-list-item.model";

@Module({
  controllers: [WatchListController],
  providers: [WatchListService],
  imports: [SequelizeModule.forFeature([WatchList, WatchListItem]), AuthModule],
  exports: [WatchListService],
})
export class WatchListModule {}
