function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5 className="text-white">Political Promises</h5>
            <p className="text-white">
              Your trusted platform for tracking political commitments and
              staying informed.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="text-white">Connect with Us</h5>
            <div>
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center py-3">
          <p className="text-white small">
            &copy; 2024 Political Promises. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
