import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { readFileSync } from 'fs';
import { User } from './users/entities/user.entity';

export function getMarketTypeOrmModule() {
  console.log(__dirname);
  // const entityPath = path.join(__dirname, 'src/**/*.entity.ts');
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'test1234',
    database: 'nile_nft',
    entities: [User],
    autoLoadEntities: true,
    synchronize: true,
    logging: false,
  });
}
