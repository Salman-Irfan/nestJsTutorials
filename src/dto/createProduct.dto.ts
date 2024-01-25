import { IsNotEmpty, IsNumber, IsString, isNotEmpty } from "class-validator";

export class CreateProductDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;
    
    @IsNumber()
    @IsNotEmpty()
    price: number;
}