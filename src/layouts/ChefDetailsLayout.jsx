import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Banner from "../pages/Shared/Banner/Banner";
import ChefCard from "../pages/Home/Chef/ChefCard";
import { Toaster } from "react-hot-toast";
import Breadcrumb from "../pages/Shared/Breadcrumb/Breadcrumb";


const ChefDetailsLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-16 min-h-[calc(100vh-256px)]">
        <Breadcrumb />
        <Outlet />
        <Toaster />
      </div>
      <Footer />
    </>
  );
};

export default ChefDetailsLayout;
