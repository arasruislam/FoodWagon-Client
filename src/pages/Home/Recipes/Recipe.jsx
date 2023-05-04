import React from "react";
import chefBgImage from "../../../../public/chefBgImage.png";
import { FaThumbsUp } from "react-icons/fa";
import RecipeItemCard from "./RecipeItemCard";
import LazyLoad from "react-lazy-load";

const Recipe = ({ recipe }) => {
  const {
    chefName,
    chefPhotoUrl,
    likes,
    numRecipes,
    yearsExperience,
    chefDescription,
    recipes,
  } = recipe;
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          {/* Use Lazy Load */}
          <LazyLoad>
            <img
              src={chefPhotoUrl}
              style={{
                backgroundImage: `url(${chefBgImage})`,
              }}
              className="max-w-sm hero w-80 rounded-lg shadow-2xl"
            />
          </LazyLoad>

          <div className="lg:border-l-4 border-orange-500 ps-4">
            <h1 className="text-5xl font-bold">{chefName}</h1>
            <p className="py-6">{chefDescription}</p>
            <h4 className="text-lg font-bold">
              Total Recipe:{" "}
              <span className="text-orange-500">{numRecipes}</span>
            </h4>
            <h4 className="text-lg font-bold">
              Cocking Experience:{" "}
              <span className="text-orange-500">{yearsExperience}</span>
            </h4>
            <button className="btn btn-sm bg-orange-500 border-0 hover:bg-orange-600 transition-all duration-300 mt-4">
              <FaThumbsUp className="mr-1" /> {likes}
            </button>
          </div>
        </div>
      </div>

      {/* Recipe List */}
      <div className="my-4">
        <h4 className="text-4xl mx-4 lg:mx-0 font-bold border-b-2 border-gray-400 pb-4">
          Recipe
        </h4>

        <div className="grid gird-col justify-center items-center gap-4 mt-8">
          {recipes.map((RecipeItem, index) => (
            <RecipeItemCard key={index} RecipeItem={RecipeItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recipe;
