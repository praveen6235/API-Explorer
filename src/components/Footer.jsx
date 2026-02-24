import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-12 col-md-4 mb-4">
            <h5>API Explorer</h5>
            <p className="small">
              A React project demonstrating API integrations like
              Weather, Shopping and Movies APIs.
            </p>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5>Contact</h5>
            <p className="mb-1">Email: praveenbollam9550@gmail.com</p>
            <p className="mb-0">Phone: +91 93914 52521</p>
          </div>

        </div>

        <hr className="border-light" />

        <p className="text-center small mb-0">
          © {new Date().getFullYear()} API Explorer | Built with React 🚀
        </p>
      </div>
    </footer>
  );
}