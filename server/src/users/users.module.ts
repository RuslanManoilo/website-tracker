import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/user-roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { Account } from 'src/account/account.model';
import { AccountModule } from 'src/account/account.module';

@Module({
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Account]),
    RolesModule,
    forwardRef(() => AccountModule),
  ],
  exports: [UsersService],
})
export class UsersModule {}
