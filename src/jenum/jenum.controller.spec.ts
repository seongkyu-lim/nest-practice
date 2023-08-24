import { Test, TestingModule } from '@nestjs/testing';
import { JenumController } from './jenum.controller';

describe('JenumController', () => {
  let controller: JenumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JenumController],
    }).compile();

    controller = module.get<JenumController>(JenumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
