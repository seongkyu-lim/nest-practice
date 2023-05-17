import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { UserRepository } from './entity/user.repository';
import { Team } from '../teams/entity/team.entity';
import { TeamRepository } from '../teams/entity/team.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([User, Team]),
    TypeOrmExModule.forCustomRepository([UserRepository, TeamRepository]),
  ],
  exports: [TypeOrmModule, TypeOrmExModule, HttpModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
