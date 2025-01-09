import AboutImage from '../../assets/AboutImage.avif'
import IMAGE from '../../assets/WhatsApp_Image_2024-08-25_at_11.33.16_d9e35990-removebg-preview.png'

const About = () => {
    return (
        <>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div><div className="container-xxl py-5">
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
                                    loading="lazy"/>
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
                            <a className="btn btn-primary py-3 px-5 mt-2" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <img className="img-fluid" src={IMAGE} alt="IMAGE" loading="lazy"/>
                                </div>
                                <div
                                    className="position-relative d-flex justify-content-center"
                                    style={{ marginTop: "-19px" }}
                                >
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="btn btn-square mx-1" href="">
                                        <i className="fab fa-instagram" />
                                    </a>
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
            </>
    )
}

export default About
