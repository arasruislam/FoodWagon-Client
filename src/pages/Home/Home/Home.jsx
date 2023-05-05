import React from "react";
import Chef from "../Chef/Chef";
import Banner from "../../Shared/Banner/Banner";
import Advertisement from "../../Shared/Banner/Advertisement";
import FoodItem from "../FoodItem/FoodItem";
import Sponsor from "../../Shared/Sponor/Sponsor";
import useSetTitle from "../../../hook/useSetTitle";

const Home = () => {
  useSetTitle('Home');

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

      {/* Sponsor */}
      <section className="custom-container my-8 py-16">
        <h1 className="font-semibold text-3xl mb-4 mx-auto border-b-2 border-orange-400 w-80 text-center pb-4">
          Our Sponsor
        </h1>
        <Sponsor />
      </section>

      {/* Ads Section */}
      <section className="pt-12">
        <Advertisement />
      </section>
    </div>
  );
};

export default Home;
