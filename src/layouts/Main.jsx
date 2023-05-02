import React, { useContext } from "react";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import { AuthContext } from "../providers/AuthProvider";
import Spinner from "../pages/Shared/Spinner/Spinner";

const Main = () => {
  const {loading} = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
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
