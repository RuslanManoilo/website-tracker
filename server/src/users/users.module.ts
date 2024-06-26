import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/user-roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { Account } from 'src/account/account.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Account]),
    RolesModule
  ],
  exports: [UsersService],
})
export class UsersModule {}
