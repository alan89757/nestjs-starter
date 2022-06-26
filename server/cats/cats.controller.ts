import { Controller, Get } from '@nestjs/common';
import { CommonService } from 'server/common/common.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly commonService: CommonService) {}
  @Get('global-fn-middleware')
  globalMiddleware(): string {
    return '全局函数中间件';
  }
  @Get('middleware')
  middleware(): string {
    return '我是中间件';
  }
  @Get('common')
  getcommon(): string {
    return this.commonService.getCommon();
  }
}
