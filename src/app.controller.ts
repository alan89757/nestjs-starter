import { Controller, Get, Post, Req, Param, Body, Query, Headers } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  /** 请求参数 */
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

  @Get('list')
  getList(): string {
    return 'hello getList';
  }
  @Post('addItem')
  addItemn(): string {
    return 'hello addItem';
  }

   /** end 路由 */
 
}
