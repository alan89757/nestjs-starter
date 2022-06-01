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
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appservice: AppService) {}
  @Get('hello')
  getHello(): string {
    return this.appservice.getHello();
  }
}
