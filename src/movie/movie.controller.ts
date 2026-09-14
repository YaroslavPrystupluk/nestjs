import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MovieService } from './movie.service.js';
import {
  CreateMovieRequest,
  CreateMovieResponse,
} from './dto/create-movie.dto.js';
import {
  ApiBody,
  ApiHeader,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Movie')
@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Отримати список фільмів',
    description: 'Поветає список фільмів в яких ключ isAvailable === true',
  })
  @ApiOkResponse({
    description: 'Фільми знайдені',
    type: [CreateMovieResponse],
  })
  @Get()
  findAll() {
    return this.movieService.findAll();
  }

  @ApiOperation({
    summary: 'Отримати фільм по ID',
    description: 'Поветає інформацію про фільм',
  })
  // @ApiParam({ name: 'id', type: 'string', description: 'ID фільма' }) //сам підхвачує nest
  // @ApiQuery({ name: 'Year', type: 'number', description: 'Рік фільму' }) //сам підхвачує nest
  @ApiHeader({ name: 'X-Auth-Token', description: 'Токен для авторизації' })
  @ApiOkResponse({
    description: 'Фільм знайдений',
    type: CreateMovieResponse,
  })
  @ApiNotFoundResponse({
    description: 'Фільм незнайдений',
    example: {
      status: 404,
      message: 'Movie not found',
      timeStamp: '2026-09-14',
      path: '/movies/123',
    },
  })
  @Get(':id')
  findByID(@Param('id') id: string) {
    return this.movieService.fineByID(id);
  }

  @ApiOperation({ summary: 'Створити фільм' })
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       title: { type: 'string', example: 'Fight Club' },
  //       releaseYear: { type: 'number', example: 1999 },
  //       actors: { type: 'Array(string)', example: ['Brad Pitt, Jet Lee'] },
  //     },
  //   },
  // }) // краще через dto
  @Post()
  create(@Body() dto: CreateMovieRequest) {
    return this.movieService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: CreateMovieRequest) {
    return this.movieService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.movieService.delete(id);
  }
}
