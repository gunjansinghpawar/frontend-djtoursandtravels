import { useContext, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Adjust the path as necessary
import Logo from '../../assets/logo.png';
import Profile from '../../assets/profile.jpg';

const Navbar = () => {
    const { isAuthenticated, role } = useContext(AuthContext); // Access authentication state and role
    const dropdownRef = useRef(null); // Reference to the admin dropdown

    // Function to collapse the navbar
    const onNavbarLinkClick = () => {
        const navbarCollapse = document.getElementById('navbarCollapse');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                const dropdownElement = document.querySelector('.nav-item.dropdown .dropdown-menu.show');
                if (dropdownElement) {
                    dropdownElement.classList.remove('show');
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="container-fluid position-relative p-0">
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <NavLink to="/" className="navbar-brand p-0">
                    <img src={Logo} alt="Logo" className='logo-img' />
                    <span>
                        <h2>DJ TOURS & TRAVELS</h2>
                        <p>Enjoy Trip With Us</p>
                    </span>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            onClick={onNavbarLinkClick}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            onClick={onNavbarLinkClick}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            onClick={onNavbarLinkClick}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            onClick={onNavbarLinkClick}
                        >
                            Blogs
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            onClick={onNavbarLinkClick}
                        >
                            Contact
                        </NavLink>

                        {/* Conditionally render Admin links */}
                        {isAuthenticated && role === 'admin' && (
                            <div className="nav-item dropdown" ref={dropdownRef}>
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    to="/admin"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Admin
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink
                                            to="/admin/addblogs"
                                            className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                                            onClick={onNavbarLinkClick}
                                        >
                                            Add Blogs
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/admin/addtrip"
                                            className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                                            onClick={onNavbarLinkClick}
                                        >
                                            Add Trip
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/admin/bookings"
                                            className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                                            onClick={onNavbarLinkClick}
                                        >
                                            Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/admin/users"
                                            className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                                            onClick={onNavbarLinkClick}
                                        >
                                            Users
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Conditionally render profile button for both roles */}
                    {isAuthenticated && (
                        <NavLink to="/profile" onClick={onNavbarLinkClick} className="p-0">
                            <img src={Profile} alt="Profile" style={{ height: '70px', width: '70px', background: 'white', borderRadius: '50%' }} loading="lazy" />
                        </NavLink>
                    )}

                    {/* Show Signup button when not authenticated */}
                    {!isAuthenticated && (
                        <NavLink to="/login" onClick={onNavbarLinkClick} className="btn btn-primary rounded-pill py-2 px-4">
                            Sign in
                        </NavLink>
                    )}
                </div>
            </nav>
            {/* Navbar End */}
        </div>
    );
};

export default Navbar;
