import {
  Controller,
  Get,
  Post,
  Req,
  Param,
  Body,
  Query,
  Headers,
  HttpCode,
  Header,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {
    // 通过构造函数注入依赖
  }

  /** 设置response */

  // 设置状态码
  @Get('/res/httpCode')
  @HttpCode(304)
  getHttpCode() {
    return 'hello getHttpCode';
  }

  // 设置header头
  @Get('/res/header')
  @Header('Cache-Control', 'none')
  getHeaders() {
    return 'hello getHeaders';
  }

  // 重定向
  @Get('/res/redirect')
  @Redirect('https://nestjs.com', 301)
  getRedirect(): string {
    return 'hello getRedirect';
  }

  /** 获取请求参数 */
  /**
   * @Param(key?: string)	req.params/req.params[key]
    @Body(key?: string)	req.body/req.body[key]
    @Query(key?: string)	req.query/req.query[key]
    @Headers(name?: string)	req.headers/req.headers[name]
   * 
   */

  // req
  @Get('/req/all')
  getReq(@Req() req: Request): string {
    console.log(req);
    return 'hello getReq';
  }

  // req.Param
  @Get('/param/:id')
  getParams(@Param('id') id: number): string {
    console.log(id);
    return `获得参数id为${id}`;
  }

  // req.Body
  @Post('body')
  getBody(@Body() req: object): object {
    console.log(req);
    return req;
  }

  // req.Query
  @Get('query')
  getQuery(@Query('name') name: string): string {
    console.log(name);
    return `获得参数name为${name}`;
  }

  // req.Headers
  @Get('header')
  getHeader(@Headers() req: object): object {
    console.log(req);
    return req;
  }

  /** 路由 */

  @Get('search') // 支持路由通配符*
  search(): string {
    return 'hello search';
  }
  @Post('create')
  create(): string {
    return 'hello create';
  }

  /** end 路由 */
}
