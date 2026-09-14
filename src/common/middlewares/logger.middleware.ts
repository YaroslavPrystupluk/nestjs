// import { Injectable, type NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

//для підключення class в app.module.ts
// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(`Request... ${req.method} ${req.url}`);
//     next();
//   }
// }

//Для підключення в main.ts треба функція а не class

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request... ${req.method} ${req.url}`);
  next();
}
