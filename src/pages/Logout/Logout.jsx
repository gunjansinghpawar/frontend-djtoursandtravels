import { useEffect } from 'react';
const API_URL = import.meta.env.BACKEND_PORT|| 'http://localhost:3000/api';

const Logout = () => {

  useEffect(() => {
    const handleLogout = async () => {
      try {
        // Make a POST request to the logout endpoint
        const response = await fetch(`${API_URL}/user/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include', // Include cookies with the request if needed
        });

        if (response.ok) {
          window.location.href = '/login'; // Redirect to the homepage or login page
        } else {
          console.error('Logout failed:', await response.text());
        }
      } catch (error) {
        console.error('An error occurred during logout:', error);
      }
    };

    handleLogout(); // Call the logout function on component mount
  }, [logout]);

  return null; // No UI needed for logout
};

export default Logout;
