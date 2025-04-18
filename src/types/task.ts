
export interface SubTask {
  id: string;
  title: string;
  completed: boolean;
  startDate?: Date;
  endDate?: Date;
}

export interface Task {
  id: string;
  title: string;
  isDaily: boolean;
  completed: boolean;
  startDate?: Date;
  endDate?: Date;
  subTasks: SubTask[];
}
