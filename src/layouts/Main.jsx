import React, { useContext } from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";
import Banner from "../pages/Shared/Banner/Banner";

const Main = () => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    if (loading) {
      return <Spinner />;
    }
  }

  return (
    <>
      <Header />
      <div className="mt-16 min-h-[calc(100vh-256px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
