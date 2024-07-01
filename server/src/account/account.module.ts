import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './account.model';
import { User } from 'src/users/users.model';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [
    SequelizeModule.forFeature([Account, User]),
  ]
})
export class AccountModule {}
