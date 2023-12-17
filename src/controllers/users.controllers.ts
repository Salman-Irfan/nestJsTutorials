import { Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('/users')
export class UsersController {
  // methods for request handlers
  @Get('/profile')
  getProfile(@Req() req: Request) {
    console.log(req.body);
    return {
      message: `json response from nest js`,
    };
  }
  // post request
  @Post('/profile')
  postProfile(@Req() req: Request) {
    console.log(req.body);
    return {
      message: 'json response from nest js post request',
    };
  }
  // Dynamic PUT request
  @Put('/profile/:id/comments/:username/replies/:replyId')
  putProfile(
    @Req() req: Request,
    @Param('id') id: string,
    @Param('username') username: string,
    @Param('replyId') replyId: string,
  ) {
    console.log(req.body);
    console.log(`Received ID: ${id}`);
    console.log(`Received Username: ${username}`);
    console.log(`Received Reply ID: ${replyId}`);

    // Perform your logic here

    return {
      message: `JSON response from NestJS dynamic PUT request`,
    };
  }
  // totally dynamic parameters
  @Put('/dynamic-profile/:id/*') // Use wildcard parameter to capture the rest of the route
  dynamicPutProfile(
    @Req() req: Request,
    @Param('id') id: string,
    @Param() params: Record<string, string>,
  ) {
    console.log(req.body);
    console.log(`Received ID: ${id}`);

    // params will contain all dynamic parameters after 'id'
    console.log('Dynamic Parameters:', params);

    // Perform your logic here

    return {
      message: `JSON response from NestJS dynamic PUT request`,
    };
  }
}
