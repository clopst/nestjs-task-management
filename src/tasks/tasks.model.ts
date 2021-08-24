export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export const isValidTaskStatus = (status: string): boolean => {
  const options: string[] = Object.values(TaskStatus);
  return options.includes(status);
};
