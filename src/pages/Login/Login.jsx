// Login.js
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import useAuth hook
import Google from '../../assets/google.png';

const Login = () => {
  const { login } = useContext(AuthContext); // Get login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    window.open('/login');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/'); // Redirect on success
      window.location.reload();
    } else {
      setError(result.message);
    }

    setLoading(false);
  };

  return (
    <>
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">Login</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Login</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Login</h6>
          <h1 className="mb-5">Access Your Account</h1>
        </div>
        {error && <p className="text-danger text-center">{error}</p>} {/* Error message */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <h5>Welcome Back!</h5>
            <p className="mb-4">Log in to continue accessing our exclusive services and features.</p>
          </div>
          <div className="col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
            <form className='login-form' onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary w-100 py-3"
                    type="submit"
                    disabled={loading} // Disable button when loading
                  >
                    {loading ? 'Logging in...' : 'Login'}
                  </button>
                </div>
                <div className="col-12 text-center">
                  <p className="mb-0">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </div>
            </form>
            <hr />
            <center>
              <button className="btn google-login" onClick={handleGoogleLogin}>
                <img src={Google} className='my-3' alt="GOOGLE" height={'30px'} />
                <p className='my-auto mx-2'>Sign in with Google</p>
              </button>
            </center>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </>
  );
};

export default Login;
