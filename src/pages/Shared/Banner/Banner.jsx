import React from "react";
import banner from "../../../assets/banner.png";
import { FaBicycle, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Banner = () => {
  const pickup = () => {
    toast.success('Pickup The Food ✨')
  }
  const delivery = () =>{
    toast.success('Delivered The Food ✌');
  }
  return (
    <div>
      <div
        className="hero justify-start min-h-lg"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-content text-left text-neutral-content md:px-8">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold">Are you starving?</h1>
            <p className="mb-5 text-black">
              Within a few clicks, find meals that are accessible near you
            </p>

            <div className="bg-white border rounded-md shadow p-4  divide-y-2">
              <div className="flex items-center gap-4 pb-4">
                <Link
                  onClick={delivery}
                  className="btn btn-sm normal-case bg-red-500 text-orange-500 bg-opacity-10 border-0"
                >
                  <FaBicycle className="h-6 w-6 mr-1" />
                  Delivery
                </Link>
                <Link
                  onClick={pickup}
                  className="btn btn-sm normal-case bg-white text-gray-700 border-0 hover:text-white"
                >
                  <FaUser className="h-4 w-4 mr-1" />
                  Pickup
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-warning w-full max-w-xs text-gray-600"
                />
                <button className="btn bg-orange-500 border-0">
                  <FaMapMarkerAlt className="h-4 w-4" /> Find Food
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
