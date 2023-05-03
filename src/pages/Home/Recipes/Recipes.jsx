import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";

const Recipes = () => {
  const { id } = useParams();
  const recipes = useLoaderData();
  return (
    <div>
      {/* breadcrumb */}
      <div>
        <Breadcrumb />
      </div>

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
