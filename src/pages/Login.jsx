import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <section className="text-center text-lg-start">
        <link rel="stylesheet" href="./Login.css" />

        <div className="container py-5">
          <div className="row g-0 align-items-center py-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-4">Login</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example3">
                        Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark btn-block mb-4"
                    >
                      Login
                    </button>

                    <div className="text-center">
                      <ul className="list-unstyled">
                        <li>
                          <a className="text-decoration-none" href="">
                            Register
                          </a>
                        </li>
                        <li>
                          <a className="text-decoration-none" href="">
                            Reset password
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="./assets/login.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
