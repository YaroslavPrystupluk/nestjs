import { Module } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [TaskService],
})
export class TaskModule {}
