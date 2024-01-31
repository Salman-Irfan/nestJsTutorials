import { Module } from "@nestjs/common";
import { EmployerController } from "./employer.controller";
import { EmployerService } from "./employer.service";

@Module({
    imports: [],
    controllers: [EmployerController],
    providers: [EmployerService],
    exports: [],
})

export class EmployerModule {}