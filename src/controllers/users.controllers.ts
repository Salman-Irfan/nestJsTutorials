import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Inject,
  Optional,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response, Express } from 'express';
import { UsersStore } from 'src/stores/users.store';

// get request parameters
interface VideoParams {
  id: number;
  name: string;
}
// post request data
interface VideoDTO {
  title: string;
  description: string;
  tag: string;
}

@Controller('/users')
export class UsersController {
  // constructor
  constructor(
    @Inject(UsersStore) // this line is optional
    // optional decorator
    @Optional()
    private store: UsersStore){
    console.log(this.store)
  }
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
  @UseInterceptors(FileInterceptor('file')) // 'file' is the field name for the uploaded file in your form
  addVideo(
    @Body() requestData: VideoDTO,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log(requestData);
    console.log(file);
    return {
      message: 'json response from nest js post request with Body decorators',
      requestData: requestData,
      title: requestData.title,
    };
  }
}
