import React from "react";
import Chef from "../Chef/Chef";
import Banner from "../../Shared/Banner/Banner";
import Advertisement from "../../Shared/Banner/Advertisement";

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

      {/* Ads Section */}
      <section className="pt-12">
        <Advertisement />
      </section>
    </div>
  );
};

export default Home;
