import { Test, TestingModule } from '@nestjs/testing';
import { JenumService } from './jenum.service';

describe('JenumService', () => {
  let service: JenumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenumService],
    }).compile();

    service = module.get<JenumService>(JenumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
