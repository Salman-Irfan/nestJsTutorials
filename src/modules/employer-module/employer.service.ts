import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EMPLOYER_MODEL, EmployerDocument } from "src/schemas/employer/employer.schema";
import { CreateEmployerDTO } from "./dto/employer.dto";

@Injectable()
export class EmployerService {
    constructor(
        @InjectModel(EMPLOYER_MODEL)
        private readonly employerModel : Model<EmployerDocument>
    ){}

    // create employer
    async create(createEmployerDto: CreateEmployerDTO) {
        const createdEmployer = await this.employerModel.create(createEmployerDto)
        return createdEmployer
    }
}