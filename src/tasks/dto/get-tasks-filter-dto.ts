import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: 'Invalid task status',
  })
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
