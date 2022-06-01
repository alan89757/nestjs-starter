import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  @Get()
  getCats(): string {
    return 'get all cats';
  }
}
