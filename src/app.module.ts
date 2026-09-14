import {
  type MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ReviewModule } from './review/review.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { MovieModule } from './movie/movie.module.js';
import { ActorModule } from './actor/actor.module.js';
// import { LoggerMiddleware } from './common/middlewares/logger.middleware.js';

@Module({
  // приймає модулі
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    PrismaModule,
    ReviewModule,
    MovieModule,
    ActorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//для підкулючення класу middleware
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(LoggerMiddleware)
//       // .forRoutes('*')
//       .forRoutes({ path: 'movies', method: RequestMethod.POST });
//   }
// }
