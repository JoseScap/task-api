import { ITask } from '../task.interface';

export class TaskResponse implements ITask {
  _id: string;
  description?: string;
  done: boolean;
  task: string;
  user: string;

  constructor(partial: Partial<TaskResponse>) {
    Object.assign(this, partial);
  }
}
