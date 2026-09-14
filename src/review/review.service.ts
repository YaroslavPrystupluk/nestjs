import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { MovieService } from '../movie/movie.service.js';
import { Review } from '../generated/prisma/client.js';

@Injectable()
export class ReviewService {
  constructor(
    public readonly prismaService: PrismaService,
    public readonly movieService: MovieService,
  ) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    const { text, rating, movieId } = dto;
    const movie = await this.movieService.fineByID(movieId);

    const review = await this.prismaService.review.create({
      data: {
        text,
        rating,
        movie: {
          connect: {
            id: movie.id,
          },
        },
      },
    });
    return review;
  }
}
