import { Body, Controller, Post } from "@nestjs/common";
import { CreateStudentDTO } from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller('/api/v1')

export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    @Post('/add-student')
    createStudent(@Body() createStudentDto: CreateStudentDTO) {
        return this.studentService.create(createStudentDto)
    }
}
