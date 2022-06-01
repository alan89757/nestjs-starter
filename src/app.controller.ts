import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('list')
  getList(): string {
    return 'hello getList';
  }
  @Post('addItem')
  addItemn(): string {
    return 'hello addItem';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
