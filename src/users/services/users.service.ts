import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
    constructor(private readonly configService: ConfigService) {
        const envPort = this.configService.get('APP_PORT')
        console.log(envPort)
    }
}