import React from "react";
import Chef from "../Chef/Chef";
import Banner from "../../Shared/Banner/Banner";
import Advertisement from "../../Shared/Banner/Advertisement";
import FoodItem from "../FoodItem/FoodItem";

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="pt-4">
        <Banner />
      </section>

      {/* Chef Section */}
      <section className="custom-container my-8">
        <Chef />
      </section>

      {/* Food Item Collection */}
      <section className="bg-orange-100 mt-16 mb-8">
        <FoodItem />
      </section>

      {/* Ads Section */}
      <section className="pt-12">
        <Advertisement />
      </section>
    </div>
  );
};

export default Home;
