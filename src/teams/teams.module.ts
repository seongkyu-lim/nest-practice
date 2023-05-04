import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entity/team.entity';
import { TypeOrmExModule } from '../typeorm-ex.module';
import { TeamRepository } from './entity/team.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Team]),
    TypeOrmExModule.forCustomRepository([TeamRepository]),
  ],
  exports: [TypeOrmModule, TypeOrmExModule],
  controllers: [TeamsController],
  providers: [TeamsService],
})
export class TeamsModule {}
