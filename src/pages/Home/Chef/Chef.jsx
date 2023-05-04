import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [chefDetails, setChefDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChefDetails(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {/* Chef Details */}
      <div className="text-center max-w-lg mx-auto mb-8">
        <h2 className="font-bold capitalize text-4xl text-center   pb-2">
          Our Chefs
        </h2>
        <p className="text-gray-500">
          A professional cook and tradesman who is proficient in all aspects of
          food preparation.
        </p>
      </div>

      {/* Single Chef Detail */}
      <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4">
        {chefDetails.map((singleChefData) => (
          <ChefCard key={singleChefData.id} singleChefData={singleChefData} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
