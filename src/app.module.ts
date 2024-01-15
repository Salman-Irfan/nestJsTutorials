import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';
import { NotesController } from './controllers/notes.controllers';
import { IpsController } from './controllers/subDomainRouting.controllers';
import { UsersStore } from './stores/users.store';
import { DependencyController } from './controllers/dependency.controllers';

@Module({
  imports: [],
  controllers: [
    UsersController,
    NotesController,
    IpsController,
    DependencyController,
  ],
  // in providers, we'll mention those classes that can be used as a dependency, and we want its instance
  providers: [
    // when we have same name for injection token, and class, then we can use shortend syntax
    UsersStore,
    // name of the injection token, value or useClass name
    { provide: 'DATABASE_NAME', useValue: 'nestMongo' },
  ],
})
export class AppModule { }
