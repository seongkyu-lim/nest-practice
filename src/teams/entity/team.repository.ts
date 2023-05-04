import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CustomRepository } from '../../typeorm-ex.decorator';

@CustomRepository(Team)
export class TeamRepository extends Repository<Team> {}
