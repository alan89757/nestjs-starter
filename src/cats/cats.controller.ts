import {
  Controller,
  GatewayTimeoutException,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  middleware() {
    return '多个中间件';
  }
  @Get('forbidden')
  async findAll() {
    throw new HttpException('Forbidden111', HttpStatus.FORBIDDEN);
  }
  @Get('custom-forbidden')
  async customForbindden() {
    throw new HttpException('自定义异常', HttpStatus.FORBIDDEN);
  }
  @Get('NotFoundException')
  async NotFoundException() {
    throw new NotFoundException(HttpStatus.NOT_FOUND, '找不到对应的资源');
  }
  @Get('GatewayTimeoutException')
  async GatewayTimeoutException() {
    throw new GatewayTimeoutException({
      status: HttpStatus.GATEWAY_TIMEOUT,
      error: '网关获取超时',
    });
  }
}
