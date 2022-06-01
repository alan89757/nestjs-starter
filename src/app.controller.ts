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
import { CatsService } from './cats/cats.service';

@Controller('app')
export class AppController {
  constructor(private readonly catsService: CatsService) {}
  @Get('hello')
  getHello(): string {
    return this.catsService.getCats();
  }
}
