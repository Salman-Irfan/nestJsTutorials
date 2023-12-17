import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
  // methods for request handlers
  @Get('/profile')
  getProfile(@Req() req: Request ) {
    console.log(req.body)
    return {
      message: `json response from nest js`
    }
  }
  // post request
  @Post('/profile')
  postProfile(@Req() req: Request){
    console.log(req.body)
    return {
      message: 'json response from nest js post request'
    }
  }
  // make dynamic put request in nest js
}
