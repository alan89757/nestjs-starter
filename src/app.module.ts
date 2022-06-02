import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CommonModule } from './common/common.module';
import { Logger1Middleware } from './middleware/logger1.middleware';
import { Logger2Middleware } from './middleware/logger2.middleware';
import { Logger3Middleware } from './middleware/logger3.middleware';

@Module({
  imports: [CatsModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
// export class AppModule {}
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger1Middleware, Logger2Middleware, Logger3Middleware)
      .forRoutes('/cats/global-fn-middleware');
  }
}
