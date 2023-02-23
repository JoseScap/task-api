import { TaskResponse } from './dto/response-task.dto';
import { TaskDocument } from './task.schema';

export function mapTaskDocumentToTaskResponse(task: TaskDocument) {
  return new TaskResponse({
    task: task.task,
    done: task.done,
    description: task.description ? task.description : '',
  });
}
