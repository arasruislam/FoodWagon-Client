import React, { useContext } from "react";
import Lottie from "lottie-react";
import signUpAnimation from "../../../../public/singup.json";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Registration = () => {
  const { user } = useContext(AuthContext);

  

  /* Registration Handler */
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    console.log(name, email, password, photoUrl);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-4">
        Register Now<span className="text-yellow-500">!</span>
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse md:flex-col lg:flex-row">
          {/* Lottie File */}
          <div className="text-center lg:text-left lg:border-r-2">
            <Lottie animationData={signUpAnimation} loop={true} />
          </div>

          {/* Login Form */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="photoUrl"
                  name="photoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-warning">Register</button>
              </div>
            </form>

            <p className="ml-8 -mt-8 mb-12">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-500 font-semibold hover:underline"
              >
                Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
