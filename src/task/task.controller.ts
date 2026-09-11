import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service.js';
import { CreateTaskDto } from './dto/createTask.dto.js';
import { UpdateTaskDto } from './dto/updateTask.dto.js';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('all')
  getAllTasks() {
    return this.taskService.findTask();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.findTaskById(+id);
  }

  @Post('create')
  createTask(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Put('update:id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(+id, dto);
  }

  @Patch('update:id')
  patcUupdate(@Param('id') id: string, @Body() dto: Partial<UpdateTaskDto>) {
    return this.taskService.patchUpdate(+id, dto);
  }

  @Delete('delete:id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(+id);
  }
}
