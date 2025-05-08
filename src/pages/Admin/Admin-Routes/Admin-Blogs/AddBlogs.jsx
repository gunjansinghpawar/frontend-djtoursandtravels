import { useState } from "react";
const API_URL = import.meta.env.VITE_BACKEND_PORT|| 'http://localhost:3000/api';

const Blogs = () => {
    const [title, setTitle] = useState(''); // Corresponds to blogTitle in the backend
    const [content, setContent] = useState(''); // Corresponds to blogContent in the backend
    const [loading, setLoading] = useState(false); // State to handle loading
    const [error, setError] = useState(''); // State to handle error messages
    const [success, setSuccess] = useState(''); // State to handle success messages

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true while submitting
        setError(''); // Reset error state
        setSuccess(''); // Reset success state
    
        // Basic client-side validation
        if (title.length < 5) {
            setError("Title must be at least 5 characters long.");
            setLoading(false);
            return;
        }

        if (content.length < 20 || content.length > 300) {
            setError("Content must be between 20 and 300 characters.");
            setLoading(false);
            return;
        }
    
        const blogData = {
            blogTitle: title,  // Backend expects 'blogTitle'
            blogContent: content  // Backend expects 'blogContent'
        };
    
        try {
            const response = await fetch(`${API_URL}/blog/createBlog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Set the correct header
                },
                body: JSON.stringify(blogData), // Send the data as JSON
            });
    
            if (!response.ok) {
                const errorResponse = await response.json(); // Parse the response to get more info
                throw new Error(errorResponse.message || 'Failed to add blog');
            }
    
            // Handle successful submission
            setSuccess("Blog added successfully!"); // Set success message
            // Reset the form fields
            setTitle('');
            setContent('');
        } catch (error) {
            console.error('Error submitting blog:', error);
            setError("Error adding blog: " + error.message); // Set error message
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <>
            <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                <div className="container py-5">
                    <div className="row justify-content-center py-5">
                        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-3 text-white animated mb-3 slideInDown">
                                Add Blogs
                            </h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <a href="#">Admin</a>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <a href="#">Blogs</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item text-white active"
                                        aria-current="page"
                                    >
                                        Add Blogs
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
                        <div className="mb-3">
                            <label htmlFor="blogTitle" className="form-label">Blog Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="blogTitle"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blogContent" className="form-label">Content</label>
                            <textarea
                                className="form-control"
                                id="blogContent"
                                rows="5"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>} {/* Error message */}
                        {success && <div className="alert alert-success">{success}</div>} {/* Success message */}
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? (
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            ) : (
                                'Add Blog'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Blogs;
