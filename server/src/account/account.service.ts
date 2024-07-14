import { Injectable, NotFoundException } from "@nestjs/common";
import { PatchAccountDto } from "./dto/patch-account.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Account } from "./account.model";
import { AppError } from "src/common/constants";

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  async create(userId: number): Promise<Account> {
    return this.accountModel.create({ owner: userId, isMonitoringEnabled: false });
  }

  async getByUser(userId: number): Promise<Account> {
    return this.accountModel.findOne({ where: { owner: userId } });
  }

  async patchAccount(userId: number, patch: PatchAccountDto): Promise<Account> {
    const [numOfAffectedRows, [updatedAccount]] = await this.accountModel.update(
      { ...patch },
      { where: { owner: userId }, returning: true }
    );

    if (numOfAffectedRows === 0) throw new NotFoundException(AppError.ACCOUNT_NOT_FOUND);

    return updatedAccount;
  }
}
