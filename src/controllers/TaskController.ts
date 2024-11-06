// src/controllers/TaskController.ts
import axios from 'axios';
import { Task } from '../models/Task';

const API_URL = 'http://localhost:5000/tasks';

export class TaskController {
  static async createTask(task: Task): Promise<Task> {
    const response = await axios.post(API_URL, task);
    return response.data;
  }

  static async getTask(id: number): Promise<Task> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  static async updateTask(id: number, task: Partial<Task>): Promise<Task> {
    const response = await axios.put(`${API_URL}/${id}`, task);
    return response.data;
  }

  static async deleteTask(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  }
}
