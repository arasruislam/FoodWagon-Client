import React from "react";
import breadcrumb from "../../../../public/breadcrumbImage.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const Breadcrumb = () => {
  const location = useLocation();
  return (
    <div>
      <div
        className="hero min-h-lg"
        style={{
          backgroundImage: `url(${breadcrumb})`,
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="text-xl  py-12">
              <ul className="flex items-center space-x-2">
                <li>
                  <NavLink to="/">FoodWagon</NavLink>
                </li>
                <li>
                  <FaAngleRight />
                </li>
                <li>
                  <NavLink>
                    <span className="text-white hover:text-orange-500">
                      {location.pathname}
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
