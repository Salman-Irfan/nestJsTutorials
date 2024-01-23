import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { AccountController } from "./controllers/accounts.controller";
import { UsersService } from "./services/users.service";

@Module({
    // imports
    imports: [],
    // controllers
    controllers: [
        UsersController,
        AccountController
    ],
    // providers
    providers: [
        UsersService
    ],
    // exports
    exports: [],
})
export class UsersModule {

}