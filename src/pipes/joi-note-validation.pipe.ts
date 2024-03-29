import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) { }

    transform(value: Record<string, any>, metadata: ArgumentMetadata) {
        const {error} = this.schema.validate(value)
        
        if (error) {
            console.log(error)
            throw new BadRequestException({
                success: false,
                error: "Bad validation error",
                message: error.message
            })
        }
        return value
    }
}