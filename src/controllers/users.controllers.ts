import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

// get request parameters
interface VideoParams {
  id: number;
  name: string;
}

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
    @Param() params: Record<string, any>,
  ) {
    console.log(req.body);
    console.log(`Received ID: ${id}`);

    // params will contain all dynamic parameters after 'id'
    console.log('Dynamic Parameters:', params);

    // Perform your logic here

    return {
      message: `JSON response from NestJS totally dynamic PUT request`,
    };
  }
  // delete request with nest response
  @Delete('/profile/:id')
  deleteProfile(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    console.log(req.body);
    console.log(`Received ID: ${id}`);

    // Perform your logic here

    return res.json({
      message: `JSON response from NestJS dynamic DELETE request`,
    });
  }
  // get request with parameters
  @Get('/videos/:id/:name')
  getVideos(@Param() params: VideoParams) {
    console.log(params.id);
    console.log(params.name);
    return {
      success: true,
      id: params.id,
      name: params.name,
    };
  }
  // get request with query parameters
  @Get('/records')
  getRecords(@Query() query: Record<string, any>) {
    console.log(query);
    return {
      success: true,
      query: query,
    };
  }
  // extract headers from request
  @Get('/headers')
  getHeaders(@Headers() headers: Record<string, any>) {
    console.log(headers);
    return {
      success: true,
      headers: headers,
    };
  }
  // body decorators with post request
  @Post('/video')
  addVideo(@Body() requestData: Record<string, any>) {
    console.log(requestData)
    return {
      message: 'json response from nest js post request with Body decorators',
      requestData: requestData
    };
  }
}
