export interface SubTask {
  title: string;
  isCompleted: boolean;
}

export enum TaskStatus {
  TODO = "Todo",
  DOING = "Doing",
  DONE = "Done",
}

export interface Task {
  title: string;
  description?: string;
  status: TaskStatus;
  subtasks: SubTask[];
}

export interface BoardColumn {
  name: string;
  tasks: Task[];
}

export interface Board {
  name: string;
  columns: BoardColumn[];
}
