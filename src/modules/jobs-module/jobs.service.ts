import { Injectable, NotFoundException, ForbiddenException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JOB_MODEL, JobDocument } from "src/schemas/job/job.schema";
import { CreateJobDTO } from "./jobs-dto/create-job.dto";
import { UserService } from "../user-module/user.service";
import { UserDocument } from "src/schemas/user/user.schema";

@Injectable()
export class JobsService {
    constructor(
        @InjectModel(JOB_MODEL) private readonly jobModel: Model<JobDocument>,
        private readonly userService: UserService, // Inject UserService
    ) { }

    // create a new job
    async create(createJobDto: CreateJobDTO) {
        // Retrieve user details based on userId
        const user = (await this.userService.findById(createJobDto.userId)) as UserDocument;


        // Check if the user has EMPLOYER account type
        if (user && user.accountType === 'EMPLOYER') {
            // Create the job if the user is an employer
            const createdJob = await this.jobModel.create({ ...createJobDto, employer: user._id });
            return createdJob;
        } else {
            // Throw ForbiddenException if the user is not an employer
            throw new ForbiddenException('Only employers can post jobs');
        }
    }
}
