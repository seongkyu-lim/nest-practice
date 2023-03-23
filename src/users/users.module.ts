import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmExModule } from "../typeorm-ex.module";
import { User } from "./entities/user.entity";
import { UserRepository } from "./entities/user.repository";
import { UserModule } from "./entities/user.module";

@Module({
  imports: [UserModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
