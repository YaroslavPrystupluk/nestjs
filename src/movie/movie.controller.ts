import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Headers,
  Req,
  Res,
  Param,
  Ip,
  Session,
} from '@nestjs/common';
import { MovieService } from './movie.service.js';
import type { Request, Response } from 'express';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async test() {
    return this.movieService.test();
  }

  //отримання query з рядка
  @Get()
  findAll(@Query('genre') genre: string) {
    return genre
      ? `Фільми в жанрі ${genre}`
      : [
          {
            title: 'Fight club',
          },
          {
            title: 'Green milles',
          },
        ];
  }

  @Get()
  findAllMoreQuery(@Query() query: any /*замість any треба DTO описати*/) {
    return JSON.stringify(query);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return { id };
  }

  //передавання body
  @Post()
  create(@Body('title') title: string) {
    return `Фільм "${title}" був доданий`;
  }

  @Post()
  createMovie(@Body() body: { title: string; genre: string }) {
    return body;
  }

  //декоратор для отримання заголовка
  @Get()
  getHeaders(@Headers() headers: any) {
    return headers;
  }

  @Get()
  getHeader(@Headers('user-agent') userAgent: any) {
    return userAgent;
  }

  //отримання всього request
  @Get()
  getRequestDetails(@Req() req: Request) {
    return {
      method: req.method,
      url: req.url,
      headers: req.headers,
      query: req.query,
      params: req.params,
    };
  }

  //отримання всього response
  @Get()
  getResponseDetails(@Res() res: Response) {
    return res.status(200).json({ message: 'Success' });
  }

  //отримання IP
  @Get()
  getIpDetails(@Ip() ip: string) {
    return ip;
  }

  //отримання Session
  @Get()
  getSessionDetails(@Session() session: any) {
    return session;
  }
}
