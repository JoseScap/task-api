import { TaskResponse } from './dto/response-task.dto';
import { TaskDocument } from './task.schema';

export function mapTaskDocumentToTaskResponse(
  task: TaskDocument,
): TaskResponse {
  return new TaskResponse({
    _id: task._id.toString(),
    task: task.task,
    done: task.done,
    description: task.description ? task.description : '',
  });
}

export function mapTaskDocumentsToTaskResponses(
  tasks: TaskDocument[],
): TaskResponse[] {
  return tasks.map((task) => mapTaskDocumentToTaskResponse(task));
}
