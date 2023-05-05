import React from "react";
import Lottie from "lottie-react";
import resetPassword from "../../../../public/resetPassword.json";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";

const PasswordReset = () => {
  const { passwordReset } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const passwordResetHandler = (e) => {
    e.preventDefault();

    passwordReset(email)
      .then(() => {
        toast.success("Check Your Mail 🎁");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center pt-4">Password Reset</h1>
      <div className="hero min-h-lg">
        <div className="hero-content flex-col-reverse md:flex-col lg:flex-row-reverse">
          {/* Lottie File */}
          <div className="text-center hidden lg:block lg:text-left">
            <Lottie
              animationData={resetPassword}
              style={{ height: "75vh" }}
              loop={true}
            />
          </div>

          {/* Login Form */}
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={passwordResetHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-info">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
