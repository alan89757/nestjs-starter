import { Controller, Get } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly commonService: CommonService){}
  @Get('common')
  getcommon(): string {
    return this.commonService.getCommon();
  }
}
