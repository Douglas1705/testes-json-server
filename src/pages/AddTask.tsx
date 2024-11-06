import React, { useState } from 'react';
import axios from 'axios';

function AddTask() {
  const [taskData, setTaskData] = useState({
    priority: 'High',
    title: '',
    members: [],
    startTime: '',
    endTime: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
    const newTask = {
      ...taskData,
      members: [loggedInUser.username],
      commentsCount: Math.floor(Math.random() * 10),
      completedCount: Math.floor(Math.random() * 5),
      progress: Math.floor(Math.random() * 100),
      startTime: new Date().toISOString(),
      endTime: new Date(new Date().getTime() + 3600000).toISOString(), // 1 hora depois
      timeEstimate: '1h',
      createdBy: loggedInUser.username
    };

    axios.post('http://localhost:5000/tasks', newTask)
      .then(response => {
        console.log('Tarefa adicionada:', response.data);
      })
      .catch(error => console.error('Erro ao adicionar tarefa:', error));
  }

  return (
    <div className="container mx-auto my-8 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Adicionar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Título</label>
          <input type="text" name="title" className="w-full p-2 border rounded" placeholder="Título" onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Prioridade</label>
          <input type="text" name="priority" className="w-full p-2 border rounded" placeholder="Prioridade" onChange={handleChange} required />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

export default AddTask;
