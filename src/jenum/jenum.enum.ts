import { Enum, EnumType } from 'ts-jenum';

@Enum('voteType')
export class VoteType extends EnumType<VoteType>() {
  static readonly APPROVAL = new VoteType('APPROVAL', '찬반식');
  static readonly CHOICE = new VoteType('CHOICE', '객관식');

  private constructor(readonly _name: string, readonly _voteType: string) {
    super();
  }

  get name(): string {
    return this._name;
  }

  get voteType(): string {
    return this._voteType;
  }
}
