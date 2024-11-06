export interface Task {
    id: number;
    priority: string;
    title: string;
    members: string[];
    commentsCount: number;
    completedCount: number;
    progress: number;
    startTime: string;
    endTime: string;
    timeEstimate: string;
    createdBy: string;
  }
  