import { Controller, Get } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly commonService: CommonService){}
  @Get('middleware')
  middleware(): string {
    return '我是中间件';
  }
  @Get('common')
  getcommon(): string {
    return this.commonService.getCommon();
  }
}
