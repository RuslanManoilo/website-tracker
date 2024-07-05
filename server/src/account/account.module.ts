import { forwardRef, Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './account.model';
import { User } from 'src/users/users.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [AccountController],
  providers: [AccountService],
  imports: [
    SequelizeModule.forFeature([Account, User]),
    forwardRef(() => AuthModule),
  ],
  exports: [AccountService],
})
export class AccountModule {}
