import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const API_URL = import.meta.env.BACKEND_PORT|| 'http://localhost:3000/api';

const Otp = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state;
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleResend = async () => {
        // Implement OTP resend logic
        try {
            const response = await fetch(`${API_URL}/user/resendOtp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Unable to resend OTP. Please try again later.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const otpCode = otp.join('');
        setIsSubmitting(true);

        try {
            const response = await fetch(`${API_URL}/user/verifyEmail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp: otpCode }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Successfully created account please login with your email address and password");
                navigate('/login');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    useEffect(() => {
        // Set a timer to redirect after 5 minutes (300000 milliseconds)
        const id = setTimeout(() => {
            alert("OTP verification has expired. Redirecting to signup page...");
            navigate('/signup'); // Change this to your actual signup route
        }, 300000); // 5 minutes

        // Store timeout id to clear it later if needed
        setTimeoutId(id);

        // Clear timeout if the component unmounts or if the user submits successfully
        return () => clearTimeout(id);
    }, [navigate]);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '500px' }}>
                <h2 className="text-center mb-4">OTP Verification</h2>
                {/* Displaying the email at the top */}
                <p className="text-center mb-4" style={{ fontSize: '16px', color: '#555' }}>
                    Email: {email}
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between mb-4">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onFocus={(e) => e.target.select()}
                                className="form-control text-center mx-1"
                                style={{ width: '40px', height: '40px', fontSize: '18px' }}
                                aria-label={`OTP input ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                        <span
                            className="text-primary cursor-pointer"
                            onClick={handleResend}
                        >
                            Resend
                        </span>
                        <span className="text-danger">Error getting OTP</span>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting || otp.includes('')}>
                        {isSubmitting ? 'Verifying...' : 'Verify OTP'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Otp;
