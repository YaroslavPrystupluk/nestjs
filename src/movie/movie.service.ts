import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateMovieRequest } from './dto/create-movie.dto.js';
import { Movie } from '../generated/prisma/client.js';

@Injectable()
export class MovieService {
  constructor(public readonly prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.movie.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      // include: {
      //   actors: {
      //     select: {
      //       id: true,
      //       name: true,
      //     },
      //   },
      //   rewiews: true,
      // },
      select: {
        id: true,
        title: true,
        actors: {
          select: {
            id: true,
            name: true,
          },
        },
        reviews: true,
      },
    });
  }

  async fineByID(id: string): Promise<Movie> {
    const movie = await this.prismaService.movie.findUnique({
      where: {
        id,
      },
      include: {
        actors: true,
        poster: true,
      },
    });

    if (!movie || !movie.isAvailable) {
      throw new NotFoundException(`Фільм з ідентифікатором ${id} не знайдено`);
    }

    return movie;
  }

  async create(dto: CreateMovieRequest): Promise<Movie> {
    const { title, releaseYear, imageUrl, actorIds } = dto;
    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: actorIds },
      },
    });

    if (!actors || !actors.length) {
      throw new NotFoundException('Не знайдено акторів чи актора');
    }

    return await this.prismaService.movie.create({
      data: {
        title,
        releaseYear,
        poster: imageUrl
          ? {
              create: {
                url: imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });
  }

  async update(id: string, dto: CreateMovieRequest): Promise<Movie> {
    const { title, releaseYear, imageUrl, actorIds } = dto;

    const movie = await this.fineByID(id);

    const actors = await this.prismaService.actor.findMany({
      where: {
        id: { in: actorIds },
      },
    });

    if (!actors || !actors.length) {
      throw new NotFoundException('Не знайдено акторів чи актора');
    }

    await this.prismaService.movie.update({
      where: {
        id,
      },
      data: {
        title,
        releaseYear,
        poster: imageUrl
          ? {
              create: {
                url: imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return movie;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.fineByID(id);
    await this.prismaService.movie.delete({ where: { id: movie.id } });

    return id;
  }
}
