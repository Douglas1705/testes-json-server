// src/controllers/UserController.ts
import axios from 'axios';
import { User } from '../models/User';

const API_URL = 'http://localhost:5000/users';

export class UserController {
  static async createUser(user: User): Promise<User> {
    const response = await axios.post(API_URL, user);
    return response.data;
  }

  static async getUser(id: number): Promise<User> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }

  static async updateUser(id: number, user: Partial<User>): Promise<User> {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  }

  static async deleteUser(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  }
}
