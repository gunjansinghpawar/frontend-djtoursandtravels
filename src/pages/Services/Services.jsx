import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import '../../../css/style.css'
const Services = () => {
  useEffect(() => {
    const $ = window.$; // Ensure jQuery is available
    $('.owl-carousel').owlCarousel({
      items: 1, // Number of items to display
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000, // Autoplay interval in milliseconds
      autoplayHoverPause: true, // Pause on hover
      dots: true, // Show dots
      nav: true, // Show navigation arrows
    });
  }, []);
  return (
    <><div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
            <h1 className="display-3 text-white animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Pages</a>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Services
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div><div className="container-xxl py-5">
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
      </div><div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="text-center">
      <h6 className="section-title bg-white text-center text-primary px-3">
        Testimonial
      </h6>
      <h1 className="mb-5">Our Clients Say!!!</h1>
    </div>
    <div className="owl-carousel testimonial-carousel position-relative">
      <div className="testimonial-item bg-white text-center border p-4">
        <img
          className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
          src="img/testimonial-1.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">John Doe</h5>
        <p>New York, USA</p>
        <p className="mb-0">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
          diam et eos. Clita erat ipsum et lorem et sit.
        </p>
      </div>
      <div className="testimonial-item bg-white text-center border p-4">
        <img
          className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
          src="img/testimonial-2.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">John Doe</h5>
        <p>New York, USA</p>
        <p className="mt-2 mb-0">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
          diam et eos. Clita erat ipsum et lorem et sit.
        </p>
      </div>
      <div className="testimonial-item bg-white text-center border p-4">
        <img
          className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
          src="img/testimonial-3.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">John Doe</h5>
        <p>New York, USA</p>
        <p className="mt-2 mb-0">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
          diam et eos. Clita erat ipsum et lorem et sit.
        </p>
      </div>
      <div className="testimonial-item bg-white text-center border p-4">
        <img
          className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
          src="img/testimonial-4.jpg"
          style={{ width: 80, height: 80 }}
        />
        <h5 className="mb-0">John Doe</h5>
        <p>New York, USA</p>
        <p className="mt-2 mb-0">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet
          diam et eos. Clita erat ipsum et lorem et sit.
        </p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Services
