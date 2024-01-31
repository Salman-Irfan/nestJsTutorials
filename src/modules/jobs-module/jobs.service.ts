import { Injectable, NotFoundException, ForbiddenException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JOB_MODEL, JobDocument } from "src/schemas/job/job.schema";
import { CreateJobDTO } from "./jobs-dto/create-job.dto";
import { UserService } from "../user-module/user.service";
import { UserDocument } from "src/schemas/user/user.schema";
import { UpdateJobDTO } from "./jobs-dto/update-job.dto";

@Injectable()
export class JobsService {
    constructor(
        @InjectModel(JOB_MODEL) private readonly jobModel: Model<JobDocument>,
        private readonly userService: UserService, // Inject UserService
    ) { }

    // create a new job
    async create(createJobDto: CreateJobDTO) {
        try {
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
        } catch (error) {
            console.log(error);
            return {
                error
            }
        }
    }
    // get all jobs
    async findAll() {
        try {
            const allJobs = await this.jobModel.find()
            return {
                success: true,
                jobs: allJobs
            }
        } catch (error) {
            console.log(error);
            return {
                error
            }
        }
    }
    // get job by id
    async findById(id: string) {
        try {
            const job = await this.jobModel.findById(id);
            return {
                success: true,
                job: job
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error
            }
        }
    }
    // updateById
    async updateById(id: string, updateJobDto: UpdateJobDTO) {
        try {
            const updatedJob = await this.jobModel.findByIdAndUpdate(
                id,
                updateJobDto,
                { new: true }
            )
            return updatedJob
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error
            }
        }
    }
    // deleteById
    async deleteById (id: string){
        try {
            const deletedJob = await this.jobModel.findByIdAndDelete(id)
            return {
                success: true,
                deletedJob: deletedJob
            }
        } catch (error) {
            console.log(error)
            return {
                success: false,
                message: error
            }
        }
    }
}
