import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { WatchListModule } from './watch-list/watch-list.module';
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./user-roles/user-roles.model";
import { Account } from "./account/account.model";
import { WatchList } from "./watch-list/watch-list.model";
import { WatchListItem } from "./watch-list/watch-list-item.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      models: [User, Role, UserRoles, Account, WatchList, WatchListItem],
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    AccountModule,
    WatchListModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
