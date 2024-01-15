import { Controller, Inject } from '@nestjs/common';

@Controller('/dependency')
export class DependencyController {
    constructor(
        @Inject('DATABASE_NAME')
        private dbname: string,
    ) {
        console.log(dbname);
    }
}
