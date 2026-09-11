import { Module } from '@nestjs/common';
import { MovieService } from './movie.service.js';
import { MovieController } from './movie.controller.js';
import { TaskService } from '../task/task.service.js';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService], // експортує сервіс в інші сущності
})
export class MovieModule {}
