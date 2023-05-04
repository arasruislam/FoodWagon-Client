import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = () => {
  const recipes = useLoaderData();
  return (
    <div>
      {/*  Recipes */}
      <div className="custom-container">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
          </div>
    </div>
  );
};

export default Recipes;
