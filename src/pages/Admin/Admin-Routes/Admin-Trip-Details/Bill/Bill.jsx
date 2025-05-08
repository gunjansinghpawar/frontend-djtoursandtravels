import React from 'react';
import billHeader from '../../../../../assets/logo.png'; // Use the uploaded image path

export const Bill = ({ trip, tripId }) => {
    // Ensure the price and tollAmount are numbers
    const price = typeof trip.price === 'number' ? trip.price.toFixed(2) : parseFloat(trip.price).toFixed(2);
    const tollPrice = typeof trip.tollAmount === 'number' ? trip.tollAmount.toFixed(2) : parseFloat(trip.tollAmount).toFixed(2);

    // Calculate total price including toll
    const totalPrice = (parseFloat(price) + parseFloat(tollPrice)).toFixed(2);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-body p-5">
                            {/* Header Section */}
                            <div className="text-center mb-4">
                                <img src={billHeader} alt="Bill Header" style={{ maxHeight: '120px' }} />
                                <h2 className="mt-2 font-weight-bold">DJ TOURS & TRAVELS</h2>
                                <p className="text-muted mb-0">Enjoy Trip With Us</p>
                                <p className="text-muted">Satyam Nagar Road, Amraiwadi, Ahmedabad, Gujarat, India, 380026</p>
                                <p className="text-muted">Phone: +91 8160906474 | Email: djtoursandtravels@gmail.com</p>
                            </div>

                            {/* Bill Details */}
                            <div className="d-flex justify-content-between mb-4">
                                <div>
                                    <h5 className="font-weight-bold">Bill To: <strong>{trip.name}</strong></h5>
                                    <br />
                                    <p><strong>Email:</strong> {trip.email}</p>
                                    <p><strong>Mobile No:</strong> {trip.phone}</p>
                                </div>
                                <div className="text-right">
                                    <p><strong>Bill No:</strong> #{trip.id}</p>
                                    <p><strong>Bill Date:</strong> {new Date().toLocaleDateString()}</p>
                                </div>
                            </div>

                            {/* Trip Details */}
                            <table className="table table-bordered">
                                <thead className="thead-light">
                                    <tr>
                                        <th>Details</th>
                                        <th className="text-right">Details For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Destination:</td>
                                        <td className="text-right">{trip.destination}</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicle No:</td>
                                        <td className="text-right">{trip.vehicleNo}</td>
                                    </tr>
                                    <tr>
                                        <td>Vehicle Type:</td>
                                        <td className="text-right">{trip.vehicleType}</td>
                                    </tr>
                                    <tr>
                                        <td>A/C or Non A/C:</td>
                                        <td className="text-right">{trip.acType}</td>
                                    </tr>
                                    <tr>
                                        <td>Starting K.M.:</td>
                                        <td className="text-right">{trip.startingKm}</td>
                                    </tr>
                                    <tr>
                                        <td>Closing K.M.:</td>
                                        <td className="text-right">{trip.endingKm}</td>
                                    </tr>
                                    <tr>
                                        <td>Reported Date/Time:</td>
                                        <td className="text-right">{trip.reportedTime}</td>
                                    </tr>
                                    <tr>
                                        <td>Released Date/Time:</td>
                                        <td className="text-right">{trip.releasedTime}</td>
                                    </tr>
                                    <tr>
                                        <td>Driver Name:</td>
                                        <td className="text-right">{trip.driverName}</td>
                                    </tr>
                                    <tr>
                                        <td>Trip Price:</td>
                                        <td className="text-right">₹{price}</td>
                                    </tr>
                                    <tr>
                                        <td>Toll Price:</td>
                                        <td className="text-right">₹{tollPrice}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">Total Amount:</td>
                                        <td className="font-weight-bold text-right">₹{totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>

                            {/* Signature and Thank You Note */}
                            <div className="mt-5 text-right">
                                <p className="font-italic mb-1">Authorized Signature:</p>
                                <div style={{ borderTop: '2px solid black', width: '200px', float: 'right' }}></div>
                            </div>
                            <div className="mt-5 text-center">
                                <h4 className="text-success">Thank you for choosing DJ Tours & Travels!</h4>
                                <p className="text-muted">We hope you had a wonderful journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bill;