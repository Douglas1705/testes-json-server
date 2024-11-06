import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/Cadastro';
import Kanban from './pages/Kanban';
import AddTask from './pages/AddTask';
import NotFound from './pages/NotFound';
import Forbidden from './pages/Forbidden';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kanban" element={<PrivateRoute><Kanban /></PrivateRoute>} />
        <Route path="/add-task" element={<PrivateRoute><AddTask /></PrivateRoute>} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
