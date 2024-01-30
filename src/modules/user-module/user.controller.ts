import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDTO } from "src/dto/create-user.dto";
import { UpdateUserDTO } from "src/dto/update-user.dto";

@Controller('/api/v1')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // create a new user
    @Post('/create-user')
    createUser(@Body() createUserDto: CreateUserDTO) {
        return this.userService.create(createUserDto)
    }

    // find all
    @Get('/users')
    getAllUsers() {
        return this.userService.findAll()
    }
    
    // find user by id
    @Get('/user/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.findById(id)
    }
    
    // update user by id
    @Put('/update-user/:id')
    updateUserById(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDTO
    ) {
        return this.userService.updateById(id, updateUserDto)
    }
    
    // delete user by id
    @Delete('/delete-user/:id')
    deleteUserById(
        @Param('id') id: string
    ) {
        return this.userService.deleteById(id)
    }


}