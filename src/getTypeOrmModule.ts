// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/entity/user.entity';
// import { Team } from './teams/entity/team.entity';
//
// export function getTypeOrmModule() {
//   console.log(__dirname);
//   // const entityPath = path.join(__dirname, 'src/**/*.entity.ts');
//   return TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'alan',
//     password: '1234',
//     database: 'champion',
//     entities: [User, Team],
//     autoLoadEntities: true,
//     synchronize: true,
//     logging: true,
//   });
// }
