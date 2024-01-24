import { timestamp } from 'rxjs';
import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class ParseDatePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        const date = this.convertTimeStamp(value)
        return date
    }
    private convertTimeStamp(timestamp:any){
        timestamp = timestamp+"asd"
        return timestamp
    }
}