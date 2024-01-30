import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument, User_Model } from "src/schemas/user/user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User_Model) private readonly userModel: Model<UserDocument>){
        console.log(this.userModel)
    }
}