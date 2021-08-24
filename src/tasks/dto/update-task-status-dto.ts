import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, {
    message: 'Invalid task status',
  })
  status: TaskStatus;
}
