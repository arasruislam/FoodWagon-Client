import React from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-20 min-h-[calc(100vh-256px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
