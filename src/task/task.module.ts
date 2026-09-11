import { Global, Module } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { TaskController } from './task.controller.js';
import { MovieModule } from '../movie/movie.module.js';

@Global() // ще зробити import в app.module і він стає видимий по проєкту
@Module({
  exports: [TaskService],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
