import { Controller, Get, Post, Req } from "@nestjs/common";

@Controller('/module/users')
export class UsersController {
    @Get('/')
    getAllUsers(@Req() req: Request) {
        console.log(req['userAgent'])
        return {
            success: true,
            data: 'users',
            userAgent: req['userAgent'] 
        }
    }

    @Post('/')
    postUser(@Req() req: Request) {
        console.log(req['userAgent'])
        return {
            success: true,
            data: 'users',
            userAgent: req['userAgent'] 
        }
    }
}