import { Body, Controller, Post } from '@nestjs/common';
import { Team } from './entity/team.entity';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamService: TeamsService) {}

  @Post()
  async addTeam(@Body() createTeam: Team) {
    return await this.teamService.create(createTeam);
  }
}
