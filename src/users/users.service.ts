import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './entity/user.repository';
import { User } from './entity/user.entity';
import { TeamRepository } from '../teams/entity/team.repository';
import { DataSource, EntityManager } from 'typeorm';
import { BlobServiceClient } from '@azure/storage-blob';
import { HttpService } from '@nestjs/axios';
import {firstValueFrom} from "rxjs";

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly userRepository = new UserRepository(
    User,
    new EntityManager(this.dataSource),
  );
  private readonly blobServiceClient: BlobServiceClient;

  constructor(
    @Inject(DataSource) private readonly dataSource: DataSource,
    // private readonly userRepository: UserRepository,
    private readonly teamRepository: TeamRepository,
    private readonly httpService: HttpService,
  ) {
    this.blobServiceClient = BlobServiceClient.fromConnectionString(
      'DefaultEndpointsProtocol=https;AccountName=nile;AccountKey=QYImbM8rcBjejzIlxvk2iON1d/agnUwOifSe3qNN0rJgo6KcF49ea660tSVL592cu0Z9rTX7diEL+ASttNhwxg==;EndpointSuffix=core.windows.net',
    );
  }

  async onModuleInit() {
    // await this.queryRunnerTest;
    // await this.findOne(1);
    // const user = new User();
    // user.name = '하이';
    // user.age = 1;
    // await this.create(user);
    await this.uploadImageToAzureStorageTest();
  }
  async create(createUser: User) {
    // const findTeam = await this.teamRepository.findOne({
    //   where: { name: '바르셀로나FC' },
    //   relations: ['users'],
    // });

    // createUser.team = findTeam;
    const savedUser = await this.userRepository.save(createUser);
    console.log(savedUser.id);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number) {
    await this.userRepository.findOneBy({ name: '임성규' });
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async queryRunnerTest() {
    const user = new User();
    user.age = 10;
    user.name = '임성규';

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager
        .getRepository(this.userRepository.target)
        .save(user);

      const findUser = await this.userRepository.findOneBy({ name: '임성규' });
      if (findUser) {
        findUser.age = 20;
        await queryRunner.manager
          .getRepository(this.userRepository.target)
          .save(findUser);
      }

      console.log('>>>>>>> asdasdasdaa');
      await queryRunner.manager
        .getRepository(this.userRepository.target)
        .remove(findUser);
      console.log('>>>>>>> asdasdasdaa22222222');
      setTimeout(() => {
        this.userRepository.findOneBy({ name: '임성규' });
      }, 10000);
    } catch (e) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  private async uploadImageToAzureStorageTest() {
    const containerClient =
      this.blobServiceClient.getContainerClient('social-images');
    const blockBlobClient = containerClient.getBlockBlobClient('seasoningTest');

    const imageResponse = await firstValueFrom(
      this.httpService.get(
        'https://pbs.twimg.com/news_img/1656972076027359235/j9W2DPKB?format=png&name=orig',
        { responseType: 'arraybuffer' },
      ),
    );

    const imageBuffer = Buffer.from(imageResponse.data, 'binary');
    const response = await blockBlobClient.uploadData(imageBuffer);
    console.log(response);
    console.log(blockBlobClient.url);
  }
}
