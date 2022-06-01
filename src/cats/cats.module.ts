import { Global, Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Global() // 全局模块
@Module({
  providers: [CatsService],
  controllers: [CatsController]
})
export class CatsModule {
  constructor(private readonly catsService: CatsService){}
}
