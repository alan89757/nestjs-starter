import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  middleware() {
    return '多个中间件';
  }
}
