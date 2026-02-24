export default function Contact() {
  return (
    <section className="contact-section py-5">

      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
        <div className="row">
          <div className="col-md-7 mb-4">
            <div className="card shadow-sm p-4">

              <form>
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                    id="name"
                      type="text"
                      className="form-control"
                      placeholder="Enter your name" required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email" required
                    />
                  </div>

                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="7"
                    placeholder="Write your message..." required
                  ></textarea>
                </div>

                <button className="btn btn-primary">
                  Send Message
                </button>
              </form>

            </div>
          </div>
          <div className="col-md-5">
            <div className="card shadow-sm p-4 mb-3">
              <h5>Email</h5>
              <p className="text-muted">praveenbollam9550@gmail.com</p>
            </div>

            <div className="card shadow-sm p-4 mb-3">
              <h5>Phone</h5>
              <p className="text-muted">+91 93914 52521</p>
            </div>

            <div className="card shadow-sm p-4">
              <h5>Location</h5>
              <p className="text-muted">India</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}