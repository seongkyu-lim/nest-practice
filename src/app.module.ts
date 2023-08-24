import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
// import { getTypeOrmModule } from './getTypeOrmModule';
import { JenumController } from './jenum/jenum.controller';
import { JenumService } from './jenum/jenum.service';
import { JenumModule } from './jenum/jenum.module';

@Module({
  imports: [JenumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
