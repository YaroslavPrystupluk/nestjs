import { Injectable } from '@nestjs/common';
import { ReviewEntity } from './entities/review.entity.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service.js';
import { CreateReviewDto } from './dto/create-review.dto.js';

@Injectable()
export class ReviewService {
  // constructor(
  //   @InjectRepository(ReviewEntity)
  //   public readonly reviewRepository: Repository<ReviewEntity>,
  //   public readonly userService: UserService,
  // ) {}
  // async create(dto: CreateReviewDto): Promise<ReviewEntity> {
  //   const { text, rating, userId } = dto;
  //   const user = await this.userService.findById(userId);
  //   const review = this.reviewRepository.create({ text, rating, user });
  //   return await this.reviewRepository.save(review);
  // }
}
