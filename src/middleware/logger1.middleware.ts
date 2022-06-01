import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Logger1Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Logger1 Request...');
    next();
  }
}