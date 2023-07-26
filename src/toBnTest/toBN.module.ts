import { Module } from '@nestjs/common';
import { ToBNService } from './toBN.service';

@Module({
  controllers: [],
  providers: [ToBNService],
})
export class ToBNModule {}
