import React from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../../public/login.json";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  /* Login handler */
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-4">
        Please Login<span className="text-yellow-500">!</span>
      </h1>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col-reverse md:flex-col lg:flex-row-reverse">
          {/* Lottie File */}
          <div className="text-center lg:text-left  lg:border-l-2">
            <Lottie animationData={loginAnimation} loop={true} />
          </div>

          {/* Login Form */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
            </form>

            <p className="ml-8 -mt-8">
              Don't have an account?{" "}
              <Link
                to="/registration"
                className="text-blue-500 font-semibold hover:underline"
              >
                Register Now
              </Link>
            </p>

            <div className="mx-8 my-4">
              <h5 className="font-bold">Or Login with</h5>
              <button className="btn w-full mb-2">
                <FaGithub className="h-6 w-6 mr-4" /> Log in with GitHub
              </button>
              <button className="btn btn-info w-full">
                <FaGoogle className="h-6 w-6 mr-4" />
                Log in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
