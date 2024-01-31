import { Global, Module } from "@nestjs/common";
import { UserSchema, User_Model } from "./user/user.schema";

import { MongooseModule } from "@nestjs/mongoose";
import { JOB_MODEL, JobSchema } from "./job/job.schema";
import { STUDENT_MODEL, StudentSchema } from "./student/student.schema";
import { EMPLOYER_MODEL, EmployerSchema } from "./employer/employer.schema";

const MODELS = [
    {
        name: User_Model,
        schema: UserSchema,
        discriminators: [
            { name: STUDENT_MODEL, schema: StudentSchema },
            { name: EMPLOYER_MODEL, schema: EmployerSchema }
        ],
    },
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