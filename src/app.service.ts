import { Injectable } from '@nestjs/common';
import { VoteType } from './jenum/jenum.enum';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('>>> votetype.values : ' + VoteType.values());
    console.log('>>> voteType.APPROVAL : ' + VoteType.APPROVAL);
    console.log('>>> VoteType.name : ' + VoteType.name);
    console.log('>>> VoteType.APPROVAL.name : ' + VoteType.APPROVAL.name);
    return 'Hello World!';
  }
}
