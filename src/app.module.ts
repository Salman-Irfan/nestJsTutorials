import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';
import { NotesController } from './controllers/notes.controllers';
import { IpsController } from './controllers/subDomainRouting.controllers';

@Module({
  imports: [],
  controllers: [UsersController, NotesController, IpsController],
  providers: [],
})
export class AppModule {}
