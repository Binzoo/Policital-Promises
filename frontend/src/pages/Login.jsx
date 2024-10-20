import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function loginBtn(event) {
    event.preventDefault();
    axios.post("", {});
  }

  return (
    <div
      className="container"
      style={{ marginTop: "30px", marginBottom: "300px" }}
    >
      <div className="col-md-4 mx-auto">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={loginBtn}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
              </div>
              <div className="mt-3 text-center">
                <a href="www.youtube.com" className="text-dark">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
