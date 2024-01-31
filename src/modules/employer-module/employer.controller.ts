import { Body, Controller, Post } from "@nestjs/common";
import { CreateEmployerDTO } from "./dto/employer.dto";
import { EmployerService } from "./employer.service";

@Controller('/api/v1')
export class EmployerController {
    constructor(private readonly employerService: EmployerService){}
    
    @Post('/add-employer')
    createEmployer(@Body() createEmployeeDto: CreateEmployerDTO ){
        return this.employerService.create(createEmployeeDto)
    }
}