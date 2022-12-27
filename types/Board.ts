export interface SubTask {
  title: string;
  isCompleted: boolean;
}

export interface Task {
  title: string;
  description: string;
  status: string;
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
