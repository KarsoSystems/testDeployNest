import {
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async saveFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    const res = await this.appService.uploadFile(file);
    console.log(res);
    return 'imagen test';
  }
  // https://xonashsh8j.execute-api.us-west-2.amazonaws.com/dev/

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('status')
  getStatus() {
    return `ESTOY FUNCIONANDO EN MODO ${process.env.API_MODE} asimon`;
  }

  @Post('status')
  postStatus(@Req() request: Request) {
    // serverless deploy
    return request.body;
  }
}
