import { Module } from '@nestjs/common';
import { ReviewService } from './review.service.js';
import { ReviewController } from './review.controller.js';
import { UserService } from '../user/user.service.js';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService, UserService],
})
export class ReviewModule {}
