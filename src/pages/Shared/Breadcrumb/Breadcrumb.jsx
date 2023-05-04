import React from "react";
import breadcrumb from "../../../../public/breadcrumbImage.jpg";
import { NavLink, useLocation } from "react-router-dom";

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
            <div className="text-xl breadcrumbs py-12">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink>{location.pathname}</NavLink>
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
