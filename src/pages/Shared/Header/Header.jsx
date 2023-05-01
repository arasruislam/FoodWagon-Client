import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Header = () => {
  return (
    <div className="absolute top-0 right-0 left-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className=" bg-white rounded-xl shadow-md overflow-hidden mt-2">
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
            <Link to="/" className="normal-case text-xl font-bold flex items-center">
              <FaHamburger className="hidden lg:block h-6 w-6 text-yellow-500 " />{" "}
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
                <img src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/343475428_212501841499140_2036591800294696956_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGR4Gm9JRv7qVtPzR99UCqpeuCActmwe7564IBy2bB7vsM5STeCrELUR5WrR8-HufdPju7UcUndmUBGyGt4u-ww&_nc_ohc=e2K1qhOY3bUAX-jXdG6&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCVFCcn1lH_36wTi7767L4yhUTeYaTrtuXgFCCbUBc3Ig&oe=64554E5D" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
