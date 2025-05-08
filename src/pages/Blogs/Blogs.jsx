import { useEffect, useState } from 'react';
const API_URL = import.meta.env.VITE_BACKEND_PORT;

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_URL}/blog/fetchAllBlogs`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreBlogs = () => {
    setVisibleCount(visibleCount + 2);
  };

  return (
    <>
      {/* Hero Header */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Blogs</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#" className="text-white">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#" className="text-white">Pages</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Blogs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Our Blogs</h6>
            <h1 className="mb-5">Latest Posts</h1>
          </div>
          <div className="row g-4">
            {loading ? (
              // Show a loading skeleton or spinner
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="bg-light text-dark p-4 rounded">
                    <div className="skeleton skeleton-title mb-3" style={{ height: '20px', width: '60%' }}></div>
                    <div className="skeleton skeleton-content" style={{ height: '15px', width: '80%' }}></div>
                    <div className="skeleton skeleton-content mt-2" style={{ height: '15px', width: '90%' }}></div>
                  </div>
                </div>
              ))
            ) : (
              blogs.slice(0, visibleCount).map(blog => (
                <div key={blog._id} className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="bg-light text-dark p-4 rounded">
                    <h4>{blog.blogTitle}</h4>
                    <p>{blog.blogContent}</p>
                    {blog.image && <img src={blog.image} alt={blog.blogTitle} className="img-fluid" />}
                  </div>
                </div>
              ))
            )}
          </div>
          {visibleCount < blogs.length && !loading && (
            <div className="text-center mt-4">
              <button className="btn btn-primary" onClick={loadMoreBlogs}>
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
