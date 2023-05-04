import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import signUpAnimation from "../../../../public/singup.json";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const auth = getAuth(app);

const Registration = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  /* Store Name, Photo Url & error message */
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  /* Registration Handler */
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const photoURL = form.photoURL.value;

    /* Password Validation */
    if (password.length < 8) {
      setError("Password must be at least 8 character");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please provide at least one uppercase");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add at least one special character");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });

    // Update profile
    updateProfile(auth.currentUser, {
      displayName: "",
      photoURL: "",
    }).then((result) => {
      result.displayName = name;
      result.photoURL = photoURL;
    });
    
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
              {/* Error Message */}
              <div>
                <p className="text-red-500">{error}</p>
              </div>
              {/* Error Message */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setPhotoURL(e.target.value)}
                  type="url"
                  placeholder="photoURL"
                  name="photoURL"
                  className="input input-bordered"
                  required
                  accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
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
