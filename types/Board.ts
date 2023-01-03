export interface SubTask {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  subtasks: SubTask[];
}

export interface BoardColumn {
  id: string;
  name: string;
  tasks?: Task[];
}

export interface Board {
  id: string;
  name: string;
  columns: BoardColumn[];
}
