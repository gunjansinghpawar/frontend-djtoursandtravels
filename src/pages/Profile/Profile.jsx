import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '../../assets/profile.jpg';
import { AuthContext } from '../../context/AuthContext';
const API_URL = import.meta.env.BACKEND_PORT || 'http://localhost:3000/api';
import Loading from '../../Loading'
const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: '', phoneNo: '' });
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${API_URL}/user/me`, {
                    method: 'GET',
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUser({
                    id: data.user.id, // Ensure user ID is included
                    name: data.user.name,
                    email: data.user.email,
                    phoneNo: data.user.phoneNo,
                });
                setFormData({
                    name: data.user.name,
                    phoneNo: data.user.phoneNo,
                });
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const logoutProfile = async () => {
        const result = await logout(); // Use the logout function from context
        if (result.success) {
            navigate('/login');
        } else {
            alert(result.message || 'Logout failed.');
        }
    };

    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = async () => {
        try {
            const response = await fetch(`${API_URL}/user/${user.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update user data');
            }

            const updatedUser = await response.json();
            setUser(updatedUser.user);
            setIsEditing(false);
            alert('Profile updated successfully.');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure you want to delete your account?')) {
            try {
                const response = await fetch(`${API_URL}/user/${user.id}`, {
                    method: 'DELETE',
                    credentials: 'include',
                });

                if (!response.ok) {
                    throw new Error('Failed to delete account');
                }

                alert('Account deleted successfully.');
                navigate('/login'); // Redirect to login after account deletion
            } catch (error) {
                console.error('Failed to delete account:', error);
                setError(error.message);
            }
        }
    };

    if (loading) {
        return <div className="text-center"><Loading /></div>;
    }

    if (error) {
        return <div className="text-danger text-center">{error}</div>;
    }

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated slideInDown">Your Profile</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6 text-center">
                        <img src={Profile} alt="User Profile Picture" className="profile-image my-3 mb-4" style={{ width: "80px", height: "80px", objectFit: 'cover' }} />
                        {user && (
                            <>
                                <h6 className="section-title bg-white text-start text-primary pe-3">User Information</h6>
                                {isEditing ? (
                                    <div className='profile-edit'>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            placeholder="Name"
                                        />
                                        <input
                                            type="text"
                                            name="phoneNo"
                                            value={formData.phoneNo}
                                            onChange={handleFormChange}
                                            placeholder="Phone Number"
                                        />
                                        <div className="buttons mt-4">
                                            <button onClick={handleSaveChanges} className="btn btn-primary me-2">Save Changes</button>
                                            <button onClick={handleEditProfile} className="btn btn-secondary">Cancel</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <p><strong>Name:</strong> {user.name}</p>
                                        <p><strong>Email:</strong> {user.email}</p>
                                        <p><strong>Phone Number:</strong> {user.phoneNo}</p>
                                        <div className="buttons mt-4">
                                            <button onClick={handleEditProfile} className="btn btn-primary me-2">Edit Profile</button>
                                            <button onClick={handleDeleteAccount} className="btn btn-danger me-2">Delete Account</button>
                                            <button onClick={logoutProfile} className="btn btn-secondary">Logout</button>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>
                    <div className="col-lg-6">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About Company</h6>
                        <p>DJ Tours & Travels offers unforgettable journeys across India, providing personalized, hassle-free trips to explore the country's beauty.</p>
                        <p>As your trusted partner, we offer customized, stress-free trips with top-notch services, allowing you to discover the beauty of India one journey at a time.</p>
                        <p>Our services include:</p>
                        <ul>
                            <li>Personal Trips</li>
                            <li>Pickup & Drop</li>
                            <li>5 Star Accommodations</li>
                            <li>Luxurious Cars</li>
                            <li>150 Premium City Tours</li>
                            <li>24/7 Service</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
