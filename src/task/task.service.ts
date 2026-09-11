import { Injectable, NotFoundException } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './dto/createTask.dto.js';
import { UpdateTaskDto } from './dto/updateTask.dto.js';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Learn Nest js',
      description: "It's cool",
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Build REST Api',
      description: '',
      isCompleted: true,
    },
  ];

  findTask() {
    return this.tasks;
  }

  findTaskById(id: number) {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException('Task not found');
    }

    return task;
  }

  create(dto: CreateTaskDto) {
    const { title, description } = dto;

    const newTask = {
      id: this.tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };

    this.tasks.push(newTask);

    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const { title, description, isCompleted } = dto;
    const task = this.findTaskById(id);

    task.title = title;
    task.description = description;
    task.isCompleted = isCompleted;

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findTaskById(id);

    const patcUupdateTask = { ...task, ...dto };

    return patcUupdateTask;
  }

  delete(id: number) {
    const task = this.findTaskById(id);

    this.tasks.filter((t) => t.id !== task.id);
    return task;
  }
}
