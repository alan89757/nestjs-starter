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
} from '@nestjs/common';
import { Request } from 'express';
// import Joi from 'joi';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { ForbiddenException } from './exception/forbidden.exception';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { RolesGuard } from './guard/roles.guard';
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
@Controller()
export class AppController {
  constructor(private readonly catsService: CatsService) { }
  // 守卫
  @Post('/guards/create')
  guards() {
    return 'get guards';
  }
}
