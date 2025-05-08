import { useState } from 'react';
const API_URL = import.meta.env.BACKEND_PORT|| 'http://localhost:3000/api';

const Trip = () => {
    const [tripDetails, setTripDetails] = useState({
        name: '',
        email: '',
        phone: '',
        destination: '',
        vehicleNo: '',
        vehicleType: '',
        acType: '',
        startingKm: '',
        endingKm: '',
        reportedTime: '',
        releasedTime: '',
        driverName: '',
        price: '',
        tollAmount: '', 
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTripDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch(`${API_URL}/trip/createTrips`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tripDetails),
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to add trip');
            }

            setSuccess('Trip added successfully');
            setTripDetails({
                name: '',
                email: '',
                phone: '',
                destination: '',
                vehicleNo: '',
                vehicleType: '',
                acType: '',
                startingKm: '',
                endingKm: '',
                reportedTime: '',
                releasedTime: '',
                driverName: '',
                price: '',
                tollAmount: '', 
            });
        } catch (error) {
            setError(error.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated mb-3 slideInDown">
                                Add Trip Details
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a href="#">Admin</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Trips</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    >
                                        Add Trip
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h2 className="text-center mb-4">Add Trip Details</h2>

                {/* Success Message */}
                {success && <div className="alert alert-success">{success}</div>}

                {/* Error Message */}
                {error && <div className="alert alert-danger">{error}</div>}

                {/* Loading Indicator */}
                {loading && <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>}

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={tripDetails.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={tripDetails.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                value={tripDetails.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="destination" className="form-label">Destination</label>
                            <input
                                type="text"
                                className="form-control"
                                id="destination"
                                name="destination"
                                value={tripDetails.destination}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="vehicleNo" className="form-label">Vehicle No</label>
                            <input
                                type="text"
                                className="form-control"
                                id="vehicleNo"
                                name="vehicleNo"
                                value={tripDetails.vehicleNo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                            <select
                                className="form-control"
                                id="vehicleType"
                                name="vehicleType"
                                value={tripDetails.vehicleType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Vehicle Type</option>
                                <option value="Sedan">Sedan</option>
                                <option value="SUV">SUV</option>
                                <option value="Hatchback">Hatchback</option>
                                <option value="Van">Van</option>
                                <option value="Bus">Bus</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="acType" className="form-label">A/C or Non A/C</label>
                            <select
                                className="form-control"
                                id="acType"
                                name="acType"
                                value={tripDetails.acType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select A/C Type</option>
                                <option value="A/C">A/C</option>
                                <option value="Non A/C">Non A/C</option>
                            </select>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="startingKm" className="form-label">Starting K.M.</label>
                            <input
                                type="number"
                                className="form-control"
                                id="startingKm"
                                name="startingKm"
                                value={tripDetails.startingKm}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="endingKm" className="form-label">Closing K.M.</label>
                            <input
                                type="number"
                                className="form-control"
                                id="endingKm"
                                name="endingKm"
                                value={tripDetails.endingKm}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="reportedTime" className="form-label">Reported Date/Time</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="reportedTime"
                                name="reportedTime"
                                value={tripDetails.reportedTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="releasedTime" className="form-label">Released Date/Time</label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="releasedTime"
                                name="releasedTime"
                                value={tripDetails.releasedTime}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="driverName" className="form-label">Driver Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="driverName"
                                name="driverName"
                                value={tripDetails.driverName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="tollAmount" className="form-label">Toll Amount</label>
                            <input
                                type="number"
                                className="form-control"
                                id="tollAmount"
                                name="tollAmount"
                                value={tripDetails.tollAmount}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={tripDetails.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Adding Trip...' : 'Add Trip'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default Trip;
