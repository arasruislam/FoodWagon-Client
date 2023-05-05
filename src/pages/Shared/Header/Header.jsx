import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import avatar from "../../../../public/avatar.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  const { user, loggedOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  /* Logged Out User */
  const loggedOutUser = () => {
    loggedOut()
      .then()
      .catch((error) => console.log(error.message));
  };

  const userProfile = (user) => {
    if (user) {
      return navigate("/user");
    }
  };

  return (
    <div className="fixed z-10 top-0 right-0 left-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className=" bg-white rounded-xl shadow-md lg:overflow-hidden">
        <div className="navbar bg-base-100 relative">
          <div className="navbar-start ">
            <Link
              to='/'
              className="normal-case text-xl font-bold flex items-center"
            >
              <FaHamburger className=" mr-1 h-6 w-6 text-yellow-500 " /> Food
              <span className="text-red-400">Wagon</span>
            </Link>
          </div>
          {/* menu items */}
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
                  to="/chef"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Chefs
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
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>

          {/* user, login, logout */}
          <div className="navbar-end ">
            {/* Avatar */}
            <div className="avatar">
              <div className="w-8 cursor-pointer rounded-full">
                {user ? (
                  <>
                    <img
                      onClick={userProfile}
                      src={user?.photoURL}
                      title={user?.displayName}
                    />
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

          {/* Mobile Menu */}
          <div className="lg:hidden ms-auto">
            <button
              aria-label="Open Menu"
              title="open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiMenuAlt3 className="w-6 h-6 text-gray-600" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-100">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between relative">
                    <div className="navbar-start ">
                      <Link
                        to="/"
                        className="normal-case text-xl font-bold flex items-center"
                      >
                        <FaHamburger className="mr-1 h-6 w-6 text-yellow-500 " />{" "}
                        Food<span className="text-red-400">Wagon</span>
                      </Link>
                    </div>

                    {/*Close Button */}
                    <div>
                      <button
                        aria-label="Open Menu"
                        title="open menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiX className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Menu Item */}
                  <div className="navbar-center">
                    <ul className="space-y-2 menu-horizontal flex flex-col mt-4 ms-auto">
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
                          to="/chef"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Chefs
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
                      <li>
                        <NavLink
                          to="/about"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          About
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
