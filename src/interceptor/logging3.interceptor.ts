import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class Logging3Interceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before Logging-3-Interceptor...');
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After Logging-3-Interceptor... ${Date.now() - now}ms`)),
      );
  }
}