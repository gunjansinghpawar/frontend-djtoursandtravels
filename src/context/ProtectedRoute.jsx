import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext'; // Adjust the path as necessary

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, role } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    // Redirect if the user does not have the required role
    return <Navigate to="/" />;
  }

  return children; // Render the children (protected component)
};

export default ProtectedRoute;
