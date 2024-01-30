import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema, User_Model } from "src/schemas/user/user.schema";

@Module({
    imports: [MongooseModule.forFeature([
        { name: User_Model, schema: UserSchema }
    ])],
    controllers: [],
    providers: [UserService],
    exports: [MongooseModule],
})

export class UserModule { }