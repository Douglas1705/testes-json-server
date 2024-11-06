import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = !!localStorage.getItem('loggedInUser');

  return isAuthenticated ? children : <Navigate to="/403" />;
}

export default PrivateRoute;
