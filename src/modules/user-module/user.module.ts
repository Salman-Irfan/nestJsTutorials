import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, User_Model } from "src/schemas/user/user.schema";
import { UserController } from "./user.controller";

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})

export class UserModule { }