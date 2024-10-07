function Login() {
  return (
    <div
      className="container"
      style={{ marginTop: "30px", marginBottom: "300px" }}
    >
      {" "}
      {/* Reduced vertical spacing with margin-top and margin-bottom */}
      <div className="col-md-4 mx-auto">
        <div className="card shadow-sm">
          <div className="card-body">
            <h3 className="text-center mb-4">Login</h3>
            <form>
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
                <a className="text-dark">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
