import React from "react";
import ads from "../../../../public/ads.png";
import { FaArrowRight } from "react-icons/fa";

const Advertisement = () => {
  return (
    <div>
      <div
        className="hero min-h-lg"
        style={{
          backgroundImage: `url(${ads})`,
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <div className="text-xl breadcrumbs py-12">
              <h1 className="text-4xl font-bold">
                Are you ready to order with the best deals?
              </h1>
              <button className="btn bg-orange-500 border-0 mt-4">
                Proceed to order <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
