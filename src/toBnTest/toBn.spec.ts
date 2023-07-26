import { ToBNService } from './toBN.service';
import { Test } from '@nestjs/testing';

describe('toBnTest', () => {
  let service: ToBNService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [],
      providers: [ToBNService],
    }).compile();
    service = module.get(ToBNService);
  });

  test('toBN .div 메소드 테스트', () => {
    service.toBnDiv;
  });
});
