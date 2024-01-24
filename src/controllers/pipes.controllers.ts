import { Body, Controller, Post } from "@nestjs/common";
import { timestamp } from "rxjs";
import { ParseDatePipe } from "src/pipes/parse-date.pipe";

@Controller('/pipes')
export class PipesController {
    @Post('/post')
    addPipe(@Body("timestamp", ParseDatePipe) date: string){
        console.log(date)
        return {
            success: true,
            data: date
        }
    }
}