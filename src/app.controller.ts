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
} from '@nestjs/common';
import { Request } from 'express';
// import Joi from 'joi';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { ForbiddenException } from './exception/forbidden.exception';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { JoiValidationPipe } from './pipe/joi-validation.pipe';
import { ParseIntPipe } from './pipe/parse-int.pipe';
import FormSchema from './schema/form.schema';

const Joi = require('joi');

// const { string } = Joi;
// const schema = string();
const schema = Joi.object({
  username: Joi.string()
      .min(3)
      .max(16)
      .required(),
  password: Joi.string()
})

@Controller()
export class AppController {
  constructor(private readonly catsService: CatsService) { }
  // 自定义管道
  @Get('pipe/:id')
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ): string {
    return `get id ${id} `;
  }
  // 对象验证（joi） https://joi.dev/api/?v=17.6.0
  @Post('create')
  @UsePipes(new JoiValidationPipe(schema))
  create(@Body() Body) {
    return '表单创建成功!'
  }
}
