import { Global, Module } from "@nestjs/common";
import { UserSchema, User_Model } from "./user/user.schema";

import { MongooseModule } from "@nestjs/mongoose";
import { JOB_MODEL, JobSchema } from "./job/job.schema";

const MODELS = [
    { name: User_Model, schema: UserSchema },
    { name: JOB_MODEL, schema: JobSchema },
    
]

@Global()
@Module({
    imports: [MongooseModule.forFeature(MODELS)],
    controllers: [],
    providers: [],
    exports: [MongooseModule],
})

export class MongooseModelsModule { }