import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Op } from "sequelize";
import { WatchList } from "./watch-list.model";
import { AddWatchListItemDto, WatchListQueryDto } from "./dto";
import { WatchListItem } from "./watch-list-item.model";
import { WatchItemType } from "src/common/enums";
import { AppError } from "src/common/constants";

@Injectable()
export class WatchListService {
  constructor(
    @InjectModel(WatchList) private watchListModel: typeof WatchList,
    @InjectModel(WatchListItem) private watchListItemModel: typeof WatchListItem
  ) {}

  async create(userId: number): Promise<WatchList> {
    return await this.watchListModel.create({ ownerId: userId });
  }

  async getByUser(watchListID: number, query: WatchListQueryDto): Promise<WatchList> {
    return await this.watchListModel.findByPk(watchListID, {
      include: [
        {
          model: WatchListItem,
          where: query.q ? { data: { [Op.iLike]: `%${query.q}%` } } : undefined,
          order: [["createdAt", "DESC"]],
        }
      ],
    });
  }

  async addWatchListItem(
    watchListID: number,
    dto: AddWatchListItemDto
  ): Promise<WatchListItem> {
    const allowedTypes = Object.values(WatchItemType);
    if (!allowedTypes.includes(dto.type))
      throw new BadRequestException(`${dto.type} is not a valid type.`);

    return await this.watchListItemModel.create({
      ...dto,
      watchListId: watchListID,
    });
  }

  async removeWatchListItem(
    watchListID: number,
    itemID: number
  ): Promise<void> {
    const item = await this.watchListItemModel.findByPk(itemID);
    if (!item) throw new BadRequestException(AppError.ITEM_NOT_FOUND);
    if (item.watchListId !== watchListID) throw new BadRequestException(AppError.ITEM_NOT_BELONG_TO_WATCH_LIST);

    await item.destroy();
  }
}
