import { Injectable } from '@nestjs/common';

@Injectable() // 通过Injectable装饰器修饰
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
