import React from "react";
import { FaFacebook, FaHamburger, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-gray-700">
        <div>
          <div className="md:mb-4">
            <Link
              to="/"
              className="normal-case text-white text-4xl font-bold flex items-center"
            >
              <FaHamburger className="h-12 w-12 text-yellow-500 mr-1" /> Food
              <span className="text-red-400">Wagon</span>
            </Link>
          </div>
          <p className="font-bold">
            FoodWagon Industries Ltd. <br />
            Providing reliable Food since 1992
          </p>
          <p className="text-white">Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebook className="h-6 w-6 text-blue-500" />
            </Link>
            <Link>
              <FaTwitter className="h-6 w-6 text-cyan-500" />
            </Link>
            <Link>
              <FaYoutube className="h-6 w-6 text-red-500" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
