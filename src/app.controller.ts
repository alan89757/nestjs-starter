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
  UsePipes,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';
// import Joi from 'joi';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { ForbiddenException } from './exception/forbidden.exception';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { RolesGuard } from './guard/roles.guard';
import { ErrorsInterceptor } from './interceptor/exception.interceptor';
import { Logging1Interceptor } from './interceptor/logging1.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { JoiValidationPipe } from './pipe/joi-validation.pipe';
import { ParseIntPipe } from './pipe/parse-int.pipe';
import FormSchema from './schema/form.schema';

const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string()
      .min(3)
      .max(16)
      .required(),
  password: Joi.string()
})

@UseGuards(RolesGuard)
@UseInterceptors(Logging1Interceptor)
@Controller()
export class AppController {
  constructor(private readonly catsService: CatsService) { }
  
  // 拦截器-异常映射
  @Get('interceptor-exception')
  @UseInterceptors(new ErrorsInterceptor())
  exception(): string {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // return 'get interceptor-exception';
    
  }
  
  // 拦截器-响应映射
  @Post('interceptor-response')
  @UseInterceptors(new TransformInterceptor())
  response(): object {
    return {
      errCode: -10000,
      msg: '购买失败'
    };
  }
  // 绑定拦截器-三种方式
  @Get('interceptor')
  getInterceptor(): string {
    return 'get Interceptor';
  }
  // 守卫
  @Post('/guards/create')
  guards() {
    return 'get guards';
  }
}
