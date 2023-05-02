import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../Shared/Banner/Banner";

const Chef = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {/* Chef Details */}
      <section>
        <div className="text-center max-w-lg mx-auto">
          <h2 className="font-bold capitalize text-4xl text-center   pb-2">
            Our Chefs
          </h2>
          <p className="text-gray-500">
            A professional cook and tradesman who is proficient in all aspects
            of food preparation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Chef;
