import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filter/any-exception.filter';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { AuthGlobalGuard } from './guard/auth-global.guard';
import { Logging2Interceptor } from './interceptor/logging2.interceptor';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { LoggerMiddleware } from './middleware/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 中间件
  // app.use(LoggerMiddleware);

  // 异常过滤
  // app.useGlobalFilters(new HttpExceptionFilter());
  // app.useGlobalFilters(new AllExceptionsFilter());

  // 守卫
  // app.useGlobalGuards(new AuthGlobalGuard());

  // 拦截器
  // app.useGlobalInterceptors(new Logging2Interceptor())
  app.useGlobalInterceptors(new TransformInterceptor())

  await app.listen(3000);
}
bootstrap();
