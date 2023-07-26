import { Controller, Get } from '@nestjs/common';
import { ToBNService } from './toBN.service';

@Controller('to-bn')
export class ToBNController {
  constructor(private readonly toBNService: ToBNService) {}

  @Get('div')
  async toBNDivTest() {
    await this.toBNService.toBnDiv();
  }
}
