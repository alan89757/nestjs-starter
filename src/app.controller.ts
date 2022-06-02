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
  HttpException,
  HttpStatus,
  NotFoundException,
  GatewayTimeoutException,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { ForbiddenException } from './exception/forbidden.exception';
import { HttpExceptionFilter } from './filter/http-exception.filter';

@Controller('app')
export class AppController {
  constructor(private readonly catsService: CatsService) {}
  @Get('forbidden')
  async findAll() {
    throw new HttpException('Forbidden111', HttpStatus.FORBIDDEN);
  }
  @Get('custom-forbidden')
  async customForbindden() {
    throw new ForbiddenException();
  }
  @Get('NotFoundException')
  async NotFoundException() {
    throw new NotFoundException(HttpStatus.NOT_FOUND, '找不到对应的资源');
  }
  @Get('GatewayTimeoutException')
  async GatewayTimeoutException() {
    throw new GatewayTimeoutException({
      status: HttpStatus.GATEWAY_TIMEOUT,
      error: '网关获取超时',
    });
  }
}
