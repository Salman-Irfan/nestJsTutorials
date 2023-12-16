import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
