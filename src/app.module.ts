import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';
import { NotesController } from './controllers/notes.controllers';

@Module({
  imports: [],
  controllers: [UsersController, NotesController],
  providers: [],
})
export class AppModule {}
