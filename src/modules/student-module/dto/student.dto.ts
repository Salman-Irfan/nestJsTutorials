import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CreateUserDTO } from "src/dto/create-user.dto";

export class CreateStudentDTO extends CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    university: string;

    @IsString()
    @IsNotEmpty()
    course: string;

    @IsString()
    @IsOptional()
    grade?: string;

    @IsBoolean()
    @IsOptional()
    isUnderInternship?: boolean;
}