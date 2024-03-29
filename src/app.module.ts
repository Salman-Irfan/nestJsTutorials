import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controllers';
import { NotesController } from './controllers/notes.controllers';
import { IpsController } from './controllers/subDomainRouting.controllers';
import { UsersStore } from './stores/users.store';
import { DependencyController } from './controllers/dependency.controllers';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { ProductsController } from './controllers/products.controllers';
import { ProductsService } from './services/products-service';
import { UsersModule } from './users/users.module';
import { PipesController } from './controllers/pipes.controllers';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './config/mongoose-config.service';
import { JobsModule } from './modules/jobs-module/jobs.module';
import { UserModule } from './modules/user-module/user.module';
import { MongooseModelsModule } from './schemas/mongoose-models.module';
import { EmployerModule } from './modules/employer-module/employer.module';
import { StudentModule } from './modules/student-module/student.module';
import { NotesMongo } from './controllers/notes-mongo.controller';

const IS_DEV_MODE = true;

@Module({
  imports: [
    UsersModule,
    JobsModule,
    UserModule,
    EmployerModule,
    StudentModule,
    MongooseModelsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService
    }),
  ],
  controllers: [
    UsersController,
    NotesController,
    IpsController,
    DependencyController,
    ProductsController,
    PipesController,
    NotesMongo // notes constroller is register in controllers array,
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
