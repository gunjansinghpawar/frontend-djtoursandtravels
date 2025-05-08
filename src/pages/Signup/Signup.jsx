// SignUp.js
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import useAuth hook
import Google from '../../assets/google.png';

const SignUp = () => {
  const { signup } = useContext(AuthContext); // Get signup function from context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmedPassword: '',
  });

  const { name, email, phoneNo, password, confirmedPassword } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmedPassword) {
      alert("Passwords do not match!");
      return;
    }

    const result = await signup(formData);

    if (result.success) {
      alert('Signup successful! Please verify your email to activate your account.');
      navigate('/otp', { state: { email } });
    } else {
      alert(result.message);
    }

    // Reset the form fields after submission
    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      password: '',
      confirmedPassword: '',
    });
  };
  const handleGoogleLogin = async () => {
    window.open('/signup');
  }
  return (
    <>
       <div className="container-fluid bg-primary py-5 mb-5 hero-header">
          <div className="container py-5">
            <div className="row justify-content-center py-5">
              <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                <h1 className="display-3 text-white animated slideInDown">
                  Sign Up
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="#">Pages</Link>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page">
                      Sign Up
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title bg-white text-center text-primary px-3">
                Sign Up
              </h6>
              <h1 className="mb-5">Create Your Account</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <h5>Why Join Us?</h5>
                <p className="mb-4">
                  Register to get exclusive access to our services and features.
                </p>
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                    style={{ width: 50, height: 50 }}
                  >
                    <i className="fa fa-user text-white" />
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary">Personalized Service</h5>
                    <p className="mb-0">Get recommendations and updates tailored just for you.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                    style={{ width: 50, height: 50 }}
                  >
                    <i className="fa fa-gift text-white" />
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary">Exclusive Offers</h5>
                    <p className="mb-0">Enjoy members-only discounts and promotions.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                    style={{ width: 50, height: 50 }}
                  >
                    <i className="fa fa-lock text-white" />
                  </div>
                  <div className="ms-3">
                    <h5 className="text-primary">Secure & Private</h5>
                    <p className="mb-0">Your information is safe with us.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={onChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={onChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          name="phoneNo"
                          id="number"
                          placeholder="Your Mobile Number"
                          value={phoneNo}
                          onChange={onChange}
                          required
                        />
                        <label htmlFor="number">Your Mobile Number</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={onChange}
                          required
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          name="confirmedPassword"
                          id="confirmedPassword"
                          placeholder="Confirm Password"
                          value={confirmedPassword}
                          onChange={onChange}
                          required
                        />
                        <label htmlFor="confirm-password">Confirm Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        Create Account
                      </button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="mb-0">
                        Already have an account? <Link to="/login">Login</Link>
                      </p>
                    </div>
                  </div>
                </form>
                <hr />
                <center>
                  <button className="btn google-login" onClick={handleGoogleLogin} aria-label="Sign up with Google">
                    <img src={Google} className='my-3' alt="Google logo" height={'30px'} />
                    <p className='my-auto mx-2'>Sign up with Google</p>
                  </button>
                </center>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default SignUp;
