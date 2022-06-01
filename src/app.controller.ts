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
  Head,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /** 设置response */

  // 设置状态码
  @Get()
  @HttpCode(304)
  getHttpCode() {
    return 'hello getHttpCode';
  }

  // 设置header头
  @Get()
  @Head('Cache-Control', 'none')
  getHeaders() {
    return 'hello getHeaders';
  }

  // 重定向
  @Get()
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
  @Get()
  getReq(@Req() req: Request): string {
    console.log(req.header);
    return 'hello getReq';
  }

  // req.Param
  @Get()
  getParams(@Param() req: Request): string {
    console.log(req.params);
    return 'hello getParams';
  }

  // req.Body
  @Get()
  getBody(@Body() req: Request): string {
    console.log(req.body);
    return 'hello getBody';
  }

  // req.Query
  @Get()
  getQuery(@Query() req: Request): string {
    console.log(req.query);
    return 'hello getQuery';
  }

  // req.Headers
  @Get()
  getHeader(@Headers() req: Request): string {
    console.log(req.headers);
    return 'hello getHeader';
  }

  /** 路由 */

  @Get('find') // 支持路由通配符*
  find(): string {
    return 'hello find';
  }
  @Post('create')
  create(): string {
    return 'hello create';
  }

  /** end 路由 */
}
