import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { Logger1Middleware } from './middleware/logger1.middleware';
import { Logger2Middleware } from './middleware/logger2.middleware';
import { Logger3Middleware } from './middleware/logger3.middleware';

@Module({
  imports: [CatsModule], // 导入模块的列表
  controllers: [AppController], // 控制器
  providers: [AppService], // 服务注入
  exports: [CatsModule], // 本模块提供可用模块子集
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(Logger1Middleware, Logger2Middleware, Logger3Middleware).forRoutes('cats')
  }
}
