import React, { useContext, useState } from "react";
import { AuthContext } from "./../../providers/AuthProvider";
import useSetTitle from "../../hook/useSetTitle";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";
import avatar from "../../../public/avatar.png";
import moment from "moment";

const auth = getAuth(app);

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  useSetTitle(`${user?.displayName}`);
  const [edit, setEdit] = useState("hidden");

  /* store input data */
  const [updateName, setUpdateName] = useState("");
  const [updateEmail, setUpdateEmail] = useState("");
  const [updatePhotoURL, setUpdatePhotoURL] = useState("");
  const [updateBio, setUpdateBio] = useState("");

  const handleUpdateProfileData = (e) => {
    e.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: updateName,
      email: updateEmail,
      photoURL: updatePhotoURL,
    })
      .then(() => {
        toast.success("Profile updated✨ Now Click Close Edit");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  /* Profile Edit open or close handler */
  const openUpdateProfileHandler = () => {
    setEdit("");
  };
  const closeUpdateProfileHandler = () => {
    setEdit("hidden");
  };

  /* Verified or not handler */

  return (
    <section className="custom-container">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 py-8">
        <div className="max-w-screen-lg lg:w-1/3 relative">
          <div className="lg:w-96 bg-gray-600 p-4 text-center border rounded-lg shadow-md relative">
            {/* Profile photo */}
            {user?.photoURL ? (
              <>
                <img
                  src={user?.photoURL}
                  className=" h-24 w-24 mx-auto rounded-full mb-1"
                  alt="User Photo"
                />
              </>
            ) : (
              <>
                <img
                  src={avatar}
                  className=" h-24 w-24 mx-auto rounded-full mb-1"
                  alt="User Photo"
                />
              </>
            )}
            {/* Last Login time */}
            {user?.metadata?.lastSignInTime && (
              <div>
                <button className="btn btn-sm  mb-4">
                  {moment(user?.metadata?.lastSignInTime)
                    .startOf("day")
                    .fromNow()}
                </button>
              </div>
            )}

            {/* User Display Name */}
            {user?.displayName && (
              <h1 className="text-2xl text-white font-semibold mb-2">
                {user?.displayName}
              </h1>
            )}

            {/* User Email */}
            {user?.email && (
              <h4 className="text-md text-gray-400">{user?.email}</h4>
            )}

            {/* Bio */}
            {updateBio && (
              <div className="my-4">
                <p className="text-gray-300">{updateBio}</p>
              </div>
            )}

            {/* Social Icon */}
            <div className="mt-4">
              <ul className="flex items-center justify-center gap-4">
                <Link>
                  <FaFacebook className="h-6 w-6 text-[#0165E1] hover:text-[#17A9FD] transition-all duration-300" />
                </Link>
                <Link>
                  <FaTwitter className="h-6 w-6 text-[#1D9BF0] hover:text-[#52baff] transition-all duration-300" />
                </Link>
                <Link>
                  <FaGithub className="h-6 w-6 hover:text-[#F4CBB2] transition-all duration-300" />
                </Link>
              </ul>
            </div>

            {/* Edit Profile */}
            <div className=" absolute top-2 left-2">
              {edit ? (
                <>
                  <button
                    onClick={openUpdateProfileHandler}
                    className="btn btn-sm btn-warning capitalize"
                  >
                    Edit Profile
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={closeUpdateProfileHandler}
                    className="btn btn-sm btn-warning capitalize"
                  >
                    Close Edit
                  </button>
                </>
              )}
            </div>

            {/* verified or not */}
            <div>
              {user?.emailVerified && (
                <button className="btn btn-sm btn-outline btn-success mt-4">
                  <RxDotFilled className="h-6 w-6" />
                  Verified
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Update Profile container */}
        <div className={`w-80 lg:w-2/3 ${edit}`}>
          <div className="p-4 border mx-auto rounded-lg shadow-md relative">
            <form onSubmit={handleUpdateProfileData} className="card-body p-0">
              {/* Inputs */}
              <div className="grid grid-col lg:grid-cols-2 gap-4">
                {/* Name field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    onChange={(e) => setUpdateName(e.target.value)}
                    name="name"
                    type="text"
                    placeholder="your name"
                    className="input input-bordered"
                  />
                </div>

                {/* Email field */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    onChange={(e) => setUpdateEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="your email"
                    className="input input-bordered"
                  />
                </div>

                {/* PhotoUrl */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your PhotoUrl</span>
                  </label>
                  <input
                    onChange={(e) => setUpdatePhotoURL(e.target.value)}
                    type="url"
                    placeholder="photoURL"
                    name="photoURL"
                    className="input input-bordered"
                  />
                </div>

                {/* Text Area */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bio</span>
                  </label>
                  <textarea
                    onChange={(e) => setUpdateBio(e.target.value)}
                    type="textarea"
                    placeholder="Write About Yourself"
                    name="textarea"
                    className="textarea textarea-bordered textarea-xs"
                  />
                </div>
              </div>

              {/* Update button */}
              <div className="form-control mt-6">
                <button className="btn btn-success">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
