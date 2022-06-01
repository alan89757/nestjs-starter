import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  @Get('/list')
  list(): string {
    return 'hello list';
  }
}
