import { Injectable } from '@nestjs/common';
import { TaskService } from '../task/task.service.js';

@Injectable()
export class MovieService {
  constructor(private readonly taskService: TaskService) {}

  async test() {
    return this.taskService.findTask();
  }
}
