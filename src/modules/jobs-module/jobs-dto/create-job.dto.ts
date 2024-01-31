import { Type } from "class-transformer";
import {
    IsEnum,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    ValidateNested,
    IsMongoId,
} from "class-validator";
import { JOB_TYPE } from "src/constants/job.constants";
import { AddressDTO } from "src/dto/address.dto";


export class CreateJobDTO {
    @IsMongoId()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    companyName: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    experience: number;

    @IsString({ each: true })
    @IsOptional()
    tags?: string[];

    @IsString()
    @IsOptional()
    salary?: string;

    @IsEnum(JOB_TYPE)
    @IsNotEmpty()
    type: JOB_TYPE;

    @Type(() => AddressDTO)
    @ValidateNested()
    @IsNotEmpty()
    location: AddressDTO;
}
