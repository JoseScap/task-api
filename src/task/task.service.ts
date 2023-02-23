import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task, TaskDocument } from './task.schema';
import { Model, Types } from 'mongoose';
import { mapTaskDocumentsToTaskResponses, mapTaskDocumentToTaskResponse } from './task.helper';
import { TaskResponse } from './dto/response-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(
    createTaskDto: CreateTaskDto,
    userId: Types.ObjectId,
  ): Promise<TaskResponse> {
    const createdTask: TaskDocument = new this.taskModel({
      ...createTaskDto,
      user: userId,
    });
    const task = await createdTask.save();
    return mapTaskDocumentToTaskResponse(task);
  }

  async findAll(userId: Types.ObjectId): Promise<TaskResponse[]> {
    const tasks = await this.taskModel.find({ user: userId });
    return mapTaskDocumentsToTaskResponses(tasks);
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
