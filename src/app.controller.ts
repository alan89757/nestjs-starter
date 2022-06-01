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
} from '@nestjs/common';
import { Request } from 'express';

@Controller('app')
export class AppController {
  @Get('/all')
  all(@Req() req: Request): string {
    console.log(req);
    return 'hello all';
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
}
