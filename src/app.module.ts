import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';
import { NotesController } from './controllers/notes.controllers';
import { IpsController } from './controllers/subDomainRouting.controllers';
import { UsersStore } from './stores/users.store';
import { DependencyController } from './controllers/dependency.controllers';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ProductsController } from './controllers/products.controllers';
import { ProductsService } from './services/products-service';

const IS_DEV_MODE = true;

@Module({
  imports: [],
  controllers: [
    UsersController,
    NotesController,
    IpsController,
    DependencyController,
    ProductsController,
  ],
  // in providers, we'll mention those classes that can be used as a dependency, and we want its instance
  providers: [
    // when we have same name for injection token, and class, then we can use shortend syntax
    UsersStore,
    // name of the injection token, value or useClass name
    { provide: 'DATABASE_NAME', useValue: 'nestMongo' },
    {
      provide: 'EVENT_STORE',
      useFactory: (limit: number) => {
        const eventBus = IS_DEV_MODE
          ? new ReplaySubject(limit)
          : new BehaviorSubject(2)
        console.log(`limit = ${limit}`)
        return eventBus
      },
      inject: [{ token: 'LIMIT', optional: true }]
    },
    {
      provide: 'LIMIT',
      useValue: 4,
    },
    // service providers
    ProductsService
  ],
})
export class AppModule { }
