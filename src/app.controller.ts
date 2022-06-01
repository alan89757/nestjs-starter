import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'welcome findAll';
  }
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
