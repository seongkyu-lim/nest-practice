import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { UserRepository } from './entity/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmExModule.forCustomRepository([UserRepository]),
  ],
  exports: [TypeOrmModule, TypeOrmExModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
