import React from "react";
import chefBgImage from "../../../../public/chefBgImage.png";
import { FaAngleRight, FaHeart } from "react-icons/fa";

const ChefCard = ({ singleChefData }) => {
  const { chefName, chefPhotoUrl, likes, numRecipes, yearsExperience } =
    singleChefData;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={chefPhotoUrl}
          style={{
            backgroundImage: `url(${chefBgImage})`,
          }}
          className="h-80 hero w-auto"
          alt="Chef Image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p>Number of Recipes: {numRecipes}</p>
        <p>Experience: {yearsExperience}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm bg-orange-500 border-0 hover:bg-orange-600 transition-all duration-300">
            <FaHeart className="mr-1" /> {likes}
          </button>
          <button className="btn btn-sm capitalize">
            View Recipe <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
