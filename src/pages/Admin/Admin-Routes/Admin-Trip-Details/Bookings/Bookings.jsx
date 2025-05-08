import { useEffect, useState, useMemo } from 'react';
import Bill from '../Bill/Bill'; // Adjust the import path accordingly
import ReactDOMServer from 'react-dom/server';
const API_URL = import.meta.env.BACKEND_PORT|| 'http://localhost:3000/api';
import Loading from '../../../../../Loading'
const Trips = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [showAllTrips, setShowAllTrips] = useState(false);

    useEffect(() => {
        const fetchTrips = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/trip/trips`);
                if (!response.ok) {
                    throw new Error('Failed to fetch trips');
                }
                const data = await response.json();
                setTrips(data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError('Error fetching trips. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTrips();
    }, []);

    const filteredTrips = useMemo(() => {
        return showAllTrips
            ? trips
            : trips.filter(trip => trip.reportedDate === selectedDate);
    }, [trips, selectedDate, showAllTrips]);

    const handlePrint = (trip) => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write('<html><head><title>Print Trips</title>');
        printWindow.document.write('<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />');
        printWindow.document.write('</head><body>');
    
        const billMarkup = ReactDOMServer.renderToStaticMarkup(<Bill trip={trip} tripId={trip.id} />);
        printWindow.document.write(billMarkup);
    
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };
    
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const toggleShowAllTrips = () => {
        setShowAllTrips(prev => !prev);
    };

    if (loading) {
        return <div className="text-center"><Loading/></div>;
    }

    if (error) {
        return <div className="text-center text-danger">{error}</div>;
    }

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header overflow-hidden">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated mb-3 slideInDown">
                                Trips for {showAllTrips ? 'All Dates' : selectedDate}
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a href="#">Admin</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Trips</a>
                                    </li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">
                                        Trip Details
                                    </li>
                                </ol>
                            </nav>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                className="form-control mb-3"
                                disabled={showAllTrips}
                            />
                            <button
                                className="btn btn-info mb-3"
                                onClick={toggleShowAllTrips}
                            >
                                {showAllTrips ? 'Show Today\'s Trips' : 'Show All Trips'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5 overflow-x-scroll">
                <div className="container">
                    <h2 className="text-center mb-4">Trip Details for {showAllTrips ? 'All Dates' : selectedDate}</h2>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>No. of Bookings</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Destination</th>
                                <th>Driver</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTrips.length > 0 ? (
                                filteredTrips.map(trip => (
                                    <tr key={trip.id}>
                                        <td>{trip.bookingCount}</td>
                                        <td>{trip.name}</td>
                                        <td>{trip.email}</td>
                                        <td>{trip.phone}</td>
                                        <td>{trip.destination}</td>
                                        <td>{trip.driverName}</td>
                                        <td>₹{trip.price}</td>
                                        <td>
                                            <button
                                                className="btn btn-secondary"
                                                onClick={() => handlePrint(trip)}
                                            >
                                                Print
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No trips found for the selected date.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Trips;
