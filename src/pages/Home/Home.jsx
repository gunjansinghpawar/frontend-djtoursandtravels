import '../../App.css'
import { Link } from 'react-router-dom'
import AboutImage from '../../assets/AboutImage.avif'
import Images1 from '../../assets/images1.jpeg'
import Images2 from '../../assets/iamges2.jpg'
import Images3 from '../../assets/images3.avif'
import Images5 from '../../assets/images5.webp'
import Car1 from '../../assets/InnvoaCrysta.webp'
import Car2 from '../../assets/Ertiga.jpeg'
import Car3 from '../../assets/Tavera.jpg'
import ReviewShow from '../../components/Review/ReviewShow/ReviewShow'
import IMAGE from '../../assets/WhatsApp_Image_2024-08-25_at_11.33.16_d9e35990-removebg-preview.png'

const Home = () => {
    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white mb-3 animated slideInDown">
                                DJ Tours & Travels
                            </h1>
                            <p className="fs-4 text-white mb-4 animated slideInDown">
                                Explore the India, One Journey with DJ Tours & Travels
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}
            {/* About Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div
                            className="col-lg-6 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{ minHeight: 400 }}
                        >
                            <div className="position-relative h-100">
                                <img
                                    className="img-fluid position-absolute w-100 h-100"
                                    src={AboutImage}
                                    alt="AboutImage"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h6 className="section-title bg-white text-start text-primary pe-3">
                                About Us
                            </h6>
                            <h1 className="mb-4">
                                Welcome to <span className="text-primary">DJ Tours & Travels</span>
                            </h1>
                            <p className="mb-4">
                                DJ Tours & Travels offers unforgettable journeys across India, providing personalized, hassle-free trips to explore the country's beauty.
                            </p>
                            <p className="mb-4">
                                DJ Tours & Travels is your trusted partner for exploring India's diverse landscapes, offering customized, stress-free trips with top-notch services. Discover the beauty of India with us, one journey at a time.
                            </p>
                            <div className="row gy-2 gx-4 mb-4">
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Personal Trips
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        Pickup & Drop
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />5 Star
                                        Accommodations
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        luxurious cars
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        150 Premium City Tours
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p className="mb-0">
                                        <i className="fa fa-arrow-right text-primary me-2" />
                                        24/7 Service
                                    </p>
                                </div>
                            </div>
                            <Link className="btn btn-primary py-3 px-5 mt-2" to="">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Services
                        </h6>
                        <h1 className="mb-5">Our Services</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe text-primary mb-4" />
                                    <h5>One Day Trip</h5>
                                    <p>
                                        Enjoy a luxurious one-day trip with DJ Tours & Travels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-hotel text-primary mb-4" />
                                    <h5>Airport Drop</h5>
                                    <p>
                                        Reliable airport drop and pickup services with DJ Tours & Travels.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user text-primary mb-4" />
                                    <h5>Family Trip</h5>
                                    <p>
                                        Experience joyful family trips with DJ Tours & Travels across India.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-mosque text-primary mb-4" />
                                    <h5>Zaiyarat</h5>
                                    <p>
                                        Experience spiritual serenity with your mosque tours across India.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-car text-primary mb-4" />
                                    <h5>All Over India Tours</h5>
                                    <p>
                                        Explore India with DJ Tours & Travels, offering nationwide luxurious tours.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-ring text-primary mb-4" />
                                    <h5> Wedding Cars</h5>
                                    <p>
                                        Book luxury wedding cars also pickup and drop cars for your special day in style.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user text-primary mb-4" />
                                    <h5>Best Drivers</h5>
                                    <p>
                                        Experts Driver with Traning and Best Hospility Services,They also have known routes guidance.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog text-primary mb-4" />
                                    <h5>Events Drop</h5>
                                    <p>
                                        Event cars booking provides convenient transportation for special occasions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* Destination Start */}
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Destination
                        </h6>
                        <h1 className="mb-5">Popular Destination</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div
                                    className="col-lg-12 col-md-12 wow zoomIn"
                                    data-wow-delay="0.1s"
                                >
                                    <Link className="position-relative d-block overflow-hidden" to="">
                                        <img className="img-fluid" src={Images2} alt="Images" />

                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            Ban Ganga
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-lg-6 col-md-12 wow zoomIn"
                                    data-wow-delay="0.3s"
                                >
                                    <Link className="position-relative d-block overflow-hidden" to="">
                                        <img className="img-fluid" src={Images3} alt="" />

                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            Ujjain Mahakal
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-lg-6 col-md-12 wow zoomIn"
                                    data-wow-delay="0.5s"
                                >
                                    <Link className="position-relative d-block overflow-hidden" to="">
                                        <img className="img-fluid w-100" src={Images1} alt="" />

                                        <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                            Ladakh
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-5 col-md-6 wow zoomIn"
                            data-wow-delay="0.7s"
                            style={{ minHeight: 350 }}
                        >
                            <Link
                                className="position-relative d-block h-100 overflow-hidden"
                                to=""
                            >
                                <img
                                    className="img-fluid position-absolute w-100 h-100"
                                    src={Images5}
                                    alt=""
                                    style={{ objectFit: "cover" }}
                                />

                                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                                    Shimla
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Destination Start */}
            {/* Package Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Cars
                        </h6>
                        <h1 className="mb-5">Awesome Cars</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid w-100" src={Car1} alt="Car1" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-car text-primary me-2" />
                                        Innova Crysta
                                    </small>
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-calendar-alt text-primary me-2" />1 days
                                    </small>
                                    <small className="flex-fill text-center py-2">
                                        <i className="fa fa-user text-primary me-2" />8 Person
                                    </small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">₹5100 + Tolltax + 17 ₹/km after 300km</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>
                                        After 300km perday You Have To pay As more as your km increase per day
                                    </p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-primary px-3 border-end"
                                            style={{ borderRadius: "30px 0 0 30px" }}
                                        >
                                            Read More
                                        </Link>
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-primary px-3"
                                            style={{ borderRadius: "0 30px 30px 0" }}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid w-100" src={Car2} alt="Car2" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-car text-primary me-2" />
                                        Ertiga
                                    </small>
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-calendar-alt text-primary me-2" />3 days
                                    </small>
                                    <small className="flex-fill text-center py-2">
                                        <i className="fa fa-user text-primary me-2" />2 Person
                                    </small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">₹4200 + Tolltax + 13 ₹/km after 300km</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>
                                        After 300km perday You Have To pay As more as your km increase per day
                                    </p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-primary px-3 border-end"
                                            style={{ borderRadius: "30px 0 0 30px" }}
                                        >
                                            Read More
                                        </Link>
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-primary px-3"
                                            style={{ borderRadius: "0 30px 30px 0" }}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="package-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={Car3} alt="Car3" />
                                </div>
                                <div className="d-flex border-bottom">
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-car text-primary me-2" />
                                        Tavera
                                    </small>
                                    <small className="flex-fill text-center border-end py-2">
                                        <i className="fa fa-calendar-alt text-primary me-2" />3 days
                                    </small>
                                    <small className="flex-fill text-center py-2">
                                        <i className="fa fa-user text-primary me-2" />2 Person
                                    </small>
                                </div>
                                <div className="text-center p-4">
                                    <h3 className="mb-0">₹3900 + Tolltax + 12 ₹/km after 300km</h3>
                                    <div className="mb-3">
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                        <small className="fa fa-star text-primary" />
                                    </div>
                                    <p>
                                        After 300km perday You Have To pay As more as your km increase per day
                                    </p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-primary px-3 border-end"
                                            style={{ borderRadius: "30px 0 0 30px" }}
                                        >
                                            Read More
                                        </Link>
                                        <Link
                                            to="#"
                                            className="btn btn-sm btn-primary px-3"
                                            style={{ borderRadius: "0 30px 30px 0" }}
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Package End */}
            {/* Booking Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase">Booking</h6>
                                <h1 className="text-white mb-4">Online Booking</h1>
                                <p className="mb-4">
                                    Car booking services have revolutionized the way we travel, providing convenience and flexibility for users.  With just a few taps on  a website, customers can reserve vehicles that suit their needs, from economy cars to luxury SUVs.
                                </p>
                                <p className="mb-4">
                                    These services often offer features such as real-time availability, user-friendly interfaces, and competitive pricing, making it easier for travelers to plan their journeys. Many platforms also include options for delivery, cancellation policies, and 24/7 customer support, enhancing the overall experience. As technology advances, car booking continues to evolve, catering to the demands of modern consumers.
                                </p>
                                <Link className="btn btn-outline-light py-3 px-5 mt-2" to="">
                                    Read More
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4">Book A Tour</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control bg-transparent"
                                                    id="email"
                                                    placeholder="Your Email"
                                                />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                className="form-floating date"
                                                id="date3"
                                                data-target-input="nearest"
                                            >
                                                <input
                                                    type="text"
                                                    className="form-control bg-transparent datetimepicker-input"
                                                    id="datetime"
                                                    placeholder="Date & Time"
                                                    data-target="#date3"
                                                    data-toggle="datetimepicker"
                                                />
                                                <label htmlFor="datetime">Date &amp; Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select bg-transparent" id="select1">
                                                    <option value={1}>Delhi</option>
                                                    <option value={2}>Mumbai</option>
                                                    <option value={3}>Bangalore</option>
                                                    <option value={4}>Chennai</option>
                                                    <option value={5}>Kolkata</option>
                                                    <option value={6}>Hyderabad</option>
                                                    <option value={7}>Ahmedabad</option>
                                                    <option value={8}>Pune</option>
                                                    <option value={9}>Jaipur</option>
                                                    <option value={10}>Lucknow</option>
                                                    <option value={11}>Kanpur</option>
                                                    <option value={12}>Nagpur</option>
                                                    <option value={13}>Visakhapatnam</option>
                                                    <option value={14}>Surat</option>
                                                    <option value={15}>Vadodara</option>
                                                    <option value={16}>Coimbatore</option>
                                                    <option value={17}>Mysore</option>
                                                    <option value={18}>Nashik</option>
                                                    <option value={19}>Indore</option>
                                                    <option value={20}>Bhopal</option>
                                                    <option value={21}>Patna</option>
                                                    <option value={22}>Agra</option>
                                                    <option value={23}>Aurangabad</option>
                                                    <option value={24}>Vijayawada</option>
                                                    <option value={25}>Puducherry</option>
                                                    <option value={26}>Tiruchirappalli</option>
                                                    <option value={27}>Ranchi</option>
                                                    <option value={28}>Raipur</option>
                                                    <option value={29}>Dehradun</option>
                                                    <option value={30}>Guwahati</option>
                                                    <option value={31}>Kochi</option>
                                                    <option value={32}>Jodhpur</option>
                                                    <option value={33}>Bikaner</option>
                                                    <option value={34}>Udaipur</option>
                                                    <option value={35}>Ludhiana</option>
                                                    <option value={36}>Amritsar</option>
                                                    <option value={37}>Chandigarh</option>
                                                    <option value={38}>Agartala</option>
                                                    <option value={39}>Gangtok</option>
                                                    <option value={40}>Shillong</option>
                                                    <option value={41}>Imphal</option>
                                                    <option value={42}>Kohima</option>
                                                    <option value={43}>Aizawl</option>
                                                    <option value={44}>Dimapur</option>
                                                    <option value={45}>Srinagar</option>
                                                    <option value={46}>Jammu</option>
                                                    <option value={47}>Leh</option>
                                                    <option value={48}>Darjeeling</option>
                                                    <option value={49}>Mahabalipuram</option>
                                                    <option value={50}>Kanyakumari</option>
                                                </select>
                                                <label htmlFor="select1">Destination</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control bg-transparent"
                                                    placeholder="Special Request"
                                                    id="message"
                                                    style={{ height: 100 }}
                                                    defaultValue={""}
                                                />
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-outline-light w-100 py-3"
                                                type="submit"
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking Start */}
            {/* Process Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Process
                        </h6>
                        <h1 className="mb-5">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <i className="fa fa-globe fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Choose A Destination</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">
                                    Choose a Destination from Where to Start The trip.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <i className="fa fa-dollar-sign fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Pay Online</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">
                                    Pay Directly Online to Us or to the Driver, Provided By Us.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
                            data-wow-delay="0.5s"
                        >
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                                    style={{ width: 100, height: 100 }}
                                >
                                    <i className="fa fa-car fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Start Today</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">
                                    Driver Will be available At your Given Time & Date provided by you
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Process Start */}
            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">
                            Travel Guide
                        </h6>
                        <h1 className="mb-5">Meet Our Owner</h1>
                    </div>
                    <div className="row g-4 justify-content-center"> {/* Added justify-content-center */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src={IMAGE} alt="IMAGE" />
                                </div>
                                <div
                                    className="position-relative d-flex justify-content-center"
                                    style={{ marginTop: "-19px" }}
                                >
                                    <Link className="btn btn-square mx-1" to="">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                    <Link className="btn btn-square mx-1" to="">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                    <Link className="btn btn-square mx-1" to="">
                                        <i className="fab fa-instagram" />
                                    </Link>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">DWIJENDRA SINGH PAWAR</h5>
                                    <small>OWNER</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ReviewShow />

            {/* Back to Top */}
            <Link to="#" className="btn btn-lg py-2 btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up" />
            </Link>
        </>

    )
}

export default Home
