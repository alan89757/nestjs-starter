import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Headers,
  HttpCode,
  Header,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('app')
export class AppController {
  // 设置状态码
  @Get('/httpCode')
  @HttpCode(304)
  getHttpCode() {
    return 'hello getHttpCode';
  }

  // 设置header头
  @Get('/header')
  @Header('abc', 'xxx')
  getHeaders() {
    return 'hello getHeaders';
  }

  // 重定向
  @Get('/redirect')
  @Redirect('https://nestjs.com', 301)
  getRedirect(): string {
    return 'hello getRedirect';
  }
}
