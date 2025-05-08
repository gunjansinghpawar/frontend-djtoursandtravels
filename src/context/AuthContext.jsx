import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { VITE_VITE_BACKEND_PORT } from '../URLS';
export const AuthContext = createContext();
import Loading from '../Loading'

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, assume user is authenticated until we verify with API
      setIsAuthenticated(true);
      fetchUserData(); // Verify the token by fetching user data
    } else {
      setLoading(false); // No token, no need to fetch
    }
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${VITE_VITE_BACKEND_PORT}/user/me`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        setRole(data.user.role);
      } else {
        setIsAuthenticated(false);
        setRole(null);
        toast.error('Session expired. Please log in again.');
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      setIsAuthenticated(false);
      setRole(null);
      toast.error('Failed to verify session. Please try again.');
    } finally {
      setLoading(false); // Done loading after the request
    }
  };

  const storeTokenInLs = (data) => {
    const token = data.jwtAccessToken; // Adjust according to your response structure
    try {
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Failed to store token in local storage:', error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await fetch(`${VITE_VITE_BACKEND_PORT}/user/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Login successful!');
        setIsAuthenticated(true);
        setRole(data.role); // Assuming role is returned
        storeTokenInLs(data); // Store token
        return { success: true };
      } else {
        toast.error(data.message || 'Login failed.');
        return { success: false, message: data.message || 'Login failed.' };
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('An error occurred. Please try again.');
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const logout = async () => {
    try {
      const response = await fetch(`${VITE_VITE_BACKEND_PORT}/user/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (response.ok) {
        setIsAuthenticated(false);
        setRole(null);
        localStorage.removeItem('token'); // Remove the token if stored
        toast.success('Logout successful!');
        return { success: true };
      } else {
        toast.error('Logout failed.');
        return { success: false, message: 'Logout failed.' };
      }
    } catch (error) {
      console.error('Logout failed:', error);
      toast.error('An error occurred. Please try again.');
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  const signup = async (formData) => {
    try {
      const response = await fetch(`${VITE_VITE_BACKEND_PORT}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setRole(data.role); // Assuming role is returned
        storeTokenInLs(data); // Store token
        toast.success('Signup successful! Please check your email for confirmation.');
        return { success: true, email: formData.email };
      } else {
        toast.error(data.message || 'Signup failed.');
        return { success: false, message: data.message || 'Signup failed.' };
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('An error occurred. Please try again.');
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  if (loading) {
    return <div><Loading/></div>; // Add a loading indicator while verifying token
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, role, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};
