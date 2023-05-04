import { Injectable } from '@nestjs/common';
import { TeamRepository } from './entity/team.repository';
import { Team } from './entity/team.entity';

@Injectable()
export class TeamsService {
  constructor(private readonly teamRepository: TeamRepository) {}

  async create(createTeam: Team) {
    await this.teamRepository.save(createTeam);
  }
}
