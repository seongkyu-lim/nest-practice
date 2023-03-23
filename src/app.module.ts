import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { getMarketTypeOrmModule } from "./getMarketTypeOrmModule";

@Module({
  imports: [getMarketTypeOrmModule(), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
