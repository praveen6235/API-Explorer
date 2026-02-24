import about from '../assets/AboutApi.avif'

export default function About() {
  return (
    <div className="about-page">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About This Project</h1>
        <p className="text-muted">
          Learn more about the API Explorer application
        </p>
      </div>

      <div className="row align-items-center mb-5">

        <div className="col-md-6 text-center">
          <img
            src={about}
            alt="about"
            className="img-fluid"
            width="500"
          />
        </div>

        <div className="col-md-6">
          <h3>What is API Explorer?</h3>
          <p>
            API Explorer is a React-based web application that demonstrates
            real-time API integration. Users can explore Weather data,
            Shopping products, and Movie information fetched dynamically
            from external APIs.
          </p>

          <p>
            This project showcases modern frontend development using
            React, React Router, Bootstrap, and API handling.
          </p>
        </div>

      </div>

      <div className="mb-5">
        <h2 className="text-center mb-4">Features</h2>

        <div className="row text-center">

          <div className="col-md-4 mb-3">
            <div className="card p-4 h-100">
              <h4>🌦 Weather API</h4>
              <p>Check real-time weather information for any city.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 h-100">
              <h4>🛒 Shopping API</h4>
              <p>Browse products fetched from an online store API.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 h-100">
              <h4>🎬 Movies API</h4>
              <p>Search movies and view details instantly.</p>
            </div>
          </div>

        </div>
        <div className="row text-center d-flex align-items-center justify-content-center">
          <div className="col-md-4 mb-3">
            <div className="card p-4 h100">
              <h4>🍴 Food API</h4>
              <p>Food recipes fetched from API.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2>Technologies Used</h2>

        <div className="mt-3">
          <span className="badge bg-primary m-1 p-2">React</span>
          <span className="badge bg-success m-1 p-2">Bootstrap</span>
          <span className="badge bg-warning text-dark m-1 p-2">REST APIs</span>
          <span className="badge bg-info m-1 p-2">React Router</span>
        </div>
      </div>

    </div>
  );
}