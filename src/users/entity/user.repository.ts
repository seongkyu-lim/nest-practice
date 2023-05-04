import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CustomRepository } from '../../typeorm-ex.decorator';

@CustomRepository(User)
export class UserRepository extends Repository<User> {}
