import { Controller, Inject } from '@nestjs/common';
import { Subject } from 'rxjs';

@Controller('/dependency')
export class DependencyController {
    constructor(
        @Inject('DATABASE_NAME')
        private dbname: string,
        @Inject('EVENT_STORE')
        private eventBus: Subject<any>,
    ) {
        console.log(this.dbname);
        console.log(this.eventBus);
    }
}
