// src/utils/mockAdmin.js
export const mockAdmin = {
    email: 'djtoursandtravels@gmail.com',
    password: 'djtoursandtravels', // Fixed password
};

export const isAdminValid = (email, password) => {
    return (
        email === mockAdmin.email && password === mockAdmin.password
    );
};
