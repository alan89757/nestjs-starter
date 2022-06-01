import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  @Get('/list')
  list(): string {
    return 'hello list';
  }
  @Post('/create')
  create(): string {
    return 'hello create';
  }
  @Put('/put')
  put(): string {
    return 'hello create';
  }
  @Delete('/delete')
  delete(): string {
    return 'hello create';
  }
  @Patch('/patch')
  patch(): string {
    return 'hello create';
  }
}
