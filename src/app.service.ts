import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getList(): string {
    return `welcome getLit`;
  }
}
