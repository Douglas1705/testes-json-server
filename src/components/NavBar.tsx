import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  function handleLogout() {
    // Implemente a lógica de logout aqui
    localStorage.removeItem('loggedInUser'); // Limpa as informações de usuário logado
    navigate('/');
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/kanban">Kanban</Link>
      <Link to="/add-task">Adicionar Tarefa</Link>
      <Link to="/login">Login</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default NavBar;
