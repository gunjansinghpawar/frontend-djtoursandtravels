
const Loading = () => {
  return (
    <div className="container-fluid bg-primary d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <div className="spinner-border text-white" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <h3 className="text-white mt-3">Loading, please wait...</h3>
      </div>
    </div>
  );
};

export default Loading;
