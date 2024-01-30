import { Module } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { MongooseModule } from "@nestjs/mongoose";
import { JOB_MODEL, JobSchema } from "src/schemas/job/job.schema";

@Module({
    imports: [],
    controllers: [],
    providers: [JobsService],
    exports: [],
})

export class JobsModule { }