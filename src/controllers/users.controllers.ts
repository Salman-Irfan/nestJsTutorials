import { Controller, Get, Req } from '@nestjs/common';
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
}
