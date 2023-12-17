import { Controller, Get } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  // methods for request handlers
  @Get('/profile')
  getProfile() {
    return {
      message: `json response from nest js`
    }
  }
}
