import React, { useState } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { FcLike } from "react-icons/fc";

// CSS
import "@smastrom/react-rating/style.css";
import { toast } from "react-hot-toast";

const RecipeItemCard = ({ RecipeItem }) => {
  const { name, ingredients, cookingMethod, rating, recipeImages } = RecipeItem;

  const [favorite, setFavorite] = useState(false);
  const handleFavoriteButton = (e) => {
    toast("Favorite Recipe 😍");
    setFavorite(true);
  };

  // Rating style
  const ratingStyle = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
  };

  return (
    <div className="max-w-xl md:max-w-full mx-auto relative rounded-lg shadow-lg shadow-orange-300 overflow-hidden">
      <div className="flex flex-row">
        <div className=" w-5/12">
          <img src={recipeImages} alt="Recipe Image" />
        </div>
        <div className="w-7/12 md:border-l-4 border-orange-500 p-4 flex flex-col">
          <h1 className="text-3xl font-bold text-orange-600 mb-8">{name}</h1>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Ingredients:</span> {ingredients}
            </p>
            <p>
              <span className="font-semibold">Cooking Method:</span>{" "}
              {cookingMethod}
            </p>
            <p className="flex items-center gap-2">
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                itemStyles={ratingStyle}
                readOnly
              />
              {rating}
            </p>
          </div>
          <div className="flex items-center my-auto space-x-2">
            
              <button
                disabled={favorite}
                onClick={handleFavoriteButton}
                className="btn btn-outline btn-warning"
              >
                <FcLike className=" cursor-pointer" />
                Favorite
              </button>
            
            <button className="btn btn-outline btn-warning">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeItemCard;
