import { Injectable } from "@nestjs/common";
import { CreateStudentDTO } from "./dto/student.dto";
import { InjectModel } from "@nestjs/mongoose";
import { STUDENT_MODEL, StudentDocument } from "src/schemas/student/student.schema";
import { Model } from "mongoose";

@Injectable()

export class StudentService {
    constructor(
        @InjectModel(STUDENT_MODEL)
        private readonly studentModel: Model<StudentDocument>
    ){}

    async create(createStudentDto: CreateStudentDTO){
        const createdStudent = await this.studentModel.create(createStudentDto)
        return createdStudent
    }
}