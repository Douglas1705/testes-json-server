export class Task {
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
  
    constructor(task: Task) {
      this.id = task.id;
      this.priority = task.priority;
      this.title = task.title;
      this.members = task.members;
      this.commentsCount = this.generateRandomCommentsCount();
      this.completedCount = this.generateRandomCompletedCount();
      this.progress = this.generateRandomProgress();
      this.startTime = task.startTime;
      this.endTime = task.endTime;
      this.timeEstimate = task.timeEstimate;
      this.createdBy = task.createdBy;
    }
  
    // Método para gerar número aleatório de comentários
    private generateRandomCommentsCount(): number {
      return Math.floor(Math.random() * 10);
    }
  
    // Método para gerar número aleatório de tarefas concluídas
    private generateRandomCompletedCount(): number {
      return Math.floor(Math.random() * 5);
    }
  
    // Método para gerar progresso aleatório
    private generateRandomProgress(): number {
      return Math.floor(Math.random() * 100);
    }
  }
  