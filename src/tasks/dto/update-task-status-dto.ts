import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: 'Invalid task status',
  })
  status: TaskStatus;
}
