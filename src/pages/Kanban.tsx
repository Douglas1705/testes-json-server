import { useEffect, useState } from 'react';
import axios from 'axios';
import { Task } from '../types/Task';

function Kanban() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    axios.get<Task[]>('http://localhost:5000/tasks')
      .then(response => {
        const userTasks = response.data.filter(task => task.members.includes(loggedInUser.username));
        setTasks(userTasks);
      })
      .catch(error => console.error('Erro ao carregar tasks:', error));
  }, []);

  return (
    <div className="container mx-auto my-8 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Kanban</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="mb-4 p-4 border rounded">
            <h3 className="text-xl font-bold">{task.title}</h3>
            <p>Prioridade: {task.priority}</p>
            <p>Progresso: {task.progress}%</p>
            <p>Integrantes: {task.members.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kanban;
