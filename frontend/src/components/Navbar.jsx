import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span className="fs-1">🤝</span>
          <strong> Political Promises</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mt-3"
          id="navbarSupportedContent "
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/promises">
                <strong>Promises</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/politician">
                <strong>Politician</strong>
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn-dark ms-auto"
            type="button"
            to="/addpromises"
          >
            Add Promises
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
