import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { JobsController } from "./jobs.controller";
import { UserService } from "../user-module/user.service";

@Module({
    imports: [],
    controllers: [JobsController],
    providers: [JobsService, UserService],
    exports: [],
})

export class JobsModule { }