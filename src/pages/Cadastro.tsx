import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserController } from '../controllers/UserController';
import { User } from '../models/User';

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    job: '',
    password: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newUser = new User({
      id: Date.now(),
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: `@${formData.firstName.toLowerCase()}${formData.lastName.toLowerCase()}`,
      createdAt: new Date().toISOString(),
      email: formData.email,
      password: formData.password,
      role: 'User',
      social: {
        twitter: '',
        instagram: '',
        linkedin: '',
      },
    });

    try {
      const savedUser = await UserController.createUser(newUser);
      console.log('Usuário cadastrado:', savedUser);

      // Autenticar automaticamente o usuário após o cadastro
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: savedUser.email, password: savedUser.password }),
      });

      const data = await response.json();
      localStorage.setItem('accessToken', data.accessToken);

      navigate('/kanban');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
    }
  }

  return (
    <div className="container mx-auto my-8 p-8 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Primeiro Nome</label>
          <input type="text" name="firstName" className="w-full p-2 border rounded" placeholder="Primeiro Nome" onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Último Nome</label>
          <input type="text" name="lastName" className="w-full p-2 border rounded" placeholder="Último Nome" onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" className="w-full p-2 border rounded" placeholder="Email" onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Trabalho</label>
          <input type="text" name="job" className="w-full p-2 border rounded" placeholder="Trabalho" onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Senha</label>
          <input type="password" name="password" className="w-full p-2 border rounded" placeholder="Senha" onChange={handleChange} required />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Cadastrar</button>
      </form>
    </div>    
  );
}

export default SignUpPage;
