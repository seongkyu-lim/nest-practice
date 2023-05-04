import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './entity/user.repository';
import { User } from './entity/user.entity';
import { TeamRepository } from '../teams/entity/team.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly teamRepository: TeamRepository,
  ) {}
  async create(createUser: User) {
    const findTeam = await this.teamRepository.findOne({
      where: { name: '바르셀로나FC' },
      relations: ['users'],
    });

    createUser.team = findTeam;
    await this.userRepository.save(createUser);
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
