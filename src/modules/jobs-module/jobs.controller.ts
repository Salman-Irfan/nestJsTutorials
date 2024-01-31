import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { JobsService } from "./jobs.service";
import { CreateJobDTO } from "./jobs-dto/create-job.dto";
import { UpdateJobDTO } from "./jobs-dto/update-job.dto";

@Controller('/api/v1')
export class JobsController {
    constructor(private readonly jobsService: JobsService) {
        console.log(`jobs controller`)
    }
    // create a new job
    @Post('/create-job')
    createJob(@Body() createJobDto: CreateJobDTO) {
        return this.jobsService.create(createJobDto)
    }

    // find all
    @Get('/jobs')
    getAllJobs() {
        return this.jobsService.findAll()
    }

    // find user by id
    @Get('/job/:id')
    getUserById(@Param('id') id: string) {
        return this.jobsService.findById(id)
    }

    // update user by id
    @Put('/update-job/:id')
    updateUserById(
        @Param('id') id: string,
        @Body() updateJobDto: UpdateJobDTO
    ) {
        return this.jobsService.updateById(id, updateJobDto)
    }

    // delete user by id
    @Delete('/delete-job/:id')
    deleteUserById(
        @Param('id') id: string
    ) {
        return this.jobsService.deleteById(id)
    }
}