import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify styles are loaded
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
import Profile from './pages/Profile/Profile';
import Logout from './pages/Logout/Logout';
import Otp from './pages/OTP/Otp';
import ProtectedRoute from './context/ProtectedRoute';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadApp = async () => {
      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);

      // Example: Show a welcome toast on app load
      toast.success('Welcome to DJ Tours & Travels!');
    };

    loadApp();
  }, []);

  if (loading) {
    return <Loading />; // Show the loading screen while the app initializes
  }

  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        {/* Public Routes */}
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
          path="/admin/users"
          element={
            <ProtectedRoute requiredRole="admin">
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/addblogs"
          element={
            <ProtectedRoute requiredRole="admin">
              <AddBlogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/addtrip"
          element={
            <ProtectedRoute requiredRole="admin">
              <AddTrip />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute requiredRole="admin">
              <Bookings />
            </ProtectedRoute>
          }
        />

        {/* Fallback Route */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />

      {/* Toastify Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
