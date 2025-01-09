import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './context/ProtectedRoute'; 
import { useState, useEffect } from 'react';
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Blogs from './pages/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import Users from './pages/Admin/Admin-Users/Users';
import AddBlogs from './pages/Admin/Admin-Routes/Admin-Blogs/AddBlogs';
import AddTrip from './pages/Admin/Admin-Routes/Admin-Trip-Details/Trip-Add/AddTrip';
import Bookings from './pages/Admin/Admin-Routes/Admin-Trip-Details/Bookings/Bookings';
import Otp from './pages/Otp/Otp';
import Profile from './pages/Profile/Profile';
import Logout from './pages/Logout/Logout';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      await new Promise((resolve) => resolve());
      setLoading(false);
    };

    loadApp();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="red bar"></div>
          <div className="orange bar"></div>
          <div className="yellow bar"></div>
          <div className="green bar"></div>
          <div className="blue bar"></div>
          <div className="violet bar"></div>
        </div>
      </div>
    ); // Show the CSS loader while loading
  }

  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<Otp />} />

        {/* Protected Routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/*" // Assuming you want to protect all admin routes
          element={
            <ProtectedRoute requiredRole="admin">
              {/* Wrap the admin routes with the ProtectedRoute */}
              <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/addblogs" element={<AddBlogs />} />
                <Route path="/addtrip" element={<AddTrip />} />
                <Route path="/bookings" element={<Bookings />} />
              </Routes>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
