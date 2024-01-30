import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdateUserDTO } from "src/dto/update-user.dto";
import { UserDocument, User_Model } from "src/schemas/user/user.schema";

@Injectable()
export class UserService {
    constructor(@InjectModel(User_Model) private readonly userModel: Model<UserDocument>) {
        console.log(this.userModel)
    }
    // create a new user service
    async create(createUserDto: CreateUserDTO) {
        try {
            const user = await this.userModel.create(createUserDto)
            return user
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    }

    // find all users
    async findAll(){
        try {
            const allUsers = await this.userModel.find()
            return allUsers
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    }
    // find user by id
    async findById(id: string){
        try {
            const user = await this.userModel.findById(id)
            return user
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    }
    // update user By Id
    async updateById (id : string, updateUserDto: UpdateUserDTO){
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(
                id,
                updateUserDto,
                {new: true}
            )
            return updatedUser
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    }

    // deleteById
    async deleteById (id: string){
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(id)
            return {deletedUser}
        } catch (error) {
            console.log(error)
            return {
                error
            }
        }
    }
}