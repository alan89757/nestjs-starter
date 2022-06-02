import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger3Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Logger3 Request...');
    next();
  }
}