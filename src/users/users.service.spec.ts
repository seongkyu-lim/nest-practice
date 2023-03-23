import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { getRepositoryToken } from '@nestjs/typeorm';
import { AppModule } from "../app.module";
import { UserModule } from "./entities/user.module";


const mockUserRepository = () => ({
  findOne: jest.fn(),
});

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: MockRepository<User>;

  beforeEach(async () => {
    // jest.setTimeout(60000);
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository(),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<MockRepository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    userRepository.findOne.mockResolvedValue('hello');
    expect(service).toBeDefined();
  });
});
