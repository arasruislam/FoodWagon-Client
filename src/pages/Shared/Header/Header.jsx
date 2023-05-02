import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import avatar from "../../../../public/avatar.png";
import Spinner from "../Spinner/Spinner";

const Header = () => {
  const { user, loggedOut, loading } = useContext(AuthContext);

  // if (loading) {
  //   return <Spinner />;
  // }
  
  /* Logged Out User */
  const loggedOutUser = () => {
    loggedOut()
      .then()
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="fixed z-10 top-0 right-0 left-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className=" bg-white rounded-xl shadow-md overflow-hidden">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="space-y-4 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link
              to="/"
              className="normal-case text-xl font-bold flex items-center"
            >
              <FaHamburger className="hidden lg:block mr-1 h-6 w-6 text-yellow-500 " />{" "}
              Food<span className="text-red-400">Wagon</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="space-x-4 menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="avatar">
              <div className="w-8 cursor-pointer rounded-full">
                {user ? (
                  <>
                    <img src={user?.photoURL} title={user?.displayName} />
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <img src={avatar} title="login" />
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div>
              <ul className="ml-2 menu-horizontal px-1">
                {user ? (
                  <>
                    <li>
                      <NavLink to="/">
                        <button
                          onClick={loggedOutUser}
                          className="btn btn-sm text-gray-800 btn-warning font-bold"
                        >
                          Logout
                        </button>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login">
                        <button className="btn btn-sm text-gray-800 btn-warning font-bold">
                          Login
                        </button>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
