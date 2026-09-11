import { Module } from '@nestjs/common';
import { ReviewService } from './review.service.js';
import { ReviewController } from './review.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewEntity } from './entities/review.entity.js';
import { UserService } from '../user/user.service.js';
import { UserEntity } from '../user/entities/user.entity.js';
import { BankEntity } from '../bank/entities/bank.entity.js';
import { PassportUserEntity } from '../user/entities/passport.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReviewEntity,
      UserEntity,
      BankEntity,
      PassportUserEntity,
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService, UserService],
})
export class ReviewModule {}
