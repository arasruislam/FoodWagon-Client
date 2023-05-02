import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Banner from "../pages/Shared/Banner/Banner";

const ChefDetailsLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-16 min-h-[calc(100vh-256px)]">
        {/* Banner Section */}
        <section className="pt-4">
          <Banner />
        </section>
        
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default ChefDetailsLayout;
