import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module.js';
import { ReviewModule } from './review/review.module.js';
import { BankModule } from './bank/bank.module.js';

@Module({
  // приймає модулі
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    ReviewModule,
    BankModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
