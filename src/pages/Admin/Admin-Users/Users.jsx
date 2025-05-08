import { useEffect, useState } from 'react';
const API_URL = import.meta.env.BACKEND_PORT || 'http://localhost:3000/api';
const Users = () => {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10); // Number of users to show initially

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null); // Reset error before fetching
    try {
      const response = await fetch(`${API_URL}/contact/allContacts`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No contacts found.');
        }
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setContact(data);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 10, contact.length)); // Show 10 more users
  };

  return (
    <>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated mb-3 slideInDown">
                Contact Information
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">Admin</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Users</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Contact Message Details
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Users Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <h2 className="text-center mb-4 text-primary">
            Total Contact: {contact.length}
          </h2>

          {loading && <div className="text-center">Loading Contact...</div>}

          {error && <div className="text-center text-danger">{error}</div>}

          {!loading && !error && contact.length === 0 && (
            <div className="text-center text-warning">No contacts available</div>
          )}

          {!loading && !error && contact.length > 0 && (
            <>
              <div className="row g-4">
                {contact.slice(0, visibleCount).map(contact => (
                  <div key={contact.id} className="col-lg-4 col-md-6">
                    <div className="card bg-light text-dark rounded">
                      <div className="card-body">
                        <h5 className="card-title">{contact.name}</h5>
                        <p className="card-text">Mobile: {contact.phone}</p> {/* Use mobileNumber */}
                        <p className="card-text">Email: {contact.email}</p>
                        <p className="card-text">Subject: {contact.subject}</p>
                        <p className="card-text">Message: {contact.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < contact.length && (
                <div className="text-center mt-4">
                  <button className="btn btn-primary" onClick={handleReadMore}>
                    Read More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Users;
